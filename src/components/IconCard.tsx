import type { ReactNode } from "react";

type Props = {
  icono: ReactNode;
  titulo: string;
  descripcion: string;
  vertical?: boolean;
  como?: "h2" | "h3";
};

export default function IconCard({
  icono,
  titulo,
  descripcion,
  vertical = false,
  como: Etiqueta = "h3",
}: Props) {
  return (
    <div
      className={`flex gap-5 rounded-xl bg-superficie p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primario/30 ${
        vertical ? "flex-col items-center text-center" : "items-start"
      }`}
    >
      <div className="shrink-0 text-azul-claro">{icono}</div>
      <div>
        <Etiqueta className="text-2xl font-semibold text-azul-claro">
          {titulo}
        </Etiqueta>
        <p className="mt-3 text-lg leading-relaxed text-texto/80">
          {descripcion}
        </p>
      </div>
    </div>
  );
}