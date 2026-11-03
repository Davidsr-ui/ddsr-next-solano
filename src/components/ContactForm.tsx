const campo =
  "w-full rounded-md bg-fondo px-4 py-3 outline-none focus:ring-2 focus:ring-primario";

export default function ContactForm() {
  return (
    <form className="space-y-4 rounded-xl bg-superficie p-6">
      <div>
        <label htmlFor="nombre" className="mb-1 block text-sm">Nombre</label>
        <input id="nombre" type="text" placeholder="Tu nombre" className={campo} />
      </div>
      <div>
        <label htmlFor="correo" className="mb-1 block text-sm">Correo</label>
        <input id="correo" type="email" placeholder="tucorreo@ejemplo.com" className={campo} />
      </div>
      <div>
        <label htmlFor="mensaje" className="mb-1 block text-sm">Mensaje</label>
        <textarea id="mensaje" rows={5} placeholder="¿En qué podemos ayudarte?" className={campo} />
      </div>
      <button
        type="button"
        className="rounded-lg bg-primario px-6 py-3 font-semibold transition hover:bg-azul-claro"
      >
        Enviar
      </button>
    </form>
  );
}