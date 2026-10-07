import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { TreatmentsSection } from "@/components/TreatmentsSection";
import { TransformationsSection } from "@/components/TransformationsSection";
import { ClinicSection } from "@/components/ClinicSection";
import { LocationCTASection } from "@/components/LocationCTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="conteudo">
        <HeroSection />
        <AboutSection />
        <TreatmentsSection />
        <TransformationsSection />
        <ClinicSection />
        <LocationCTASection />
      </main>
      <Footer />
    </>
  );
}
