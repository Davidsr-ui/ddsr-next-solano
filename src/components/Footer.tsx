import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-superficie bg-superficie/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <p className="w-fit bg-linear-to-r from-azul-oscuro to-azul-claro bg-clip-text text-2xl font-bold text-transparent">
            DDSR
          </p>
          <p className="mt-2 text-sm text-texto/70">
            Prendas deportivas para entrenar con estilo.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Enlaces</h3>
          <ul className="mt-2 space-y-1 text-sm text-texto/70">
            <li><Link href="/productos" className="hover:text-azul-claro">Productos</Link></li>
            <li><Link href="/nosotros" className="hover:text-azul-claro">Nosotros</Link></li>
            <li><Link href="/contacto" className="hover:text-azul-claro">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Contacto</h3>
          <ul className="mt-2 space-y-1 text-sm text-texto/70">
            <li>Lima, Perú</li>
            <li>ventas@ddsr.pe</li>
            <li>+51 910 492 787</li>
          </ul>
        </div>
      </div>

      <p className="border-t border-superficie py-4 text-center text-xs text-texto/60">
        © 2026 DDSR. Todos los derechos reservados.
      </p>
    </footer>
  );
}