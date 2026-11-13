// Imágenes del modo "con fotos". El manifiesto (imagenes.json) registra fuente y licencia de cada archivo
// en public/img/. Si el manifiesto o una entrada no existe, se muestra el marcador de posición del wireframe.
export interface Imagen { file: string; alt: string; fuente: string; autor?: string; licencia: string; fondo?: 'oscuro' }

const mods = import.meta.glob<Record<string, Imagen>>('./imagenes.json', { eager: true, import: 'default' });
export const imagenes: Record<string, Imagen> = Object.values(mods)[0] ?? {};
export const getImagen = (slug: string): Imagen | undefined => imagenes[slug];
