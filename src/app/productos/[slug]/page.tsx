import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { obtenerProducto, productos } from "@/data/productos";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return productos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const producto = obtenerProducto(slug);
  if (!producto) return { title: "Producto no encontrado" };
  return { title: producto.nombre, description: producto.descripcion };
}

export default async function DetalleProducto({ params }: Props) {
  const { slug } = await params;
  const producto = obtenerProducto(slug);
  if (!producto) notFound();

  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <Link href="/productos" className="text-azul-claro hover:underline">
        ← Volver a productos
      </Link>

      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-xl">
          <Image
            src={producto.imagen}
            alt={producto.nombre}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-azul-claro">{producto.linea} · {producto.categoria}</p>
          <h1 className="mt-1 text-4xl font-bold">{producto.nombre}</h1>
          <p className="mt-4 text-3xl font-semibold">S/ {producto.precio.toFixed(2)}</p>
          <p className="mt-4 text-texto/80">{producto.descripcion}</p>

          <h2 className="mt-6 font-semibold">Tallas</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {producto.tallas.map((t) => (
              <span key={t} className="rounded-md bg-superficie px-4 py-2">
                {t}
              </span>
            ))}
          </div>

          <Link
            href="/contacto"
            className="mt-8 inline-block rounded-lg bg-primario px-8 py-3 font-semibold text-white transition hover:bg-azul-oscuro"
          >
            Consultar disponibilidad
          </Link>
        </div>
      </div>
    </section>
  );
}