"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { Logo } from "./Logo";
import { CTAButton } from "./CTAButton";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#inicio");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActive(`#${entry.target.id}`);
      }
    }, { rootMargin: "-15% 0px -55% 0px", threshold: 0 });
    NAV_LINKS.forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    function onPointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <header className="navbar" ref={headerRef}>
      <a href="#inicio" aria-label="Juvenilson Ferreira — início" className="navbar-brand" onClick={() => setOpen(false)}><Logo priority /></a>
      <nav aria-label="Navegação principal" className="desktop-navigation">
        {NAV_LINKS.map(({ href, label }) => (
          <a key={href} href={href} className={active === href ? "nav-link active" : "nav-link"} aria-current={active === href ? "location" : undefined}>{label}</a>
        ))}
      </nav>
      <CTAButton compact className="navbar-cta" />
      <button ref={toggleRef} type="button" className="menu-toggle" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((previous) => !previous)}>
        {open ? <X size={25} /> : <Menu size={25} />}
      </button>
      <nav id="mobile-navigation" aria-label="Navegação para celular" className="mobile-navigation" hidden={!open}>
        {NAV_LINKS.map(({ href, label }) => <a key={href} href={href} onClick={() => { setActive(href); setOpen(false); }}>{label}</a>)}
        <CTAButton compact />
      </nav>
    </header>
  );
}
