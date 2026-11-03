import Image from "next/image";
import type { Marca } from "@/data/marcas";

type Props = { marca: Marca };

export default function MarcaCard({ marca }: Props) {
  return (
    <div className="flex min-h-[360px] flex-col items-center justify-center rounded-xl bg-superficie p-10 text-center">
      {marca.logo ? (
        <div className="relative h-24 w-full max-w-xs md:h-28">
          <Image
            src={marca.logo}
            alt={`Logo de ${marca.nombre}`}
            fill
            sizes="320px"
            className="object-contain"
          />
        </div>
      ) : (
        <h2 className="text-3xl font-bold text-azul-claro">{marca.nombre}</h2>
      )}
      <p className="mt-6 text-lg leading-relaxed text-texto/80">
        {marca.descripcion}
      </p>
    </div>
  );
}