import { Sparkles } from "lucide-react";
import { ToothIcon as Tooth } from "./ToothIcon";

export function DentalIcon({ kind }: { kind: "implant" | "periodontal" | "prosthesis" | "veneer" | "aligner" }) {
  if (kind === "aligner") return <Sparkles size={42} strokeWidth={1.15} aria-hidden="true" />;
  if (kind === "periodontal") return <Tooth size={42} strokeWidth={1.15} aria-hidden="true" />;
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {kind === "implant" ? <><path d="M22 7c-3-3-10-3-11 3-1 4 2 12 4 14h14c2-2 5-10 4-14-1-6-8-6-11-3Z" /><path d="m16 27 12-2M17 31l10-2M18 35l8-2M19 39l6-2M19 26l2 14h3l2-14" /></> : null}
      {kind === "prosthesis" ? <><path d="M4 15c1-4 6-4 9-1 2-3 6-3 9-1 3-2 7-2 9 1 3-3 8-3 9 1l-2 16c-2 4-5 2-7-3-3 5-6 5-9 0-3 5-6 5-9 0-2 5-5 7-7 3Z" /><path d="M14 19v7m16-7v7" /></> : null}
      {kind === "veneer" ? <><path d="M31 5c-10 0-20 5-20 16v12c0 5 7 8 18 7 2-7 3-24 2-35Z" /><path d="M27 9c-7 1-12 5-12 13v11c0 2 4 4 10 4 2-7 2-20 2-28Z" /></> : null}
    </svg>
  );
}
