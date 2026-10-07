"use client";

import { ArrowRight, CalendarDays } from "lucide-react";
import { getWhatsAppUrl, openWhatsApp } from "@/lib/constants";
import type { MouseEvent } from "react";

export function handleContactClick(event: MouseEvent<HTMLAnchorElement>) {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  openWhatsApp();
}

export function CTAButton({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  return (
    <a href={getWhatsAppUrl() ?? "#contato"} onClick={handleContactClick} target="_blank" rel="noopener noreferrer" className={`button button-primary ${compact ? "button-compact" : ""} ${className}`}>
      <CalendarDays size={23} strokeWidth={1.5} aria-hidden="true" />
      <span>Agendar avaliação</span>
      {!compact && <ArrowRight size={23} strokeWidth={1.5} aria-hidden="true" />}
    </a>
  );
}
