import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Escríbenos para consultas, pedidos y uniformes personalizados.",
};

export default function Contacto() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-4xl font-bold">Contáctenos</h1>
      <form className="mt-8 space-y-4 rounded-xl bg-superficie p-6">
        <input
          type="text"
          placeholder="Nombre"
          className="w-full rounded-md bg-fondo px-4 py-3 outline-none focus:ring-2 focus:ring-primario"
        />
        <input
          type="email"
          placeholder="Correo"
          className="w-full rounded-md bg-fondo px-4 py-3 outline-none focus:ring-2 focus:ring-primario"
        />
        <textarea
          placeholder="Mensaje"
          rows={5}
          className="w-full rounded-md bg-fondo px-4 py-3 outline-none focus:ring-2 focus:ring-primario"
        />
        <button
          type="button"
          className="rounded-lg bg-primario px-6 py-3 font-semibold transition hover:bg-azul-claro"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}