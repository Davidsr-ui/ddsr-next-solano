import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { productos } from "@/data/productos";

export const metadata: Metadata = {
  title: "Productos",
  description: "Camisetas, shorts, buzos, calzado y accesorios deportivos DDSR.",
};

export default function Productos() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-bold">Productos</h1>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {productos.map((p) => (
          <Link
            key={p.slug}
            href={`/productos/${p.slug}`}
            className="group overflow-hidden rounded-xl bg-superficie transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primario/30"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={p.imagen}
                alt={p.nombre}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-azul-claro">{p.linea}</p>
              <h2 className="text-lg font-semibold">{p.nombre}</h2>
              <p className="mt-1 text-texto/80">S/ {p.precio.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}