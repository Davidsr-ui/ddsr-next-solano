import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { productos } from "@/data/productos";

export const metadata: Metadata = {
  title: "Productos",
  description: "Camisetas, shorts, buzos, calzado y accesorios deportivos DDSR.",
};

export default function Productos() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle titulo="Productos" como="h1" subtitulo="Elige tu equipamiento" />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {productos.map((p) => (
          <ProductCard key={p.slug} producto={p} />
        ))}
      </div>
    </section>
  );
}