# Bitácora de uso de IA: DDSR

Herramientas: **Claude** (guía y código), **opencode** (agente en el proyecto) y **Gemini** (imágenes y logos).

## 1. Entradas

### Entrada 1: Plan del proyecto
- **Objetivo:** Planificar el sitio de DDSR según la rúbrica.
- **Prompt:** "Modo plan, sin código: marca DDSR, ropa deportiva, Tailwind, esta paleta, carpeta `src/` y commits progresivos."
- **Respuesta:** Plan con paleta como tokens, estructura de carpetas, componentes y 10 commits.
- **Decisión:** Modificado
- **Justificación:** Mantuve la estructura y cambié el orden de algunos pasos. El cuarto color de la paleta no traía hex y lo ajusté yo.

### Entrada 2: Opciones de `create-next-app`
- **Objetivo:** Saber qué elegir al crear el proyecto.
- **Prompt:** "Dame los pasos para crear el proyecto y las opciones de selección" (con capturas).
- **Respuesta:** TypeScript, ESLint, Tailwind, `src/` y App Router. Indicó "customize settings" porque los valores recomendados no usan `src/`.
- **Decisión:** Aceptado
- **Justificación:** Coincidía con el enunciado y con mi plan.

### Entrada 3: Justificaciones de `DECISIONES.md`
- **Objetivo:** Redactar las decisiones y la comparación con una SPA.
- **Prompt:** "Dame las respuestas de las preguntas y las decisiones", y luego "cortas y específicas".
- **Respuesta:** Borrador con tablas de decisión.
- **Decisión:** Modificado
- **Justificación:** Lo acorté y usé ejemplos de DDSR (el tipo `Producto`, `/productos/camiseta-run`) para no dejarlo genérico.

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

### Caso 2: opencode cambió colores que no pedí
**Antes:** Navbar con fondo azul sólido de colores fijos.
**Después:**
```tsx
<header className="sticky top-0 z-50 border-b border-superficie bg-fondo/90 backdrop-blur">
```
**Explicación:** Yo solo pedí íconos y posición del texto. Los colores fijos rompían el tema claro y oscuro. Pedí restaurar las variables del tema y desde entonces escribo "no cambies colores" en cada prompt.

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