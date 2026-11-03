export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="w-fit bg-linear-to-r from-azul-oscuro to-azul-claro bg-clip-text text-5xl font-bold text-transparent">
        DDSR
      </h1>
      <p className="mt-2">Prueba del tema de colores y la fuente.</p>

      <div className="mt-6 flex flex-wrap gap-4">
        <div className="rounded-lg bg-superficie p-6">Superficie</div>
        <button className="rounded-lg bg-primario px-6 py-3 font-semibold">Primario</button>
        <div className="rounded-lg bg-linear-to-b from-azul-oscuro to-azul-claro p-6">Degradado</div>
      </div>
    </main>
  );
}