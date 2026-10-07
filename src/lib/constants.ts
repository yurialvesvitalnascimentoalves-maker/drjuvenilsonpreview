export const WHATSAPP_NUMBER = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5587981242392").replace(/\D/g, "");
export const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "";
export const clinicAddress = process.env.NEXT_PUBLIC_CLINIC_ADDRESS ?? "Empresarial Trade Center, sala 1202. Rua Joaquim Nabuco, 541, Centro, Petrolina - PE";
export const CLINIC_LOCATION = "Petrolina • PE";
export const WHATSAPP_MESSAGE = "Olá, Dr. Juvenilson! Gostaria de agendar uma avaliação.";
export const ASSET_PATH = "/assets/dr-juvenilson";

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
] as const;

export function getWhatsAppUrl(number = WHATSAPP_NUMBER) {
  const digits = number.replace(/\D/g, "");
  return digits ? `https://wa.me/${digits}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}` : null;
}

export function openWhatsApp() {
  const url = getWhatsAppUrl();
  if (url) window.open(url, "_blank", "noopener,noreferrer");
  else window.dispatchEvent(new Event("clinic:contact-unavailable"));
}

export const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinicAddress || "Petrolina, Pernambuco")}`;
