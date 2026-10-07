import Image from "next/image";
import { ToothIcon as Tooth } from "./ToothIcon";
import { ASSET_PATH } from "@/lib/constants";
import { Reveal } from "./Reveal";

export function TransformationsSection() {
  return (
    <section id="transformacoes" className="section transformations-section" aria-labelledby="transformations-title">
      <div className="page-container">
        <Reveal className="section-heading centered">
          <h2 id="transformations-title" className="section-title">Transformações que<br /><span>valorizam seu sorriso.</span></h2>
          <p className="section-description">Resultados planejados para unir estética, naturalidade e confiança em cada detalhe.</p>
        </Reveal>
        <div className="results-list" aria-label="Resultados de antes e depois" tabIndex={0}>
          {[1, 2, 3, 4].map((number) => (
            <Reveal className="result-item" key={number} delay={(number - 1) * 0.06}>
              <figure className="result-comparison">
                <Image src={`${ASSET_PATH}/resultado-clinico-0${number}.png`} alt={`Resultado ${number}: sorriso antes do tratamento na parte superior e depois do tratamento na parte inferior`} fill sizes="(max-width: 600px) 85vw, (max-width: 1000px) 45vw, 25vw" quality={90} />
                <span className="result-label before">Antes</span>
                <span className="result-label after">Depois</span>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal className="results-caption centered">
          <div className="signature-divider"><span /><Tooth size={27} strokeWidth={1.3} aria-hidden="true" /><span /></div>
          <p>Cada sorriso é tratado de forma única.</p>
        </Reveal>
      </div>
    </section>
  );
}
