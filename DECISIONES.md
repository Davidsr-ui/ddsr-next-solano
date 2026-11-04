# Decisiones: DDSR

Captura de la creación del proyecto: `evidencias/creacion-proyecto.png`

## 1. Configuración del proyecto

| Opción elegida | Alternativa descartada | Justificación |
|---|---|---|
| TypeScript | JavaScript | Defino el tipo `Producto` (precio, talla, slug) una vez. El editor avisa si `ProductCard` recibe un dato mal escrito. |
| Tailwind CSS | CSS Modules, Bootstrap | La paleta azul de DDSR se define una vez en el tema. `md:` y `lg:` resuelven el responsive sin CSS aparte. |
| Carpeta `src/` | Código en la raíz | Separa `app`, `components` y `data` de los archivos de configuración. Por eso no usé los "recommended defaults". |
| App Router | Pages Router | Cada carpeta de `app/` es una ruta y los componentes son Server Components por defecto, con menos JavaScript en el navegador. |
| ESLint | None, Biome | Lo pide el enunciado y detecta errores antes del `build`. |
| Sin React Compiler | Con React Compiler | DDSR es casi estático; solo el menú y el tema son interactivos. |
| Sin Cache Components | Con Cache Components | Mi catálogo es un archivo local que no cambia. |
| Sin AGENTS.md | Con AGENTS.md | Prefiero registrar el uso de IA en `BITACORA_IA.md`. |

## 2. Estructura (1.3)

- **`app/layout.tsx`:** envuelve todas las páginas. Contiene `<html>`, `<body>`, Navbar, Footer y la fuente.
- **`app/page.tsx`:** es la página de la ruta `/`.
- **`public/`:** archivos estáticos como el logo y las fotos, servidos desde la raíz (`/img/...`).
- **`next.config.ts`:** configuración de Next.js. No lo modifiqué porque todas mis imágenes son locales.
- **`dev`:** servidor de desarrollo. **`build`:** compila para producción. **`start`:** ejecuta lo compilado.

## 3. Next.js frente a una SPA con Vite (1.4)

- **SEO:** Google lee de inmediato el título y el contenido de `/productos/camiseta-run`. En una SPA recibiría un HTML vacío hasta que cargue el JavaScript.
- **Servidor y rendimiento:** el HTML llega armado y solo el Navbar y el botón de tema envían JavaScript. Ayuda en celulares con conexión lenta.

## 4. Rutas (2.4)

| Decisión | Elegida | Justificación |
|---|---|---|
| Layout anidado en `/productos` | No | Listado y detalle comparten el layout raíz y no hay submenú propio. Sería un archivo extra sin cambio visible. |
| Route groups `(marketing)` | No | Son solo 7 páginas con el mismo layout. Los grupos sirven para layouts distintos, que aquí no necesito. |
| Datos | `src/data/productos.ts` | Con 6 productos fijos, una base de datos sería innecesaria. |
| Ruta dinámica | `[slug]` con `notFound()` | Si el slug no existe, muestra la 404. En Next 15 o superior, `params` es una Promise y se usa con `await`. |

## 5. Client y Server Components (3.2)

`Navbar` lleva `"use client"` porque usa `usePathname` (lee la URL del navegador) y `useState` (abre el menú). `ThemeToggle` también, porque usa `localStorage`.
El resto (Hero, tarjetas, Footer, formulario) solo muestra contenido, sin estado ni eventos, así que se queda en el servidor y envía menos JavaScript.

## 6. Experimento `Link` y `<a>` (3.4)

Capturas: `evidencias/network-link.png` y `evidencias/network-a.png`

- **`Link`:** navega sin recargar; Network muestra solo los datos de la ruta nueva.
- **`<a>`:** recarga el documento completo y todos los recursos.
- **Conclusión:** todos mis enlaces internos usan `Link`.

> Completar con lo observado en mis capturas.

## 7. Estilos (4.2)

Uso Tailwind con colores definidos una sola vez en `globals.css`.

| Token | Color (oscuro) | Uso |
|---|---|---|
| `fondo` | #0A0A0A | Fondo |
| `superficie` | #2C2F3B | Tarjetas y footer |
| `texto` | #E8E8E8 | Texto |
| `primario` | #1F70C1 | Botones |
| `azul-oscuro`, `azul-claro` | Degradado | Acentos |

El tema claro usa los mismos nombres de variable, así que las clases cambian solas con el botón de tema (`ThemeToggle`, que guarda la elección en `localStorage`).

## 8. `next/image` y `next/font` (4.3)

- **`next/image`:** optimiza el tamaño, carga de forma perezosa y reserva espacio para evitar saltos. El hero usa `priority`.
- **`next/font`:** descarga Barlow en el build y la sirve desde mi sitio, sin parpadeo de texto.

## 9. Animación (4.5)

Las tarjetas se elevan con una sombra azul al pasar el cursor. Indica que son clicables y refuerza la identidad visual.

## 10. Otras decisiones

| Decisión | Justificación |
|---|---|
| Hero tipo `banner` con imagen horizontal | Mi foto vertical se recortaba con `object-cover`. Generé una versión horizontal. |
| Capa negra uniforme sobre el hero | Un degradado hacia el fondo lavaba la foto en el tema claro. |
| Íconos SVG inline | Evito instalar una librería para pocos íconos. |
| Mapa con `<iframe>` | No necesita API key. `next/image` no aplica porque no es una imagen. |
| Rutas de `public/` en minúscula | Vercel (Linux) distingue mayúsculas; Windows no. |

## 11. Responsive (4.4)

Capturas de Inicio y Productos en `evidencias/`: `inicio-375.png`, `inicio-768.png`, `inicio-1280.png`, `productos-375.png`, `productos-768.png`, `productos-1280.png`.