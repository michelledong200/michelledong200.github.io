import { site } from "@/content/site";

export default function Footer() {
  // Evaluated at build time under static export; the weekly rebuild keeps it current.
  const year = new Date().getFullYear();
  return (
    <footer className="text-muted px-6 pt-6 pb-[calc(6rem+env(safe-area-inset-bottom))] text-center text-[13.5px]">
      © {year} {site.name} · {site.location}
    </footer>
  );
}
