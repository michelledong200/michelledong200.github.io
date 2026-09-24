"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import type { Link } from "@/content/site";

type Props = { brand: string; links: Link[] };

const MENU_ID = "mobile-menu";

export default function Navbar({ brand, links }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback((restoreFocus = false) => {
    setOpen(false);
    if (restoreFocus) buttonRef.current?.focus();
  }, []);

  // Background on scroll + "last section" fallback when the page bottoms out.
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom && links.length) setActive(links[links.length - 1].href.slice(1));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [links]);

  // Scroll-spy: a section is "current" when it crosses a thin band ~40% down the viewport.
  // Every section is observed, so ones missing from the nav (hero, education) clear the highlight.
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Mobile menu: Escape, outside click, body scroll lock, auto-close when widening past md.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close(true);
    };
    const onPointer = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) close();
    };
    const mq = window.matchMedia("(min-width: 768px)");
    const onMq = () => mq.matches && close();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    mq.addEventListener("change", onMq);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      mq.removeEventListener("change", onMq);
    };
  }, [open, close]);

  const solid = scrolled || open;

  const linkClass = (href: string) => {
    const isActive = active === href.slice(1);
    return `${
      isActive
        ? "text-accent underline decoration-2 underline-offset-[6px]"
        : "text-text-soft hover:text-accent-deep"
    } font-medium`;
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 pt-[env(safe-area-inset-top)] transition-[background-color,border-color] duration-200 ${
        solid
          ? "border-border border-b bg-(--nav-bg) backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-(--nav-h) max-w-[940px] items-center justify-between pr-[max(24px,env(safe-area-inset-right))] pl-[max(24px,env(safe-area-inset-left))]"
      >
        <a
          href="#top"
          className="font-display text-text flex min-h-11 items-center text-xl font-semibold tracking-[0.2px] no-underline"
          onClick={() => close()}
        >
          {brand}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href.slice(1) ? "location" : undefined}
                className={`flex min-h-11 items-center text-[14.5px] ${linkClass(link.href)}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          ref={buttonRef}
          type="button"
          className="text-text hover:bg-surface -mr-2 grid size-11 place-items-center rounded-lg md:hidden"
          aria-expanded={open}
          aria-controls={MENU_ID}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? (
            <X className="size-6" aria-hidden="true" />
          ) : (
            <Menu className="size-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      <div
        id={MENU_ID}
        hidden={!open}
        className="border-border bg-bg shadow-card absolute inset-x-0 top-full max-h-[calc(100dvh-var(--nav-h))] overflow-y-auto border-b md:hidden"
      >
        <ul className="flex flex-col py-2 pr-[max(12px,env(safe-area-inset-right))] pl-[max(12px,env(safe-area-inset-left))]">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href.slice(1) ? "location" : undefined}
                onClick={() => close()}
                className={`flex min-h-12 items-center rounded-lg px-3 text-base ${linkClass(link.href)}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
