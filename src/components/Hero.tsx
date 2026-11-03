import Image from "next/image";
import Link from "next/link";

type Props = {
  titulo: string;
  tituloComplemento?: string;
  subtitulo: string;
  imagen: string;
  alt: string;
  textoBoton: string;
  hrefBoton: string;
  alineacion?: "centro" | "derecha";
  variante?: "banner" | "retrato";
};

export default function Hero({
  titulo,
  tituloComplemento,
  subtitulo,
  imagen,
  alt,
  textoBoton,
  hrefBoton,
  alineacion = "centro",
  variante = "banner",
}: Props) {
  const alinearDerecha = alineacion === "derecha";

  const contenido = (
    <div
      className={`mx-auto w-full max-w-xl text-center ${
        alinearDerecha ? "md:ml-auto md:mr-0 md:text-right" : ""
      }`}
    >
      <h1 className="font-bold">
        <span className="text-4xl text-azul-claro sm:text-5xl md:text-7xl">
          {titulo}
        </span>
        {tituloComplemento && (
          <span className="mt-2 block text-2xl text-white sm:text-3xl md:text-4xl">
            {tituloComplemento}
          </span>
        )}
      </h1>
      <p className="mt-4 max-w-xl text-lg text-white">{subtitulo}</p>
      <Link
        href={hrefBoton}
        className="mt-8 inline-block rounded-lg bg-primario px-8 py-3 font-semibold text-white transition hover:bg-azul-oscuro"
      >
        {textoBoton}
      </Link>
    </div>
  );

  if (variante === "retrato") {
    return (
      <section className="relative isolate flex min-h-[560px] items-center overflow-hidden py-10">
        <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <Image
            src={imagen}
            alt=""
            fill
            sizes="100vw"
            quality={90}
            className="scale-110 object-cover blur-2xl"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:gap-12">
          <div className="relative mx-auto aspect-[3/4] max-h-[560px] w-full max-w-[420px] overflow-hidden rounded-xl shadow-2xl">
            <Image
              src={imagen}
              alt={alt}
              fill
              priority
              sizes="(min-width: 768px) 40vw, 80vw"
              quality={90}
              className="object-contain"
            />
          </div>
          {contenido}
        </div>
      </section>
    );
  }

  return (
    <section className="relative flex min-h-[calc(100svh-7.5rem)] items-center overflow-hidden py-16 text-center">
      <Image
        src={imagen}
        alt={alt}
        fill
        priority
        sizes="100vw"
        quality={90}
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 w-full px-6 text-white lg:px-16">
        {contenido}
      </div>
    </section>
  );
}