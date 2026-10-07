"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ASSET_PATH } from "@/lib/constants";

export function DoctorPortrait({ hero = false }: { hero?: boolean }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div className={hero ? "hero-portrait" : "about-portrait"} initial={{ opacity: 0, x: reducedMotion ? 0 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: reducedMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }} data-reveal>
      <Image src={`${ASSET_PATH}/dr-juvenilson-oficial.png`} alt="Dr. Juvenilson Ferreira, sorrindo, em blazer bege" width={1024} height={1536} sizes={hero ? "(max-width: 600px) 327px, 553px" : "(max-width: 600px) 327px, 434px"} loading={hero ? "eager" : "lazy"} fetchPriority={hero ? "high" : undefined} />
    </motion.div>
  );
}
