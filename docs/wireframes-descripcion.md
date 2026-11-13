# Wireframes · texto para la Investigación UX

> Reemplaza el contenido actual de la sección **"Wireframes" (p. 10)** del documento `InvestigacionUX.pdf`, que hoy tiene texto de otro proyecto (Emprendedor, Mentor, TAM SAM SOM). Las capturas están en `docs/capturas/`, en versión móvil y de escritorio.
>
> Correcciones aparte en el mismo documento: el título "Resultados de testeso" (p. 9, debe decir "testeo") y el error "Playstation Newtork" en la tabla de categorías (p. 5).

---

## Wireframes

Los wireframes de Game Corner Store se construyeron como un prototipo navegable de mediana fidelidad, diseñado primero para celular y adaptado a escritorio. Se priorizó el celular porque el buyer persona descubre la tienda principalmente en Instagram (35 %) y TikTok (30 %). El prototipo aplica los lineamientos visuales del sistema "Cartucho" e incluye fotografías de producto y logotipos de plataformas y medios de pago, tomados de Wikimedia Commons y del sitio oficial de Wompi (créditos en `/mapa/#creditos`). Un botón en la franja superior permite alternar con la vista de wireframe sin fotos. Los datos que aún deben confirmarse, como tarifas de envío, horarios de atención y métodos de pago habilitados, se señalan en pantalla con la etiqueta "por confirmar".

El prototipo reúne 15 pantallas que cubren el flujo de navegación principal definido en la sección anterior, desde el ingreso del usuario hasta la confirmación o el rechazo del pago, para ambas líneas de negocio.

### Pantallas y decisiones de diseño

**1. Inicio.** Presenta la promesa de la tienda ("Recargas, juegos y consolas con precio final") y una franja fija con los tres diferenciadores: precio final en dólares, pago con tarjeta local y códigos en hasta 24 horas. Incluye un módulo de "Recarga rápida" con las tarjetas más buscadas (PlayStation, Nintendo eShop, Steam, Google Play y Xbox). Este módulo permite llegar a la ficha de la tarjeta PSN en un solo clic, lo que cumple la regla de los tres clics. Debajo se muestran las cinco categorías del árbol del catálogo, accesos por plataforma ordenados según el peso del buyer persona y una sección de confianza. Las reseñas aparecen como ejemplo y se publicarán solo cuando sean reales y autorizadas, en línea con las reglas de comunicación del Plan de Marketing.

**2. Códigos y saldo digital.** Agrupa las tarjetas por plataforma y muestra el distintivo de entrega en hasta 24 horas desde la parte superior de la categoría, para que el plazo se entienda antes de elegir un producto.

**3. Listado por plataforma.** Una sola plantilla genera todas las URLs definidas en el keyword research (`/juegos-playstation-5/`, `/juegos-nintendo/switch/`, `/juegos-nintendo/switch-2/`, `/mandos-xbox/`, entre otras). Ofrece filtros por plataforma, rango de precio en dólares, condición y disponibilidad inmediata. En celular los filtros se abren con un botón; en escritorio quedan en una barra lateral.

**4. Consolas y accesorios, y 5. Ofertas y liquidación.** Corresponden a la línea física. Indican la condición del producto (nuevo o seminuevo), la disponibilidad y, en el caso de las ofertas, el precio anterior tachado junto al precio final.

**6. Ficha de producto digital (tarjeta PlayStation Network).** Es la pantalla central de la tarea evaluada en el testeo. El usuario elige el monto ($10, $20 o $50) y el precio final se actualiza al instante. Antes de comprar, una alerta indica que el código es solo para cuentas de Estados Unidos. La ficha también muestra los dos canales de recepción, WhatsApp y correo. Siguiendo los hallazgos del testeo, el distintivo "Recibes tu código en hasta 24 h por WhatsApp o correo" está inmediatamente debajo del botón "Agregar al carrito", y justo después aparecen los logos de Wompi y Banco Agrícola. Se agregó además el compromiso de reposición del código si no funciona.

**7. Ficha de producto físico (PlayStation 5).** Muestra la disponibilidad e incluye un verificador de cobertura: el usuario elige su municipio y la pantalla confirma si se entrega ahí. Indica desde la ficha que el envío dentro del Área Metropolitana de San Salvador se suma en el carrito, para evitar sorpresas al pagar.

**8. Búsqueda.** Ofrece resultados y búsquedas sugeridas. Si no hay resultados, invita a consultar por WhatsApp en lugar de terminar en una página vacía.

**9. Carrito transparente.** Desglosa subtotal, envío y una línea explícita de "Comisiones y cargos: $0.00", en respuesta a la principal molestia mencionada en las entrevistas: las tarifas adicionales en el pago.

**10. Checkout rápido.** Usa una versión más calmada del sistema visual (sin menú de categorías, sin sombras fuertes) para transmitir seguridad al pedir datos. Las secciones se adaptan al tipo de pedido. En un pedido digital se pide elegir dónde recibir el código (WhatsApp, correo o ambos). En un pedido físico se piden la dirección y el municipio. El método de pago "Tarjeta de débito o crédito" muestra los logos de Wompi, Banco Agrícola, Visa y Mastercard. Para quien prefiera transferencia, hay un enlace directo al soporte por WhatsApp.

**11. Pasarela de pago.** Representa la salida temporal del sitio hacia la página de Wompi y explica al usuario que Game Corner Store no ve ni guarda los datos de su tarjeta. En el prototipo, unos controles permiten simular un pago aprobado o rechazado.

**12. Pago aprobado.** Confirma el número de pedido y el total pagado, y muestra una línea de tiempo del pedido. En la variante digital, el estado avanza de "Pago confirmado" a "Revisando tu pedido" y luego a "Código enviado". El plazo se comunica como "hasta 24 horas" y el tiempo habitual de 15 a 30 minutos aparece sin presentarse como garantía. En la variante física, la línea de tiempo indica que la entrega se coordina por WhatsApp.

**13. Pago rechazado.** Sigue la rama de error del flujo de navegación. Aclara que no se realizó ningún cargo y explica causas probables: fondos insuficientes, compras en línea desactivadas en la tarjeta de débito o verificación 3-D Secure incompleta. Ofrece tres salidas: intentar con otra tarjeta, elegir otro método de pago o pedir ayuda por WhatsApp.

**14. Ayuda.** Reúne en una sola página cómo comprar, entregas y plazos, métodos de pago, reposición de códigos, contacto y privacidad.

**15. Botón flotante de WhatsApp (presente en todas las pantallas).** Abre un chat con respuestas rápidas a las dudas más frecuentes, entre ellas "¿Aceptan transferencias?", que corresponde a la tercera tarea del testeo.

### Relación con los hallazgos de la investigación

| Hallazgo | Fuente | Respuesta en los wireframes |
|---|---|---|
| No tienen tarjeta internacional; usan débito local | Desk research, entrevistas | Sello "Paga seguro con tarjeta local" con logos de Wompi y Banco Agrícola en ficha, carrito, checkout y pie de página |
| Miedo a estafas en redes y Marketplace | Desk research, usuario 2 | Tienda con identidad propia, política de reposición visible y reseñas solo reales |
| Incertidumbre al esperar el código | Desk research, entrevistas | Distintivo de entrega bajo el botón y línea de tiempo del pedido |
| Tarifas adicionales en el pago | Usuario 1 | "Comisiones y cargos: $0.00" explícito y envío visible antes de pagar |
| Leyenda de entrega en el pie de página generaba dudas | Testeo | Distintivo movido debajo del botón de compra |
| Dudas sobre débito local | Testeo | Logos de Wompi y Banco Agrícola junto al botón |
| Contacto por WhatsApp | Entrevistas, testeo | Botón flotante en todas las pantallas y salidas a WhatsApp en estados de error |

### Recorrido de la tarea evaluada

Inicio → Códigos y saldo digital → Tarjeta PlayStation Network ($20) → Carrito → Checkout → Pasarela Wompi → Pago aprobado.

Desde el inicio, la ficha del producto queda a dos clics por la categoría, o a uno desde "Recarga rápida".
