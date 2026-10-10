// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
// Adaptador necesario para Server Islands
  adapter: node({
    mode: 'standalone',
  }),
  env: {
    schema: {
      // Variable booleana en el servidor
      SHOW_BUY_BUTTON: envField.boolean({
        context: 'server',
        access: 'public',
        default: true,
      }),

      // Variable string accesible en el cliente (navegador)
      SCORE_API_ENDPOINT: envField.string({
        context: 'server',
        access: 'public',
        default: 'https://www.random.org/integers/?num=1&min=1&max=5&col=1&base=10&format=plain&rnd=new',
      }),

      // Secreto accesible únicamente en el servidor (tokens, contraseñas)
      API_SECRET_TOKEN: envField.string({
        context: 'server',
        access: 'secret',
        optional: true,
      }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});