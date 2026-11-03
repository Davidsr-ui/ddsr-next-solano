import type { ReactNode } from "react";

type Props = {
  icono: ReactNode;
  titulo: string;
  descripcion: string;
};

export default function ServicioCard({ icono, titulo, descripcion }: Props) {
  return (
    <div className="flex gap-5 rounded-xl bg-superficie p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primario/30">
      <div className="shrink-0 text-azul-claro">{icono}</div>
      <div>
        <h2 className="text-xl font-semibold text-azul-claro">{titulo}</h2>
        <p className="mt-2 text-texto/80">{descripcion}</p>
      </div>
    </div>
  );
}