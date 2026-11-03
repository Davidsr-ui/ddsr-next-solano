import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-linear-to-b from-azul-oscuro to-fondo px-4 py-24 text-center">
        <h1 className="text-4xl font-bold md:text-6xl">Entrena sin límites</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-texto/80">
          Prendas deportivas DDSR diseñadas para rendir en cada movimiento.
        </p>
        <Link
          href="/productos"
          className="mt-8 inline-block rounded-lg bg-primario px-8 py-3 font-semibold transition hover:bg-azul-claro"
        >
          Ver productos
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold">¿Por qué DDSR?</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ["Calidad", "Telas transpirables y resistentes."],
            ["Envíos", "Entregas a todo el Perú."],
            ["Cambios", "Cambio de talla sin complicaciones."],
          ].map(([titulo, texto]) => (
            <div key={titulo} className="rounded-xl bg-superficie p-6">
              <h3 className="text-xl font-semibold text-azul-claro">{titulo}</h3>
              <p className="mt-2 text-texto/80">{texto}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}