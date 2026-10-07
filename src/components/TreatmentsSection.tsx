import Image from "next/image";
import { ASSET_PATH } from "@/lib/constants";
import { treatments } from "@/lib/treatments";
import { DentalIcon } from "./DentalIcon";
import { CTAButton } from "./CTAButton";
import { Reveal } from "./Reveal";

export function TreatmentsSection() {
  return (
    <section id="tratamentos" className="section treatments-section" aria-labelledby="treatments-title">
      <div className="page-container">
        <Reveal className="section-heading centered">
          <h2 id="treatments-title" className="section-title">Tratamentos</h2>
          <p className="section-description">Soluções planejadas para transformar o seu sorriso<br className="desktop-break" /> com naturalidade e precisão.</p>
        </Reveal>
        <div className="treatments-list" aria-label="Cinco especialidades odontológicas" tabIndex={0}>
          {treatments.map((treatment, index) => (
            <Reveal key={treatment.name} className="treatment" delay={index * 0.05}>
              <article className="treatment-content" aria-labelledby={`treatment-${index}`}>
                <div className="treatment-image"><Image src={`${ASSET_PATH}/${treatment.image}`} alt={treatment.alt} width={252} height={181} sizes="(max-width: 600px) 220px, (max-width: 1000px) 180px, 220px" /></div>
                <div className="treatment-icon"><DentalIcon kind={treatment.icon} /></div>
                <h3 id={`treatment-${index}`}>{treatment.name}</h3>
                <p>{treatment.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="centered section-cta"><CTAButton /></Reveal>
      </div>
    </section>
  );
}
