import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Escríbenos para consultas, pedidos y uniformes personalizados.",
};

// Cambie la dirección por la de DDSR, o pegue aquí el "src" del mapa de Google Maps
const MAPA_URL = "https://www.google.com/maps?q=Trujillo,+Peru&output=embed";

export default function Contacto() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle
        titulo="Contáctenos"
        como="h1"
        subtitulo="Escríbenos y te responderemos pronto."
      />

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="h-80 overflow-hidden rounded-xl md:h-auto md:min-h-[420px]">
          <iframe
            src={MAPA_URL}
            title="Ubicación de DDSR en Google Maps"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <ContactForm />
      </div>
    </section>
  );
}