import { defineConfig } from 'astro/config';

export default defineConfig({
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  // Acepta cualquier Host (p. ej. el túnel de cloudflared) en `npm run dev` y `npm run preview`
  server: { allowedHosts: true },
});
