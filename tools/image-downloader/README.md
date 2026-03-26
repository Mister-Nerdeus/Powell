# Powell Image Downloader Tool

This supporting utility downloads publicly reachable images from Powell's current website for review and demo use.

## Why it is in `tools/`

The primary product of this repository is now the Powell website demo. This downloader remains useful supporting tooling for collecting current-site imagery, but it is not the main application.

## Quick start

1. Install Python 3.11 or newer.
2. Open PowerShell in this folder.
3. Run:

```powershell
pip install -r requirements.txt
python app.py
```

## Notes

- Same-domain crawling only.
- Designed for public site images.
- Results should be reviewed and curated before adding files to `public/images/current/`.
