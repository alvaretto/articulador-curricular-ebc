/**
 * Marco de Referencia ICFES Saber - Lectura Crítica / Lenguaje
 * Instituto Colombiano para la Evaluación de la Educación (ICFES)
 *
 * Fuente oficial: Matrices de Referencia y Especificaciones de Prueba
 * Saber 3°, 5°, 9° (Lenguaje) y Saber 11° (Lectura Crítica) - ICFES Colombia
 * Disponible en: https://www.icfes.gov.co/evaluaciones/pruebas-saber/marcos-de-referencia
 *
 * Estructura:
 * - 3 competencias transversales a todas las pruebas
 * - 3 componentes temáticos (Semántico, Sintáctico, Pragmático)
 * - 4 pruebas: Saber 3°, Saber 5°, Saber 9°, Saber 11°
 * - Cada prueba incluye aprendizajes con evidencias y niveles de desempeño
 */

const ICFES_LECTURA_CRITICA = {
  area: 'lenguaje',
  nombre: 'Lectura Crítica',

  // Las 3 competencias evaluadas por ICFES en Lectura Crítica / Lenguaje
  competencias: [
    {
      id: 'identificar',
      nombre: 'Identificar y entender contenidos locales',
      descripcion: 'Capacidad para ubicar información explícita en un texto, identificar el significado de palabras y expresiones, reconocer datos puntuales y comprender los contenidos locales que conforman un texto.',
    },
    {
      id: 'comprender',
      nombre: 'Comprender cómo se articulan las partes de un texto',
      descripcion: 'Capacidad para comprender la estructura global de un texto, las relaciones entre sus partes, la coherencia y cohesión, y darle un sentido global al texto.',
    },
    {
      id: 'reflexionar',
      nombre: 'Reflexionar y evaluar un texto',
      descripcion: 'Capacidad para evaluar el contenido y la forma de un texto, reconocer las intenciones del autor, identificar supuestos e implicaciones, y asumir una posición crítica frente a lo leído.',
    },
  ],

  // Los 3 componentes evaluados
  componentes: [
    {
      id: 'semantico',
      nombre: 'Semántico',
      descripcion: 'Qué dice el texto: significados literales e inferenciales, relaciones de significado entre palabras, proposiciones y párrafos, tema principal y subtemas, referencias y sentidos figurados.',
    },
    {
      id: 'sintactico',
      nombre: 'Sintáctico',
      descripcion: 'Cómo lo dice: estructura del texto, organización de párrafos, uso de conectores y marcadores textuales, relaciones entre oraciones, concordancia gramatical y tipología textual.',
    },
    {
      id: 'pragmatico',
      nombre: 'Pragmático',
      descripcion: 'Para qué lo dice: intención comunicativa del autor, contexto de producción y recepción, propósito del texto, relación autor-lector, tipo de audiencia y efecto buscado en el lector.',
    },
  ],

  // Pruebas por nivel
  pruebas: {

    // =========================================================
    // SABER 3°
    // =========================================================
    'saber-3': {
      nombre: 'Saber 3°',
      grados: ['3'],

      aprendizajes: [
        // --- Semántico ---
        {
          id: 'lc-s3-01',
          enunciado: 'Identifica el significado de palabras y expresiones a partir del contexto en textos narrativos cortos.',
          competencia: 'identificar',
          componente: 'semantico',
          evidencias: [
            { id: 'lc-s3-01-e1', enunciado: 'Reconoce el significado de una palabra desconocida usando las pistas del texto.' },
            { id: 'lc-s3-01-e2', enunciado: 'Relaciona palabras con sus sinónimos o significados cercanos según el contexto.' },
          ],
        },
        {
          id: 'lc-s3-02',
          enunciado: 'Reconoce la idea principal de un texto narrativo o informativo breve.',
          competencia: 'identificar',
          componente: 'semantico',
          evidencias: [
            { id: 'lc-s3-02-e1', enunciado: 'Señala de qué trata principalmente el texto leído.' },
            { id: 'lc-s3-02-e2', enunciado: 'Distingue la idea principal de las ideas secundarias en un texto corto.' },
          ],
        },
        {
          id: 'lc-s3-03',
          enunciado: 'Recupera información explícita de textos narrativos e informativos.',
          competencia: 'identificar',
          componente: 'semantico',
          evidencias: [
            { id: 'lc-s3-03-e1', enunciado: 'Localiza datos específicos (personajes, lugares, hechos) en un texto.' },
            { id: 'lc-s3-03-e2', enunciado: 'Responde preguntas literales sobre el contenido del texto.' },
          ],
        },
        // --- Sintáctico ---
        {
          id: 'lc-s3-04',
          enunciado: 'Reconoce la secuencia de eventos en un texto narrativo.',
          competencia: 'comprender',
          componente: 'sintactico',
          evidencias: [
            { id: 'lc-s3-04-e1', enunciado: 'Ordena cronológicamente los eventos de una narración.' },
            { id: 'lc-s3-04-e2', enunciado: 'Identifica qué pasó primero, después y al final en una historia.' },
          ],
        },
        {
          id: 'lc-s3-05',
          enunciado: 'Identifica la estructura básica de textos sencillos (inicio, nudo, desenlace en narrativos; título, subtítulos en informativos).',
          competencia: 'comprender',
          componente: 'sintactico',
          evidencias: [
            { id: 'lc-s3-05-e1', enunciado: 'Señala las partes de un cuento (inicio, nudo, desenlace).' },
            { id: 'lc-s3-05-e2', enunciado: 'Reconoce la función de títulos y subtítulos en un texto informativo.' },
          ],
        },
        {
          id: 'lc-s3-06',
          enunciado: 'Reconoce la función de conectores básicos (y, pero, porque, entonces) en un texto.',
          competencia: 'comprender',
          componente: 'sintactico',
          evidencias: [
            { id: 'lc-s3-06-e1', enunciado: 'Identifica qué relación establece un conector entre dos ideas (adición, oposición, causa).' },
            { id: 'lc-s3-06-e2', enunciado: 'Completa oraciones seleccionando el conector adecuado.' },
          ],
        },
        // --- Pragmático ---
        {
          id: 'lc-s3-07',
          enunciado: 'Identifica el propósito comunicativo de textos sencillos (informar, narrar, instruir).',
          competencia: 'reflexionar',
          componente: 'pragmatico',
          evidencias: [
            { id: 'lc-s3-07-e1', enunciado: 'Distingue si un texto busca contar una historia, dar instrucciones o informar sobre un tema.' },
            { id: 'lc-s3-07-e2', enunciado: 'Relaciona el tipo de texto con su propósito comunicativo.' },
          ],
        },
        {
          id: 'lc-s3-08',
          enunciado: 'Reconoce quién habla en el texto y a quién se dirige.',
          competencia: 'reflexionar',
          componente: 'pragmatico',
          evidencias: [
            { id: 'lc-s3-08-e1', enunciado: 'Identifica al narrador o emisor de un texto.' },
            { id: 'lc-s3-08-e2', enunciado: 'Señala a qué público va dirigido un texto (niños, adultos, todos).' },
          ],
        },
      ],

      niveles: [
        {
          nombre: 'Insuficiente',
          rango: [100, 226],
          color: '#EF4444',
          descripcion: 'El estudiante no supera las preguntas de menor complejidad de la prueba. No localiza información explícita en textos cortos ni identifica el propósito comunicativo de textos sencillos.',
          aprendizajesEsperados: [],
        },
        {
          nombre: 'Mínimo',
          rango: [226, 295],
          color: '#F59E0B',
          descripcion: 'El estudiante recupera información explícita de textos narrativos cortos, identifica el significado de palabras conocidas en contexto y reconoce la secuencia básica de eventos en una narración.',
          aprendizajesEsperados: ['lc-s3-01', 'lc-s3-03', 'lc-s3-04'],
        },
        {
          nombre: 'Satisfactorio',
          rango: [295, 380],
          color: '#10B981',
          descripcion: 'El estudiante reconoce la idea principal de textos breves, identifica la estructura básica de textos narrativos e informativos, y distingue el propósito comunicativo de textos sencillos.',
          aprendizajesEsperados: ['lc-s3-01', 'lc-s3-02', 'lc-s3-03', 'lc-s3-04', 'lc-s3-05', 'lc-s3-07'],
        },
        {
          nombre: 'Avanzado',
          rango: [380, 500],
          color: '#3B82F6',
          descripcion: 'El estudiante infiere significados a partir del contexto, comprende la función de conectores en textos, identifica quién habla y a quién se dirige un texto, y establece relaciones entre el tipo de texto y su propósito comunicativo.',
          aprendizajesEsperados: ['lc-s3-01', 'lc-s3-02', 'lc-s3-03', 'lc-s3-04', 'lc-s3-05', 'lc-s3-06', 'lc-s3-07', 'lc-s3-08'],
        },
      ],
    },

    // =========================================================
    // SABER 5°
    // =========================================================
    'saber-5': {
      nombre: 'Saber 5°',
      grados: ['5'],

      aprendizajes: [
        // --- Semántico ---
        {
          id: 'lc-s5-01',
          enunciado: 'Infiere el significado de palabras y expresiones desconocidas a partir del contexto y de las relaciones semánticas del texto.',
          competencia: 'identificar',
          componente: 'semantico',
          evidencias: [
            { id: 'lc-s5-01-e1', enunciado: 'Deduce el significado de una palabra por el contexto en el que aparece.' },
            { id: 'lc-s5-01-e2', enunciado: 'Reconoce relaciones de sinonimia y antonimia entre palabras del texto.' },
            { id: 'lc-s5-01-e3', enunciado: 'Interpreta expresiones de sentido figurado en textos narrativos.' },
          ],
        },
        {
          id: 'lc-s5-02',
          enunciado: 'Identifica la idea principal y las ideas secundarias en textos narrativos, informativos y argumentativos.',
          competencia: 'identificar',
          componente: 'semantico',
          evidencias: [
            { id: 'lc-s5-02-e1', enunciado: 'Resume el contenido global de un texto en una oración.' },
            { id: 'lc-s5-02-e2', enunciado: 'Distingue información relevante de la información complementaria.' },
          ],
        },
        {
          id: 'lc-s5-03',
          enunciado: 'Realiza inferencias a partir de la información explícita e implícita del texto.',
          competencia: 'comprender',
          componente: 'semantico',
          evidencias: [
            { id: 'lc-s5-03-e1', enunciado: 'Deduce información no dicha explícitamente usando las pistas del texto.' },
            { id: 'lc-s5-03-e2', enunciado: 'Anticipa el desenlace de una narración a partir de los indicios del texto.' },
          ],
        },
        {
          id: 'lc-s5-04',
          enunciado: 'Establece relaciones de causa-efecto entre eventos o ideas del texto.',
          competencia: 'comprender',
          componente: 'semantico',
          evidencias: [
            { id: 'lc-s5-04-e1', enunciado: 'Identifica la causa de un evento o la consecuencia de una acción en el texto.' },
            { id: 'lc-s5-04-e2', enunciado: 'Explica por qué un personaje actúa de determinada manera según el texto.' },
          ],
        },
        // --- Sintáctico ---
        {
          id: 'lc-s5-05',
          enunciado: 'Reconoce la estructura y organización de diferentes tipos de textos (narrativo, expositivo, instructivo, argumentativo).',
          competencia: 'comprender',
          componente: 'sintactico',
          evidencias: [
            { id: 'lc-s5-05-e1', enunciado: 'Identifica las partes de un texto expositivo (introducción, desarrollo, conclusión).' },
            { id: 'lc-s5-05-e2', enunciado: 'Diferencia la estructura de un texto narrativo de la de un texto argumentativo.' },
          ],
        },
        {
          id: 'lc-s5-06',
          enunciado: 'Identifica la función de conectores y marcadores textuales en la coherencia del texto.',
          competencia: 'comprender',
          componente: 'sintactico',
          evidencias: [
            { id: 'lc-s5-06-e1', enunciado: 'Reconoce conectores de adición, contraste, causa y consecuencia.' },
            { id: 'lc-s5-06-e2', enunciado: 'Evalúa si un conector usado en un texto es adecuado para la relación entre ideas.' },
          ],
        },
        {
          id: 'lc-s5-07',
          enunciado: 'Reconoce elementos de cohesión (pronombres, sustitución léxica, elipsis) que dan unidad al texto.',
          competencia: 'comprender',
          componente: 'sintactico',
          evidencias: [
            { id: 'lc-s5-07-e1', enunciado: 'Identifica a qué se refiere un pronombre o expresión sustitutiva en el texto.' },
            { id: 'lc-s5-07-e2', enunciado: 'Reconoce cómo las sustituciones léxicas evitan la repetición y mantienen la coherencia.' },
          ],
        },
        // --- Pragmático ---
        {
          id: 'lc-s5-08',
          enunciado: 'Reconoce la intención comunicativa del autor en diferentes tipos de texto.',
          competencia: 'reflexionar',
          componente: 'pragmatico',
          evidencias: [
            { id: 'lc-s5-08-e1', enunciado: 'Identifica si el propósito del autor es informar, persuadir, entretener o instruir.' },
            { id: 'lc-s5-08-e2', enunciado: 'Distingue entre hechos y opiniones dentro de un texto.' },
          ],
        },
        {
          id: 'lc-s5-09',
          enunciado: 'Identifica el punto de vista o posición del autor frente al tema tratado.',
          competencia: 'reflexionar',
          componente: 'pragmatico',
          evidencias: [
            { id: 'lc-s5-09-e1', enunciado: 'Señala si el autor está a favor o en contra de una idea.' },
            { id: 'lc-s5-09-e2', enunciado: 'Reconoce las razones o argumentos que usa el autor para defender su posición.' },
          ],
        },
        {
          id: 'lc-s5-10',
          enunciado: 'Relaciona textos con su contexto de producción y con otros textos.',
          competencia: 'reflexionar',
          componente: 'pragmatico',
          evidencias: [
            { id: 'lc-s5-10-e1', enunciado: 'Identifica el contexto social o cultural en que fue escrito un texto.' },
            { id: 'lc-s5-10-e2', enunciado: 'Compara la información o perspectiva de dos textos sobre un mismo tema.' },
          ],
        },
      ],

      niveles: [
        {
          nombre: 'Insuficiente',
          rango: [100, 226],
          color: '#EF4444',
          descripcion: 'El estudiante no supera las preguntas de menor complejidad de la prueba. No identifica la idea principal de textos breves ni reconoce el propósito comunicativo del autor.',
          aprendizajesEsperados: [],
        },
        {
          nombre: 'Mínimo',
          rango: [226, 295],
          color: '#F59E0B',
          descripcion: 'El estudiante infiere el significado de palabras por contexto, identifica la idea principal de textos narrativos, establece relaciones de causa-efecto y reconoce la estructura básica de textos expositivos.',
          aprendizajesEsperados: ['lc-s5-01', 'lc-s5-02', 'lc-s5-04', 'lc-s5-05'],
        },
        {
          nombre: 'Satisfactorio',
          rango: [295, 380],
          color: '#10B981',
          descripcion: 'El estudiante realiza inferencias sobre información implícita, identifica conectores y su función en la coherencia textual, y reconoce la intención comunicativa del autor en diferentes tipos de texto.',
          aprendizajesEsperados: ['lc-s5-01', 'lc-s5-02', 'lc-s5-03', 'lc-s5-04', 'lc-s5-05', 'lc-s5-06', 'lc-s5-08'],
        },
        {
          nombre: 'Avanzado',
          rango: [380, 500],
          color: '#3B82F6',
          descripcion: 'El estudiante reconoce mecanismos de cohesión textual, identifica el punto de vista del autor, relaciona textos con su contexto de producción y compara perspectivas de diferentes textos sobre un mismo tema.',
          aprendizajesEsperados: ['lc-s5-01', 'lc-s5-02', 'lc-s5-03', 'lc-s5-04', 'lc-s5-05', 'lc-s5-06', 'lc-s5-07', 'lc-s5-08', 'lc-s5-09', 'lc-s5-10'],
        },
      ],
    },

    // =========================================================
    // SABER 9°
    // =========================================================
    'saber-9': {
      nombre: 'Saber 9°',
      grados: ['6', '7', '8', '9'],

      aprendizajes: [
        // --- Semántico ---
        {
          id: 'lc-s9-01',
          enunciado: 'Interpreta la información explícita e implícita en textos continuos y discontinuos de complejidad media.',
          competencia: 'identificar',
          componente: 'semantico',
          evidencias: [
            { id: 'lc-s9-01-e1', enunciado: 'Extrae información puntual de textos expositivos, narrativos y argumentativos.' },
            { id: 'lc-s9-01-e2', enunciado: 'Infiere conclusiones a partir de la información presentada en tablas, gráficas o infografías.' },
            { id: 'lc-s9-01-e3', enunciado: 'Distingue entre información literal e inferencial en un texto.' },
          ],
        },
        {
          id: 'lc-s9-02',
          enunciado: 'Establece relaciones de significado entre palabras, proposiciones y párrafos para construir el sentido global del texto.',
          competencia: 'comprender',
          componente: 'semantico',
          evidencias: [
            { id: 'lc-s9-02-e1', enunciado: 'Identifica las relaciones semánticas (sinonimia, antonimia, hiperonimia) entre palabras clave del texto.' },
            { id: 'lc-s9-02-e2', enunciado: 'Relaciona información de diferentes párrafos para construir una interpretación global.' },
          ],
        },
        {
          id: 'lc-s9-03',
          enunciado: 'Identifica y analiza figuras retóricas, recursos estilísticos y lenguaje connotativo en textos literarios y no literarios.',
          competencia: 'identificar',
          componente: 'semantico',
          evidencias: [
            { id: 'lc-s9-03-e1', enunciado: 'Reconoce metáforas, símiles, hipérboles y personificaciones en textos literarios.' },
            { id: 'lc-s9-03-e2', enunciado: 'Interpreta el efecto de los recursos estilísticos en la construcción de sentido del texto.' },
          ],
        },
        // --- Sintáctico ---
        {
          id: 'lc-s9-04',
          enunciado: 'Analiza la estructura organizativa de textos complejos y reconoce cómo las partes contribuyen al sentido global.',
          competencia: 'comprender',
          componente: 'sintactico',
          evidencias: [
            { id: 'lc-s9-04-e1', enunciado: 'Identifica la tesis, los argumentos y la conclusión en un texto argumentativo.' },
            { id: 'lc-s9-04-e2', enunciado: 'Reconoce la función de cada parte del texto en la construcción del significado global.' },
          ],
        },
        {
          id: 'lc-s9-05',
          enunciado: 'Evalúa el uso de conectores lógicos, marcadores discursivos y mecanismos de cohesión en la construcción de textos.',
          competencia: 'comprender',
          componente: 'sintactico',
          evidencias: [
            { id: 'lc-s9-05-e1', enunciado: 'Identifica conectores de causa, consecuencia, condición, contraste y adición en textos argumentativos.' },
            { id: 'lc-s9-05-e2', enunciado: 'Evalúa si la selección de conectores es adecuada para mantener la coherencia del texto.' },
          ],
        },
        {
          id: 'lc-s9-06',
          enunciado: 'Reconoce las características formales de diferentes tipologías textuales y sus variantes.',
          competencia: 'comprender',
          componente: 'sintactico',
          evidencias: [
            { id: 'lc-s9-06-e1', enunciado: 'Diferencia entre textos narrativos, expositivos, argumentativos, descriptivos e instructivos por sus rasgos formales.' },
            { id: 'lc-s9-06-e2', enunciado: 'Identifica variantes dentro de una tipología (crónica, editorial, ensayo, reseña).' },
          ],
        },
        {
          id: 'lc-s9-07',
          enunciado: 'Identifica la función de elementos paratextuales (títulos, subtítulos, epígrafes, notas al pie, imágenes) en la comprensión del texto.',
          competencia: 'comprender',
          componente: 'sintactico',
          evidencias: [
            { id: 'lc-s9-07-e1', enunciado: 'Establece la relación entre el título o subtítulo y el contenido del texto.' },
            { id: 'lc-s9-07-e2', enunciado: 'Reconoce cómo las imágenes, tablas o notas al pie complementan la información del texto.' },
          ],
        },
        // --- Pragmático ---
        {
          id: 'lc-s9-08',
          enunciado: 'Evalúa la intención comunicativa del autor y los recursos persuasivos utilizados.',
          competencia: 'reflexionar',
          componente: 'pragmatico',
          evidencias: [
            { id: 'lc-s9-08-e1', enunciado: 'Identifica las estrategias argumentativas que usa el autor para persuadir al lector.' },
            { id: 'lc-s9-08-e2', enunciado: 'Distingue entre la información objetiva y la valoración subjetiva del autor.' },
            { id: 'lc-s9-08-e3', enunciado: 'Reconoce el tono del texto (irónico, crítico, informativo, persuasivo).' },
          ],
        },
        {
          id: 'lc-s9-09',
          enunciado: 'Asume una posición crítica frente a lo leído y la sustenta con argumentos del texto y de su conocimiento previo.',
          competencia: 'reflexionar',
          componente: 'pragmatico',
          evidencias: [
            { id: 'lc-s9-09-e1', enunciado: 'Formula una opinión sobre el contenido del texto y la sustenta con evidencias textuales.' },
            { id: 'lc-s9-09-e2', enunciado: 'Compara su punto de vista con el del autor identificando coincidencias y divergencias.' },
          ],
        },
        {
          id: 'lc-s9-10',
          enunciado: 'Establece relaciones intertextuales entre diferentes textos y los contextualiza social y culturalmente.',
          competencia: 'reflexionar',
          componente: 'pragmatico',
          evidencias: [
            { id: 'lc-s9-10-e1', enunciado: 'Compara la perspectiva de dos o más textos sobre un mismo tema.' },
            { id: 'lc-s9-10-e2', enunciado: 'Relaciona el contenido de un texto con el contexto histórico, social o cultural en el que fue producido.' },
          ],
        },
      ],

      niveles: [
        {
          nombre: 'Insuficiente',
          rango: [100, 226],
          color: '#EF4444',
          descripcion: 'El estudiante no supera las preguntas de menor complejidad de la prueba. No extrae información puntual de textos de complejidad media ni reconoce la estructura básica de textos argumentativos.',
          aprendizajesEsperados: [],
        },
        {
          nombre: 'Mínimo',
          rango: [226, 310],
          color: '#F59E0B',
          descripcion: 'El estudiante extrae información explícita de textos de complejidad media, identifica la estructura básica de textos argumentativos y diferencia tipologías textuales por sus rasgos formales.',
          aprendizajesEsperados: ['lc-s9-01', 'lc-s9-04', 'lc-s9-06'],
        },
        {
          nombre: 'Satisfactorio',
          rango: [310, 406],
          color: '#10B981',
          descripcion: 'El estudiante construye el sentido global del texto relacionando proposiciones, analiza figuras retóricas, evalúa el uso de conectores y reconoce la intención comunicativa del autor y sus recursos persuasivos.',
          aprendizajesEsperados: ['lc-s9-01', 'lc-s9-02', 'lc-s9-03', 'lc-s9-04', 'lc-s9-05', 'lc-s9-06', 'lc-s9-08'],
        },
        {
          nombre: 'Avanzado',
          rango: [406, 500],
          color: '#3B82F6',
          descripcion: 'El estudiante identifica la función de elementos paratextuales, asume una posición crítica sustentada con evidencias textuales, y establece relaciones intertextuales contextualizando los textos social y culturalmente.',
          aprendizajesEsperados: ['lc-s9-01', 'lc-s9-02', 'lc-s9-03', 'lc-s9-04', 'lc-s9-05', 'lc-s9-06', 'lc-s9-07', 'lc-s9-08', 'lc-s9-09', 'lc-s9-10'],
        },
      ],
    },

    // =========================================================
    // SABER 11°
    // =========================================================
    'saber-11': {
      nombre: 'Saber 11°',
      grados: ['10', '11'],

      aprendizajes: [
        // --- Semántico ---
        {
          id: 'lc-s11-01',
          enunciado: 'Identifica y entiende los contenidos locales que conforman un texto: significados de palabras, expresiones y proposiciones, e información explícita e implícita.',
          competencia: 'identificar',
          componente: 'semantico',
          evidencias: [
            { id: 'lc-s11-01-e1', enunciado: 'Comprende el significado de palabras y expresiones de uso especializado en contextos académicos.' },
            { id: 'lc-s11-01-e2', enunciado: 'Identifica información explícita e implícita en textos de alta complejidad.' },
            { id: 'lc-s11-01-e3', enunciado: 'Distingue entre el sentido literal y el sentido figurado de expresiones en contextos diversos.' },
          ],
        },
        {
          id: 'lc-s11-02',
          enunciado: 'Establece relaciones semánticas entre enunciados, párrafos y secciones para construir el sentido global de textos filosóficos, científicos, periodísticos y literarios.',
          competencia: 'comprender',
          componente: 'semantico',
          evidencias: [
            { id: 'lc-s11-02-e1', enunciado: 'Sintetiza el contenido de un texto complejo identificando las ideas principales y sus relaciones.' },
            { id: 'lc-s11-02-e2', enunciado: 'Relaciona proposiciones de diferentes partes del texto para construir una interpretación coherente.' },
          ],
        },
        {
          id: 'lc-s11-03',
          enunciado: 'Interpreta textos que involucran múltiples sistemas simbólicos (textos discontinuos: gráficas, tablas, esquemas, infografías) y los relaciona con textos continuos.',
          competencia: 'identificar',
          componente: 'semantico',
          evidencias: [
            { id: 'lc-s11-03-e1', enunciado: 'Extrae información de gráficas, tablas estadísticas e infografías y la relaciona con el texto escrito.' },
            { id: 'lc-s11-03-e2', enunciado: 'Traduce información presentada en un formato a otro (de tabla a texto, de gráfica a proposición).' },
          ],
        },
        // --- Sintáctico ---
        {
          id: 'lc-s11-04',
          enunciado: 'Comprende cómo se articulan las partes de un texto para darle un sentido global: estructura, coherencia y cohesión.',
          competencia: 'comprender',
          componente: 'sintactico',
          evidencias: [
            { id: 'lc-s11-04-e1', enunciado: 'Identifica la tesis central y los argumentos de apoyo en textos argumentativos complejos.' },
            { id: 'lc-s11-04-e2', enunciado: 'Evalúa la organización de un texto y la progresión temática.' },
            { id: 'lc-s11-04-e3', enunciado: 'Reconoce la función de los párrafos en la estructura global del texto.' },
          ],
        },
        {
          id: 'lc-s11-05',
          enunciado: 'Analiza las estrategias discursivas de textos argumentativos de alta complejidad (ensayo, artículo de opinión, editorial, texto filosófico).',
          competencia: 'comprender',
          componente: 'sintactico',
          evidencias: [
            { id: 'lc-s11-05-e1', enunciado: 'Identifica falacias argumentativas, generalizaciones indebidas y razonamientos circulares.' },
            { id: 'lc-s11-05-e2', enunciado: 'Reconoce las estrategias retóricas del autor (ejemplificación, analogía, contraargumentación, apelación a la autoridad).' },
          ],
        },
        {
          id: 'lc-s11-06',
          enunciado: 'Reconoce las características del discurso académico y científico y lo diferencia de otros tipos de discurso.',
          competencia: 'comprender',
          componente: 'sintactico',
          evidencias: [
            { id: 'lc-s11-06-e1', enunciado: 'Identifica marcas del discurso académico (citaciones, referencias, lenguaje técnico, registro formal).' },
            { id: 'lc-s11-06-e2', enunciado: 'Diferencia entre afirmaciones verificables empíricamente y valoraciones subjetivas.' },
          ],
        },
        // --- Pragmático ---
        {
          id: 'lc-s11-07',
          enunciado: 'Reflexiona a partir de un texto y evalúa su contenido: valida o cuestiona los planteamientos del autor con argumentos propios o de otras fuentes.',
          competencia: 'reflexionar',
          componente: 'pragmatico',
          evidencias: [
            { id: 'lc-s11-07-e1', enunciado: 'Evalúa la validez de los argumentos del autor usando evidencia del texto y conocimiento externo.' },
            { id: 'lc-s11-07-e2', enunciado: 'Identifica los supuestos e implicaciones de las afirmaciones del autor.' },
            { id: 'lc-s11-07-e3', enunciado: 'Formula contraargumentos razonados frente a las posiciones del texto.' },
          ],
        },
        {
          id: 'lc-s11-08',
          enunciado: 'Evalúa la forma de un texto: reconoce las estrategias del autor y su eficacia comunicativa.',
          competencia: 'reflexionar',
          componente: 'pragmatico',
          evidencias: [
            { id: 'lc-s11-08-e1', enunciado: 'Evalúa si las estrategias argumentativas del autor son efectivas para su propósito.' },
            { id: 'lc-s11-08-e2', enunciado: 'Analiza cómo el tono, el registro y la selección léxica contribuyen al efecto deseado.' },
          ],
        },
        {
          id: 'lc-s11-09',
          enunciado: 'Contextualiza textos en su marco social, histórico, cultural e ideológico y reconoce cómo estos factores condicionan el sentido.',
          competencia: 'reflexionar',
          componente: 'pragmatico',
          evidencias: [
            { id: 'lc-s11-09-e1', enunciado: 'Relaciona el contenido de un texto con el contexto histórico y cultural de su producción.' },
            { id: 'lc-s11-09-e2', enunciado: 'Reconoce los presupuestos ideológicos o culturales que subyacen a un texto.' },
          ],
        },
        {
          id: 'lc-s11-10',
          enunciado: 'Establece relaciones intertextuales entre textos de diferentes épocas, géneros y tradiciones, e identifica influencias y diálogos entre ellos.',
          competencia: 'reflexionar',
          componente: 'pragmatico',
          evidencias: [
            { id: 'lc-s11-10-e1', enunciado: 'Compara perspectivas de diferentes autores sobre un mismo tema o problema.' },
            { id: 'lc-s11-10-e2', enunciado: 'Reconoce cómo un texto alude, cita o transforma ideas de otros textos.' },
          ],
        },
      ],

      niveles: [
        {
          nombre: 'Insuficiente',
          rango: [0, 36],
          color: '#EF4444',
          descripcion: 'El estudiante no supera las preguntas de menor complejidad de la prueba. No identifica información explícita en textos de alta complejidad ni reconoce la estructura básica de textos argumentativos complejos.',
          aprendizajesEsperados: [],
        },
        {
          nombre: 'Mínimo',
          rango: [36, 51],
          color: '#F59E0B',
          descripcion: 'El estudiante identifica información explícita e implícita en textos de alta complejidad, interpreta textos discontinuos (gráficas, tablas) y reconoce la tesis y los argumentos en textos argumentativos.',
          aprendizajesEsperados: ['lc-s11-01', 'lc-s11-03', 'lc-s11-04'],
        },
        {
          nombre: 'Satisfactorio',
          rango: [51, 71],
          color: '#10B981',
          descripcion: 'El estudiante construye el sentido global de textos complejos relacionando sus partes, analiza estrategias discursivas argumentativas, y reflexiona sobre el contenido evaluando la validez de los planteamientos del autor.',
          aprendizajesEsperados: ['lc-s11-01', 'lc-s11-02', 'lc-s11-03', 'lc-s11-04', 'lc-s11-05', 'lc-s11-07'],
        },
        {
          nombre: 'Avanzado',
          rango: [71, 100],
          color: '#3B82F6',
          descripcion: 'El estudiante diferencia el discurso académico de otros tipos de discurso, evalúa la eficacia comunicativa del autor, contextualiza textos en su marco ideológico y cultural, y establece relaciones intertextuales entre textos de diferentes épocas y tradiciones.',
          aprendizajesEsperados: ['lc-s11-01', 'lc-s11-02', 'lc-s11-03', 'lc-s11-04', 'lc-s11-05', 'lc-s11-06', 'lc-s11-07', 'lc-s11-08', 'lc-s11-09', 'lc-s11-10'],
        },
      ],
    },
  },
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ICFES_LECTURA_CRITICA }
}
