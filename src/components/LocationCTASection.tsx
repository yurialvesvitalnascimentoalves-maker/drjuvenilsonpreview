import { MapPin, ArrowUpRight } from "lucide-react";
import { clinicAddress, CLINIC_LOCATION, MAP_URL } from "@/lib/constants";
import { CTAButton } from "./CTAButton";
import { Reveal } from "./Reveal";

export function LocationCTASection() {
  const mapQuery = clinicAddress || "Petrolina, Pernambuco";
  return (
    <section id="contato" className="section location-section" aria-labelledby="location-title">
      <div className="page-container">
        <div className="location-grid">
          <Reveal className="location-map">
            <iframe src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=16&output=embed`} title="Mapa: consultório de Juvenilson Ferreira em Petrolina" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            <a className="map-caption" href={MAP_URL} target="_blank" rel="noopener noreferrer" aria-label="Abrir a localização do consultório no Google Maps">
              <MapPin className="map-pin" size={36} strokeWidth={1.4} aria-hidden="true" />
              <div><strong>Juvenilson Ferreira</strong><span>Odontologia Especializada</span><small>{CLINIC_LOCATION}</small></div>
              <ArrowUpRight className="map-arrow" size={21} aria-hidden="true" />
            </a>
          </Reveal>
          <Reveal className="location-copy">
            <h2 id="location-title" className="section-title">Seu novo sorriso<br /><span>pode começar hoje.</span></h2>
            <p className="section-description">Agende a sua avaliação e descubra o tratamento ideal para o seu sorriso com uma abordagem especializada e humanizada.</p>
            <div className="cta-group"><CTAButton /></div>
            <p className="location-note"><MapPin size={24} strokeWidth={1.5} aria-hidden="true" /><span>Atendimento em {CLINIC_LOCATION}</span></p>
            {clinicAddress ? <address className="clinic-address">{clinicAddress}</address> : null}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
