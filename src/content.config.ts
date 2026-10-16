import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { TEMA_SLUGS } from "./content/temas";

/**
 * Un archivo Markdown por libro. Añadir un título = añadir un `.md` en
 * `src/content/books/` y, si hay portada, su imagen en `public/`.
 */
const books = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/books" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    /** Portada en `public/`. Si falta, el panel dibuja una placa tipográfica. */
    img: z.string().optional(),
    /** Coste de lectura en minutos: la promesa diferencial del catálogo. */
    readtime: z.number().int().positive(),
    /** Materia del catálogo: gobierna el filtro y la ruta `/materia/<slug>`. */
    tema: z.enum(TEMA_SLUGS),
    /** Orden de curaduría: fija el catálogo y la paginación de la ficha. */
    orden: z.number().int().nonnegative(),
    description: z.string(),
    /** `true` mientras una persona no haya revisado la ficha. */
    borrador: z.boolean().default(false),
    /**
     * Enlaces de compra de afiliado. Se conservan como dato: el escaparate ya
     * no vende y ninguna vista los muestra.
     */
    buy: z
      .object({
        spain: z.string().url(),
        usa: z.string().url(),
      })
      .optional(),
  }),
});

export const collections = {
  books,
};
