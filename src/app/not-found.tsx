import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-4 py-24 text-center">
      <p className="w-fit mx-auto bg-linear-to-r from-azul-oscuro to-azul-claro bg-clip-text text-8xl font-bold text-transparent">
        404
      </p>
      <h1 className="mt-4 text-3xl font-bold">Fuera de juego</h1>
      <p className="mt-2 text-texto/80">La página que buscas no existe.</p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-lg bg-primario px-8 py-3 font-semibold text-white transition hover:bg-azul-oscuro"
      >
        Volver al inicio
      </Link>
    </section>
  );
}