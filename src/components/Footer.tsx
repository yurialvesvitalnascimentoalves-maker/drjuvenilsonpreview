import { Instagram } from "lucide-react";
import { INSTAGRAM_URL, NAV_LINKS } from "@/lib/constants";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="page-container">
        <div className="footer-main">
          <a href="#inicio" aria-label="Voltar ao início"><Logo /></a>
          <nav aria-label="Navegação do rodapé">{NAV_LINKS.map(({ href, label }) => <a href={href} key={href}>{label}</a>)}</nav>
          {INSTAGRAM_URL ? <div className="footer-social"><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"><Instagram size={19} strokeWidth={1.5} aria-hidden="true" /><span>Instagram</span></a></div> : null}
        </div>
        <p className="copyright">© Juvenilson Ferreira — Odontologia Especializada.</p>
      </div>
    </footer>
  );
}
