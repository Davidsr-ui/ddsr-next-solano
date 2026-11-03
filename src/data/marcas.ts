export type Marca = {
  slug: string;
  nombre: string;
  descripcion: string;
  logo?: string; // ruta en public/, opcional
};

export const marcas: Marca[] = [
  {
    slug: "ddsr-run",
    nombre: "DDSR Run",
    descripcion:
      "Línea pensada para corredores. Prendas ligeras, transpirables y de secado rápido para entrenar largas distancias con total comodidad.",
    logo: "/img/marcas/ddsr-run.png",
  },
  {
    slug: "ddsr-pro",
    nombre: "DDSR Pro",
    descripcion:
      "Alto rendimiento para entrenamiento intenso. Telas elásticas y resistentes que acompañan cada movimiento en el gimnasio.",
    logo: "/img/marcas/ddsr-pro.png",
  },
  {
    slug: "ddsr-street",
    nombre: "DDSR Street",
    descripcion:
      "Estilo deportivo para el día a día. Buzos, gorras y prendas cómodas que combinan con tu ritmo urbano.",
    logo: "/img/marcas/ddsr-street.png",
  },
];