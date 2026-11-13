// Catálogo de ejemplo para los wireframes. Precios, plazos y tarifas son de EJEMPLO:
// el Plan de Marketing pide confirmar inventario, márgenes y tarifas antes de publicar.

export type Linea = 'digital' | 'fisico';
export type Plataforma = 'playstation' | 'nintendo' | 'pc' | 'movil' | 'xbox';
export type CategoriaSlug = 'codigos-saldo-digital' | 'consolas' | 'videojuegos' | 'accesorios';

export interface Monto { valor: number; precio: number }
export interface Producto {
  slug: string;
  nombre: string;
  linea: Linea;
  categoria: CategoriaSlug;
  plataforma: Plataforma;
  sub?: 'ps5' | 'ps4' | 'switch' | 'switch-2' | 'series';
  precio?: number;            // productos de precio único
  montos?: Monto[];           // tarjetas con varios montos
  precioAntes?: number;       // aparece en Ofertas y liquidación
  condicion: 'nuevo' | 'seminuevo';
  disponibilidad: 'inmediata' | 'pocas' | 'preventa';
  genero?: 'futbol' | 'indie' | 'aventura' | 'carreras' | 'accion' | 'educativo';
  tipo?: 'mando' | 'audifonos' | 'almacenamiento' | 'cable';
  resumen: string;
  compat?: string;            // restricción visible antes de pagar
  destacado?: boolean;
}

export const categorias: { slug: CategoriaSlug | 'ofertas'; nombre: string; corto: string; desc: string }[] = [
  { slug: 'codigos-saldo-digital', nombre: 'Códigos y saldo digital', corto: 'Códigos y saldo', desc: 'PSN, eShop, Xbox, Steam y suscripciones. Código en hasta 24 h.' },
  { slug: 'consolas', nombre: 'Consolas y hardware', corto: 'Consolas', desc: 'PlayStation, Nintendo Switch y Xbox con entrega a domicilio.' },
  { slug: 'videojuegos', nombre: 'Videojuegos físicos', corto: 'Videojuegos', desc: 'Títulos para PS5, PS4, Switch, Switch 2 y Xbox.' },
  { slug: 'accesorios', nombre: 'Accesorios y periféricos', corto: 'Accesorios', desc: 'Mandos, audífonos, cables y memorias.' },
  { slug: 'ofertas', nombre: 'Ofertas y liquidación', corto: 'Ofertas', desc: 'Descuentos de temporada y saldos en liquidación.' },
];

// Orden según peso en el buyer persona: PlayStation 40 %, Switch 20 %, PC 20 %, móvil 15 %, Xbox 5 %
export const plataformas: { id: Plataforma; nombre: string }[] = [
  { id: 'playstation', nombre: 'PlayStation' },
  { id: 'nintendo', nombre: 'Nintendo Switch' },
  { id: 'pc', nombre: 'PC' },
  { id: 'movil', nombre: 'Celular' },
  { id: 'xbox', nombre: 'Xbox' },
];

export const municipiosAMSS = [
  'San Salvador', 'Santa Tecla', 'Antiguo Cuscatlán', 'Soyapango', 'Mejicanos', 'San Marcos',
  'Ilopango', 'Apopa', 'Ayutuxtepeque', 'Cuscatancingo', 'Ciudad Delgado', 'Nejapa', 'San Martín', 'Tonacatepeque',
];

export const ENVIO_AMSS = 3.5; // tarifa de ejemplo, por confirmar

export const productos: Producto[] = [
  // ——— Códigos y saldo digital ———
  { slug: 'tarjeta-psn', nombre: 'Tarjeta PlayStation Network (USD)', linea: 'digital', categoria: 'codigos-saldo-digital', plataforma: 'playstation',
    montos: [{ valor: 10, precio: 11 }, { valor: 20, precio: 22 }, { valor: 50, precio: 54 }], condicion: 'nuevo', disponibilidad: 'inmediata', destacado: true,
    resumen: 'Saldo para la PlayStation Store. Sirve para juegos, complementos y PlayStation Plus.',
    compat: 'Solo para cuentas de PlayStation de Estados Unidos.' },
  { slug: 'tarjeta-eshop', nombre: 'Tarjeta Nintendo eShop (USD)', linea: 'digital', categoria: 'codigos-saldo-digital', plataforma: 'nintendo',
    montos: [{ valor: 10, precio: 11.25 }, { valor: 20, precio: 22.5 }, { valor: 50, precio: 55 }], condicion: 'nuevo', disponibilidad: 'inmediata', destacado: true,
    resumen: 'Saldo para la Nintendo eShop en Switch y Switch 2.',
    compat: 'Solo para cuentas Nintendo de Estados Unidos.' },
  { slug: 'tarjeta-xbox', nombre: 'Xbox Gift Card (USD)', linea: 'digital', categoria: 'codigos-saldo-digital', plataforma: 'xbox',
    montos: [{ valor: 10, precio: 11.25 }, { valor: 25, precio: 27.5 }, { valor: 50, precio: 54.5 }], condicion: 'nuevo', disponibilidad: 'inmediata',
    resumen: 'Saldo para Microsoft Store en Xbox y PC.', compat: 'Solo para cuentas Microsoft de Estados Unidos.' },
  { slug: 'steam-wallet', nombre: 'Steam Wallet (USD)', linea: 'digital', categoria: 'codigos-saldo-digital', plataforma: 'pc',
    montos: [{ valor: 20, precio: 22.5 }, { valor: 50, precio: 55 }], condicion: 'nuevo', disponibilidad: 'inmediata', destacado: true,
    resumen: 'Saldo para comprar juegos en Steam.', compat: 'Se acredita en dólares. Revisa la moneda de tu cuenta de Steam.' },
  { slug: 'tarjeta-google-play', nombre: 'Tarjeta Google Play (USD)', linea: 'digital', categoria: 'codigos-saldo-digital', plataforma: 'movil',
    montos: [{ valor: 10, precio: 11.25 }, { valor: 25, precio: 27.75 }], condicion: 'nuevo', disponibilidad: 'inmediata',
    resumen: 'Saldo para juegos y compras dentro de apps en Android.', compat: 'Solo para cuentas de Google de Estados Unidos.' },
  { slug: 'playstation-plus-essential-3-meses', nombre: 'PlayStation Plus Essential 3 meses', linea: 'digital', categoria: 'codigos-saldo-digital', plataforma: 'playstation',
    precio: 27.5, condicion: 'nuevo', disponibilidad: 'inmediata', resumen: 'Suscripción para jugar en línea y recibir juegos mensuales.', compat: 'Solo para cuentas de PlayStation de Estados Unidos.' },
  { slug: 'xbox-game-pass-ultimate-1-mes', nombre: 'Xbox Game Pass Ultimate 1 mes', linea: 'digital', categoria: 'codigos-saldo-digital', plataforma: 'xbox',
    precio: 21, precioAntes: 23.5, condicion: 'nuevo', disponibilidad: 'inmediata', resumen: 'Catálogo de juegos en Xbox, PC y la nube.', compat: 'Solo para cuentas Microsoft de Estados Unidos.' },

  // ——— Consolas y hardware ———
  { slug: 'playstation-5-slim', nombre: 'PlayStation 5 Slim (lector de discos)', linea: 'fisico', categoria: 'consolas', plataforma: 'playstation', sub: 'ps5',
    precio: 549, condicion: 'nuevo', disponibilidad: 'inmediata', destacado: true, resumen: 'Consola PS5 Slim de 1 TB con un mando DualSense.' },
  { slug: 'nintendo-switch-2', nombre: 'Nintendo Switch 2', linea: 'fisico', categoria: 'consolas', plataforma: 'nintendo', sub: 'switch-2',
    precio: 499, condicion: 'nuevo', disponibilidad: 'pocas', destacado: true, resumen: 'Consola Nintendo Switch 2 con Joy-Con 2.' },
  { slug: 'nintendo-switch-oled', nombre: 'Nintendo Switch OLED', linea: 'fisico', categoria: 'consolas', plataforma: 'nintendo', sub: 'switch',
    precio: 359, precioAntes: 389, condicion: 'nuevo', disponibilidad: 'inmediata', resumen: 'Switch con pantalla OLED de 7 pulgadas.' },
  { slug: 'xbox-series-s', nombre: 'Xbox Series S 512 GB', linea: 'fisico', categoria: 'consolas', plataforma: 'xbox', sub: 'series',
    precio: 379, condicion: 'nuevo', disponibilidad: 'inmediata', resumen: 'Consola Xbox totalmente digital.' },
  { slug: 'playstation-4-slim-seminueva', nombre: 'PlayStation 4 Slim 1 TB (seminueva)', linea: 'fisico', categoria: 'consolas', plataforma: 'playstation', sub: 'ps4',
    precio: 229, precioAntes: 259, condicion: 'seminuevo', disponibilidad: 'pocas', resumen: 'Revisada y probada. Incluye un mando.' },

  // ——— Videojuegos físicos ———
  { slug: 'ea-sports-fc-26-ps5', nombre: 'EA Sports FC 26 (PS5)', linea: 'fisico', categoria: 'videojuegos', plataforma: 'playstation', sub: 'ps5', genero: 'futbol',
    precio: 69.99, condicion: 'nuevo', disponibilidad: 'inmediata', destacado: true, resumen: 'Edición estándar en disco para PS5.' },
  { slug: 'marvels-spider-man-2-ps5', nombre: "Marvel's Spider-Man 2 (PS5)", linea: 'fisico', categoria: 'videojuegos', plataforma: 'playstation', sub: 'ps5', genero: 'accion',
    precio: 49.99, precioAntes: 69.99, condicion: 'nuevo', disponibilidad: 'inmediata', resumen: 'Edición estándar en disco para PS5.' },
  { slug: 'gran-turismo-7-ps4', nombre: 'Gran Turismo 7 (PS4)', linea: 'fisico', categoria: 'videojuegos', plataforma: 'playstation', sub: 'ps4', genero: 'carreras',
    precio: 39.99, condicion: 'seminuevo', disponibilidad: 'inmediata', resumen: 'Disco revisado, con caja original.' },
  { slug: 'mario-kart-world-switch-2', nombre: 'Mario Kart World (Switch 2)', linea: 'fisico', categoria: 'videojuegos', plataforma: 'nintendo', sub: 'switch-2', genero: 'carreras',
    precio: 79.99, condicion: 'nuevo', disponibilidad: 'pocas', destacado: true, resumen: 'Cartucho para Nintendo Switch 2.' },
  { slug: 'zelda-tears-of-the-kingdom-switch', nombre: 'Zelda: Tears of the Kingdom (Switch)', linea: 'fisico', categoria: 'videojuegos', plataforma: 'nintendo', sub: 'switch', genero: 'aventura',
    precio: 64.99, condicion: 'nuevo', disponibilidad: 'inmediata', resumen: 'Cartucho para Nintendo Switch. Compatible con Switch 2.' },
  { slug: 'hollow-knight-switch', nombre: 'Hollow Knight (Switch)', linea: 'fisico', categoria: 'videojuegos', plataforma: 'nintendo', sub: 'switch', genero: 'indie',
    precio: 34.99, condicion: 'nuevo', disponibilidad: 'inmediata', resumen: 'Edición física para Nintendo Switch.' },
  { slug: 'forza-horizon-5-xbox', nombre: 'Forza Horizon 5 (Xbox)', linea: 'fisico', categoria: 'videojuegos', plataforma: 'xbox', sub: 'series', genero: 'carreras',
    precio: 39.99, condicion: 'nuevo', disponibilidad: 'inmediata', resumen: 'Disco para Xbox Series X y Xbox One.' },
  { slug: 'ea-sports-fc-26-switch', nombre: 'EA Sports FC 26 (Switch)', linea: 'fisico', categoria: 'videojuegos', plataforma: 'nintendo', sub: 'switch', genero: 'futbol',
    precio: 59.99, condicion: 'nuevo', disponibilidad: 'preventa', resumen: 'Cartucho para Nintendo Switch.' },

  // ——— Accesorios y periféricos ———
  { slug: 'mando-dualsense-blanco', nombre: 'Mando DualSense blanco (PS5)', linea: 'fisico', categoria: 'accesorios', plataforma: 'playstation', sub: 'ps5', tipo: 'mando',
    precio: 74.99, condicion: 'nuevo', disponibilidad: 'inmediata', destacado: true, resumen: 'Mando inalámbrico oficial para PS5.' },
  { slug: 'mando-xbox-inalambrico', nombre: 'Mando inalámbrico Xbox', linea: 'fisico', categoria: 'accesorios', plataforma: 'xbox', sub: 'series', tipo: 'mando',
    precio: 64.99, condicion: 'nuevo', disponibilidad: 'inmediata', resumen: 'Para Xbox Series X|S, Xbox One y PC.' },
  { slug: 'mando-pro-switch-2', nombre: 'Mando Pro Nintendo Switch 2', linea: 'fisico', categoria: 'accesorios', plataforma: 'nintendo', sub: 'switch-2', tipo: 'mando',
    precio: 89.99, condicion: 'nuevo', disponibilidad: 'pocas', resumen: 'Mando Pro oficial para Switch 2.' },
  { slug: 'audifonos-gamer-estereo', nombre: 'Audífonos gamer estéreo con micrófono', linea: 'fisico', categoria: 'accesorios', plataforma: 'pc', tipo: 'audifonos',
    precio: 44.99, precioAntes: 54.99, condicion: 'nuevo', disponibilidad: 'inmediata', resumen: 'Conector de 3.5 mm. Compatibles con PS5, Switch, Xbox y PC.' },
  { slug: 'memoria-microsd-256gb', nombre: 'Memoria microSD Express 256 GB', linea: 'fisico', categoria: 'accesorios', plataforma: 'nintendo', sub: 'switch-2', tipo: 'almacenamiento',
    precio: 54.99, condicion: 'nuevo', disponibilidad: 'inmediata', resumen: 'Compatible con Nintendo Switch 2.' },
  { slug: 'cable-usb-c-3m', nombre: 'Cable USB-C de carga 3 m', linea: 'fisico', categoria: 'accesorios', plataforma: 'playstation', tipo: 'cable',
    precio: 9.99, condicion: 'nuevo', disponibilidad: 'inmediata', resumen: 'Para cargar mandos mientras juegas.' },
];

export const getProducto = (slug: string) => productos.find((p) => p.slug === slug);
export const precioDesde = (p: Producto) => p.precio ?? Math.min(...(p.montos ?? []).map((m) => m.precio));
export const usd = (n: number) => `$${n.toFixed(2)}`;
export const nombrePlataforma = (id: Plataforma) => plataformas.find((x) => x.id === id)?.nombre ?? id;
export const nombreCategoria = (slug: string) => categorias.find((c) => c.slug === slug)?.nombre ?? slug;

// ——— Listados: arquitectura de URLs del keyword research (Investigación UX, p. 6–7) ———
export interface Listado {
  path: string;               // sin barras iniciales/finales
  titulo: string;
  intro: string;
  migas: { nombre: string; href?: string }[];
  filtro: (p: Producto) => boolean;
  keyword?: string;
  chips?: { nombre: string; href: string }[];  // navegación lateral por plataforma
}

const chipsJuegos = [
  { nombre: 'PlayStation', href: '/juegos-playstation/' },
  { nombre: 'PS5', href: '/juegos-playstation-5/' },
  { nombre: 'Switch', href: '/juegos-nintendo/switch/' },
  { nombre: 'Switch 2', href: '/juegos-nintendo/switch-2/' },
  { nombre: 'Xbox', href: '/juegos-xbox/' },
  { nombre: 'Fútbol', href: '/juegos-futbol/' },
  { nombre: 'Indie', href: '/juegos-indie/' },
];
const chipsMandos = [
  { nombre: 'Todos los mandos', href: '/mandos/' },
  { nombre: 'PlayStation', href: '/mandos-playstation/' },
  { nombre: 'Nintendo', href: '/mandos-nintendo/' },
  { nombre: 'Xbox', href: '/mandos-xbox/' },
];
const chipsCodigos = [
  { nombre: 'PlayStation', href: '/codigos-saldo-digital/#playstation' },
  { nombre: 'Nintendo', href: '/codigos-saldo-digital/#nintendo' },
  { nombre: 'PC / Steam', href: '/codigos-saldo-digital/#pc' },
  { nombre: 'Celular', href: '/codigos-saldo-digital/#movil' },
  { nombre: 'Xbox', href: '/codigos-saldo-digital/#xbox' },
];

const inicio = { nombre: 'Inicio', href: '/' };
const juegos = { nombre: 'Videojuegos físicos', href: '/videojuegos/' };
const acc = { nombre: 'Accesorios', href: '/accesorios/' };
const esJuego = (p: Producto) => p.categoria === 'videojuegos';
const esMando = (p: Producto) => p.tipo === 'mando';

export const listados: Listado[] = [
  { path: 'codigos-saldo-digital', titulo: 'Códigos y saldo digital', intro: 'Pagas, confirmamos tu pago y te enviamos el código por WhatsApp o correo en hasta 24 horas.',
    migas: [inicio, { nombre: 'Códigos y saldo digital' }], filtro: (p) => p.linea === 'digital', chips: chipsCodigos },
  { path: 'consolas', titulo: 'Consolas y hardware', intro: 'Consolas nuevas y seminuevas con entrega a domicilio en el Área Metropolitana de San Salvador.',
    migas: [inicio, { nombre: 'Consolas y hardware' }], filtro: (p) => p.categoria === 'consolas' },
  { path: 'videojuegos', titulo: 'Videojuegos físicos', intro: 'Discos y cartuchos para PlayStation, Nintendo Switch y Xbox.',
    migas: [inicio, { nombre: 'Videojuegos físicos' }], filtro: esJuego, chips: chipsJuegos },
  { path: 'accesorios', titulo: 'Accesorios y periféricos', intro: 'Mandos, audífonos, cables y memorias para tu consola o PC.',
    migas: [inicio, { nombre: 'Accesorios y periféricos' }], filtro: (p) => p.categoria === 'accesorios', chips: chipsMandos },
  { path: 'ofertas', titulo: 'Ofertas y liquidación', intro: 'Descuentos de temporada y saldos en liquidación. El precio que ves es el precio final.',
    migas: [inicio, { nombre: 'Ofertas y liquidación' }], filtro: (p) => p.precioAntes !== undefined },

  { path: 'juegos-playstation', titulo: 'Juegos PlayStation', keyword: 'juegos playstation', intro: 'Juegos en disco para PS5 y PS4.',
    migas: [inicio, juegos, { nombre: 'PlayStation' }], filtro: (p) => esJuego(p) && p.plataforma === 'playstation', chips: chipsJuegos },
  { path: 'juegos-playstation-5', titulo: 'Juegos PlayStation 5', keyword: 'juegos playstation 5', intro: 'Juegos en disco para PS5.',
    migas: [inicio, juegos, { nombre: 'PlayStation', href: '/juegos-playstation/' }, { nombre: 'PS5' }], filtro: (p) => esJuego(p) && p.sub === 'ps5', chips: chipsJuegos },
  { path: 'juegos-nintendo', titulo: 'Juegos Nintendo', keyword: 'juegos nintendo', intro: 'Cartuchos para Nintendo Switch y Switch 2.',
    migas: [inicio, juegos, { nombre: 'Nintendo' }], filtro: (p) => esJuego(p) && p.plataforma === 'nintendo', chips: chipsJuegos },
  { path: 'juegos-nintendo/switch', titulo: 'Juegos Nintendo Switch', keyword: 'juegos nintendo switch', intro: 'Cartuchos para Nintendo Switch. La mayoría también funcionan en Switch 2.',
    migas: [inicio, juegos, { nombre: 'Nintendo', href: '/juegos-nintendo/' }, { nombre: 'Switch' }], filtro: (p) => esJuego(p) && p.sub === 'switch', chips: chipsJuegos },
  { path: 'juegos-nintendo/switch-2', titulo: 'Juegos Nintendo Switch 2', keyword: 'juegos nintendo switch 2', intro: 'Cartuchos exclusivos para Nintendo Switch 2.',
    migas: [inicio, juegos, { nombre: 'Nintendo', href: '/juegos-nintendo/' }, { nombre: 'Switch 2' }], filtro: (p) => esJuego(p) && p.sub === 'switch-2', chips: chipsJuegos },
  { path: 'juegos-xbox', titulo: 'Juegos Xbox', keyword: 'juegos xbox', intro: 'Juegos en disco para Xbox Series X y Xbox One.',
    migas: [inicio, juegos, { nombre: 'Xbox' }], filtro: (p) => esJuego(p) && p.plataforma === 'xbox', chips: chipsJuegos },
  { path: 'juegos-pc', titulo: 'Juegos PC', keyword: 'juegos pc', intro: 'Saldo de Steam y accesorios para jugar en PC.',
    migas: [inicio, { nombre: 'PC' }], filtro: (p) => p.plataforma === 'pc' },
  { path: 'juegos-futbol', titulo: 'Juegos de fútbol', keyword: 'juegos futbol', intro: 'Juegos de fútbol para todas las consolas.',
    migas: [inicio, juegos, { nombre: 'Fútbol' }], filtro: (p) => p.genero === 'futbol', chips: chipsJuegos },
  { path: 'juegos-indie', titulo: 'Juegos indie', keyword: 'juegos indie', intro: 'Juegos de estudios independientes en formato físico.',
    migas: [inicio, juegos, { nombre: 'Indie' }], filtro: (p) => p.genero === 'indie', chips: chipsJuegos },

  { path: 'mandos', titulo: 'Mandos y controles', keyword: 'control', intro: 'Mandos inalámbricos oficiales para PlayStation, Nintendo y Xbox.',
    migas: [inicio, acc, { nombre: 'Mandos' }], filtro: esMando, chips: chipsMandos },
  { path: 'mandos-playstation', titulo: 'Mandos PlayStation 5', keyword: 'control playstation 5', intro: 'Mandos DualSense para PS5.',
    migas: [inicio, acc, { nombre: 'Mandos', href: '/mandos/' }, { nombre: 'PlayStation' }], filtro: (p) => esMando(p) && p.plataforma === 'playstation', chips: chipsMandos },
  { path: 'mandos-nintendo', titulo: 'Mandos Nintendo Switch', keyword: 'control nintendo switch', intro: 'Mandos Pro y Joy-Con para Switch y Switch 2.',
    migas: [inicio, acc, { nombre: 'Mandos', href: '/mandos/' }, { nombre: 'Nintendo' }], filtro: (p) => esMando(p) && p.plataforma === 'nintendo', chips: chipsMandos },
  { path: 'mandos-xbox', titulo: 'Mandos Xbox Series S', keyword: 'control xbox series s', intro: 'Mandos inalámbricos para Xbox Series X|S y PC.',
    migas: [inicio, acc, { nombre: 'Mandos', href: '/mandos/' }, { nombre: 'Xbox' }], filtro: (p) => esMando(p) && p.plataforma === 'xbox', chips: chipsMandos },
];

// Contacto: datos por confirmar (Plan de Marketing, "Datos que deben confirmarse")
export const contacto = {
  whatsapp: '7000-0000',
  horario: 'Lunes a sábado, 9:00 a 19:00',
  correo: 'hola@gamecornerstore.com',
};
