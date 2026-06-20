import { MessageCircle } from "lucide-react";
import { company } from "../data/siteData";

export default function WhatsAppButton() {
  const link = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    "Hello Perfect Engineering and Services, I am interested in your services."
  )}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue text-white shadow-2xl transition hover:scale-110 hover:bg-brand-navy"
    >
      <MessageCircle size={26} />
    </a>
  );
}