import Image from "next/image";
import Link from "next/link";
import type { Producto } from "@/data/productos";

type Props = { producto: Producto };

export default function ProductCard({ producto }: Props) {
  return (
    <Link
      href={`/productos/${producto.slug}`}
      className="group overflow-hidden rounded-xl bg-superficie transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primario/30"
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={producto.imagen}
          alt={producto.nombre}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-azul-claro">{producto.linea}</p>
        <h3 className="text-lg font-semibold">{producto.nombre}</h3>
        <p className="mt-1 text-texto/80">S/ {producto.precio.toFixed(2)}</p>
      </div>
    </Link>
  );
}