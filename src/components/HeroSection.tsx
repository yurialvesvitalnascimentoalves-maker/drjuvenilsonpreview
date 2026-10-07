import Image from "next/image";
import { MapPin } from "lucide-react";
import { ASSET_PATH, CLINIC_LOCATION } from "@/lib/constants";
import { CTAButton } from "./CTAButton";
import { DoctorPortrait } from "./DoctorPortrait";
import { Reveal } from "./Reveal";

export function HeroSection() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="hero">
      <Image className="hero-background" src={`${ASSET_PATH}/hero-background.png`} alt="" fill preload sizes="100vw" quality={90} />
      <div className="hero-inner page-container">
        <Image className="hero-monogram" src={`${ASSET_PATH}/monogram.png`} alt="" aria-hidden="true" width={395} height={553} sizes="(max-width: 600px) 310px, 500px" />
        <Reveal className="hero-copy">
          <h1 id="hero-title">Um novo sorriso.<br /><span>Uma nova versão<br />de você.</span></h1>
          <p className="hero-description">Tratamentos planejados com precisão, naturalidade e foco na sua autoestima. Implantodontia, Periodontia, Prótese e Facetas em Resina em um atendimento premium e humanizado.</p>
          <div className="cta-group"><CTAButton /></div>
          <p className="location-note"><MapPin size={21} strokeWidth={1.7} aria-hidden="true" />{CLINIC_LOCATION}</p>
        </Reveal>
        <DoctorPortrait hero />
      </div>
    </section>
  );
}
