// Carrito simulado para el wireframe: vive en sessionStorage del navegador.
// Si está vacío se usa el pedido de la tarea testeada (tarjeta PSN de $20) para que
// cualquier pantalla del flujo se pueda abrir directamente durante una presentación.
import { productos, getProducto, ENVIO_AMSS, type Producto } from '../data/catalogo';

export interface Item { slug: string; monto?: number; qty: number }
export interface Linea { item: Item; p: Producto; precio: number; subtotal: number; etiqueta: string }

const KEY = 'gcs-cart';
const DEMO: Item[] = [{ slug: 'tarjeta-psn', monto: 20, qty: 1 }];

function read(): Item[] | null {
  try { const raw = sessionStorage.getItem(KEY); return raw ? (JSON.parse(raw) as Item[]) : null; } catch { return null; }
}
function write(items: Item[]) {
  try { sessionStorage.setItem(KEY, JSON.stringify(items)); } catch { /* sin almacenamiento: el flujo sigue con el demo */ }
  document.dispatchEvent(new CustomEvent('cart:change'));
}

export function getItems(): { items: Item[]; demo: boolean } {
  const r = read();
  if (r === null) return { items: DEMO, demo: true };
  return { items: r, demo: false };
}

// Para checkout, pasarela y resultado del pago: nunca un pedido vacío ($0.00).
// Si el carrito quedó vacío (p. ej. tras un pago aprobado), se usa el pedido de ejemplo.
export function getOrderItems(): Item[] {
  const r = read();
  return r && r.length ? r : DEMO;
}

export function add(slug: string, monto?: number) {
  const items = read() ?? [];
  const found = items.find((i) => i.slug === slug && i.monto === monto);
  if (found) found.qty += 1; else items.push({ slug, monto, qty: 1 });
  write(items);
}
export function setQty(idx: number, qty: number) {
  const { items } = getItems();
  const copy = items.map((i) => ({ ...i }));
  if (qty <= 0) copy.splice(idx, 1); else copy[idx].qty = qty;
  write(copy);
}
export function clear() { write([]); }

export function lines(items: Item[]): Linea[] {
  return items.flatMap((item) => {
    const p = getProducto(item.slug);
    if (!p) return [];
    const precio = p.montos ? (p.montos.find((m) => m.valor === item.monto) ?? p.montos[0]).precio : (p.precio ?? 0);
    const etiqueta = p.montos ? `Monto: $${item.monto} USD` : p.condicion === 'seminuevo' ? 'Seminuevo' : 'Nuevo';
    return [{ item, p, precio, subtotal: precio * item.qty, etiqueta }];
  });
}

export function totals(ls: Linea[]) {
  const subtotal = ls.reduce((s, l) => s + l.subtotal, 0);
  const tieneFisico = ls.some((l) => l.p.linea === 'fisico');
  const tieneDigital = ls.some((l) => l.p.linea === 'digital');
  const envio = tieneFisico ? ENVIO_AMSS : 0;
  return { subtotal, envio, total: subtotal + envio, tieneFisico, tieneDigital, count: ls.reduce((s, l) => s + l.item.qty, 0) };
}

export const usd = (n: number) => `$${n.toFixed(2)}`;
export { productos };
