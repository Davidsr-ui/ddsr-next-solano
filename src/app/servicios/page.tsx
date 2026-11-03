import type { Metadata } from "next";
import ServicioCard from "@/components/ServicioCard";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Uniformes personalizados, ventas por mayor y asesoría de tallas en DDSR.",
};

const propsIcono = {
  width: 44,
  height: 44,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const servicios = [
  {
    titulo: "Uniformes personalizados",
    descripcion:
      "Diseñamos camisetas y shorts con el nombre, los colores y el escudo de tu equipo o academia.",
    icono: (
      <svg {...propsIcono}>
        <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
      </svg>
    ),
  },
  {
    titulo: "Ventas por mayor",
    descripcion:
      "Precios especiales para clubes, academias y empresas que necesitan equipar a varios deportistas.",
    icono: (
      <svg {...propsIcono}>
        <path d="m7.5 4.27 9 5.15" />
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    ),
  },
  {
    titulo: "Asesoría de tallas",
    descripcion:
      "Te ayudamos a elegir la talla ideal según tu medida y el tipo de entrenamiento que haces.",
    icono: (
      <svg {...propsIcono}>
        <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
        <path d="m14.5 12.5 2-2" />
        <path d="m11.5 9.5 2-2" />
        <path d="m8.5 6.5 2-2" />
        <path d="m17.5 15.5 2-2" />
      </svg>
    ),
  },
  {
    titulo: "Envíos a todo el Perú",
    descripcion:
      "Despachamos tu pedido donde estés, con entregas a domicilio en el menor tiempo posible.",
    icono: (
      <svg {...propsIcono}>
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18H9" />
        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
        <circle cx="17" cy="18" r="2" />
        <circle cx="7" cy="18" r="2" />
      </svg>
    ),
  },
];

export default function Servicios() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle titulo="Servicios" como="h1" />
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {servicios.map((s) => (
          <ServicioCard
            key={s.titulo}
            icono={s.icono}
            titulo={s.titulo}
            descripcion={s.descripcion}
          />
        ))}
      </div>
    </section>
  );
}