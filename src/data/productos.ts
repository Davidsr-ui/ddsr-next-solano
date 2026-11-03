export type Producto = {
  slug: string;
  nombre: string;
  linea: "DDSR Run" | "DDSR Pro" | "DDSR Street";
  categoria: string;
  precio: number;
  descripcion: string;
  imagen: string;
  tallas: string[];
};

export const productos: Producto[] = [
  {
    slug: "camiseta-run",
    nombre: "Camiseta Run Dry",
    linea: "DDSR Run",
    categoria: "Camisetas",
    precio: 59.9,
    descripcion: "Camiseta ligera y transpirable para correr largas distancias.",
    imagen: "/img/productos/camiseta-run.jpg",
    tallas: ["S", "M", "L", "XL"],
  },
  {
    slug: "short-pro",
    nombre: "Short Pro Training",
    linea: "DDSR Pro",
    categoria: "Shorts",
    precio: 49.9,
    descripcion: "Short elástico con bolsillos, ideal para entrenamiento intenso.",
    imagen: "/img/productos/short-pro.jpg",
    tallas: ["S", "M", "L", "XL"],
  },
  {
    slug: "buzo-street",
    nombre: "Buzo Street Fleece",
    linea: "DDSR Street",
    categoria: "Buzos",
    precio: 119.9,
    descripcion: "Buzo cómodo y abrigador para el día a día.",
    imagen: "/img/productos/buzo-street.jpg",
    tallas: ["M", "L", "XL"],
  },
  {
    slug: "zapatillas-run",
    nombre: "Zapatillas Run Boost",
    linea: "DDSR Run",
    categoria: "Calzado",
    precio: 189.9,
    descripcion: "Zapatillas con amortiguación para running en asfalto.",
    imagen: "/img/productos/zapatillas-run.jpg",
    tallas: ["38", "39", "40", "41", "42", "43"],
  },
  {
    slug: "leggings-pro",
    nombre: "Leggings Pro Fit",
    linea: "DDSR Pro",
    categoria: "Leggings",
    precio: 79.9,
    descripcion: "Leggings de compresión media que se ajustan sin limitar el movimiento.",
    imagen: "/img/productos/leggings-pro.jpg",
    tallas: ["S", "M", "L"],
  },
  {
    slug: "gorra-street",
    nombre: "Gorra Street Cap",
    linea: "DDSR Street",
    categoria: "Accesorios",
    precio: 34.9,
    descripcion: "Gorra ajustable con visera curva y logo bordado.",
    imagen: "/img/productos/gorra-street.jpg",
    tallas: ["Única"],
  },
];

export function obtenerProducto(slug: string) {
  return productos.find((p) => p.slug === slug);
}