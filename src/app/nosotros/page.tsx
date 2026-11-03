import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce la historia, misión y valores de DDSR.",
};

export default function Nosotros() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-bold">Nosotros</h1>
      <p className="mt-4 text-texto/80">
        DDSR nació para ofrecer ropa deportiva cómoda, resistente y con estilo
        para quienes entrenan todos los días.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-superficie p-6">
          <h2 className="text-2xl font-semibold text-azul-claro">Misión</h2>
          <p className="mt-2 text-texto/80">
            Equipar a cada deportista con prendas que acompañen su rendimiento.
          </p>
        </div>
        <div className="rounded-xl bg-superficie p-6">
          <h2 className="text-2xl font-semibold text-azul-claro">Visión</h2>
          <p className="mt-2 text-texto/80">
            Ser la tienda deportiva de referencia en el Perú.
          </p>
        </div>
      </div>
    </section>
  );
}