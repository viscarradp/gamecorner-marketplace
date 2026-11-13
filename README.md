# Game Corner Store · Wireframes navegables

Prototipo navegable (sin lógica de negocio) de **Game Corner Store**, una tienda en línea salvadoreña de videojuegos: recargas y códigos digitales con entrega en hasta 24 h, y consolas, juegos y accesorios con entrega a domicilio en el AMSS. Proyecto académico del curso de Comercio Electrónico y Mercadeo Digital (ESEN, 2026), construido con [Astro](https://astro.build).

## Correr

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # sitio estático en dist/
```

Empieza por **/mapa/**: índice de pantallas y recorridos del testeo.

El sitio abre **con fotos**; el botón de la franja superior alterna con la vista de wireframe (la preferencia se guarda en el navegador). Imágenes en `public/img/`, con fuente y licencia en `src/data/imagenes.json` y en `/mapa/#creditos`.

## Estructura

- `src/pages/` · pantallas (inicio, listados, fichas, carrito, checkout, pago, ayuda, mapa, lineamientos, direcciones)
- `src/pages/[...listado].astro` · todas las URLs del keyword research
- `src/data/catalogo.ts` · productos, categorías y rutas de ejemplo
- `src/styles/tokens.css` · tokens del sistema visual "Cartucho"
- `docs/lineamientos-visuales.md` · lineamientos visuales
- `docs/wireframes-descripcion.md` · texto para la sección Wireframes de la Investigación UX
- `docs/capturas/` · capturas de cada pantalla, en móvil y escritorio
- `public/logo/` · logotipo, versiones y favicon

## Notas

- Los precios, tarifas, horarios y el número de WhatsApp son **de ejemplo**; los que deben validarse aparecen marcados como "por confirmar". No hay pagos reales: la pasarela Wompi es una simulación.
- La base de conocimiento del proyecto (definición, investigación UX y plan de marketing) no se incluye en este repositorio.
- Imágenes: ver [`docs/creditos-imagenes.md`](docs/creditos-imagenes.md). Las marcas y logotipos pertenecen a sus titulares y se usan con fines ilustrativos académicos.
