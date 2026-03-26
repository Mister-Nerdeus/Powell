import { useMemo, useState } from "react";
import { SiteFooter } from "./components/layout/SiteFooter";
import { SiteHeader } from "./components/layout/SiteHeader";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Materials } from "./pages/Materials";
import { Services } from "./pages/Services";

type PageId = "home" | "services" | "materials" | "about" | "contact";

function renderPage(page: PageId) {
  if (page === "services") return <Services />;
  if (page === "materials") return <Materials />;
  if (page === "about") return <About />;
  if (page === "contact") return <Contact />;
  return <Home />;
}

export default function App() {
  const [page, setPage] = useState<PageId>("home");
  const pageContent = useMemo(() => renderPage(page), [page]);

  return (
    <div className="min-h-screen bg-transparent">
      <SiteHeader activePage={page} onNavigate={(id) => setPage(id as PageId)} />
      <main>{pageContent}</main>
      <SiteFooter />
    </div>
  );
}
