"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

const enlaces = [
  { href: "/", texto: "Inicio" },
  { href: "/nosotros", texto: "Nosotros" },
  { href: "/servicios", texto: "Servicios" },
  { href: "/productos", texto: "Productos" },
  { href: "/marcas", texto: "Marcas" },
  { href: "/contacto", texto: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [abierto, setAbierto] = useState(false);

  const esActivo = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-superficie bg-fondo/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" aria-label="DDSR, inicio" className="w-fit">
          <Image
            src="/LogoDSR.png"
            alt="Logo de DDSR"
            width={160}
            height={80}
            className="h-25 w-auto object-contain"
          />
        </Link>

        {/* Botón hamburguesa: solo en pantallas pequeñas */}
        <button
          type="button"
          className="rounded-md p-2 hover:bg-superficie md:hidden"
          onClick={() => setAbierto(!abierto)}
          aria-label="Abrir o cerrar menú"
          aria-expanded={abierto}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {abierto ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menú de escritorio */}
        <ul className="hidden gap-6 md:flex">
          {enlaces.map((e) => (
            <li key={e.href}>
              <Link
                href={e.href}
                className={`pb-1 transition-colors hover:text-azul-claro ${
                  esActivo(e.href)
                    ? "border-b-2 border-primario font-semibold text-azul-claro"
                    : ""
                }`}
              >
                {e.texto}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
      </nav>

      {/* Menú móvil desplegable */}
      {abierto && (
        <ul className="flex flex-col gap-1 border-t border-superficie px-4 pb-4 md:hidden">
          {enlaces.map((e) => (
            <li key={e.href}>
              <Link
                href={e.href}
                onClick={() => setAbierto(false)}
                className={`block rounded-md px-3 py-2 ${
                  esActivo(e.href)
                    ? "bg-superficie font-semibold text-azul-claro"
                    : "hover:bg-superficie"
                }`}
              >
                {e.texto}
              </Link>
            </li>
          ))}
          <li className="flex justify-end pt-1">
            <ThemeToggle />
          </li>
        </ul>
      )}
    </header>
  );
}
