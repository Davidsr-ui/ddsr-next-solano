import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Uniformes personalizados, ventas por mayor y asesoría de tallas en DDSR.",
};

const servicios = [
  ["Uniformes personalizados", "Diseñamos camisetas y shorts para tu equipo."],
  ["Ventas por mayor", "Precios especiales para clubes y academias."],
  ["Asesoría de tallas", "Te ayudamos a elegir la talla ideal."],
  ["Envíos a todo el Perú", "Despachamos tu pedido donde estés."],
];

export default function Servicios() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-bold">Servicios</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {servicios.map(([titulo, texto]) => (
          <div key={titulo} className="rounded-xl bg-superficie p-6">
            <h2 className="text-xl font-semibold text-azul-claro">{titulo}</h2>
            <p className="mt-2 text-texto/80">{texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}