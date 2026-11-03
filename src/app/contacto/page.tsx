import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Escríbenos para consultas, pedidos y uniformes personalizados.",
};

export default function Contacto() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-16">
      <SectionTitle
        titulo="Contáctenos"
        como="h1"
        subtitulo="Escríbenos y te responderemos pronto."
      />
      <div className="mt-8">
        <ContactForm />
      </div>
    </section>
  );
}