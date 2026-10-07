import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Juvenilson Ferreira | Odontologia Especializada em Petrolina",
  description: "Tratamentos planejados com precisão, naturalidade e foco na sua autoestima. Implantodontia, Periodontia, Prótese, Facetas em Resina e Invisalign em Petrolina, PE.",
  icons: { icon: "/assets/dr-juvenilson/monogram.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <a href="#conteudo" className="skip-link">Ir para o conteúdo</a>
        {children}
        <noscript><style>{`[data-reveal], .hero-portrait { opacity: 1 !important; transform: none !important; }`}</style></noscript>
      </body>
    </html>
  );
}
