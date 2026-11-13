# Lineamientos visuales · Game Corner Store

Sistema visual **"Cartucho"**. Versión 1.0, noviembre de 2026.
Versión navegable con componentes reales: `/lineamientos/` en el prototipo. Tokens: `src/styles/tokens.css`.

## 1. Concepto

Directo y con energía de cultura gamer, pero sin perder la confianza al momento de pagar. Toma referencias de las cajas de videojuegos y los manuales impresos: contraste fuerte, amarillo señal, sombras duras y etiquetas pixeladas solo en detalles.

**Atributos:** enérgica · directa · gamer · sin rodeos.

**Por qué esta dirección.** Se eligió entre tres propuestas (Mostrador, Cartucho, Azul cuscatleco). Cartucho habla el idioma del público de 16 a 30 años que llega desde TikTok e Instagram (65 % del peso de canales en el buyer persona). Además, los bloques negros y amarillos hacen muy visibles los dos elementos que el testeo volvió obligatorios: el botón de compra y el distintivo de entrega en hasta 24 h.

**Riesgo asumido y cómo se controla.** Tanto contraste puede restar seriedad al pagar. Por eso existe un **modo checkout "calmado"** (sección 8).

## 2. Principios

1. **El precio final manda.** El precio es el texto más grande después del nombre del producto. Nunca aparece un cargo que no se haya mostrado antes de pagar.
2. **Plazos claros, nunca "inmediato".** "Hasta 24 h" siempre visible debajo del botón de compra en productos digitales.
3. **Confianza visible.** Logos de Wompi y Banco Agrícola junto a cada acción de pago. WhatsApp a un toque en todas las pantallas.
4. **Energía en la tienda, calma en el pago.**
5. **Contenido real, no adornos.** Sin degradados, sin efectos de vidrio, sin emojis. La personalidad viene del contraste y del tono.

Origen de cada principio en la base de conocimiento:

| Principio | Fuente |
|---|---|
| 1 | Frustración del buyer persona: cargos ocultos. Entrevistas: "precios finales transparentes". |
| 2 | Reglas de comunicación del Plan de Marketing; flujo digital de la Definición del proyecto. |
| 3 | Resultados del testeo (Investigación UX, p. 9): logos de pago y botón flotante de WhatsApp. |
| 4 | Desk research: miedo a estafas en redes y Marketplace. |
| 5 | Pedido del equipo de evitar una estética genérica. |

## 2b. Logotipo

Isotipo de mando de videojuegos con los botones en cobalto, acompañado del logotipo "Game**Corner**" en Archivo 800 ("Corner" en cobalto, o en señal sobre fondo negro) y la etiqueta pixelada "Store". Archivos en `public/logo/`:

| Archivo | Uso |
|---|---|
| `logo-cartucho.svg` | Principal, sobre señal o blanco (encabezado, menú, checkout) |
| `logo-cartucho-dark.svg` | Negativo, sobre negro (pie de página) |
| `logo-mono.svg` | Una sola tinta (impresos, sellos) |
| `favicon-cartucho.svg` | Ícono del sitio y de acceso directo |

- Altura mínima del isotipo: 20 px en pantalla. Espacio libre alrededor: al menos la altura de un botón del mando.
- El isotipo usa puntas redondeadas: es la única excepción a la regla de íconos con terminaciones cuadradas.
- No cambiar los colores de los botones, no girarlo, no agregarle sombras ni contornos.
- A 16 px el favicon pierde detalle; conviene una versión simplificada para ese tamaño.

## 3. Color

| Nombre | Hex | Token | Uso |
|---|---|---|---|
| Negro | `#0E0E10` | `--c-ink` | Texto, botón primario, bordes, distintivo de entrega |
| Señal | `#FFD23F` | `--c-signal` | Header, selección, texto sobre negro |
| Cobalto | `#2949E6` | `--c-cobalt` | Enlaces, foco, sombra del botón primario |
| Blanco | `#FFFFFF` | `--c-white` | Tarjetas, formularios |
| Papel | `#F2F2EE` | `--c-paper` | Fondo de página |
| Papel 2 | `#E7E7E2` | `--c-paper-2` | Placeholders, separadores |
| Gris texto | `#5C5C63` | `--c-muted` | Texto secundario |
| Éxito | `#157A45` | `--c-success` | Pago aprobado, disponible, montos en $0.00 |
| Error | `#C62A1F` | `--c-error` | Pago rechazado, errores |
| WhatsApp | `#1A8048` | `--c-whatsapp` | Solo botones y enlaces de WhatsApp |

**Proporción aproximada:** papel y blanco 60 %, negro 25 %, señal 10 %, cobalto y estados 5 %.

**Contraste (WCAG 2.1, calculado):**

| Combinación | Ratio | Nivel |
|---|---|---|
| Negro sobre blanco | 19.3:1 | AAA |
| Negro sobre señal / señal sobre negro | 13.4:1 | AAA |
| Cobalto sobre blanco | 6.6:1 | AA |
| Gris texto sobre blanco | 6.6:1 | AA |
| Gris texto sobre papel | 5.9:1 | AA |
| Blanco sobre éxito | 5.4:1 | AA |
| Blanco sobre WhatsApp | 5.0:1 | AA |
| **Señal sobre blanco** | **1.4:1** | **Prohibido** |

## 4. Tipografía

| Familia | Pesos | Uso |
|---|---|---|
| **Archivo** | 800 | Titulares y precios |
| **IBM Plex Sans** | 400 / 600 / 700 | Texto, botones, formularios |
| **Silkscreen** | 400 | Solo etiquetas cortas en mayúsculas ("Código digital", "Oferta", "Preventa"). Máximo 3 palabras. Nunca en precios, botones, avisos ni texto que haya que leer con atención. |

Las tres son de Google Fonts y de uso libre.

| Token | Tamaño | Uso |
|---|---|---|
| `--t-3xl` | 36–56 px | Titular de portada |
| `--t-2xl` | 32 px (40 en escritorio) | H1 de página |
| `--t-xl` | 24 px | H2 de sección |
| `--t-lg` | 20 px | H3, precio en tarjeta |
| `--t-md` | 16 px | Texto base, botones y campos (evita el zoom automático en iOS) |
| `--t-sm` | 14 px | Texto secundario |
| `--t-xs` | 12 px | Metadatos, migas de pan |

## 5. Espaciado, retícula y forma

- Base de 4 px: 4, 8, 12, 16, 24, 32, 48, 64.
- Margen lateral de 16 px en móvil. Contenedor máximo de 1200 px.
- Puntos de quiebre: 480, 768, 900 y 1100 px. Diseño **móvil primero**.
- Esquinas siempre rectas (radio 0). Bordes de 2 px.
- Sombras duras sin desenfoque: 4–6 px desplazadas hacia abajo y a la derecha.
- Área táctil mínima de 44 × 44 px. Botones de 48 px de alto.

## 6. Iconografía e imágenes

- Íconos de trazo de 2 px con terminaciones cuadradas, de 20 a 24 px. Siempre acompañados de texto, salvo buscar, carrito, menú y cerrar.
- Fotografía de producto sobre fondo neutro. En los wireframes se usan bloques rayados como marcadores de posición.
- Logos de pago y de plataformas: solo los oficiales, con permiso de uso. En el wireframe son marcadores de posición.

## 7. Componentes

| Componente | Regla |
|---|---|
| **Botón primario** | Negro con texto señal y sombra cobalto de 4 px. Uno solo por pantalla. Al presionarlo, la sombra se "hunde". |
| **Botón secundario** | Blanco con borde negro. |
| **Botón WhatsApp** | Verde WhatsApp. Flotante en todas las pantallas de la tienda, abajo a la derecha. |
| **Distintivo de entrega** | **Inmediatamente debajo del botón de compra** (hallazgo del testeo). Digital: bloque negro, "Recibes tu código en hasta 24 h por WhatsApp o correo". Físico: bloque blanco, "Entrega a domicilio en el AMSS". |
| **Sello de pago** | Candado + "Paga seguro con tarjeta local" + logos de Wompi y Banco Agrícola. Va debajo del distintivo y en el pie de página. |
| **Tarjeta de producto** | Borde de 2 px y sombra dura. Etiqueta pixelada de plataforma, nombre, plazo o disponibilidad y precio final. Toda la tarjeta es clicable. |
| **Selector de monto** | Botones grandes ($10, $20, $50). El seleccionado se pinta en señal y se eleva. El precio se actualiza al instante. |
| **Chips** | Para plataformas y subcategorías. El activo es negro con texto señal. |
| **Alertas** | Información (cobalto), aviso (señal), éxito y error, con barra lateral de 8 px. |
| **Resumen de compra** | Desglose con "Comisiones y cargos: $0.00" explícito y el envío visible antes de pagar. |
| **Marcador "por confirmar"** | Exclusivo del wireframe. Señala datos que el Plan de Marketing pide validar: tarifas, horarios, métodos de pago y plazos de entrega física. |

## 8. Modo checkout ("calmado")

Se usa al pedir datos personales y de pago:

- Encabezado mínimo: volver, logo y "Pago seguro". Sin menú de categorías ni buscador.
- Paneles sin sombra dura y con borde suave de 1.5 px.
- Un solo botón primario: "Pagar $XX.XX con Wompi".
- Se mantienen el botón de WhatsApp, el distintivo de entrega y los logos de pago.

## 9. Tono de voz

Directo, cercano y en español salvadoreño neutro, tratando de **tú**. Frases cortas. Primero lo que importa: precio, plazo y qué pasa después.

| Situación | Sí | No |
|---|---|---|
| Plazo digital | Recibes tu código en hasta 24 h por WhatsApp o correo. | ¡Entrega inmediata! / Al instante |
| Plazo habitual | Normalmente tarda entre 15 y 30 minutos, pero no lo garantizamos. | Te llega en 15 minutos |
| Precio | $22.00 · Precio final. Sin cargos extra. | Desde $20 + comisión |
| Pago rechazado | Tu banco no aprobó el pago. No se te cobró nada. | Error 402: transacción fallida |
| Métodos de pago | Tarjetas de débito y crédito de bancos salvadoreños, vía Wompi. | Aceptamos todos los métodos de pago |
| Reseñas | Reseñas reales, publicadas con autorización. | Testimonios inventados o "verificados" sin prueba |

Estas reglas aplican las "Reglas de comunicación" del Plan de Marketing (p. 14).
