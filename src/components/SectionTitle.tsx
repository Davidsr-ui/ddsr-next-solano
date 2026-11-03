type Props = {
  titulo: string;
  subtitulo?: string;
  como?: "h1" | "h2";
  centrado?: boolean;
};

export default function SectionTitle({
  titulo,
  subtitulo,
  como: Etiqueta = "h2",
  centrado = false,
}: Props) {
  return (
    <div className={centrado ? "text-center" : ""}>
      <Etiqueta className="text-3xl font-bold md:text-4xl">{titulo}</Etiqueta>
      <div
        className={`mt-2 h-1 w-16 rounded bg-linear-to-r from-azul-oscuro to-azul-claro ${
          centrado ? "mx-auto" : ""
        }`}
      />
      {subtitulo && <p className="mt-3 text-texto/80">{subtitulo}</p>}
    </div>
  );
}