import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-superficie bg-superficie/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <Link href="/" aria-label="DDSR, inicio" className="inline-block">
            <Image
              src="/LogoDSR.png"
              alt="Logo de DDSR"
              width={160}
              height={80}
              className="h-40 w-auto object-contain"
            />
          </Link>
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
            <li>Trujillo, Perú</li>
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