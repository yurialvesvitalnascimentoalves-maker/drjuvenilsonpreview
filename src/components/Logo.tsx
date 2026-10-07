import Image from "next/image";
import { ASSET_PATH } from "@/lib/constants";

export function Logo({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src={`${ASSET_PATH}/logo-juvenilson.png`}
      alt="Juvenilson Ferreira — Odontologia Especializada"
      width={1964}
      height={553}
      className={`brand-logo ${className}`}
      sizes="(max-width: 600px) 240px, 380px"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
    />
  );
}
