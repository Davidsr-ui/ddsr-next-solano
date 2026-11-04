"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

const enlaces = [
  {
    href: "/",
    texto: "Inicio",
    icono: (
      <>
        <path d="m3 10 9-7 9 7" />
        <path d="M5 9v11h14V9M9 20v-6h6v6" />
      </>
    ),
  },
  {
    href: "/nosotros",
    texto: "Nosotros",
    icono: (
      <>
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h1m4 0h1m-6 4h1m4 0h1m-5 8v-4h4v4" />
      </>
    ),
  },
  {
    href: "/servicios",
    texto: "Servicios",
    icono: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18m-11 0v2h4v-2" />
      </>
    ),
  },
  {
    href: "/productos",
    texto: "Productos",
    icono: (
      <>
        <path d="M5 8h14l1 13H4L5 8Z" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      </>
    ),
  },
  {
    href: "/marcas",
    texto: "Marcas",
    icono: (
      <>
        <path d="m12 3 8 3v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-3Z" />
        <path d="m12 7 1.5 3 3.3.5-2.4 2.3.6 3.2-3-1.6-3 1.6.6-3.2-2.4-2.3 3.3-.5L12 7Z" />
      </>
    ),
  },
  {
    href: "/contacto",
    texto: "Contacto",
    icono: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="9" cy="11" r="2" />
        <path d="M6 16c.8-1.3 1.8-2 3-2s2.2.7 3 2m3-5h3m-3 3h3" />
      </>
    ),
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [abierto, setAbierto] = useState(false);

  const esActivo = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-superficie bg-fondo/90 text-texto backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" aria-label="DDSR, inicio" className="w-fit">
          <Image
            src="/img/logo-ddsr.png"
            alt="Logo de DDSR"
            width={160}
            height={80}
            className="h-25 w-auto object-contain"
          />
        </Link>

        {/* Botón hamburguesa: solo en pantallas pequeñas */}
        <button
          type="button"
          className="rounded-md p-2 text-texto transition-colors hover:bg-superficie lg:hidden"
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
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {abierto ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menú de escritorio */}
        <ul className="hidden items-center gap-5 md:gap-3 lg:gap-6 lg:flex">
          {enlaces.map((e) => (
            <li key={e.href}>
              <Link
                href={e.href}
                className={`flex items-center gap-2 pb-1 transition-colors hover:text-azul-claro ${
                  esActivo(e.href)
                    ? "border-b-2 border-primario font-semibold text-azul-claro"
                    : ""
                }`}
              >
                <svg
                  aria-hidden="true"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {e.icono}
                </svg>
                <span>{e.texto}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden text-texto lg:block">
          <ThemeToggle />
        </div>
      </nav>

      {/* Menú móvil desplegable */}
      {abierto && (
        <ul className="flex flex-col gap-1 border-t border-superficie px-4 pb-4 pt-3 text-texto lg:hidden">
          {enlaces.map((e) => (
            <li key={e.href}>
              <Link
                href={e.href}
                onClick={() => setAbierto(false)}
                className={`flex items-center gap-3 rounded-md px-3 py-2 transition-colors ${
                  esActivo(e.href)
                    ? "bg-superficie font-semibold text-azul-claro"
                    : "hover:bg-superficie"
                }`}
              >
                <svg
                  aria-hidden="true"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {e.icono}
                </svg>
                {e.texto}
              </Link>
            </li>
          ))}
          <li className="flex justify-end pt-1 text-texto">
            <ThemeToggle />
          </li>
        </ul>
      )}
    </header>
  );
}
