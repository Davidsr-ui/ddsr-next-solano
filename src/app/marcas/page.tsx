import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marcas",
  description: "Conoce las líneas DDSR: Run, Pro y Street.",
};

const lineas = [
  ["DDSR Run", "Ropa ligera para correr."],
  ["DDSR Pro", "Alto rendimiento para entrenamiento intenso."],
  ["DDSR Street", "Estilo deportivo para el día a día."],
];

export default function Marcas() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-bold">Marcas</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {lineas.map(([nombre, texto]) => (
          <div key={nombre} className="rounded-xl bg-superficie p-8 text-center">
            <h2 className="text-2xl font-bold text-azul-claro">{nombre}</h2>
            <p className="mt-2 text-texto/80">{texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}