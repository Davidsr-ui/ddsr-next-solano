import Image from "next/image";

type Props = {
  titulo: string;
  imagen: string;
  alt: string;
};

export default function GaleriaCard({ titulo, imagen, alt }: Props) {
  return (
    <div className="rounded-xl bg-superficie p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primario/30">
      <h3 className="mb-4 text-center text-xl font-semibold text-azul-claro">
        {titulo}
      </h3>
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={imagen}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
