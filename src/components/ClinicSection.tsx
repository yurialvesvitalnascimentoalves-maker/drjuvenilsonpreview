import { UserRound, Gem, ClipboardCheck } from "lucide-react";
import { ToothIcon as Tooth } from "./ToothIcon";
import { Reveal } from "./Reveal";

const features = [
  { Icon: UserRound, label: "Atendimento humanizado" },
  { Icon: Gem, label: "Ambiente premium" },
  { Icon: Tooth, label: "Tecnologia e precisão" },
  { Icon: ClipboardCheck, label: "Planejamento individualizado" },
];

export function ClinicSection() {
  return (
    <section id="estrutura" className="section clinic-section" aria-labelledby="clinic-title">
      <div className="page-container clinic-grid">
        <Reveal className="clinic-copy">
          <h2 id="clinic-title" className="section-title">Estrutura pensada<br /><span>para cuidar bem<br />de você.</span></h2>
          <p className="section-description">Um ambiente acolhedor, sofisticado e preparado para oferecer uma experiência segura, confortável e personalizada.</p>
          <ul className="clinic-features" aria-label="Diferenciais do consultório">
            {features.map(({ Icon, label }) => (
              <li className="clinic-feature" key={label}><Icon size={18} strokeWidth={1.25} aria-hidden="true" /><span>{label}</span></li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="clinic-photo clinic-placeholder"><p>uma foto do seu consultório aparecerá aqui</p></Reveal>
      </div>
    </section>
  );
}
