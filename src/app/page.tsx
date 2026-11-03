import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import { productos } from "@/data/productos";

const beneficios = [
  ["Calidad", "Telas transpirables y resistentes."],
  ["Envíos", "Entregas a todo el Perú."],
  ["Cambios", "Cambio de talla sin complicaciones."],
];

export default function Home() {
  return (
    <>
      <Hero
        titulo="Entrena sin límites"
        subtitulo="Prendas deportivas DDSR diseñadas para rendir en cada movimiento."
        imagen="/img/Productos/buzo-street.jpg"
        alt="Deportista entrenando con ropa deportiva"
        textoBoton="Ver productos"
        hrefBoton="/productos"
      />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle titulo="Destacados" subtitulo="Lo más pedido de la tienda" centrado />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productos.slice(0, 3).map((p) => (
            <ProductCard key={p.slug} producto={p} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <SectionTitle titulo="¿Por qué DDSR?" centrado />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {beneficios.map(([titulo, texto]) => (
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