# 📚 DevBooks — Biblioteca técnica en español

Catálogo curado de libros técnicos en español. El sitio es un **escaparate**: muestra el catálogo y
presenta cada título para que el visitante decida qué leer después. **Aquí no se vende** — no hay
carrito, ni precios, ni proceso de pago.

Cada ficha declara de antemano dos cosas: qué contiene (descripción en lenguaje llano) y cuánto
cuesta en tiempo de lectura (`readtime`). Esa segunda es la promesa diferencial del producto.

## 🎨 El mundo visual

El frontend está diseñado como la **plancha de un álbum de línea clara**: un papel azul-blanco, un
único grosor de tinta (`2px`) para todo lo que está dibujado, rellenos planos (cielo, arena, verde)
y ni una sola sombra, degradado o desenfoque. El rojo aparece **una vez por plancha** y nombra la
acción que esa pantalla necesita.

El sistema completo está documentado en [`DESIGN.md`](DESIGN.md), con sus tokens, reglas con nombre
y componentes. El contexto de producto, en [`PRODUCT.md`](PRODUCT.md).

## 🏗️ Arquitectura

Astro con **Content Layer**: el catálogo son archivos Markdown y el build clasifica cada título.

```text
├── src/
│   ├── components/            # Las piezas del álbum
│   │   ├── Banda.astro        # Franja de registro (cabecera impresa)
│   │   ├── Teclas.astro       # Filtro por materia: enlaces reales, sin JS
│   │   ├── Buscar.astro       # Búsqueda: el único JavaScript del sitio
│   │   ├── Escena.astro       # El estante dibujado a una sola línea (SVG)
│   │   ├── Bocadillo.astro    # Lo que alguien dice, con cola trazada
│   │   ├── Caja.astro         # La voz del narrador, en versalitas
│   │   ├── Panel.astro        # La viñeta de un título en el catálogo
│   │   ├── Cubierta.astro     # Portada real, o placa tipográfica dibujada
│   │   ├── Hueco.astro        # El siguiente hueco del catálogo, sin inventar
│   │   ├── Flecha.astro       # El único icono, a un trazo
│   │   └── Pie.astro          # Franja final
│   ├── content/
│   │   ├── books/             # Un .md por libro (+ _plantilla.md.example)
│   │   └── temas.ts           # Fuente única de las materias del catálogo
│   ├── layouts/Layout.astro   # Documento base; sin ClientRouter a propósito
│   ├── pages/
│   │   ├── index.astro              # La plancha del catálogo completo
│   │   ├── materia/[tema].astro     # El catálogo acotado por materia
│   │   ├── libro/[id].astro         # La ficha de un título
│   │   └── 404.astro                # Plancha que no está en el álbum
│   ├── styles/global.css      # Tokens, base, superficies y piezas del mundo
│   └── content.config.ts      # Esquema Zod de la colección
├── public/fonts/              # Archivo y Archivo Black, auto-hospedadas
├── DESIGN.md                  # El sistema de diseño, documentado del build
└── PRODUCT.md                 # La verdad de producto
```

### JavaScript en el cliente

Prácticamente no hay. Lo único que se envía es el filtro de búsqueda de `Buscar.astro`, en línea y
sin dependencias: nace **oculto** y solo el script lo revela, de modo que sin JS no queda un control
muerto a la vista. Acotar el catálogo sigue siendo cosa de las **teclas de materia**, que son rutas
estáticas (`/materia/<slug>`), enlazables, indexables y navegables con teclado, sin una línea de JS.

Las fuentes van auto-hospedadas en `public/fonts/`: el primer viewport no depende de
`fonts.googleapis.com` ni de ningún tercero.

## ⚙️ Añadir un título

1. Copia `src/content/books/_plantilla.md.example` a `src/content/books/mi-libro.md`.
2. Rellena el frontmatter: `title`, `author`, `readtime` (minutos), `tema`, `orden`, `description`.
   `img` es opcional: si falta, el panel dibuja una placa tipográfica en el color de su materia.
3. Si la revisa una persona, quita `borrador: true`.
4. `pnpm build`. El título aparece en el catálogo, en su materia y con su propia ficha.

Una materia nueva es una entrada en `src/content/temas.ts`: el esquema, las teclas y la ruta
estática salen de ahí.

## 🚀 Instalación y uso

1. **Instalar dependencias:**

   ```bash
   pnpm install
   ```

2. **Generar tipos del Content Layer:**

   ```bash
   pnpm astro sync
   ```

3. **Iniciar el servidor de desarrollo:**

   ```bash
   pnpm dev
   ```

   Disponible en [http://localhost:4321](http://localhost:4321).

4. **Compilar y previsualizar:**

   ```bash
   pnpm build
   pnpm preview
   ```

## 📝 Notas del cambio de frontend

Este frontend reemplaza al anterior catálogo de demostración. Se conservó la capa de contenido
(Markdown + Content Layer, ahora con `tema`, `orden` y `borrador`) y se retiró todo lo que
pertenecía a un producto que ya no existe:

- **Compra fuera.** Se eliminaron `BuyButton`, `AmazonLogo` y la llamada a la acción de compra: el
  escaparate no vende. Los enlaces `buy.spain` / `buy.usa` **siguen en el frontmatter como dato**,
  no se muestran.
- **Puntuación fuera.** `BookScore` mostraba una valoración aleatoria de una API externa: era un
  dato inventado, no una reseña.
- **View Transitions fuera.** `ClientRouter` se retiró porque el mundo de este frontend no tiene
  easing: el paso de plancha es un corte limpio, y eso ya lo hace la navegación del navegador.
- **Server Islands fuera.** Al desaparecer las islas diferidas, quedaron sin uso el adaptador de
  Node y las variables `SHOW_BUY_BUTTON` y `SCORE_API_ENDPOINT`. **Se han dejado tal cual** en
  `astro.config.mjs` para no cambiar el modelo de despliegue sin pedirlo: si quieres un build
  puramente estático, se pueden quitar el adaptador y las tres variables de entorno.
