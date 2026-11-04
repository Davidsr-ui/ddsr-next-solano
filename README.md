# DDSR: Tienda de ropa deportiva

Sitio web corporativo de **DDSR**, una tienda de prendas deportivas, desarrollado con **Next.js (App Router)**, TypeScript y Tailwind CSS.

- **Autor:** Daniel David Solano Ramos
- **Repositorio:** <https://github.com/Davidsr-ui/ddsr-next-solano>
- **Sitio desplegado:** <https://ddsr-next-solano.vercel.app/>

## Tecnologías

| Tecnología | Uso |
|---|---|
| Next.js 16 (App Router) | Enrutamiento basado en archivos, Server Components y metadata |
| TypeScript | Tipado de datos y props |
| Tailwind CSS v4 | Estilos y tema claro/oscuro definido una sola vez en `globals.css` |
| next/image y next/font | Imágenes optimizadas y tipografía Barlow |

## Instalación y ejecución

Requisitos: Node.js 20 o superior y npm.

```bash
git clone <https://github.com/Davidsr-ui/ddsr-next-solano.git>
cd ddsr-next-solano
npm install
npm run dev
```

Abrir http://localhost:3000 en el navegador.

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Compila el proyecto para producción |
| `npm run start` | Ejecuta la versión compilada |
| `npm run lint` | Revisa el código con ESLint |

## Rutas

| Ruta | Página |
|---|---|
| `/` | Inicio |
| `/nosotros` | Nosotros |
| `/servicios` | Servicios |
| `/productos` | Listado de productos |
| `/productos/[slug]` | Detalle de producto (ruta dinámica; usa `notFound()` si el slug no existe) |
| `/marcas` | Marcas |
| `/contacto` | Contacto |
| cualquier otra | Página 404 personalizada |

## Estructura del proyecto

```
src/
├─ app/            rutas, layout raíz, 404 y estilos globales
├─ components/     componentes reutilizables
└─ data/           datos de productos y marcas
public/img/        logo e imágenes del sitio
evidencias/        capturas de build, Network y responsive
```

## Árbol de componentes

(S) = Server Component, (C) = Client Component

```
RootLayout (S)
├─ Navbar (C)            usa usePathname y useState
│  └─ ThemeToggle (C)    usa estado y localStorage
├─ <main> {children}
│  ├─ Inicio:      Hero (S), SectionTitle (S), ProductCard (S)
│  ├─ Nosotros:    SectionTitle (S), IconCard (S), GaleriaCard (S)
│  ├─ Servicios:   SectionTitle (S), ServicioCard (S)
│  ├─ Productos:   SectionTitle (S), ProductCard (S)
│  ├─ Marcas:      SectionTitle (S), MarcaCard (S)
│  └─ Contacto:    SectionTitle (S), ContactForm (S)
├─ Footer (S)
└─ WhatsAppButton (S)
```

## Documentación del proyecto

- [DECISIONES.md](./DECISIONES.md): decisiones de configuración, rutas, estilos y justificaciones
- [BITACORA_IA.md](./BITACORA_IA.md): registro del uso de IA, errores detectados y reflexión
- [evidencias/](./evidencias): capturas del build, de la pestaña Network y del diseño responsive
