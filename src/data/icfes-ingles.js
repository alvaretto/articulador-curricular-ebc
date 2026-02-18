/**
 * Marco de Referencia ICFES Saber 11° - Inglés
 * Instituto Colombiano para la Evaluación de la Educación (ICFES)
 *
 * Fuente oficial: Matrices de Referencia y Especificaciones de Prueba
 * Saber 11° - Inglés - ICFES Colombia
 * Marco de referencia: MCER/CEFR (Marco Común Europeo de Referencia)
 *
 * La prueba de Inglés en el ICFES Saber 11 evalúa la competencia comunicativa
 * en lengua extranjera. A diferencia de otras áreas, Inglés solo se evalúa
 * en Saber 11° (no en Saber 3°, 5° ni 9°).
 *
 * Niveles de desempeño MCER:
 *   A-  (<A1)  — Pre-A1: No demuestra el nivel mínimo
 *   A1          — Principiante: vocabulario muy básico y estructura mínima
 *   A2          — Básico: comprende frases y vocabulario cotidiano
 *   B1          — Umbral: comprende textos y conversaciones sobre temas familiares
 *   B+  (>B1)  — Avanzado: supera el nivel esperado para Media
 *
 * Puntajes en escala 0-100.
 */

const ICFES_INGLES = {
  area: 'ingles',
  nombre: 'Inglés',

  // Competencias evaluadas
  competencias: [
    {
      id: 'uso-lengua',
      nombre: 'Uso de la lengua en contexto',
      descripcion: 'Capacidad para comprender y usar correctamente estructuras gramaticales, vocabulario y expresiones en contextos comunicativos reales. Incluye el uso de formas verbales, conectores, preposiciones y vocabulario en situaciones auténticas.',
    },
    {
      id: 'comprension-lectura',
      nombre: 'Comprensión de lectura',
      descripcion: 'Capacidad para leer y comprender textos escritos en inglés de distinta tipología (narrativos, descriptivos, informativos, argumentativos). Incluye identificar información explícita e implícita, reconocer la idea central y evaluar el propósito del autor.',
    },
    {
      id: 'comprension-auditiva',
      nombre: 'Comprensión auditiva',
      descripcion: 'Capacidad para comprender mensajes orales en inglés en contextos variados. En la aplicación escrita de Saber 11°, se evalúa mediante textos que simulan situaciones de escucha (transcripciones, diálogos, instrucciones) en lugar de audio real.',
    },
  ],

  // Componentes evaluados
  componentes: [
    {
      id: 'lexical',
      nombre: 'Componente lexical',
      descripcion: 'Conocimiento y uso apropiado del vocabulario en contexto: selección léxica, familias de palabras, colocaciones, expresiones idiomáticas y vocabulario académico o temático relevante para la comunicación.',
    },
    {
      id: 'gramatical',
      nombre: 'Componente gramatical',
      descripcion: 'Uso correcto de las estructuras gramaticales del inglés: tiempos verbales, modalidad, voz pasiva, oraciones condicionales, pronombres, preposiciones, artículos y orden de elementos en la oración.',
    },
    {
      id: 'pragmatico',
      nombre: 'Componente pragmático',
      descripcion: 'Comprensión del uso del lenguaje en situaciones comunicativas reales: intención del hablante, función de los actos de habla (invitar, rechazar, disculparse, opinar), registro (formal/informal) y adecuación al contexto.',
    },
  ],

  // Solo Saber 11° — Inglés no se evalúa en Saber 3°, 5° ni 9°
  pruebas: {

    // =========================================================
    // SABER 11°
    // =========================================================
    'saber-11': {
      nombre: 'Saber 11°',
      grados: ['10', '11'],

      aprendizajes: [
        {
          id: 'ing-s11-01',
          enunciado: 'Comprende el significado de palabras y expresiones en contexto, incluyendo vocabulario académico y de uso general.',
          competencia: 'comprension-lectura',
          componente: 'lexical',
          evidencias: [
            { id: 'ing-s11-01-e1', enunciado: 'Identifica el significado de una palabra desconocida a partir del contexto del texto.' },
            { id: 'ing-s11-01-e2', enunciado: 'Reconoce el uso de expresiones idiomáticas y coloquiales en contextos comunicativos.' },
            { id: 'ing-s11-01-e3', enunciado: 'Selecciona el sinónimo o paráfrasis correcta de una palabra según el contexto.' },
          ],
        },
        {
          id: 'ing-s11-02',
          enunciado: 'Identifica la idea principal y los detalles relevantes en textos escritos de mediana complejidad.',
          competencia: 'comprension-lectura',
          componente: 'lexical',
          evidencias: [
            { id: 'ing-s11-02-e1', enunciado: 'Reconoce el tema principal de un texto narrativo, descriptivo o informativo.' },
            { id: 'ing-s11-02-e2', enunciado: 'Localiza información específica (datos, nombres, cifras) en un texto de mediana extensión.' },
            { id: 'ing-s11-02-e3', enunciado: 'Distingue entre información explícita e implícita en un texto.' },
          ],
        },
        {
          id: 'ing-s11-03',
          enunciado: 'Comprende la función comunicativa y el propósito del autor en diferentes tipos de texto.',
          competencia: 'comprension-lectura',
          componente: 'pragmatico',
          evidencias: [
            { id: 'ing-s11-03-e1', enunciado: 'Identifica si el texto busca informar, persuadir, entretener o instruir.' },
            { id: 'ing-s11-03-e2', enunciado: 'Reconoce la actitud o posición del autor frente al tema tratado.' },
            { id: 'ing-s11-03-e3', enunciado: 'Diferencia entre hechos y opiniones en un texto de tipo argumentativo.' },
          ],
        },
        {
          id: 'ing-s11-04',
          enunciado: 'Usa formas verbales correctas en contexto, incluyendo tiempos simples, continuos, perfectos y modales.',
          competencia: 'uso-lengua',
          componente: 'gramatical',
          evidencias: [
            { id: 'ing-s11-04-e1', enunciado: 'Selecciona el tiempo verbal adecuado para completar una oración según el contexto.' },
            { id: 'ing-s11-04-e2', enunciado: 'Reconoce errores en el uso de tiempos verbales en oraciones y textos cortos.' },
            { id: 'ing-s11-04-e3', enunciado: 'Usa verbos modales (can, could, should, must, might) con el significado apropiado en contexto.' },
          ],
        },
        {
          id: 'ing-s11-05',
          enunciado: 'Comprende y usa estructuras gramaticales como la voz pasiva, las oraciones condicionales y los pronombres relativos.',
          competencia: 'uso-lengua',
          componente: 'gramatical',
          evidencias: [
            { id: 'ing-s11-05-e1', enunciado: 'Identifica el agente y el paciente en oraciones en voz pasiva.' },
            { id: 'ing-s11-05-e2', enunciado: 'Completa oraciones condicionales de tipo 1, 2 y 3 seleccionando la forma correcta.' },
            { id: 'ing-s11-05-e3', enunciado: 'Usa pronombres relativos (who, which, that, where) para unir oraciones.' },
          ],
        },
        {
          id: 'ing-s11-06',
          enunciado: 'Interpreta el significado de actos de habla en situaciones comunicativas (invitaciones, disculpas, consejos, opiniones).',
          competencia: 'uso-lengua',
          componente: 'pragmatico',
          evidencias: [
            { id: 'ing-s11-06-e1', enunciado: 'Identifica si una expresión busca dar un consejo, hacer una sugerencia o expresar una queja.' },
            { id: 'ing-s11-06-e2', enunciado: 'Selecciona la respuesta más apropiada a un acto de habla en un diálogo dado.' },
          ],
        },
        {
          id: 'ing-s11-07',
          enunciado: 'Comprende y reconstruye la secuencia lógica de textos e intercambios comunicativos.',
          competencia: 'comprension-lectura',
          componente: 'pragmatico',
          evidencias: [
            { id: 'ing-s11-07-e1', enunciado: 'Ordena oraciones o párrafos desordenados para reconstruir un texto coherente.' },
            { id: 'ing-s11-07-e2', enunciado: 'Identifica conectores lógicos (however, therefore, although, in addition) y su función en el texto.' },
          ],
        },
        {
          id: 'ing-s11-08',
          enunciado: 'Comprende textos en situaciones que simulan la escucha (diálogos escritos, transcripciones, instrucciones).',
          competencia: 'comprension-auditiva',
          componente: 'pragmatico',
          evidencias: [
            { id: 'ing-s11-08-e1', enunciado: 'Identifica el propósito y el tema de un diálogo o conversación presentada por escrito.' },
            { id: 'ing-s11-08-e2', enunciado: 'Deduce información implícita a partir de lo que dicen los participantes en un intercambio.' },
          ],
        },
        {
          id: 'ing-s11-09',
          enunciado: 'Selecciona el vocabulario y las expresiones más adecuadas para completar textos según el contexto y el registro.',
          competencia: 'uso-lengua',
          componente: 'lexical',
          evidencias: [
            { id: 'ing-s11-09-e1', enunciado: 'Elige la palabra o expresión más apropiada para completar un texto formal o informal.' },
            { id: 'ing-s11-09-e2', enunciado: 'Distingue entre palabras de significado similar y selecciona la más precisa para el contexto.' },
          ],
        },
        {
          id: 'ing-s11-10',
          enunciado: 'Infiere significados y hace deducciones a partir de información explícita e implícita en textos escritos.',
          competencia: 'comprension-lectura',
          componente: 'lexical',
          evidencias: [
            { id: 'ing-s11-10-e1', enunciado: 'Deduce la intención del autor o el estado de ánimo de un personaje a partir de pistas del texto.' },
            { id: 'ing-s11-10-e2', enunciado: 'Extrae conclusiones lógicas a partir de la información presentada en el texto.' },
          ],
        },
      ],

      niveles: [
        {
          nombre: 'A-',
          rango: [0, 30],
          color: '#ef4444',
          descripcion: 'El estudiante no demuestra el nivel mínimo de la prueba. Tiene dificultades para comprender vocabulario muy básico y no logra identificar información explícita en textos cortos y sencillos.',
          aprendizajesEsperados: [],
        },
        {
          nombre: 'A1',
          rango: [30, 50],
          color: '#f59e0b',
          descripcion: 'El estudiante comprende vocabulario muy básico y puede identificar información explícita en textos muy cortos. Reconoce frases aisladas sobre temas familiares como la familia, la escuela y objetos cotidianos.',
          aprendizajesEsperados: ['ing-s11-01', 'ing-s11-02'],
        },
        {
          nombre: 'A2',
          rango: [50, 65],
          color: '#eab308',
          descripcion: 'El estudiante comprende frases y vocabulario cotidiano relacionado con su entorno inmediato. Identifica la idea principal de textos cortos y usa estructuras gramaticales básicas. Puede deducir el significado de palabras por contexto.',
          aprendizajesEsperados: ['ing-s11-01', 'ing-s11-02', 'ing-s11-04', 'ing-s11-09'],
        },
        {
          nombre: 'B1',
          rango: [65, 85],
          color: '#22c55e',
          descripcion: 'El estudiante comprende textos de mediana complejidad sobre temas familiares y de interés general. Identifica el propósito del autor, usa correctamente formas verbales y estructuras como la voz pasiva y las condicionales. Hace inferencias a partir del texto.',
          aprendizajesEsperados: ['ing-s11-01', 'ing-s11-02', 'ing-s11-03', 'ing-s11-04', 'ing-s11-05', 'ing-s11-06', 'ing-s11-09', 'ing-s11-10'],
        },
        {
          nombre: 'B+',
          rango: [85, 100],
          color: '#3b82f6',
          descripcion: 'El estudiante supera el nivel esperado para la Media. Comprende textos complejos de distinta tipología, infiere significados sofisticados, usa con precisión todas las estructuras gramaticales evaluadas y reconoce matices pragmáticos y retóricos en los textos.',
          aprendizajesEsperados: ['ing-s11-01', 'ing-s11-02', 'ing-s11-03', 'ing-s11-04', 'ing-s11-05', 'ing-s11-06', 'ing-s11-07', 'ing-s11-08', 'ing-s11-09', 'ing-s11-10'],
        },
      ],
    },
  },
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ICFES_INGLES };
}
