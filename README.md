# 📚 DevBooks — Explorando Astro Moderno

Proyecto práctico para dominar la arquitectura moderna de **Astro** (Content Layer, Server Islands, View Transitions y tipado estricto de entorno), tomando como base la creación de un catálogo editorial de libros técnicos de desarrollo.

---

## 🎯 Conceptos Clave y Aprendizajes

Este repositorio implementa las características fundamentales de la arquitectura actual de Astro:

- **Content Layer:** Migración del sistema legacy hacia `src/content.config.ts` con `defineCollection`, esquemas de validación estrictos vía **Zod** y carga de Markdown con el loader `glob`.
- **Server Islands (`server:defer`):** Renderizado híbrido donde las páginas se prerenderizan de forma estática (`prerender = true`), delegando componentes dinámicos al servidor bajo demanda con estados de carga (`slot="fallback"`):
  - `BookScore.astro`: Simulación de puntuación obtenida en tiempo de ejecución.
  - `BuyButton.astro`: Adaptación geográfica del enlace de compra (España vs. USA) leyendo cabeceras HTTP (`X-Vercel-IP-Country`).
- **View Transitions (`ClientRouter`):** Transiciones de navegación suaves estilo SPA y persistencia visual de portadas entre páginas con `transition:name`.
- **Variables de Entorno Tipadas:** Validación y segmentación de variables de cliente y servidor mediante `envField` en `astro.config.mjs`.
- **Tailwind CSS v4 + Typography:** Integración directa mediante `@tailwindcss/vite` y formateo de Markdown generado por Astro con `@tailwindcss/typography` (`prose`).

---

## 📁 Estructura del Proyecto

```text
├── public/
│   └── (imágenes estáticas de portadas)
├── src/
│   ├── components/
│   │   ├── AmazonLogo.astro   # Icono vectorial de Amazon
│   │   ├── BookCard.astro     # Tarjeta de catálogo con proporciones 16:10
│   │   ├── BookScore.astro    # Server Island de valoración
│   │   ├── BuyButton.astro    # Server Island con detección de país
│   │   ├── Filters.astro      # Barra de filtrado por temas
│   │   ├── Footer.astro       # Pie de página editorial
│   │   ├── Header.astro       # Barra de navegación y buscador
│   │   └── Hero.astro         # Sección principal de bienvenida
│   ├── content/
│   │   └── books/             # Archivos Markdown (.md) con frontmatter tipado
│   ├── layouts/
│   │   └── Layout.astro       # Layout global con ClientRouter y estilos base
│   ├── pages/
│   │   ├── index.astro        # Listado principal con getCollection('books')
│   │   └── libro/
│   │       └── [id].astro     # Rutas estáticas dinámicas con getStaticPaths y render()
│   ├── styles/
│   │   └── global.css         # Importación de Tailwind v4 y plugins
│   └── content.config.ts      # Definición de colecciones y esquemas Zod
├── astro.config.mjs           # Adaptador de servidor (Node/Vercel) y variables de entorno
└── package.json
```

---

## 🛠️ Tecnologías

- **Framework:** [Astro](https://astro.build/)
- **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/) & [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
- **Validación de Datos:** [Zod](https://zod.dev/)
- **Gestor de Paquetes:** [pnpm](https://pnpm.io/)
- **Tipado:** [TypeScript](https://www.typescriptlang.org/)

---

## ⚙️ Variables de Entorno

El proyecto valida las variables mediante `envField` en `astro.config.mjs`. Crea un archivo `.env` en la raíz del proyecto:

```env
# Define si se muestra o no el botón de compra en el servidor
SHOW_BUY_BUTTON=true
```

---

## 🚀 Instalación y Uso

1. **Instalar dependencias:**
   ```bash
   pnpm install
   ```

2. **Generar tipos del Content Layer y Entorno:**
   ```bash
   pnpm astro sync
   ```

3. **Iniciar servidor en desarrollo:**
   ```bash
   pnpm dev
   ```
   Disponible en [http://localhost:4321](http://localhost:4321).

4. **Compilar y previsualizar producción:**
   ```bash
   pnpm build
   pnpm preview
   ```

---