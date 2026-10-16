/**
 * Fuente única de verdad de las materias del catálogo.
 *
 * El esquema de la colección, las teclas de filtro y el relleno de cada panel
 * leen de aquí: añadir una materia es añadir una entrada en este objeto, y el
 * build genera su ruta estática `/materia/<slug>` sin tocar nada más.
 */
export const TEMAS = {
  "control-de-versiones": { label: "Control de versiones", relleno: "cielo" },
  lenguajes: { label: "Lenguajes", relleno: "arena" },
  oficio: { label: "Oficio", relleno: "verde" },
} as const;

export type Tema = keyof typeof TEMAS;

/** Los slugs como tupla, que es lo que `z.enum()` necesita. */
export const TEMA_SLUGS = Object.keys(TEMAS) as [Tema, ...Tema[]];

export function temaLabel(tema: Tema): string {
  return TEMAS[tema].label;
}

export function temaRelleno(tema: Tema): string {
  return TEMAS[tema].relleno;
}

/** `224` → `3 h 44 min`, para cuando el minuto exacto no aporta. */
export function tiempoLargo(minutos: number): string {
  const horas = Math.floor(minutos / 60);
  const resto = minutos % 60;
  if (horas === 0) return `${resto} min`;
  if (resto === 0) return `${horas} h`;
  return `${horas} h ${resto} min`;
}
