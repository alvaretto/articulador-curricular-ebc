/**
 * Estándares Básicos de Competencias (EBC) - Inglés
 * Fuente: Ministerio de Educación Nacional (MEN) Colombia
 * Documento: "Estándares Básicos de Competencias en Lenguas Extranjeras: Inglés" (2006)
 * Marco de referencia: Marco Común Europeo de Referencia (MCER/CEFR)
 *
 * Estructura por grupos de grados: 1-3, 4-5, 6-7, 8-9, 10-11
 * Habilidades comunicativas (ejes):
 *   escucha    — Listening / Escucha
 *   lectura    — Reading / Lectura
 *   escritura  — Writing / Escritura
 *   monologo   — Speaking (monologue) / Monólogo
 *   conversacion — Speaking (conversation) / Conversación
 *
 * Niveles MCER por grupo:
 *   1-3   → A1   (Principiante)
 *   4-5   → A2.1 (Básico 1)
 *   6-7   → A2.2 (Básico 2)
 *   8-9   → B1.1 (Pre-intermedio 1)
 *   10-11 → B1.2 (Pre-intermedio 2)
 */

const EBC_INGLES = {
  area: 'ingles',
  nombre: 'Inglés',
  color: '#6366f1',

  ejes: [
    {
      id: 'escucha',
      nombre: 'Escucha (Listening)',
      color: '#6366f1',
      descripcion: 'Comprensión de mensajes orales en inglés en distintos contextos comunicativos'
    },
    {
      id: 'lectura',
      nombre: 'Lectura (Reading)',
      color: '#3B82F6',
      descripcion: 'Comprensión de textos escritos en inglés de diferentes tipos y propósitos'
    },
    {
      id: 'escritura',
      nombre: 'Escritura (Writing)',
      color: '#10B981',
      descripcion: 'Producción de textos escritos en inglés con propósitos comunicativos'
    },
    {
      id: 'monologo',
      nombre: 'Monólogo (Speaking)',
      color: '#F59E0B',
      descripcion: 'Producción oral en inglés de manera autónoma y sostenida'
    },
    {
      id: 'conversacion',
      nombre: 'Conversación (Interaction)',
      color: '#EF4444',
      descripcion: 'Interacción oral en inglés con otros hablantes en situaciones cotidianas'
    }
  ],

  grupos: {

    // =====================================================================
    // GRADOS 1 - 3  (Nivel A1 — Principiante)
    // =====================================================================
    '1-3': {
      estandarGeneral: 'Comprendo historias cortas narradas en un lenguaje sencillo y con apoyo de imágenes.',

      estandares: {

        escucha: [
          'Reconozco cuando me hablan en inglés y reacciono de manera verbal y no verbal.',
          'Identifico palabras y frases cortas cuando se habla despacio y con claridad.',
          'Comprendo instrucciones simples del salón de clase como "stand up", "sit down" y "open your book".',
          'Reconozco los números, los colores y los nombres de objetos cotidianos cuando los escucho.',
          'Sigo el hilo de una historia corta apoyada en imágenes cuando me la narran.'
        ],

        lectura: [
          'Identifico palabras relacionadas entre sí sobre temas que me son familiares.',
          'Reconozco palabras conocidas en textos cortos ilustrados.',
          'Leo y comprendo letreros, señales y etiquetas de mi entorno.',
          'Asocio palabras escritas con imágenes o con objetos reales.',
          'Identifico personajes y objetos en cuentos cortos con apoyo visual.'
        ],

        escritura: [
          'Copio y transcribo palabras que comprendo y que uso con frecuencia en el salón de clase.',
          'Escribo mi nombre y el de objetos y personas de mi entorno en inglés.',
          'Completo palabras con letras que faltan cuando tengo un modelo de referencia.',
          'Escribo listas de palabras familiares relacionadas con temas vistos en clase.',
          'Asocio palabras escritas con dibujos y las transcribo correctamente.'
        ],

        monologo: [
          'Digo palabras y frases cortas para nombrar objetos, personas y lugares de mi entorno.',
          'Me presento diciendo mi nombre, mi edad y los colores o animales que me gustan.',
          'Recito rimas, canciones y rondas cortas en inglés con pronunciación comprensible.',
          'Nombro objetos del salón y de mi casa usando vocabulario trabajado en clase.',
          'Describo imágenes sencillas usando palabras y frases cortas.'
        ],

        conversacion: [
          'Saludo y me despido en inglés usando expresiones básicas (Hello, Goodbye, Good morning).',
          'Respondo preguntas simples sobre mí mismo cuando me las hacen despacio y con claridad.',
          'Pido que repitan o hablen más despacio cuando no entiendo.',
          'Participo en juegos de roles sencillos del salón de clase.',
          'Intercambio información básica como mi nombre y mis gustos con un compañero.'
        ]
      }
    },

    // =====================================================================
    // GRADOS 4 - 5  (Nivel A2.1 — Básico 1)
    // =====================================================================
    '4-5': {
      estandarGeneral: 'Comprendo textos cortos, sencillos e ilustrados sobre temas cotidianos.',

      estandares: {

        escucha: [
          'Sigo atentamente lo que dicen mi profesor y mis compañeros durante un juego o una actividad.',
          'Identifico el tema principal de un mensaje oral corto sobre temas familiares.',
          'Comprendo preguntas sencillas sobre mi vida personal, mi familia o mi rutina.',
          'Entiendo instrucciones de dos o tres pasos cuando son apoyadas por gestos o imágenes.',
          'Reconozco palabras clave en textos orales sencillos aunque no entienda todo.'
        ],

        lectura: [
          'Asocio un dibujo con su descripción escrita en inglés.',
          'Leo y comprendo textos muy cortos sobre temas familiares como la familia, la escuela o los animales.',
          'Identifico información específica en textos breves e ilustrados (nombre, lugar, hora).',
          'Comprendo mensajes cortos escritos por mis compañeros o mi profesor.',
          'Leo y entiendo frases y oraciones simples en tarjetas, carteles o avisos escolares.'
        ],

        escritura: [
          'Escribo palabras y frases cortas para describir personas, objetos o lugares.',
          'Completo oraciones sencillas con las palabras correctas usando un modelo de referencia.',
          'Escribo mi rutina diaria usando frases simples (I wake up at six. I go to school.).',
          'Produzco oraciones cortas para dar información sobre mí mismo y mi familia.',
          'Corrijo mis escritos cuando el profesor me señala los errores más evidentes.'
        ],

        monologo: [
          'Describo brevemente a personas de mi familia o a mis compañeros usando adjetivos básicos.',
          'Cuento de manera sencilla lo que hago durante mi día usando frases cortas.',
          'Hablo sobre mis gustos y preferencias usando expresiones como "I like" e "I don\'t like".',
          'Presento un objeto o un animal de mi entorno usando vocabulario conocido.',
          'Recito trabalenguas, canciones y poemas cortos con buena pronunciación.'
        ],

        conversacion: [
          'Participo en intercambios comunicativos cortos sobre temas familiares.',
          'Hago y respondo preguntas sencillas sobre la rutina diaria y los gustos personales.',
          'Pido y doy información básica sobre lugares, horas y precios usando fórmulas fijas.',
          'Reacciono verbalmente a lo que dice mi interlocutor con expresiones como "Really?" o "Me too".',
          'Mantengo una conversación muy corta sobre un tema conocido con ayuda del profesor.'
        ]
      }
    },

    // =====================================================================
    // GRADOS 6 - 7  (Nivel A2.2 — Básico 2)
    // =====================================================================
    '6-7': {
      estandarGeneral: 'Comprendo textos cortos de cierta dificultad sobre actividades cotidianas, de mi interés, sobre otras asignaturas y mi entorno social.',

      estandares: {

        escucha: [
          'Identifico ideas generales y específicas en textos orales si tengo conocimiento del tema y del vocabulario utilizado.',
          'Entiendo la descripción de lugares, personas o eventos cuando se hace de manera clara y pausada.',
          'Reconozco el propósito de mensajes orales cortos (informar, invitar, pedir, agradecer).',
          'Comprendo anuncios, instrucciones y mensajes de audio sobre temas familiares.',
          'Identifico la secuencia de eventos en una narración oral breve apoyada en contexto.'
        ],

        lectura: [
          'Leo y comprendo textos cortos sobre temas de otras asignaturas si están escritos en lenguaje sencillo.',
          'Identifico el tema principal y algunos detalles relevantes en textos de tipo descriptivo o narrativo.',
          'Entiendo mensajes escritos informales (correos electrónicos, mensajes de texto) sobre temas cotidianos.',
          'Uso el contexto para deducir el significado de palabras desconocidas.',
          'Leo y comprendo instrucciones escritas paso a paso para hacer actividades o experimentos sencillos.'
        ],

        escritura: [
          'Escribo descripciones cortas sobre personas, lugares o eventos de mi entorno.',
          'Redacto mensajes informales cortos (notas, correos) para comunicarme con otros.',
          'Produzco textos breves usando conectores básicos (and, but, because, so).',
          'Escribo párrafos cortos sobre experiencias personales o eventos recientes.',
          'Reviso mis escritos con ayuda para mejorar el vocabulario y la gramática.'
        ],

        monologo: [
          'Describo con cierto detalle lugares, personas o situaciones que conozco.',
          'Presento de manera oral un tema de mi interés usando notas de apoyo.',
          'Hablo sobre experiencias pasadas usando el pasado simple con verbos regulares e irregulares comunes.',
          'Expreso mis opiniones y preferencias sobre temas cotidianos usando frases de apoyo.',
          'Narro de manera sencilla el argumento de una película, un cuento o un evento.'
        ],

        conversacion: [
          'Participo en conversaciones cortas sobre temas cotidianos e intereses personales.',
          'Pido y doy información más detallada sobre rutinas, planes y experiencias.',
          'Expreso acuerdo o desacuerdo de manera respetuosa durante una discusión.',
          'Hago preguntas de seguimiento para mantener la conversación (And you? What about...?).',
          'Interactúo en situaciones de la vida cotidiana como comprar en una tienda o pedir información.'
        ]
      }
    },

    // =====================================================================
    // GRADOS 8 - 9  (Nivel B1.1 — Pre-intermedio 1)
    // =====================================================================
    '8-9': {
      estandarGeneral: 'Sostengo conversaciones rutinarias para saludar, despedirme, hablar del clima o de cómo me siento.',

      estandares: {

        escucha: [
          'Entiendo lo que me dicen el profesor y mis compañeros en interacciones cotidianas dentro del aula, sin necesidad de repetición.',
          'Comprendo la idea principal de textos orales de mediana complejidad sobre temas académicos y de la vida diaria.',
          'Identifico información específica (datos, fechas, nombres) en mensajes de audio y videos cortos.',
          'Reconozco diferentes actitudes del hablante (certeza, duda, entusiasmo) a través de la entonación.',
          'Entiendo las ideas principales de presentaciones, conferencias cortas y programas de radio sobre temas de mi interés.'
        ],

        lectura: [
          'Identifico el punto de vista del autor en textos de opinión cortos sobre temas conocidos.',
          'Comprendo textos de diferentes tipos y fuentes: noticias, blogs, artículos divulgativos sencillos.',
          'Localizo información específica en textos más largos sin necesidad de leerlos completamente.',
          'Entiendo el argumento central y los argumentos de apoyo en textos persuasivos breves.',
          'Leo y comprendo textos literarios sencillos (cuentos cortos, poemas) identificando personajes, temas y emociones.'
        ],

        escritura: [
          'Produzco textos coherentes de mediana extensión sobre temas personales y académicos.',
          'Escribo cartas, correos formales e informales adecuando el registro al destinatario.',
          'Redacto párrafos argumentativos expresando mi opinión y sustentándola con razones.',
          'Uso con mayor precisión tiempos verbales (presente simple y continuo, pasado simple y continuo, futuro).',
          'Reviso y corrijo mis producciones escritas con apoyo de recursos (diccionario, gramática) o del profesor.'
        ],

        monologo: [
          'Hablo de manera fluida y comprensible sobre temas personales, académicos y de actualidad.',
          'Describo experiencias, eventos, sueños y aspiraciones usando un vocabulario más variado.',
          'Expongo mi punto de vista sobre un tema y lo argumento con razones y ejemplos.',
          'Hago presentaciones preparadas sobre temas académicos con estructura clara.',
          'Narro eventos en diferentes tiempos verbales conectando las ideas de manera lógica.'
        ],

        conversacion: [
          'Inicio, mantengo y termino conversaciones sobre temas conocidos y de interés personal.',
          'Manejo situaciones imprevistas durante una conversación buscando palabras alternativas.',
          'Expreso y defiendo mis opiniones en discusiones, aceptando o rechazando educadamente las ideas de otros.',
          'Interactúo con hablantes nativos en situaciones cotidianas con cierta fluidez.',
          'Participo activamente en debates sencillos sobre temas relevantes para mi comunidad.'
        ]
      }
    },

    // =====================================================================
    // GRADOS 10 - 11  (Nivel B1.2 — Pre-intermedio 2)
    // =====================================================================
    '10-11': {
      estandarGeneral: 'Estructuro mis textos teniendo en cuenta elementos formales del lenguaje como la puntuación, la ortografía, la sintaxis, la coherencia y la cohesión.',

      estandares: {

        escucha: [
          'Entiendo instrucciones para ejecutar acciones cotidianas con razonable fluidez.',
          'Comprendo el contenido de emisiones de radio, podcasts y videos sobre temas de interés general.',
          'Identifico el argumento central y los detalles de apoyo en conferencias y discursos formales.',
          'Reconozco las posiciones e intenciones de los hablantes en debates y entrevistas.',
          'Entiendo textos orales que contienen argot, modismos y expresiones coloquiales comunes.'
        ],

        lectura: [
          'Comprendo textos de diferentes tipos y fuentes sobre temas de interés general y académico.',
          'Analizo la estructura y la coherencia de textos argumentativos, expositivos y descriptivos.',
          'Identifico el propósito, la audiencia y el tono del autor en textos escritos de complejidad media.',
          'Leo con comprensión textos literarios (novelas cortas, obras de teatro, poesía) e identifico sus características.',
          'Evalúo la validez de los argumentos presentados en textos de opinión y artículos periodísticos.'
        ],

        escritura: [
          'Escribo textos bien estructurados sobre una amplia gama de temas usando vocabulario variado.',
          'Redacto ensayos argumentativos presentando y desarrollando un punto de vista con evidencias.',
          'Produzco textos formales (informes, solicitudes, reseñas) con el registro adecuado.',
          'Uso correctamente signos de puntuación, ortografía y estructuras gramaticales complejas.',
          'Reviso, edito y mejoro mis textos aplicando criterios de coherencia, cohesión y adecuación.'
        ],

        monologo: [
          'Hablo con fluidez y espontaneidad sobre una amplia variedad de temas personales y académicos.',
          'Sustento y defiendo posiciones con argumentos organizados, ejemplos y evidencias.',
          'Presento temas complejos de manera estructurada adaptando el lenguaje a la audiencia.',
          'Hago resúmenes de artículos, documentales y textos académicos de manera coherente.',
          'Uso recursos retóricos (énfasis, pausa, reformulación) para hacer mi discurso más efectivo.'
        ],

        conversacion: [
          'Participo con fluidez en conversaciones sobre temas abstractos, académicos y sociales.',
          'Negocio significados, solicito aclaraciones y reformulo ideas cuando no soy comprendido.',
          'Debato y discuto con argumentos estructurados y con respeto hacia los interlocutores.',
          'Adapto mi lenguaje y tono según el contexto formal o informal de la conversación.',
          'Interactúo de manera efectiva con hablantes nativos sobre temas de interés general.'
        ]
      }
    }

  } // fin grupos

}; // fin EBC_INGLES

// Exportar para uso como módulo (si se usa con bundler)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = EBC_INGLES;
}
