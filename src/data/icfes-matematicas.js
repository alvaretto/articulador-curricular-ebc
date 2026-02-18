/**
 * Marco de Referencia ICFES Saber - Matemáticas
 * Instituto Colombiano para la Evaluación de la Educación (ICFES)
 *
 * Fuente oficial: Matrices de Referencia y Especificaciones de Prueba
 * Saber 3°, 5°, 9° y Saber 11° - ICFES Colombia
 * Disponible en: https://www.icfes.gov.co/evaluaciones/pruebas-saber/marcos-de-referencia
 *
 * Estructura:
 * - 3 competencias transversales a todas las pruebas
 * - 3 componentes temáticos (Numérico-Variacional, Geométrico-Métrico, Aleatorio)
 * - 4 pruebas: Saber 3°, Saber 5°, Saber 9°, Saber 11°
 * - Cada prueba incluye aprendizajes con evidencias y niveles de desempeño
 */

const ICFES_MATEMATICAS = {
  area: 'matematicas',
  nombre: 'Matemáticas',

  // Las 3 competencias evaluadas por ICFES en matemáticas
  competencias: [
    {
      id: 'razonamiento',
      nombre: 'Razonamiento y argumentación',
      descripcion: 'Capacidad para examinar, reflexionar y evaluar afirmaciones, inferencias y métodos matemáticos. Incluye identificar patrones, generalizar, conjeturar, justificar o refutar conclusiones y construir cadenas argumentativas.',
    },
    {
      id: 'comunicacion',
      nombre: 'Comunicación, representación y modelación',
      descripcion: 'Capacidad para expresar ideas matemáticas de forma oral, escrita, gráfica o simbólica; traducir información entre diferentes representaciones (tablas, gráficas, expresiones algebraicas) y construir modelos de situaciones reales.',
    },
    {
      id: 'resolucion',
      nombre: 'Resolución y planteamiento de problemas',
      descripcion: 'Capacidad para identificar, formular y resolver problemas matemáticos en diferentes contextos; seleccionar y aplicar estrategias pertinentes, verificar resultados y extender soluciones a nuevas situaciones.',
    },
  ],

  // Los 3 componentes evaluados
  componentes: [
    {
      id: 'numerico-variacional',
      nombre: 'Numérico-Variacional',
      descripcion: 'Abarca el pensamiento numérico (sistemas numéricos, operaciones, propiedades), el pensamiento variacional (patrones, relaciones de cambio, expresiones algebraicas, funciones y ecuaciones) y los sistemas algebraicos y analíticos.',
    },
    {
      id: 'geometrico-metrico',
      nombre: 'Geométrico-Métrico',
      descripcion: 'Abarca el pensamiento espacial (formas, propiedades, relaciones entre figuras planas y tridimensionales, transformaciones), el pensamiento métrico (magnitudes, unidades, estimación y cálculo de medidas) y los sistemas geométricos.',
    },
    {
      id: 'aleatorio',
      nombre: 'Aleatorio',
      descripcion: 'Abarca el pensamiento aleatorio y los sistemas de datos: recolección, organización, representación e interpretación de datos; medidas estadísticas (tendencia central, dispersión); probabilidad de eventos simples y compuestos.',
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
        {
          id: 'mat-s3-01',
          enunciado: 'Reconoce significados del número en diferentes contextos (medición, conteo, comparación, codificación y localización).',
          competencia: 'comunicacion',
          componente: 'numerico-variacional',
          evidencias: [
            { id: 'mat-s3-01-e1', enunciado: 'Identifica el valor posicional de las cifras en números naturales de dos y tres dígitos.' },
            { id: 'mat-s3-01-e2', enunciado: 'Compara y ordena números naturales usando los símbolos mayor que, menor que e igual.' },
            { id: 'mat-s3-01-e3', enunciado: 'Reconoce el número como código en situaciones cotidianas (número de casa, teléfono, código postal).' },
          ],
        },
        {
          id: 'mat-s3-02',
          enunciado: 'Resuelve y formula problemas en situaciones de adición y sustracción con números naturales.',
          competencia: 'resolucion',
          componente: 'numerico-variacional',
          evidencias: [
            { id: 'mat-s3-02-e1', enunciado: 'Identifica la operación adecuada (suma o resta) según el tipo de situación presentada.' },
            { id: 'mat-s3-02-e2', enunciado: 'Calcula sumas y restas de números de dos y tres cifras verificando el resultado.' },
            { id: 'mat-s3-02-e3', enunciado: 'Propone una situación cotidiana que se resuelva con adición o sustracción.' },
          ],
        },
        {
          id: 'mat-s3-03',
          enunciado: 'Usa diversas estrategias de cálculo y estimación para resolver problemas en situaciones multiplicativas.',
          competencia: 'resolucion',
          componente: 'numerico-variacional',
          evidencias: [
            { id: 'mat-s3-03-e1', enunciado: 'Interpreta la multiplicación como adición repetida en situaciones concretas.' },
            { id: 'mat-s3-03-e2', enunciado: 'Resuelve problemas sencillos que requieren la multiplicación como operación principal.' },
          ],
        },
        {
          id: 'mat-s3-04',
          enunciado: 'Reconoce y describe regularidades y patrones en secuencias numéricas y geométricas.',
          competencia: 'razonamiento',
          componente: 'numerico-variacional',
          evidencias: [
            { id: 'mat-s3-04-e1', enunciado: 'Identifica la regla de formación de una secuencia numérica o de figuras.' },
            { id: 'mat-s3-04-e2', enunciado: 'Predice los siguientes elementos de una secuencia aplicando la regla identificada.' },
          ],
        },
        {
          id: 'mat-s3-05',
          enunciado: 'Reconoce y nombra figuras geométricas planas y cuerpos sólidos a partir de sus características.',
          competencia: 'comunicacion',
          componente: 'geometrico-metrico',
          evidencias: [
            { id: 'mat-s3-05-e1', enunciado: 'Identifica y nombra figuras planas (círculo, triángulo, cuadrado, rectángulo) en el entorno.' },
            { id: 'mat-s3-05-e2', enunciado: 'Clasifica figuras geométricas según el número de lados y vértices.' },
            { id: 'mat-s3-05-e3', enunciado: 'Distingue figuras planas de cuerpos sólidos por sus propiedades.' },
          ],
        },
        {
          id: 'mat-s3-06',
          enunciado: 'Compara y ordena objetos según atributos medibles (longitud, masa, capacidad) usando unidades convencionales y no convencionales.',
          competencia: 'comunicacion',
          componente: 'geometrico-metrico',
          evidencias: [
            { id: 'mat-s3-06-e1', enunciado: 'Estima y mide longitudes usando el centímetro y el metro.' },
            { id: 'mat-s3-06-e2', enunciado: 'Compara dos objetos según su longitud, masa o capacidad y los ordena.' },
          ],
        },
        {
          id: 'mat-s3-07',
          enunciado: 'Representa datos del entorno usando pictogramas y diagramas de barras, e interpreta la información presentada.',
          competencia: 'comunicacion',
          componente: 'aleatorio',
          evidencias: [
            { id: 'mat-s3-07-e1', enunciado: 'Lee pictogramas y diagramas de barras respondiendo preguntas sobre los datos.' },
            { id: 'mat-s3-07-e2', enunciado: 'Registra datos cualitativos en tablas y los representa con pictogramas sencillos.' },
          ],
        },
        {
          id: 'mat-s3-08',
          enunciado: 'Identifica, en situaciones cotidianas, la posibilidad de ocurrencia de eventos (posible, imposible, seguro).',
          competencia: 'razonamiento',
          componente: 'aleatorio',
          evidencias: [
            { id: 'mat-s3-08-e1', enunciado: 'Clasifica eventos como posibles, imposibles o seguros en situaciones de la vida diaria.' },
            { id: 'mat-s3-08-e2', enunciado: 'Argumenta por qué un evento es más probable que otro en una situación concreta.' },
          ],
        },
      ],

      niveles: [
        {
          nombre: 'Insuficiente',
          rango: [100, 226],
          color: '#EF4444',
          descripcion: 'El estudiante no supera las preguntas de menor complejidad de la prueba. No reconoce el valor posicional de números de dos cifras ni identifica figuras geométricas básicas a partir de sus propiedades.',
          aprendizajesEsperados: [],
        },
        {
          nombre: 'Mínimo',
          rango: [226, 295],
          color: '#F59E0B',
          descripcion: 'El estudiante reconoce el valor posicional de números naturales de hasta tres cifras, resuelve sumas y restas sencillas, identifica figuras geométricas básicas por su nombre y lee datos en pictogramas simples.',
          aprendizajesEsperados: ['mat-s3-01', 'mat-s3-05', 'mat-s3-07'],
        },
        {
          nombre: 'Satisfactorio',
          rango: [295, 380],
          color: '#10B981',
          descripcion: 'El estudiante resuelve problemas que requieren adición, sustracción y multiplicación en contextos cotidianos, identifica regularidades en secuencias, mide longitudes usando unidades convencionales e interpreta diagramas de barras.',
          aprendizajesEsperados: ['mat-s3-01', 'mat-s3-02', 'mat-s3-03', 'mat-s3-05', 'mat-s3-06', 'mat-s3-07'],
        },
        {
          nombre: 'Avanzado',
          rango: [380, 500],
          color: '#3B82F6',
          descripcion: 'El estudiante formula y resuelve problemas en distintos contextos, predice elementos en secuencias numéricas y geométricas, compara magnitudes usando unidades del sistema métrico y argumenta sobre la posibilidad de ocurrencia de eventos.',
          aprendizajesEsperados: ['mat-s3-01', 'mat-s3-02', 'mat-s3-03', 'mat-s3-04', 'mat-s3-05', 'mat-s3-06', 'mat-s3-07', 'mat-s3-08'],
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
        {
          id: 'mat-s5-01',
          enunciado: 'Resuelve y formula problemas que involucran operaciones con números naturales, fracciones y decimales en diferentes contextos.',
          competencia: 'resolucion',
          componente: 'numerico-variacional',
          evidencias: [
            { id: 'mat-s5-01-e1', enunciado: 'Identifica la operación o secuencia de operaciones necesaria para resolver un problema con fracciones o decimales.' },
            { id: 'mat-s5-01-e2', enunciado: 'Calcula resultados de operaciones mixtas con números naturales, fracciones y decimales.' },
            { id: 'mat-s5-01-e3', enunciado: 'Verifica la razonabilidad del resultado de una operación en un contexto dado.' },
          ],
        },
        {
          id: 'mat-s5-02',
          enunciado: 'Establece relaciones entre fracciones, decimales y porcentajes y los usa en situaciones de proporcionalidad.',
          competencia: 'comunicacion',
          componente: 'numerico-variacional',
          evidencias: [
            { id: 'mat-s5-02-e1', enunciado: 'Convierte fracciones a decimales y porcentajes, y viceversa, en situaciones concretas.' },
            { id: 'mat-s5-02-e2', enunciado: 'Identifica porcentajes en situaciones cotidianas como descuentos y ofertas.' },
          ],
        },
        {
          id: 'mat-s5-03',
          enunciado: 'Reconoce y predice patrones numéricos y geométricos, y los representa con expresiones sencillas.',
          competencia: 'razonamiento',
          componente: 'numerico-variacional',
          evidencias: [
            { id: 'mat-s5-03-e1', enunciado: 'Identifica la regla de formación de una secuencia y la expresa verbalmente o con una expresión simple.' },
            { id: 'mat-s5-03-e2', enunciado: 'Predice elementos lejanos de una secuencia usando la regla identificada.' },
          ],
        },
        {
          id: 'mat-s5-04',
          enunciado: 'Calcula perímetros y áreas de figuras planas y aplica estos conceptos en la resolución de problemas.',
          competencia: 'resolucion',
          componente: 'geometrico-metrico',
          evidencias: [
            { id: 'mat-s5-04-e1', enunciado: 'Calcula el perímetro y el área de figuras planas regulares e irregulares.' },
            { id: 'mat-s5-04-e2', enunciado: 'Resuelve problemas cotidianos que requieren calcular área o perímetro de figuras compuestas.' },
            { id: 'mat-s5-04-e3', enunciado: 'Distingue entre área y perímetro, y reconoce cuál es el atributo relevante según el problema.' },
          ],
        },
        {
          id: 'mat-s5-05',
          enunciado: 'Identifica y describe características de figuras tridimensionales (prismas, pirámides, cilindros, conos y esferas).',
          competencia: 'comunicacion',
          componente: 'geometrico-metrico',
          evidencias: [
            { id: 'mat-s5-05-e1', enunciado: 'Clasifica cuerpos geométricos según sus caras, aristas y vértices.' },
            { id: 'mat-s5-05-e2', enunciado: 'Relaciona un cuerpo geométrico con su representación plana (desarrollo o vista).' },
          ],
        },
        {
          id: 'mat-s5-06',
          enunciado: 'Realiza conversiones entre unidades de medida del sistema métrico para longitud, masa, capacidad y tiempo.',
          competencia: 'comunicacion',
          componente: 'geometrico-metrico',
          evidencias: [
            { id: 'mat-s5-06-e1', enunciado: 'Convierte medidas entre unidades del sistema métrico (km, m, cm; kg, g; l, ml).' },
            { id: 'mat-s5-06-e2', enunciado: 'Resuelve problemas que requieren convertir unidades para comparar medidas.' },
          ],
        },
        {
          id: 'mat-s5-07',
          enunciado: 'Recopila, organiza y representa datos en tablas de frecuencia y gráficas estadísticas, e interpreta los resultados.',
          competencia: 'comunicacion',
          componente: 'aleatorio',
          evidencias: [
            { id: 'mat-s5-07-e1', enunciado: 'Organiza datos en tablas de frecuencias y los representa en gráficas de barras o circulares.' },
            { id: 'mat-s5-07-e2', enunciado: 'Lee e interpreta información presentada en diferentes tipos de gráficas estadísticas.' },
            { id: 'mat-s5-07-e3', enunciado: 'Calcula la moda, la mediana y el promedio de un conjunto de datos e interpreta su significado.' },
          ],
        },
        {
          id: 'mat-s5-08',
          enunciado: 'Conjetura y verifica predicciones acerca de la posibilidad de ocurrencia de eventos en situaciones aleatorias.',
          competencia: 'razonamiento',
          componente: 'aleatorio',
          evidencias: [
            { id: 'mat-s5-08-e1', enunciado: 'Estima la probabilidad de un evento simple usando la frecuencia relativa.' },
            { id: 'mat-s5-08-e2', enunciado: 'Compara la probabilidad de dos eventos y justifica cuál es más probable.' },
          ],
        },
      ],

      niveles: [
        {
          nombre: 'Insuficiente',
          rango: [100, 233],
          color: '#EF4444',
          descripcion: 'El estudiante no supera las preguntas de menor complejidad de la prueba. No resuelve operaciones básicas con fracciones ni interpreta gráficas estadísticas sencillas.',
          aprendizajesEsperados: [],
        },
        {
          nombre: 'Mínimo',
          rango: [233, 295],
          color: '#F59E0B',
          descripcion: 'El estudiante resuelve operaciones con números naturales, identifica figuras tridimensionales por su nombre, lee tablas de frecuencia sencillas y reconoce porcentajes en contextos directos.',
          aprendizajesEsperados: ['mat-s5-01', 'mat-s5-05', 'mat-s5-07'],
        },
        {
          nombre: 'Satisfactorio',
          rango: [295, 376],
          color: '#10B981',
          descripcion: 'El estudiante resuelve problemas con fracciones, decimales y porcentajes, calcula perímetros y áreas de figuras planas, convierte unidades del sistema métrico e interpreta gráficas estadísticas calculando medidas de tendencia central.',
          aprendizajesEsperados: ['mat-s5-01', 'mat-s5-02', 'mat-s5-04', 'mat-s5-05', 'mat-s5-06', 'mat-s5-07'],
        },
        {
          nombre: 'Avanzado',
          rango: [376, 500],
          color: '#3B82F6',
          descripcion: 'El estudiante formula y resuelve problemas complejos con operaciones mixtas, predice patrones y los representa algebraicamente, calcula áreas de figuras compuestas y estima probabilidades usando la frecuencia relativa.',
          aprendizajesEsperados: ['mat-s5-01', 'mat-s5-02', 'mat-s5-03', 'mat-s5-04', 'mat-s5-05', 'mat-s5-06', 'mat-s5-07', 'mat-s5-08'],
        },
      ],
    },

    // =========================================================
    // SABER 9°
    // =========================================================
    'saber-9': {
      nombre: 'Saber 9°',
      grados: ['9'],

      aprendizajes: [
        {
          id: 'mat-s9-01',
          enunciado: 'Utiliza números reales en sus diferentes representaciones y en distintos contextos para resolver problemas.',
          competencia: 'resolucion',
          componente: 'numerico-variacional',
          evidencias: [
            { id: 'mat-s9-01-e1', enunciado: 'Clasifica números reales (racionales e irracionales) y los ubica en la recta numérica.' },
            { id: 'mat-s9-01-e2', enunciado: 'Opera con números reales aplicando jerarquía de operaciones y propiedades (conmutativa, asociativa, distributiva).' },
            { id: 'mat-s9-01-e3', enunciado: 'Resuelve problemas que requieren cálculo exacto o aproximado con números reales.' },
          ],
        },
        {
          id: 'mat-s9-02',
          enunciado: 'Construye expresiones algebraicas que modelan situaciones de variación y las usa para resolver problemas.',
          competencia: 'comunicacion',
          componente: 'numerico-variacional',
          evidencias: [
            { id: 'mat-s9-02-e1', enunciado: 'Traduce situaciones verbales a expresiones algebraicas y viceversa.' },
            { id: 'mat-s9-02-e2', enunciado: 'Simplifica expresiones algebraicas usando propiedades de las operaciones.' },
          ],
        },
        {
          id: 'mat-s9-03',
          enunciado: 'Resuelve ecuaciones e inecuaciones lineales y las usa para modelar situaciones cotidianas.',
          competencia: 'resolucion',
          componente: 'numerico-variacional',
          evidencias: [
            { id: 'mat-s9-03-e1', enunciado: 'Resuelve ecuaciones lineales de una variable y verifica la solución.' },
            { id: 'mat-s9-03-e2', enunciado: 'Plantea y resuelve un problema cotidiano formulando una ecuación lineal.' },
            { id: 'mat-s9-03-e3', enunciado: 'Resuelve sistemas de ecuaciones lineales con dos incógnitas por distintos métodos.' },
          ],
        },
        {
          id: 'mat-s9-04',
          enunciado: 'Identifica y representa funciones lineales y cuadráticas como modelos de situaciones de variación.',
          competencia: 'comunicacion',
          componente: 'numerico-variacional',
          evidencias: [
            { id: 'mat-s9-04-e1', enunciado: 'Grafica funciones lineales y cuadráticas en el plano cartesiano identificando sus características.' },
            { id: 'mat-s9-04-e2', enunciado: 'Interpreta el significado de los parámetros de una función lineal (pendiente e intercepto) en un contexto.' },
          ],
        },
        {
          id: 'mat-s9-05',
          enunciado: 'Aplica criterios de congruencia y semejanza de triángulos en la resolución de problemas geométricos.',
          competencia: 'razonamiento',
          componente: 'geometrico-metrico',
          evidencias: [
            { id: 'mat-s9-05-e1', enunciado: 'Identifica triángulos congruentes o semejantes a partir de sus medidas y justifica el criterio usado.' },
            { id: 'mat-s9-05-e2', enunciado: 'Calcula medidas desconocidas en figuras semejantes usando razones de proporcionalidad.' },
          ],
        },
        {
          id: 'mat-s9-06',
          enunciado: 'Aplica el Teorema de Pitágoras y relaciones métricas para calcular longitudes en situaciones geométricas.',
          competencia: 'resolucion',
          componente: 'geometrico-metrico',
          evidencias: [
            { id: 'mat-s9-06-e1', enunciado: 'Usa el Teorema de Pitágoras para calcular la longitud de un lado desconocido de un triángulo rectángulo.' },
            { id: 'mat-s9-06-e2', enunciado: 'Resuelve situaciones de medición indirecta usando propiedades de triángulos y el Teorema de Pitágoras.' },
            { id: 'mat-s9-06-e3', enunciado: 'Calcula áreas y volúmenes de figuras y cuerpos geométricos en situaciones problema.' },
          ],
        },
        {
          id: 'mat-s9-07',
          enunciado: 'Describe y aplica las propiedades de las transformaciones geométricas (traslaciones, rotaciones, reflexiones y homotecias).',
          competencia: 'comunicacion',
          componente: 'geometrico-metrico',
          evidencias: [
            { id: 'mat-s9-07-e1', enunciado: 'Identifica y describe el tipo de transformación aplicada a una figura en el plano cartesiano.' },
            { id: 'mat-s9-07-e2', enunciado: 'Determina la imagen de una figura bajo una transformación dada.' },
          ],
        },
        {
          id: 'mat-s9-08',
          enunciado: 'Usa medidas de tendencia central (media, mediana, moda) y dispersión (rango, desviación estándar) para interpretar y comparar conjuntos de datos.',
          competencia: 'comunicacion',
          componente: 'aleatorio',
          evidencias: [
            { id: 'mat-s9-08-e1', enunciado: 'Calcula e interpreta la media, mediana y moda de un conjunto de datos en un contexto real.' },
            { id: 'mat-s9-08-e2', enunciado: 'Compara dos conjuntos de datos usando medidas de tendencia central e identifica diferencias.' },
            { id: 'mat-s9-08-e3', enunciado: 'Interpreta el rango y la desviación estándar como indicadores de dispersión.' },
          ],
        },
        {
          id: 'mat-s9-09',
          enunciado: 'Calcula probabilidades de eventos simples y compuestos usando diferentes métodos.',
          competencia: 'resolucion',
          componente: 'aleatorio',
          evidencias: [
            { id: 'mat-s9-09-e1', enunciado: 'Calcula la probabilidad de eventos simples usando listados y diagramas de árbol.' },
            { id: 'mat-s9-09-e2', enunciado: 'Determina la probabilidad de eventos complementarios y aplica la regla de la adición.' },
          ],
        },
        {
          id: 'mat-s9-10',
          enunciado: 'Interpreta y compara resultados de estudios estadísticos provenientes de medios de comunicación y diversas fuentes.',
          competencia: 'razonamiento',
          componente: 'aleatorio',
          evidencias: [
            { id: 'mat-s9-10-e1', enunciado: 'Evalúa la pertinencia y confiabilidad de información estadística publicada en medios.' },
            { id: 'mat-s9-10-e2', enunciado: 'Identifica posibles errores o sesgos en la presentación de datos estadísticos.' },
          ],
        },
      ],

      niveles: [
        {
          nombre: 'Insuficiente',
          rango: [100, 233],
          color: '#EF4444',
          descripcion: 'El estudiante no supera las preguntas de menor complejidad de la prueba. No resuelve ecuaciones lineales sencillas ni interpreta gráficas estadísticas básicas.',
          aprendizajesEsperados: [],
        },
        {
          nombre: 'Mínimo',
          rango: [233, 295],
          color: '#F59E0B',
          descripcion: 'El estudiante opera con números reales en situaciones directas, resuelve ecuaciones lineales de una variable, identifica figuras congruentes o semejantes y calcula medidas de tendencia central de conjuntos de datos simples.',
          aprendizajesEsperados: ['mat-s9-01', 'mat-s9-03', 'mat-s9-05', 'mat-s9-08'],
        },
        {
          nombre: 'Satisfactorio',
          rango: [295, 380],
          color: '#10B981',
          descripcion: 'El estudiante modela situaciones con expresiones algebraicas, resuelve sistemas de ecuaciones, aplica el Teorema de Pitágoras, interpreta funciones lineales e interpreta estadísticas usando medidas de dispersión.',
          aprendizajesEsperados: ['mat-s9-01', 'mat-s9-02', 'mat-s9-03', 'mat-s9-04', 'mat-s9-05', 'mat-s9-06', 'mat-s9-08', 'mat-s9-09'],
        },
        {
          nombre: 'Avanzado',
          rango: [380, 500],
          color: '#3B82F6',
          descripcion: 'El estudiante resuelve problemas complejos integrando álgebra y geometría, describe transformaciones en el plano, calcula probabilidades de eventos compuestos y evalúa críticamente información estadística de fuentes externas.',
          aprendizajesEsperados: ['mat-s9-01', 'mat-s9-02', 'mat-s9-03', 'mat-s9-04', 'mat-s9-05', 'mat-s9-06', 'mat-s9-07', 'mat-s9-08', 'mat-s9-09', 'mat-s9-10'],
        },
      ],
    },

    // =========================================================
    // SABER 11°
    // =========================================================
    'saber-11': {
      nombre: 'Saber 11°',
      grados: ['11'],

      aprendizajes: [
        {
          id: 'mat-s11-01',
          enunciado: 'Modela situaciones de variación con funciones polinómicas, racionales, exponenciales y logarítmicas.',
          competencia: 'comunicacion',
          componente: 'numerico-variacional',
          evidencias: [
            { id: 'mat-s11-01-e1', enunciado: 'Identifica el tipo de función que mejor modela una situación de variación a partir de su tabla o gráfica.' },
            { id: 'mat-s11-01-e2', enunciado: 'Construye la expresión algebraica de una función a partir de sus características o puntos conocidos.' },
            { id: 'mat-s11-01-e3', enunciado: 'Interpreta los parámetros de una función exponencial o logarítmica en un contexto real.' },
          ],
        },
        {
          id: 'mat-s11-02',
          enunciado: 'Analiza las propiedades de las funciones (dominio, rango, crecimiento, decrecimiento, máximos y mínimos) a través de su gráfica.',
          competencia: 'razonamiento',
          componente: 'numerico-variacional',
          evidencias: [
            { id: 'mat-s11-02-e1', enunciado: 'Determina dominio y rango de una función a partir de su gráfica o expresión algebraica.' },
            { id: 'mat-s11-02-e2', enunciado: 'Identifica intervalos de crecimiento, decrecimiento y puntos extremos en la gráfica de una función.' },
          ],
        },
        {
          id: 'mat-s11-03',
          enunciado: 'Resuelve y formula ecuaciones e inecuaciones de forma algebraica y gráfica, incluyendo sistemas no lineales.',
          competencia: 'resolucion',
          componente: 'numerico-variacional',
          evidencias: [
            { id: 'mat-s11-03-e1', enunciado: 'Resuelve ecuaciones de segundo grado por factorización, completación de cuadrados y fórmula cuadrática.' },
            { id: 'mat-s11-03-e2', enunciado: 'Resuelve inecuaciones lineales y cuadráticas, y representa la solución en la recta numérica.' },
            { id: 'mat-s11-03-e3', enunciado: 'Resuelve sistemas de ecuaciones lineales con dos o tres variables por métodos algebraicos.' },
          ],
        },
        {
          id: 'mat-s11-04',
          enunciado: 'Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas.',
          competencia: 'razonamiento',
          componente: 'numerico-variacional',
          evidencias: [
            { id: 'mat-s11-04-e1', enunciado: 'Justifica cada paso de un procedimiento algebraico usando propiedades y definiciones.' },
            { id: 'mat-s11-04-e2', enunciado: 'Evalúa la pertinencia de un procedimiento para resolver un problema y propone alternativas.' },
          ],
        },
        {
          id: 'mat-s11-05',
          enunciado: 'Usa la geometría analítica para describir y analizar relaciones entre figuras en el plano cartesiano.',
          competencia: 'comunicacion',
          componente: 'geometrico-metrico',
          evidencias: [
            { id: 'mat-s11-05-e1', enunciado: 'Determina la ecuación de la recta a partir de dos puntos, un punto y la pendiente, o la pendiente y el intercepto.' },
            { id: 'mat-s11-05-e2', enunciado: 'Calcula la distancia entre dos puntos y el punto medio de un segmento en el plano cartesiano.' },
            { id: 'mat-s11-05-e3', enunciado: 'Identifica y usa las ecuaciones de la circunferencia y la parábola para resolver problemas.' },
          ],
        },
        {
          id: 'mat-s11-06',
          enunciado: 'Aplica relaciones trigonométricas y las funciones seno, coseno y tangente para resolver situaciones de medición directa e indirecta.',
          competencia: 'resolucion',
          componente: 'geometrico-metrico',
          evidencias: [
            { id: 'mat-s11-06-e1', enunciado: 'Usa las razones trigonométricas (seno, coseno, tangente) para calcular medidas en triángulos rectángulos.' },
            { id: 'mat-s11-06-e2', enunciado: 'Resuelve problemas de medición indirecta usando la ley de senos o la ley de cosenos.' },
            { id: 'mat-s11-06-e3', enunciado: 'Interpreta la gráfica de las funciones trigonométricas e identifica sus propiedades (amplitud, periodo, fase).' },
          ],
        },
        {
          id: 'mat-s11-07',
          enunciado: 'Generaliza propiedades de figuras geométricas para construir argumentos y establecer relaciones en el plano y el espacio.',
          competencia: 'razonamiento',
          componente: 'geometrico-metrico',
          evidencias: [
            { id: 'mat-s11-07-e1', enunciado: 'Construye argumentos geométricos basados en propiedades de figuras y relaciones entre ángulos.' },
            { id: 'mat-s11-07-e2', enunciado: 'Aplica propiedades de figuras planas y sólidos para calcular áreas y volúmenes en situaciones problema.' },
          ],
        },
        {
          id: 'mat-s11-08',
          enunciado: 'Interpreta y utiliza conceptos de media, varianza y desviación estándar para analizar y comparar conjuntos de datos.',
          competencia: 'comunicacion',
          componente: 'aleatorio',
          evidencias: [
            { id: 'mat-s11-08-e1', enunciado: 'Calcula e interpreta la varianza y la desviación estándar de un conjunto de datos.' },
            { id: 'mat-s11-08-e2', enunciado: 'Compara dos distribuciones de datos usando medidas de tendencia central y de dispersión.' },
            { id: 'mat-s11-08-e3', enunciado: 'Interpreta la distribución normal y la usa para describir comportamientos de poblaciones.' },
          ],
        },
        {
          id: 'mat-s11-09',
          enunciado: 'Calcula probabilidades usando los modelos laplaciano, frecuentista y axiomático, incluyendo probabilidad condicional.',
          competencia: 'resolucion',
          componente: 'aleatorio',
          evidencias: [
            { id: 'mat-s11-09-e1', enunciado: 'Calcula la probabilidad de eventos simples y compuestos usando la regla de la adición y la multiplicación.' },
            { id: 'mat-s11-09-e2', enunciado: 'Determina la probabilidad condicional de un evento dado otro usando la definición o el Teorema de Bayes.' },
            { id: 'mat-s11-09-e3', enunciado: 'Usa diagramas de árbol y tablas de contingencia para calcular probabilidades en experimentos compuestos.' },
          ],
        },
        {
          id: 'mat-s11-10',
          enunciado: 'Interpreta resultados estadísticos para hacer inferencias y tomar decisiones en contextos reales.',
          competencia: 'razonamiento',
          componente: 'aleatorio',
          evidencias: [
            { id: 'mat-s11-10-e1', enunciado: 'Evalúa si una muestra es representativa de una población y reconoce sesgos en la selección.' },
            { id: 'mat-s11-10-e2', enunciado: 'Interpreta resultados de estudios estadísticos y extrae conclusiones válidas sobre la población.' },
          ],
        },
        {
          id: 'mat-s11-11',
          enunciado: 'Usa el concepto de límite y la noción de derivada para analizar la variación de una función en un contexto.',
          competencia: 'razonamiento',
          componente: 'numerico-variacional',
          evidencias: [
            { id: 'mat-s11-11-e1', enunciado: 'Estima el límite de una función en un punto usando tablas de valores o la gráfica.' },
            { id: 'mat-s11-11-e2', enunciado: 'Interpreta la derivada como tasa de cambio instantánea en situaciones de variación.' },
            { id: 'mat-s11-11-e3', enunciado: 'Usa la derivada para identificar intervalos de crecimiento, decrecimiento y extremos de una función.' },
          ],
        },
        {
          id: 'mat-s11-12',
          enunciado: 'Resuelve problemas de optimización en diferentes contextos usando modelos matemáticos y razonamiento algebraico.',
          competencia: 'resolucion',
          componente: 'numerico-variacional',
          evidencias: [
            { id: 'mat-s11-12-e1', enunciado: 'Formula una función objetivo a partir de las condiciones de un problema de optimización.' },
            { id: 'mat-s11-12-e2', enunciado: 'Determina el valor máximo o mínimo de una función en un intervalo y lo interpreta en el contexto del problema.' },
          ],
        },
      ],

      niveles: [
        {
          nombre: 'Insuficiente',
          rango: [0, 35],
          color: '#EF4444',
          descripcion: 'El estudiante no supera las preguntas de menor complejidad de la prueba. No resuelve ecuaciones lineales ni interpreta gráficas de funciones básicas.',
          aprendizajesEsperados: [],
        },
        {
          nombre: 'Mínimo',
          rango: [36, 50],
          color: '#F59E0B',
          descripcion: 'El estudiante resuelve problemas rutinarios con operaciones básicas sobre números reales. Identifica información puntual en tablas y gráficos. Resuelve ecuaciones lineales y calcula medidas de tendencia central.',
          aprendizajesEsperados: ['mat-s11-03', 'mat-s11-05', 'mat-s11-08'],
        },
        {
          nombre: 'Satisfactorio',
          rango: [51, 70],
          color: '#10B981',
          descripcion: 'El estudiante resuelve problemas no rutinarios que requieren modelar situaciones con funciones. Aplica relaciones trigonométricas y geometría analítica. Interpreta datos estadísticos con medidas de dispersión y calcula probabilidades condicionales.',
          aprendizajesEsperados: ['mat-s11-01', 'mat-s11-02', 'mat-s11-03', 'mat-s11-05', 'mat-s11-06', 'mat-s11-08', 'mat-s11-09'],
        },
        {
          nombre: 'Avanzado',
          rango: [71, 100],
          color: '#3B82F6',
          descripcion: 'El estudiante resuelve problemas complejos que requieren integrar varios conceptos matemáticos. Argumenta y valida estrategias matemáticas. Generaliza soluciones, usa el concepto de derivada como herramienta de análisis y resuelve problemas de optimización.',
          aprendizajesEsperados: ['mat-s11-01', 'mat-s11-02', 'mat-s11-03', 'mat-s11-04', 'mat-s11-05', 'mat-s11-06', 'mat-s11-07', 'mat-s11-08', 'mat-s11-09', 'mat-s11-10', 'mat-s11-11', 'mat-s11-12'],
        },
      ],
    },
  },
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ICFES_MATEMATICAS }
}
