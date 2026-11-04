# Bitácora de uso de IA: DDSR


### Entrada 4: Tema claro/oscuro y logo (opencode)
- **Objetivo:** Colocar el logo y agregar tema claro/oscuro.
- **Prompt:** Pedí usar el logo con `next/image`, dos juegos de colores en `globals.css`, `ThemeToggle` con `localStorage` y un script para evitar el parpadeo. Reglas: solo App Router y sin librerías nuevas.
- **Respuesta:** Creó `ThemeToggle.tsx` y modificó `globals.css`, layout, Navbar y Footer.
- **Decisión:** Aceptado
- **Justificación:** Funcionó en ambos temas. Revisé el diff y el contraste antes del commit.

### Entrada 5: Rediseño del Navbar y del Hero (opencode)
- **Objetivo:** Que el Inicio se parezca a la referencia, con íconos, Hero a pantalla completa y botón de WhatsApp.
- **Prompt:** Pedí íconos SVG en los enlaces, Hero con imagen de fondo y `WhatsAppButton`.
- **Respuesta:** Agregó lo pedido, pero también cambió los colores del Navbar y del Hero.
- **Decisión:** Modificado
- **Justificación:** Conservé los íconos y rechacé los colores (caso 2).

### Entrada 6: Logos e imágenes (Gemini)
- **Objetivo:** Generar los logos de DDSR Run, Pro y Street y las fotos de Nosotros.
- **Prompt:** "Diseña un logo para una línea llamada «[DDSR Run]», estilo del logo adjunto, degradado azul, fondo blanco liso."
- **Respuesta:** Logos y fotos con el estilo pedido.
- **Decisión:** Modificado
- **Justificación:** El primer logo salió con corchetes (caso 3). Quité los fondos y revisé que no hubiera texto ni logos de terceros.

## 2. Errores de la IA y su corrección

### Caso 1: El degradado del título no se veía
**Antes:**
```tsx
<h1 className="bg-linear-to-r from-azul-oscuro to-azul-claro bg-clip-text text-5xl font-bold text-transparent">
```
**Después:**
```tsx
<h1 className="w-fit bg-linear-to-r from-azul-oscuro to-azul-claro bg-clip-text text-5xl font-bold text-transparent">
```
**Explicación:** El `h1` ocupaba todo el ancho y el degradado se repartía sobre esa anchura, pero el texto cubría solo la izquierda. Con `w-fit` el degradado recorre solo las letras.


### Caso 3: Logo con corchetes (Gemini)
**Antes:** el prompt decía `"[DDSR Run]"` y el logo salió con corchetes.
**Después:** regeneré con `"DDSR Run"` y la instrucción "el texto debe decir exactamente DDSR Run, sin símbolos adicionales".
**Explicación:** Los corchetes eran de mi plantilla, pero la IA los tomó como parte del texto.

### Caso 4: Hero recortado y rutas en mayúscula
**Antes:** foto vertical con `object-cover` en un banner horizontal (se recortaba) y carpeta `public/img/Productos` con rutas `/img/Productos/...`.
**Después:** imagen horizontal con `object-cover object-center`, y carpeta en minúscula:
```bash
git mv public/img/Productos public/img/temporal
git mv public/img/temporal public/img/productos
```
**Explicación:** `object-cover` llena el contenedor y recorta lo que sobra. Y Windows no distingue mayúsculas, pero Vercel (Linux) sí, así que las fotos habrían fallado al desplegar.

## 3. Reflexión

La IA me ayudó a entender qué va en el servidor y qué en el cliente: solo el Navbar y el cambio de tema necesitan `"use client"`. También me aceleró con Tailwind y los componentes reutilizables.

Lo que tuve que razonar yo fue lo que dependía de mi proyecto: la IA no sabía que mi foto era vertical ni dónde guardé los archivos, así que el Hero se recortaba o salía roto hasta que revisé el formato y las rutas. Con opencode aprendí que un agente puede cambiar cosas que no pedí y que debo revisar el diff antes de cada commit.
