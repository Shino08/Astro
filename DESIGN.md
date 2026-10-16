---
name: DevBooks
description: Biblioteca técnica en español dibujada a una sola línea.
colors:
  alarma: "#c2372a"
  cielo: "#7fb2d9"
  arena: "#d9b166"
  verde: "#8aa07a"
  ink: "#14181c"
  paper: "#e9eef2"
  balloon: "#fbfcfd"
typography:
  display:
    fontFamily: "Archivo Black, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 4.4vw, 3.4rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Archivo Black, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.8rem, 3.4vw, 2.9rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Archivo Black, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 1.7vw, 1.6rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.14em"
rounded:
  panel: "0px"
  dot: "50%"
spacing:
  line: "2px"
  line-strong: "4px"
  joint: "2px"
  panel: "clamp(1rem, 2vw, 1.5rem)"
  banda: "0.85rem clamp(1rem, 2.5vw, 2rem)"
components:
  accion:
    backgroundColor: "{colors.alarma}"
    textColor: "{colors.balloon}"
    rounded: "{rounded.panel}"
    padding: "0.9rem 1.2rem"
    typography: "{typography.title}"
  tecla:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "0.9rem 1rem"
    typography: "{typography.label}"
  tecla-activa:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "0.9rem 1rem"
  panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "{spacing.panel}"
  bocadillo:
    backgroundColor: "{colors.balloon}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "0.7rem 0.9rem"
  caja:
    backgroundColor: "{colors.arena}"
    textColor: "{colors.ink}"
    padding: "0.85rem 1rem"
    typography: "{typography.label}"
  buscar:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "0.55rem 0.1rem"
    typography: "{typography.body}"
---

# Design System: DevBooks

## Overview

**Creative North Star: «El álbum dibujado a una sola línea»**

DevBooks se compone como la plancha de un álbum de línea clara: un papel azul-blanco, un único
grosor de tinta para todo lo que está dibujado, rellenos planos sin modulación y ni una sola
sombra. Nada se eleva, nada brilla, nada se difumina: la jerarquía la hace el reparto de la
plancha y la densidad de la tinta.

La alternativa —fila de tarjetas iguales bajo un titular centrado— queda fuera por contrato. Un
panel es una viñeta: tiene marco, tiene orden de lectura y declara sus datos en una franja
impresa. La página no muestra tarjetas, muestra planchas.

**Key Characteristics:**

- Una sola línea, un solo grosor, en todo lo dibujado.
- Rellenos planos, sin degradados ni transiciones de color dentro de una forma.
- El rojo aparece una vez por plancha y nombra la acción que la escena necesita.
- Ningún easing: los cambios de estado son cortes limpios.

## Colors

**Primary — Rojo de sello (`alarma`, `#c2372a`).** Reservado. Marca la única acción de cada
plancha: el botón de entrada del catálogo y el coste de lectura de la ficha. Si aparece dos veces
en la misma pantalla, una de las dos está mal.

**Secondary — Rellenos planos.** Tres planos de color que identifican materia y sostienen la voz
del narrador: Cielo de mediodía (`cielo`, `#7fb2d9`), Arena de papel (`arena`, `#d9b166`) y Verde
de seto (`verde`, `#8aa07a`). Nunca se degradan ni se superponen con transparencia.

**Neutral — Papel, bocadillo y tinta.** Papel de álbum (`paper`, `#e9eef2`) es el campo de toda la
página; Blanco de bocadillo (`balloon`, `#fbfcfd`) es el relleno de lo que alguien dice; Tinta
(`ink`, `#14181c`) es la línea, el texto y los fondos invertidos de los estados activos.

**The One Line Rule.** No hay grises. El texto secundario no baja de opacidad salvo en el
placeholder del buscador y en los recuentos, y en esos dos casos se comprobó el ratio. La
jerarquía se hace con tamaño y peso, nunca aclarando la tinta.

**The Reserved Red Rule.** El rojo no es un color de sistema: es un turno. Un elemento rojo por
plancha, y siempre el mismo papel —la acción que la historia necesita en esa pantalla.

## Typography

**Display / Titular (`Archivo Black`, versalita).** El titular de establecimiento (`clamp(2rem,
4.4vw, 3.4rem)`), los titulares de ficha, los títulos de panel y el texto de los botones. Siempre
en mayúsculas, `line-height: 0.98`, tracking `-0.02em`. La masa tipográfica sostiene la plancha sin
necesidad de imágenes.

**Body / Cuerpo (`Archivo`, 400).** Texto corrido a `1rem`, `line-height: 1.5`, medida de `60ch`
(unos 78 caracteres reales). La reseña larga vive dentro de la caja de narración, sobre arena.

**Label / Etiqueta (`Archivo`, 700, `0.75rem`, tracking `0.14em`, mayúsculas).** Franjas de datos,
teclas, cabecera, pies y el rótulo del coste. Ningún texto funcional baja de 11 px: se comprobó con
el detector y se corrigió lo que estaba por debajo.

**The Single Voice Rule.** Hay una sola familia con carácter en toda la página. Las voces se
separan por peso y por caja, nunca metiendo una segunda tipografía a hacer de narrador. La voz del
narrador son las cajas de arena en versalitas; la voz de alguien que habla son los bocadillos.

## Layout

La **plancha** es la unidad: ancho máximo `1240px`, centrada, con marco de tinta de `2px`. Dentro,
todo son **niveles** separados por la misma línea: banda de registro, teclas de materia y buscador,
nivel de establecimiento, rejilla de catálogo, franja de paso y pie.

La rejilla del catálogo usa juntas de tinta: el contenedor pinta el fondo con `ink` y deja `2px` de
hueco entre celdas, así que **las juntas son la línea**, no un borde por panel. La rejilla se rellena
hasta un múltiplo de seis celdas porque seis es múltiplo de una, dos y tres columnas: ninguna fila
queda a medias a ningún ancho.

Rupturas reales del build: `700px` (franja de paso a dos columnas), `720px` y `1024px` (rejilla del
catálogo a dos y tres columnas), `800px` (pie a tres columnas), `900px` (establecimiento a dos
columnas, ficha a cubierta y cuerpo).

En móvil los niveles se apilan en orden de lectura y la escena pasa debajo de su titular. La
tipografía **no se encoge** al estrecharse: los bloques se re-apilan.

## Elevation & Depth

**Plano por contrato.** No hay una sola sombra, degradado, desenfoque ni radio de tarjeta en todo
el sistema. La elevación se declara una vez y es la línea: `2px` de tinta en reposo, `4px` —el mismo
trazo, repasado— en hover y en foco. Para no mover nada al engrosar, el repaso va por `outline`
(que no ocupa espacio de caja) y no por `border`.

La profundidad, cuando existe, es tonal: un panel en reposo baja su relleno y conserva su línea.

**The No Easing Rule.** Los estados cambian de golpe. No hay `transition` ni `animation` en el CSS
del mundo; el paso entre planchas es la navegación del navegador, que ya es un corte limpio, y por
eso el sitio no carga `ClientRouter`.

**The Nothing Gets Cropped Rule.** Lo que enseña una imagen o un dibujo se enseña entero. Las
portadas van con `contain` sobre una caja de proporción parecida, y el dibujo de la escena entra
con `meet`; si algo no cabe, se reencuadra la composición, no se corta el objeto.

## Shapes

Todo es rectángulo con esquinas vivas: `0px` de radio en paneles, botones, campos y placas. La única
curva del sistema es un punto de `6px` al `50%` en la banda de registro, y existe porque es un
punto, no una píldora. Las píldoras están fuera del vocabulario.

La forma que sí tiene construcción propia es el **bocadillo**: un rectángulo de tinta con relleno
blanco y una cola trazada con un cuadrado girado 45°, con solo dos de sus lados entintados, de modo
que la cola mantiene el mismo grosor que el resto del dibujo.

El **hueco** es el único elemento con línea discontinua, y significa exactamente una cosa: aquí
todavía no hay contenido. Se dibuja con `outline` a `-14px`, nunca con `margin` más `border`: una
celda con márgenes dentro de la rejilla de juntas dejaría ver la tinta del fondo y el hueco
parecería un bloque negro.

## Components

- **Acción (`accion`).** Relleno rojo, línea de tinta, texto en display sobre blanco de bocadillo.
  Es el único control rojo de la plancha; su repaso de foco es el mismo trazo a `4px`.
- **Tecla (`tecla`).** Enlace real que filtra el catálogo. Punto de color de la materia, nombre y
  recuento en cifras tabulares; activa, invierte a tinta sobre papel con `aria-current="page"`.
- **Panel (`panel`).** La viñeta del catálogo: rótulo de materia, placa montada, título, autoría y
  franja de datos. El título es el único enlace y se estira por toda la viñeta con un `::after`,
  así que la zona pulsable es grande y el nombre accesible es el título.
- **Placa (`placa`).** La cubierta montada: caja de `5/7` (1:1.40, la proporción de las portadas
  del catálogo, que miden 1:1.43 y 1:1.31) y `object-fit: contain`, porque una portada recortada
  pierde el lomo, la autoría y el pie, que es justo lo que la portada dice. Si el título no trae
  imagen, la colección dibuja una placa plana con el título en display y la marca de estado en la
  esquina.
- **Escena (`escena`).** El estante dibujado del nivel de establecimiento. El dibujo entra con
  `meet` y nunca se recorta; el estante es un elemento propio de `12px` que cruza la plancha de
  lado a lado a cualquier ancho, de modo que el paso del color no depende del encuadre.
- **Bocadillo (`bocadillo`).** Lo que alguien dice: la recomendación, la descripción de un libro.
- **Caja (`caja`).** La voz del narrador: franja de versalitas sobre relleno plano (arena por
  defecto, cielo o verde cuando la materia lo pide).
- **Buscador (`buscar`).** Nace oculto y solo el JavaScript lo revela; sin JS no queda un control
  muerto a la vista y acotar el catálogo sigue siendo cosa de las teclas.

## Do's and Don'ts

### Do:

- Pinta las juntas con el fondo del contenedor y deja que el hueco de `2px` sea la línea.
- Reserva el rojo para una sola acción por plancha.
- Declara el coste de lectura (`readtime`) antes que el precio, la valoración o el enlace externo.
- Repasa el trazo con `outline` al enfocar o pasar el ratón, para no mover la caja.
- Deja que la tipografía se re-apile en móvil en lugar de encogerse.
- Marca como `borrador` cualquier ficha que no haya revisado una persona.

### Don't:

- No introduzcas sombras, degradados, desenfoques ni `border-radius` de tarjeta.
- No añadas `transition` con easing: el mundo no tiene aceleración.
- No uses grises: la tinta se aclara solo donde está medido y pasa.
- No pongas una etiqueta pequeña encima de un titular.
- No inventes valoraciones, precios, testimonios ni cifras: el catálogo no vende y no puntúa.
- No añadas una segunda tipografía de carácter para hacer de narrador.
