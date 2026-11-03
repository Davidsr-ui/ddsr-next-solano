import type { Metadata } from "next";
import GaleriaCard from "@/components/GaleriaCard";
import IconCard from "@/components/IconCard";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce la historia, misión y valores de DDSR.",
};

const propsIcono = {
  width: 52,
  height: 52,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const iconoMision = (
  <svg {...propsIcono}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const iconoVision = (
  <svg {...propsIcono}>
    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const galeria = [
  { titulo: "Tienda", imagen: "/img/nosotros/tienda.jpg", alt: "Interior de la tienda DDSR" },
  { titulo: "Almacén", imagen: "/img/nosotros/almacen.jpg", alt: "Almacén de prendas deportivas DDSR" },
  { titulo: "Equipo", imagen: "/img/nosotros/equipo.jpg", alt: "Equipo de trabajo de DDSR" },
  { titulo: "Entrenamiento", imagen: "/img/nosotros/entrenamiento.jpg", alt: "Deportistas con prendas DDSR" },
];

const valores = [
  {
    titulo: "Calidad",
    descripcion: "Cuidamos cada detalle: telas, costuras y acabados.",
    icono: (
      <svg {...propsIcono}>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    titulo: "Compromiso",
    descripcion: "Atendemos cada pedido como si fuera el primero.",
    icono: (
      <svg {...propsIcono}>
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    titulo: "Pasión",
    descripcion: "Vivimos el deporte y eso se nota en cada prenda.",
    icono: (
      <svg {...propsIcono}>
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
      </svg>
    ),
  },
];

export default function Nosotros() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <SectionTitle
        titulo="Nosotros"
        como="h1"
        subtitulo="DDSR nació para ofrecer ropa deportiva cómoda, resistente y con estilo para quienes entrenan todos los días."
      />

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <IconCard
          como="h2"
          icono={iconoMision}
          titulo="Misión"
          descripcion="Equipar a cada deportista con prendas que acompañen su rendimiento."
        />
        <IconCard
          como="h2"
          icono={iconoVision}
          titulo="Visión"
          descripcion="Ser la tienda deportiva de referencia en el Perú."
        />
      </div>

      <div className="mt-20">
        <SectionTitle titulo="Conoce DDSR" subtitulo="Así trabajamos todos los días" centrado />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {galeria.map((g) => (
            <GaleriaCard key={g.titulo} titulo={g.titulo} imagen={g.imagen} alt={g.alt} />
          ))}
        </div>
      </div>

      <div className="mt-20">
        <SectionTitle titulo="Nuestros valores" centrado />
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {valores.map((v) => (
            <IconCard
              key={v.titulo}
              vertical
              icono={v.icono}
              titulo={v.titulo}
              descripcion={v.descripcion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}