import os
import re
import queue
import threading
from pathlib import Path
from urllib.parse import urljoin, urlparse, urldefrag

import requests
from bs4 import BeautifulSoup
import tkinter as tk
from tkinter import filedialog, messagebox, scrolledtext

DEFAULT_URL = "http://www.powells5014.com/"
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36"
TIMEOUT = 20
MAX_PAGES = 150

IMG_EXTENSIONS = {
    ".jpg", ".jpeg", ".png", ".gif", ".webp", ".bmp", ".svg", ".avif", ".ico", ".jfif"
}

CSS_URL_RE = re.compile(r"url\((['\"]?)(.*?)\1\)")


class ImageDownloaderApp:
    def __init__(self, root: tk.Tk):
        self.root = root
        self.root.title("Powell's Site Image Downloader")
        self.root.geometry("860x620")

        self.log_queue: queue.Queue[str] = queue.Queue()
        self.worker_thread: threading.Thread | None = None
        self.stop_requested = False

        self.url_var = tk.StringVar(value=DEFAULT_URL)
        self.output_var = tk.StringVar(value=str(Path.cwd() / "powells_images"))

        self._build_ui()
        self.root.after(100, self._flush_logs)

    def _build_ui(self):
        outer = tk.Frame(self.root, padx=12, pady=12)
        outer.pack(fill="both", expand=True)

        title = tk.Label(
            outer,
            text="Download all images from Powell's website",
            font=("Segoe UI", 16, "bold"),
            anchor="w",
        )
        title.pack(fill="x", pady=(0, 8))

        subtitle = tk.Label(
            outer,
            text="Starts at the homepage, crawls internal Powell pages, and saves all discovered images.",
            anchor="w",
            justify="left",
        )
        subtitle.pack(fill="x", pady=(0, 14))

        url_row = tk.Frame(outer)
        url_row.pack(fill="x", pady=4)
        tk.Label(url_row, text="Start URL", width=12, anchor="w").pack(side="left")
        tk.Entry(url_row, textvariable=self.url_var).pack(side="left", fill="x", expand=True)

        out_row = tk.Frame(outer)
        out_row.pack(fill="x", pady=4)
        tk.Label(out_row, text="Save Folder", width=12, anchor="w").pack(side="left")
        tk.Entry(out_row, textvariable=self.output_var).pack(side="left", fill="x", expand=True)
        tk.Button(out_row, text="Browse", command=self._choose_folder).pack(side="left", padx=(8, 0))

        btn_row = tk.Frame(outer)
        btn_row.pack(fill="x", pady=(14, 8))
        self.start_btn = tk.Button(btn_row, text="Start Download", width=16, command=self.start_download)
        self.start_btn.pack(side="left")
        self.stop_btn = tk.Button(btn_row, text="Stop", width=10, state="disabled", command=self.stop_download)
        self.stop_btn.pack(side="left", padx=8)
        tk.Button(btn_row, text="Open Folder", width=12, command=self.open_folder).pack(side="left")

        self.status_var = tk.StringVar(value="Ready")
        tk.Label(outer, textvariable=self.status_var, anchor="w").pack(fill="x", pady=(0, 8))

        self.log = scrolledtext.ScrolledText(outer, wrap="word", height=28)
        self.log.pack(fill="both", expand=True)
        self.log.insert("end", "This app is configured for Powell's by default.\n\n")
        self.log.configure(state="disabled")

    def _choose_folder(self):
        chosen = filedialog.askdirectory(initialdir=self.output_var.get() or str(Path.cwd()))
        if chosen:
            self.output_var.set(chosen)

    def open_folder(self):
        path = Path(self.output_var.get()).expanduser().resolve()
        path.mkdir(parents=True, exist_ok=True)
        try:
            os.startfile(str(path))  # type: ignore[attr-defined]
        except Exception as exc:
            messagebox.showerror("Open Folder", f"Could not open folder:\n{exc}")

    def log_message(self, message: str):
        self.log_queue.put(message)

    def _flush_logs(self):
        while not self.log_queue.empty():
            message = self.log_queue.get_nowait()
            self.log.configure(state="normal")
            self.log.insert("end", message + "\n")
            self.log.see("end")
            self.log.configure(state="disabled")
        self.root.after(100, self._flush_logs)

    def start_download(self):
        if self.worker_thread and self.worker_thread.is_alive():
            messagebox.showinfo("Already running", "A download is already in progress.")
            return

        url = self.url_var.get().strip()
        output_dir = self.output_var.get().strip()
        if not url:
            messagebox.showerror("Missing URL", "Please enter a website URL.")
            return
        if not output_dir:
            messagebox.showerror("Missing Folder", "Please choose a save folder.")
            return

        self.stop_requested = False
        self.start_btn.configure(state="disabled")
        self.stop_btn.configure(state="normal")
        self.status_var.set("Downloading...")

        self.worker_thread = threading.Thread(
            target=self._run_download,
            args=(url, output_dir),
            daemon=True,
        )
        self.worker_thread.start()

    def stop_download(self):
        self.stop_requested = True
        self.status_var.set("Stopping...")
        self.log_message("Stop requested. Finishing current request...")

    def _run_download(self, start_url: str, output_dir: str):
        try:
            summary = crawl_and_download(
                start_url=start_url,
                output_dir=output_dir,
                logger=self.log_message,
                should_stop=lambda: self.stop_requested,
            )
            self.status_var.set(
                f"Done: {summary['downloaded']} downloaded, {summary['skipped']} skipped, {summary['pages']} pages crawled"
            )
            self.log_message("")
            self.log_message("Finished.")
        except Exception as exc:
            self.status_var.set("Failed")
            self.log_message(f"ERROR: {exc}")
            messagebox.showerror("Download failed", str(exc))
        finally:
            self.start_btn.configure(state="normal")
            self.stop_btn.configure(state="disabled")


def normalize_url(url: str) -> str:
    return urldefrag(url).url


def same_domain(url_a: str, url_b: str) -> bool:
    a = urlparse(url_a).netloc.lower().replace("www.", "")
    b = urlparse(url_b).netloc.lower().replace("www.", "")
    return a == b


def looks_like_image(url: str) -> bool:
    parsed = urlparse(url)
    suffix = Path(parsed.path).suffix.lower()
    if suffix in IMG_EXTENSIONS:
        return True
    lower = url.lower()
    return any(token in lower for token in ["image", "images", "photo", "photos", "gallery"])


def extract_image_urls(html: str, page_url: str) -> set[str]:
    soup = BeautifulSoup(html, "html.parser")
    found: set[str] = set()

    for img in soup.find_all("img"):
        for attr in ("src", "data-src", "data-original", "data-lazy-src"):
            value = img.get(attr)
            if value:
                found.add(normalize_url(urljoin(page_url, value)))
        srcset = img.get("srcset") or img.get("data-srcset")
        if srcset:
            for part in srcset.split(","):
                candidate = part.strip().split(" ")[0]
                if candidate:
                    found.add(normalize_url(urljoin(page_url, candidate)))

    for tag in soup.find_all(style=True):
        style = tag.get("style") or ""
        for _, candidate in CSS_URL_RE.findall(style):
            if candidate:
                found.add(normalize_url(urljoin(page_url, candidate)))

    return {u for u in found if u.startswith(("http://", "https://"))}


def extract_internal_links(html: str, page_url: str, root_url: str) -> set[str]:
    soup = BeautifulSoup(html, "html.parser")
    links: set[str] = set()
    for a in soup.find_all("a", href=True):
        href = normalize_url(urljoin(page_url, a["href"]))
        parsed = urlparse(href)
        if parsed.scheme not in {"http", "https"}:
            continue
        if same_domain(href, root_url):
            links.add(href)
    return links


def safe_target_path(image_url: str, output_dir: str) -> Path:
    parsed = urlparse(image_url)
    rel_path = parsed.path.lstrip("/") or "image"
    candidate = Path(output_dir) / rel_path

    suffix = candidate.suffix.lower()
    if not suffix:
        candidate = candidate.with_suffix(".bin")

    candidate.parent.mkdir(parents=True, exist_ok=True)

    if not candidate.exists():
        return candidate

    stem = candidate.stem
    suffix = candidate.suffix
    parent = candidate.parent
    index = 2
    while True:
        alt = parent / f"{stem}_{index}{suffix}"
        if not alt.exists():
            return alt
        index += 1


def download_file(session: requests.Session, image_url: str, output_dir: str, logger, should_stop) -> tuple[bool, str]:
    if should_stop():
        return False, "stopped"

    try:
        response = session.get(image_url, timeout=TIMEOUT, stream=True)
        response.raise_for_status()
    except Exception as exc:
        logger(f"Skip failed image: {image_url} ({exc})")
        return False, "failed"

    content_type = (response.headers.get("content-type") or "").lower()
    target = safe_target_path(image_url, output_dir)

    if target.suffix == ".bin":
        if "jpeg" in content_type:
            target = target.with_suffix(".jpg")
        elif "png" in content_type:
            target = target.with_suffix(".png")
        elif "gif" in content_type:
            target = target.with_suffix(".gif")
        elif "webp" in content_type:
            target = target.with_suffix(".webp")
        elif "svg" in content_type:
            target = target.with_suffix(".svg")

    with open(target, "wb") as fh:
        for chunk in response.iter_content(chunk_size=8192):
            if should_stop():
                return False, "stopped"
            if chunk:
                fh.write(chunk)

    logger(f"Saved: {target}")
    return True, str(target)


def crawl_and_download(start_url: str, output_dir: str, logger=print, should_stop=lambda: False):
    start_url = normalize_url(start_url)
    Path(output_dir).mkdir(parents=True, exist_ok=True)

    session = requests.Session()
    session.headers.update({"User-Agent": USER_AGENT})

    to_visit = [start_url]
    visited_pages: set[str] = set()
    found_images: set[str] = set()
    downloaded = 0
    skipped = 0

    logger(f"Starting crawl at: {start_url}")
    logger(f"Saving into: {Path(output_dir).resolve()}")

    while to_visit and len(visited_pages) < MAX_PAGES and not should_stop():
        page_url = to_visit.pop(0)
        if page_url in visited_pages:
            continue
        visited_pages.add(page_url)

        try:
            response = session.get(page_url, timeout=TIMEOUT)
            response.raise_for_status()
        except Exception as exc:
            logger(f"Skip page: {page_url} ({exc})")
            continue

        content_type = (response.headers.get("content-type") or "").lower()
        if "text/html" not in content_type:
            if looks_like_image(page_url) and page_url not in found_images:
                ok, _ = download_file(session, page_url, output_dir, logger, should_stop)
                downloaded += 1 if ok else 0
                skipped += 0 if ok else 1
                found_images.add(page_url)
            continue

        logger(f"Crawled page {len(visited_pages)}: {page_url}")
        html = response.text

        page_images = extract_image_urls(html, page_url)
        for image_url in sorted(page_images):
            if image_url in found_images:
                continue
            found_images.add(image_url)
            ok, _ = download_file(session, image_url, output_dir, logger, should_stop)
            downloaded += 1 if ok else 0
            skipped += 0 if ok else 1

        for link in sorted(extract_internal_links(html, page_url, start_url)):
            if link not in visited_pages and link not in to_visit:
                to_visit.append(link)

    logger("")
    logger(f"Pages crawled: {len(visited_pages)}")
    logger(f"Unique image URLs found: {len(found_images)}")
    logger(f"Downloaded: {downloaded}")
    logger(f"Skipped or failed: {skipped}")

    return {
        "pages": len(visited_pages),
        "images_found": len(found_images),
        "downloaded": downloaded,
        "skipped": skipped,
    }


if __name__ == "__main__":
    root = tk.Tk()
    app = ImageDownloaderApp(root)
    root.mainloop()
