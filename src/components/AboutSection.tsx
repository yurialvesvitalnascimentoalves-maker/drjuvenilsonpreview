import Image from "next/image";
import { Gem, Heart, ClipboardCheck } from "lucide-react";
import { ASSET_PATH } from "@/lib/constants";
import { Reveal } from "./Reveal";

const highlights = [
  { Icon: Gem, label: "Atendimento premium" },
  { Icon: ClipboardCheck, label: "Planejamento personalizado" },
  { Icon: Heart, label: "Foco na autoestima" },
];

export function AboutSection() {
  return (
    <section id="sobre" className="section about-section" aria-labelledby="about-title">
      <div className="page-container about-grid">
        <Reveal className="about-copy">
          <h2 id="about-title" className="section-title">Sobre o<br /><span>Dr. Juvenilson.</span></h2>
          <p className="about-tagline">Transformando vidas através do sorriso</p>
          <p className="section-description">Atendimento humanizado, planejamento individualizado e foco em resultados naturais. Dr. Juvenilson Ferreira atua com uma odontologia especializada, pensada para devolver função, estética e autoestima com segurança e precisão.</p>
          <ul className="about-highlights" aria-label="Diferenciais do atendimento">
            {highlights.map(({ Icon, label }) => (
              <li className="about-highlight" key={label}><Icon size={18} strokeWidth={1.25} aria-hidden="true" /><span>{label}</span></li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="about-photo-column">
          <div className="about-photo-card">
            <Image src={`${ASSET_PATH}/dr-juvenilson-sobre.png`} alt="Dr. Juvenilson Ferreira sorrindo, com os braços cruzados, no consultório" width={656} height={916} sizes="(max-width: 600px) 90vw, 440px" quality={90} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
