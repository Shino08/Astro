import { defineCollection, z } from 'astro:content';

const librosProgramacion = defineCollection({
  loader: async () => {
    const params = new URLSearchParams({
      q: 'programacion',
      language: 'spa',
      fields: 'key,title,author_name,cover_i,first_publish_year,number_of_pages_median',
      limit: '15',
    });

    const response = await fetch(`https://openlibrary.org/search.json?${params.toString()}`);
    
    if (!response.ok) {
      throw new Error(`Error al consultar Open Library: ${response.statusText}`);
    }

    const json = await response.json();
    const docs = json.docs ?? [];

    return docs.map((doc: any) => {
      // Open Library devuelve key con el formato "/works/OL12345W".
      // Limpiamos el prefijo para tener un id limpio de ruta: "OL12345W"
      const cleanId = doc.key.replace('/works/', '');

      // Si el libro tiene portada registrada, construimos la URL del CDN
      const coverUrl = doc.cover_i
        ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
        : 'https://placehold.co/300x450/1e293b/ffffff?text=Sin+Portada';

      return {
        id: cleanId,
        title: doc.title,
        authors: doc.author_name ?? ['Autor desconocido'],
        cover: coverUrl,
        publishYear: doc.first_publish_year ?? null,
        pages: doc.number_of_pages_median ?? null,
        openLibraryUrl: `https://openlibrary.org${doc.key}`,
      };
    });
  },
  schema: z.object({
    id: z.string(),
    title: z.string(),
    authors: z.array(z.string()),
    cover: z.string().url(),
    publishYear: z.number().nullable(),
    pages: z.number().nullable(),
    openLibraryUrl: z.string().url(),
  }),
});

export const collections = {
  libros: librosProgramacion,
};