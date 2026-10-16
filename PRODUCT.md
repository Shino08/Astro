# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Programadores y diseñadores de software hispanohablantes que buscan lectura técnica en español
(perfil autodidacta o en transición de carrera; nivel inicial a intermedio). Llegan con una pregunta
concreta — "¿qué leo para entender esto?" — y hoy no tienen una referencia curada en español.

Situación de uso: escritorio durante la jornada de trabajo (evaluar un título) y móvil por la noche
(descubrir y decidir la próxima lectura). Consultan en ráfagas cortas, no leen el sitio de corrido.

## Product Purpose

Un catálogo editorial de libros técnicos en español. El sitio muestra el catálogo y presenta cada
título para que el visitante decida qué leer después.

Éxito significa que el visitante (a) entiende de un vistazo qué cubre cada libro y cuánto tiempo le
costará leerlo, y (b) o bien abre la ficha de un título, o bien reduce el catálogo a una lista corta
—por tema o por búsqueda— que se lleve consigo.

Este producto es un escaparate: **no vende**. No hay carrito, checkout, precios ni proceso de pago.

## Positioning

Una biblioteca técnica **en español**, curada por una persona y no agregada desde un catálogo de
tiendas. Cada título declara de antemano dos cosas que un buscador de tienda no da: qué contiene
(descripción en lenguaje llano) y cuánto cuesta en tiempo de lectura (campo `readtime`).

El vecino comparable es la tienda de libros o el motor de búsqueda: un resultado por título, sin
criterio de idioma ni nociones de esfuerzo. Lo que este producto puede afirmar y aquéllos no es la
selección: poco, en español, y con el coste de lectura explícito.

## Operating Context

- Contenido autorado en Markdown, un archivo por libro, con frontmatter validado por Zod.
- Carga vía Content Layer de Astro (`glob` loader) desde `src/content/books/`.
- Salida estática prerenderizada; el catálogo se regenera en cada build al añadir un `.md`.
- Autorar un libro nuevo = crear un archivo y su portada en `public/`. Sin panel de administración.
- El catálogo vive hoy con 2 títulos: el crecimiento del catálogo es parte del uso normal del producto.

## Capabilities and Constraints

Confirmado por código y por decisión del usuario:

- Listar el catálogo y presentar la ficha de cada libro (portada, autor, tiempo de lectura, descripción,
  contenido de la reseña).
- Filtrar y buscar dentro del catálogo: es la acción principal del visitante y debe funcionar de verdad,
  no ser decorativa.
- Campos de contenido en uso: `title`, `author`, `img`, `readtime`, `description`.
- `buy.spain` / `buy.usa` existen en el frontmatter y **se conservan como dato**, pero el producto ya no
  tiene compra: no se muestran como llamada a la acción.
- Fuera de alcance (no inventar): cuentas de usuario, listas guardadas, carrito, checkout, precios,
  puntuaciones o reseñas de lectores, disponibilidad.
- La puntuación aleatoria del demo anterior no es dato real y no debe reaparecer.
- Restricción técnica: `output` prerenderizado; JavaScript en el cliente sólo donde sea estrictamente
  necesario para que el sitio sea rápido.
- Deudas explícitas sin decidir: no hay campos de tema/etiqueta en el esquema (el filtrado por tema
  necesita una fuente de verdad en el contenido); no hay idioma secundario.
- Stack: ya resuelto por el repositorio (Astro + Tailwind v4). No se reabre.

## Brand Commitments

- Nombre: **DevBooks**. Voz en español, directa, de persona que recomienda y no de vendedor.
- Portadas reales de los libros como material de marca (existen en `public/`).
- La identidad visual del código actual (papel crema, tinta, verde teal) queda **explícitamente
  reemplazada**: el usuario pidió un mundo visual nuevo.

## Evidence on Hand

Real y citable:

- 2 libros con portada real y reseña propia: `public/aprendiendo-git.jpg`,
  `public/learning-typescript.jpg`, `src/content/books/aprendiendo_git.md`,
  `src/content/books/learning-typescript.md`.
- Descripción y tiempo de lectura autorados para ambos.

Ausencias que el trabajo futuro **no debe fabricar**:

- No hay testimonios, cifras de lectores, valoraciones, premios, precios, editoriales ni fechas.
- No hay más libros cargados que los dos anteriores.

## Product Principles

1. **Curaduría antes que volumen.** Pocos títulos con información útil superan a un catálogo largo sin
   criterio; cada entrada debe poder justificar su presencia.
2. **El coste de lectura se declara.** Tiempo y tema son parte de la promesa, no metadatos ocultos.
3. **Encontrar es la acción.** El filtrado y la búsqueda del catálogo son el trabajo real de la
   interfaz; cualquier cosa decorativa que los tape es un defecto.
4. **En español, sin disculpas.** El idioma y el contexto hispanohablante son la razón de ser del
   producto, no una traducción posterior.
5. **Estático por defecto.** El contenido crece añadiendo archivos; la velocidad y la accesibilidad se
   preservan por construcción, no por optimización a posteriori.

## Accessibility & Inclusion

Requisito confirmado por el usuario: accesibilidad básica sólida.

- Contraste AA (≥4.5:1 en texto de cuerpo; ≥3:1 en texto grande).
- Todo control operable con teclado, con foco visible.
- Texto alternativo en portadas; el estado del filtrado no puede depender sólo del color.
- El catálogo debe seguir siendo navegable sin JavaScript.
