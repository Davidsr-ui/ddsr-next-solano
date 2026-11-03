import Image from "next/image";
import Link from "next/link";

type Props = {
  titulo: string;
  subtitulo: string;
  imagen: string;
  alt: string;
  textoBoton: string;
  hrefBoton: string;
};

export default function Hero({
  titulo,
  subtitulo,
  imagen,
  alt,
  textoBoton,
  hrefBoton,
}: Props) {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4 py-24 text-center">
      <Image
        src={imagen}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-b from-azul-oscuro/60 to-fondo" />

      <div className="relative z-10">
        <h1 className="text-4xl font-bold md:text-6xl">{titulo}</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-texto/90">{subtitulo}</p>
        <Link
          href={hrefBoton}
          className="mt-8 inline-block rounded-lg bg-primario px-8 py-3 font-semibold transition hover:bg-azul-claro"
        >
          {textoBoton}
        </Link>
      </div>
    </section>
  );
}