import type { Metadata } from "next";
import MarcaCard from "@/components/MarcaCard";
import SectionTitle from "@/components/SectionTitle";
import { marcas } from "@/data/marcas";

export const metadata: Metadata = {
  title: "Marcas",
  description: "Conoce las líneas DDSR: Run, Pro y Street.",
};

export default function Marcas() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle titulo="Marcas" como="h1" />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {marcas.map((m) => (
          <MarcaCard key={m.slug} marca={m} />
        ))}
      </div>
    </section>
  );
}