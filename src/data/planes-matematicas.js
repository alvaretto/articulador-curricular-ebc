/**
 * Planes de aula de Matemáticas - Grados 8° a 11°
 * Estructura: 4 periodos x 10 semanas x 4 horas/semana = 160 horas/año
 * Basado en Estándares Básicos de Competencias (EBC) del MEN - Colombia
 */

const PLANES_MATEMATICAS = {

  // ============================================================
  // GRADO 8
  // ============================================================
  '8': {
    grado: '8°',
    intensidadHoraria: 4,
    totalSemanas: 40,
    totalHorasAnuales: 160,
    objetivo: 'Desarrollar competencias matemáticas en el conjunto de los números reales, expresiones algebraicas, geometría euclidiana y estadística',

    periodos: [
      // ----------------------------------------------------------
      // GRADO 8 - PERIODO 1
      // ----------------------------------------------------------
      {
        periodo: 1,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Utilizo números reales en sus diferentes representaciones y en diversos contextos',
          'Resuelvo problemas y simplifico cálculos usando propiedades y relaciones de los números reales'
        ],

        diagnostico: 'El 56% de los estudiantes no resuelve problemas en situaciones aditivas y multiplicativas en el conjunto de los números reales.',

        competenciaCiudadana: 'Reconozco la importancia de los números en la vida cotidiana y reflexiono sobre decisiones económicas básicas que implican operaciones con reales.',

        competenciasICFES: {
          razonamiento: 'Justifica el uso de operaciones con números reales para resolver situaciones problema del entorno.',
          comunicacion: 'Representa e interpreta información numérica en diferentes formatos (recta numérica, fracción, decimal, porcentaje).',
          resolucionProblemas: 'Aplica propiedades de los números reales para simplificar cálculos y resolver situaciones de la vida cotidiana.'
        },

        dba: 'Construye representaciones, argumentos y ejemplos de propiedades de los números racionales y no racionales.',

        preguntaProblema: '¿Cómo los números reales y las expresiones algebraicas nos permiten modelar y resolver situaciones del mundo real?',

        ejesTematicos: [
          'Números reales',
          'Polinomios',
          'Operaciones con polinomios',
          'Ángulos',
          'Teorema de Pitágoras',
          'Tablas de frecuencias y gráficos en datos agrupados'
        ],

        evidenciasAprendizaje: [
          'Clasifica números reales (racionales e irracionales) con ejemplos propios.',
          'Realiza operaciones con polinomios (suma, resta, multiplicación) de manera correcta.',
          'Aplica el Teorema de Pitágoras en situaciones geométricas concretas.',
          'Construye tablas de frecuencias y gráficos estadísticos para datos agrupados.',
          'Resuelve problemas que integren números reales y geometría básica.'
        ],

        matrizReferencia: {
          componente: 'Numérico-Variacional',
          competencia: 'Razonamiento y argumentación',
          afirmaciones: [
            'Usa representaciones de los números reales para resolver problemas.',
            'Justifica propiedades de operaciones con reales en contextos concretos.'
          ],
          evidenciasICFES: [
            'Identifica el valor posicional y comparación de números reales en la recta numérica.',
            'Resuelve operaciones combinadas con números reales aplicando jerarquía.'
          ]
        },

        aprendizajesICFES: ['mat-s9-01', 'mat-s9-02'],
        evidenciasICFES: ['mat-s9-01-e1', 'mat-s9-01-e2', 'mat-s9-02-e1'],
        nivelEsperado: 'Mínimo',

        materialesEducativos: [
          'Texto escolar de Matemáticas 8° (editorial Norma o Santillana)',
          'Recta numérica en cartulina',
          'Regla, compás y transportador',
          'Guías de trabajo elaboradas por el docente',
          'Software GeoGebra (versión web gratuita)'
        ],

        estrategiasMetodologicas: [
          'Aprendizaje basado en problemas (ABP) con situaciones cotidianas.',
          'Trabajo colaborativo en grupos pequeños para exploración de propiedades.',
          'Uso de GeoGebra para visualización de la recta numérica y polígonos.',
          'Taller de ejercitación con retroalimentación inmediata.',
          'Prueba diagnóstica inicial para identificar saberes previos.'
        ],

        criteriosEvaluacion: {
          saber: [
            'Reconoce y clasifica los subconjuntos de los números reales.',
            'Enuncia propiedades de las operaciones con polinomios.',
            'Identifica los elementos de un triángulo rectángulo y el Teorema de Pitágoras.'
          ],
          hacer: [
            'Realiza operaciones con números reales (suma, resta, multiplicación, división).',
            'Suma, resta y multiplica polinomios correctamente.',
            'Calcula la hipotenusa o los catetos usando el Teorema de Pitágoras.',
            'Construye e interpreta tablas de frecuencias y gráficos para datos agrupados.'
          ],
          ser: [
            'Muestra disposición positiva frente a los retos matemáticos.',
            'Participa activamente en actividades grupales con respeto por las ideas ajenas.',
            'Entrega oportunamente las tareas y talleres asignados.'
          ],
          porcentajes: { saber: 30, hacer: 50, ser: 20 }
        },

        tiposPensamiento: ['Numérico', 'Espacial', 'Métrico']
      },

      // ----------------------------------------------------------
      // GRADO 8 - PERIODO 2
      // ----------------------------------------------------------
      {
        periodo: 2,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Identifico relaciones entre propiedades de las gráficas y propiedades de las ecuaciones algebraicas',
          'Uso procesos inductivos y lenguaje algebraico para formular y poner a prueba conjeturas'
        ],

        diagnostico: 'El 48% de los estudiantes presenta dificultades en la factorización de expresiones algebraicas.',

        competenciaCiudadana: 'Valora el trabajo en equipo para resolver problemas algebraicos y reconoce el error como oportunidad de aprendizaje.',

        competenciasICFES: {
          razonamiento: 'Identifica patrones algebraicos y los generaliza mediante fórmulas de productos notables.',
          comunicacion: 'Traduce situaciones verbales a ecuaciones algebraicas y viceversa.',
          resolucionProblemas: 'Resuelve ecuaciones lineales y problemas de contexto usando factorización y productos notables.'
        },

        dba: 'Propone y desarrolla expresiones algebraicas en el conjunto de los números reales y utiliza las propiedades de la igualdad y de orden.',

        preguntaProblema: '¿Cómo la factorización y las ecuaciones nos ayudan a modelar y resolver situaciones de la vida real?',

        ejesTematicos: [
          'Factorización',
          'Productos notables',
          'Ecuaciones lineales',
          'Triángulos y sus propiedades',
          'Medidas de tendencia central'
        ],

        evidenciasAprendizaje: [
          'Factoriza expresiones algebraicas usando diferentes métodos (factor común, diferencia de cuadrados, trinomio cuadrado perfecto).',
          'Aplica fórmulas de productos notables para desarrollar y factorizar expresiones.',
          'Resuelve ecuaciones lineales con una incógnita en contextos reales.',
          'Calcula e interpreta la media, mediana y moda de un conjunto de datos.',
          'Identifica propiedades de los triángulos (suma de ángulos, desigualdad triangular).'
        ],

        matrizReferencia: {
          componente: 'Numérico-Variacional',
          competencia: 'Comunicación, representación y modelación',
          afirmaciones: [
            'Representa situaciones usando lenguaje algebraico.',
            'Verifica soluciones de ecuaciones lineales sustituyendo en la ecuación original.'
          ],
          evidenciasICFES: [
            'Identifica la expresión factorizada equivalente a una expresión algebraica dada.',
            'Determina el valor de la incógnita en una ecuación lineal.'
          ]
        },

        aprendizajesICFES: ['mat-s9-02', 'mat-s9-03', 'mat-s9-08'],
        evidenciasICFES: ['mat-s9-02-e1', 'mat-s9-02-e2', 'mat-s9-03-e1', 'mat-s9-08-e1'],
        nivelEsperado: 'Mínimo',

        materialesEducativos: [
          'Texto escolar de Matemáticas 8°',
          'Fichas de algebra (piezas para modelar polinomios)',
          'Guías de factorización con ejercicios graduados',
          'Calculadora científica',
          'GeoGebra para graficar ecuaciones lineales'
        ],

        estrategiasMetodologicas: [
          'Modelado concreto con fichas de álgebra antes de pasar a lo simbólico.',
          'Talleres de factorización por niveles de dificultad progresiva.',
          'Resolución de problemas contextualizados con ecuaciones lineales.',
          'Análisis estadístico de datos reales del contexto escolar.',
          'Corrección entre pares para fomentar la retroalimentación formativa.'
        ],

        criteriosEvaluacion: {
          saber: [
            'Reconoce los métodos de factorización y las fórmulas de productos notables.',
            'Enuncia los pasos para resolver una ecuación lineal.',
            'Define las medidas de tendencia central y sus características.'
          ],
          hacer: [
            'Factoriza expresiones algebraicas usando factor común y casos especiales.',
            'Resuelve ecuaciones lineales y verifica la solución.',
            'Calcula media, mediana y moda de conjuntos de datos.',
            'Clasifica triángulos según sus lados y ángulos.'
          ],
          ser: [
            'Persiste frente a la dificultad en la resolución de problemas algebraicos.',
            'Comparte estrategias de solución con respeto y apertura.',
            'Mantiene el cuaderno organizado y al día.'
          ],
          porcentajes: { saber: 30, hacer: 50, ser: 20 }
        },

        tiposPensamiento: ['Numérico', 'Variacional', 'Aleatorio']
      },

      // ----------------------------------------------------------
      // GRADO 8 - PERIODO 3
      // ----------------------------------------------------------
      {
        periodo: 3,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Reconozco y contrasto propiedades y relaciones geométricas utilizadas en demostración de teoremas básicos',
          'Aplico y justifico criterios de congruencia y semejanza entre triángulos'
        ],

        diagnostico: 'El 52% de los estudiantes confunde los criterios de congruencia con los de semejanza en triángulos.',

        competenciaCiudadana: 'Aprecia la geometría como herramienta para comprender el entorno arquitectónico y natural, desarrollando sentido estético y crítico.',

        competenciasICFES: {
          razonamiento: 'Justifica por qué dos triángulos son congruentes o semejantes usando los criterios correspondientes.',
          comunicacion: 'Usa lenguaje geométrico preciso (congruencia, semejanza, razón de proporcionalidad) para describir relaciones entre figuras.',
          resolucionProblemas: 'Aplica el Teorema de Tales y criterios de semejanza para calcular medidas en situaciones reales.'
        },

        dba: 'Identifica regularidades y argumenta propiedades de figuras geométricas a partir de teoremas.',

        preguntaProblema: '¿Cómo los conceptos de congruencia y semejanza nos permiten resolver problemas de medición indirecta en el mundo real?',

        ejesTematicos: [
          'Congruencia de triángulos',
          'Semejanza de triángulos',
          'Teorema de Tales',
          'Ecuaciones cuadráticas',
          'Gráficos estadísticos'
        ],

        evidenciasAprendizaje: [
          'Aplica correctamente los criterios LLL, LAL y ALA para establecer congruencia entre triángulos.',
          'Determina razones de semejanza y calcula longitudes desconocidas en triángulos semejantes.',
          'Usa el Teorema de Tales para dividir segmentos proporcionalmente.',
          'Resuelve ecuaciones cuadráticas por factorización.',
          'Interpreta y construye gráficos estadísticos (barras, histogramas, circulares).'
        ],

        matrizReferencia: {
          componente: 'Geométrico-Métrico',
          competencia: 'Razonamiento y argumentación',
          afirmaciones: [
            'Justifica la congruencia o semejanza de triángulos con argumentos geométricos.',
            'Calcula medidas usando proporcionalidad y el Teorema de Tales.'
          ],
          evidenciasICFES: [
            'Identifica los criterios de congruencia o semejanza que se cumplen en una figura dada.',
            'Determina longitudes usando razones de semejanza entre figuras.'
          ]
        },

        aprendizajesICFES: ['mat-s9-05', 'mat-s9-06', 'mat-s9-08'],
        evidenciasICFES: ['mat-s9-05-e1', 'mat-s9-05-e2', 'mat-s9-06-e1', 'mat-s9-08-e1', 'mat-s9-08-e2'],
        nivelEsperado: 'Satisfactorio',

        materialesEducativos: [
          'Texto escolar de Matemáticas 8°',
          'Regla, compás, transportador y escuadras',
          'Papel cuadriculado y papel punteado',
          'GeoGebra para construcciones geométricas dinámicas',
          'Videos tutoriales sobre criterios de congruencia y semejanza'
        ],

        estrategiasMetodologicas: [
          'Construcción geométrica con regla y compás para verificar criterios de congruencia.',
          'Aprendizaje situado: medir alturas de objetos reales usando semejanza de triángulos.',
          'Demostración guiada del Teorema de Tales con material concreto.',
          'Resolución de ecuaciones cuadráticas mediante factorización (conexión algebraica).',
          'Análisis e interpretación de datos estadísticos de situaciones locales.'
        ],

        criteriosEvaluacion: {
          saber: [
            'Enuncia los criterios de congruencia y semejanza de triángulos.',
            'Explica el enunciado del Teorema de Tales.',
            'Reconoce la forma estándar de una ecuación cuadrática.'
          ],
          hacer: [
            'Determina si dos triángulos son congruentes o semejantes justificando el criterio usado.',
            'Calcula medidas desconocidas usando razones de semejanza.',
            'Aplica el Teorema de Tales para dividir segmentos en proporción dada.',
            'Resuelve ecuaciones cuadráticas por factorización.'
          ],
          ser: [
            'Argumenta sus respuestas con precisión y seguridad.',
            'Colabora con sus compañeros en las actividades de construcción geométrica.',
            'Reconoce y corrige sus errores con actitud positiva.'
          ],
          porcentajes: { saber: 30, hacer: 50, ser: 20 }
        },

        tiposPensamiento: ['Espacial', 'Métrico', 'Variacional']
      },

      // ----------------------------------------------------------
      // GRADO 8 - PERIODO 4
      // ----------------------------------------------------------
      {
        periodo: 4,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Uso representaciones geométricas para resolver y formular problemas',
          'Interpreto analítica y críticamente información estadística'
        ],

        diagnostico: 'El 45% de los estudiantes no calcula correctamente áreas de figuras compuestas ni interpreta datos estadísticos con sentido crítico.',

        competenciaCiudadana: 'Toma decisiones informadas basadas en el análisis de datos estadísticos, reconociendo la importancia de la evidencia numérica en asuntos ciudadanos.',

        competenciasICFES: {
          razonamiento: 'Descompone figuras compuestas en figuras simples para calcular área y perímetro.',
          comunicacion: 'Interpreta y comunica resultados de análisis probabilísticos y estadísticos usando lenguaje preciso.',
          resolucionProblemas: 'Calcula probabilidades de eventos simples y toma decisiones basadas en datos estadísticos.'
        },

        dba: 'Interpreta información presentada en tablas y gráficas y toma decisiones informadas.',

        preguntaProblema: '¿Cómo podemos usar la geometría y la estadística para tomar mejores decisiones en nuestra vida cotidiana?',

        ejesTematicos: [
          'Polígonos regulares e irregulares',
          'Área y perímetro de figuras compuestas',
          'Probabilidad de eventos simples',
          'Análisis de datos bivariados',
          'Proyecto integrador'
        ],

        evidenciasAprendizaje: [
          'Calcula el área y perímetro de polígonos regulares e irregulares usando fórmulas adecuadas.',
          'Descompone figuras compuestas para calcular su área total.',
          'Calcula la probabilidad de eventos simples en experimentos aleatorios.',
          'Construye e interpreta diagramas de dispersión para datos bivariados.',
          'Desarrolla un proyecto integrador que articule geometría, álgebra y estadística.'
        ],

        matrizReferencia: {
          componente: 'Geométrico-Métrico / Aleatorio',
          competencia: 'Resolución y planteamiento de problemas',
          afirmaciones: [
            'Calcula áreas y perímetros de figuras compuestas en contextos reales.',
            'Determina probabilidades de eventos simples y las interpreta en contexto.'
          ],
          evidenciasICFES: [
            'Selecciona la estrategia adecuada para calcular el área de una figura compuesta.',
            'Calcula la probabilidad de un evento usando la razón favorable/total.'
          ]
        },

        aprendizajesICFES: ['mat-s9-06', 'mat-s9-09', 'mat-s9-10'],
        evidenciasICFES: ['mat-s9-06-e2', 'mat-s9-06-e3', 'mat-s9-09-e1', 'mat-s9-09-e2', 'mat-s9-10-e1'],
        nivelEsperado: 'Satisfactorio',

        materialesEducativos: [
          'Texto escolar de Matemáticas 8°',
          'Papel cuadriculado para cálculos de área',
          'Dados, monedas y urnas para experimentos probabilísticos',
          'GeoGebra para construcción de polígonos',
          'Hojas de cálculo (LibreOffice Calc o Google Sheets) para análisis de datos'
        ],

        estrategiasMetodologicas: [
          'Proyecto integrador: diseño de un espacio (jardín, cancha, salón) calculando materiales.',
          'Experimentos probabilísticos con materiales manipulativos (dados, monedas).',
          'Análisis de datos reales del contexto escolar o municipal.',
          'Aprendizaje basado en proyectos para el cierre del año escolar.',
          'Autoevaluación y coevaluación del proyecto integrador.'
        ],

        criteriosEvaluacion: {
          saber: [
            'Reconoce las fórmulas de área y perímetro de polígonos regulares.',
            'Define probabilidad clásica y sus propiedades básicas.',
            'Identifica variables en un análisis bivariado.'
          ],
          hacer: [
            'Calcula áreas y perímetros de figuras compuestas en contextos reales.',
            'Determina la probabilidad de eventos simples en experimentos aleatorios.',
            'Construye e interpreta diagramas de dispersión.',
            'Presenta y sustenta el proyecto integrador con rigor matemático.'
          ],
          ser: [
            'Demuestra responsabilidad y compromiso en el desarrollo del proyecto integrador.',
            'Escucha y valora las presentaciones de sus compañeros con respeto.',
            'Reflexiona sobre su propio aprendizaje a lo largo del año.'
          ],
          porcentajes: { saber: 30, hacer: 50, ser: 20 }
        },

        tiposPensamiento: ['Espacial', 'Métrico', 'Aleatorio']
      }
    ]
  },

  // ============================================================
  // GRADO 9
  // ============================================================
  '9': {
    grado: '9°',
    intensidadHoraria: 4,
    totalSemanas: 40,
    totalHorasAnuales: 160,
    objetivo: 'Consolidar el pensamiento algebraico mediante funciones, sistemas de ecuaciones y geometría analítica, articulando el álgebra con la geometría y la estadística',

    periodos: [
      // ----------------------------------------------------------
      // GRADO 9 - PERIODO 1
      // ----------------------------------------------------------
      {
        periodo: 1,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Identifico diferentes métodos para solucionar sistemas de ecuaciones lineales',
          'Modelo situaciones de variación con funciones polinómicas'
        ],

        diagnostico: 'El 51% de los estudiantes no interpreta correctamente la gráfica de una función cuadrática ni identifica sus elementos (vértice, eje de simetría, cortes).',

        competenciaCiudadana: 'Usa el pensamiento matemático para analizar fenómenos naturales y sociales que siguen comportamientos cuadráticos (trayectorias, economía básica).',

        competenciasICFES: {
          razonamiento: 'Analiza el comportamiento de la función cuadrática identificando sus parámetros y su relación con la gráfica.',
          comunicacion: 'Representa la función cuadrática en tablas, ecuaciones y gráficas, estableciendo conexiones entre ellas.',
          resolucionProblemas: 'Resuelve situaciones de variación que modelan con función cuadrática, interpretando resultados en contexto.'
        },

        dba: 'Utiliza expresiones numéricas, algebraicas o gráficas para hacer descripciones de situaciones concretas.',

        preguntaProblema: '¿Cómo las funciones cuadráticas modelan fenómenos del mundo real como trayectorias y costos?',

        ejesTematicos: [
          'Exponentes racionales',
          'Leyes de exponentes',
          'Función cuadrática Y=ax²+bx+c',
          'Parámetros y simetría de la parábola',
          'Representación de datos cuantitativos'
        ],

        evidenciasAprendizaje: [
          'Aplica las leyes de exponentes incluyendo exponentes racionales y negativos.',
          'Grafica funciones cuadráticas identificando vértice, eje de simetría y concavidad.',
          'Determina el dominio, recorrido y cortes con los ejes de la función cuadrática.',
          'Interpreta los parámetros a, b y c en la función cuadrática y su efecto en la gráfica.',
          'Representa e interpreta datos cuantitativos usando histogramas y polígonos de frecuencia.'
        ],

        matrizReferencia: {
          componente: 'Numérico-Variacional',
          competencia: 'Comunicación, representación y modelación',
          afirmaciones: [
            'Relaciona los parámetros de la función cuadrática con su representación gráfica.',
            'Usa exponentes racionales para expresar raíces y potencias equivalentes.'
          ],
          evidenciasICFES: [
            'Identifica la gráfica correcta de una función cuadrática dados sus parámetros.',
            'Simplifica expresiones con exponentes racionales usando las leyes de exponentes.'
          ]
        },

        aprendizajesICFES: ['mat-s9-01', 'mat-s9-04'],
        evidenciasICFES: ['mat-s9-01-e2', 'mat-s9-01-e3', 'mat-s9-04-e1', 'mat-s9-04-e2'],
        nivelEsperado: 'Mínimo',

        materialesEducativos: [
          'Texto escolar de Matemáticas 9°',
          'GeoGebra para explorar la función cuadrática de forma dinámica',
          'Guías de trabajo con situaciones de modelación',
          'Calculadora científica',
          'Videos sobre aplicaciones de la función cuadrática (física, economía)'
        ],

        estrategiasMetodologicas: [
          'Exploración con GeoGebra: variación de parámetros a, b, c y efecto en la parábola.',
          'Modelación de situaciones reales (tiro parabólico simplificado, área máxima).',
          'Trabajo colaborativo para construir tablas de valores y graficar funciones.',
          'Taller de exponentes con ejercicios graduados.',
          'Análisis de datos del contexto escolar con representaciones gráficas.'
        ],

        criteriosEvaluacion: {
          saber: [
            'Enuncia las leyes de exponentes y las aplica a expresiones con exponentes racionales.',
            'Define función cuadrática e identifica sus elementos principales.',
            'Describe el efecto de cada parámetro en la gráfica de la parábola.'
          ],
          hacer: [
            'Simplifica expresiones con exponentes racionales.',
            'Construye la tabla de valores y grafica funciones cuadráticas.',
            'Determina vértice, eje de simetría, cortes y concavidad de una parábola.',
            'Interpreta histogramas y polígonos de frecuencia de datos cuantitativos.'
          ],
          ser: [
            'Muestra curiosidad matemática al explorar el comportamiento de las funciones.',
            'Trabaja de forma ordenada y sistemática en la construcción de gráficas.',
            'Participa activamente en las discusiones del grupo.'
          ],
          porcentajes: { saber: 30, hacer: 50, ser: 20 }
        },

        tiposPensamiento: ['Numérico', 'Variacional']
      },

      // ----------------------------------------------------------
      // GRADO 9 - PERIODO 2
      // ----------------------------------------------------------
      {
        periodo: 2,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Uso procesos inductivos y lenguaje algebraico para formular y poner a prueba conjeturas',
          'Analizo en representaciones gráficas cartesianas los comportamientos de cambio de funciones'
        ],

        diagnostico: 'El 49% de los estudiantes no selecciona el método adecuado para resolver sistemas de ecuaciones lineales según el tipo de sistema.',

        competenciaCiudadana: 'Reconoce cómo los sistemas de ecuaciones permiten modelar problemas de distribución de recursos, presupuesto y planificación comunitaria.',

        competenciasICFES: {
          razonamiento: 'Justifica la elección del método de solución de un sistema de ecuaciones según las características del sistema.',
          comunicacion: 'Representa sistemas de ecuaciones gráficamente e interpreta el significado geométrico de la solución.',
          resolucionProblemas: 'Formula y resuelve sistemas de ecuaciones lineales para modelar situaciones con dos variables.'
        },

        dba: 'Resuelve sistemas de ecuaciones lineales y los utiliza para representar situaciones de la vida cotidiana.',

        preguntaProblema: '¿Cómo podemos usar sistemas de ecuaciones para encontrar el equilibrio entre variables en situaciones económicas y sociales?',

        ejesTematicos: [
          'Sistemas de ecuaciones lineales 2x2',
          'Métodos de solución (sustitución, igualación, eliminación, gráfico)',
          'Transformaciones geométricas',
          'Medidas de dispersión'
        ],

        evidenciasAprendizaje: [
          'Resuelve sistemas de ecuaciones 2x2 por los métodos de sustitución, igualación y eliminación.',
          'Interpreta gráficamente la solución de un sistema (punto de intersección).',
          'Clasifica sistemas según su solución (compatible determinado, indeterminado, incompatible).',
          'Aplica transformaciones geométricas (traslación, rotación, reflexión, homotecia) en el plano.',
          'Calcula rango, varianza y desviación estándar de un conjunto de datos.'
        ],

        matrizReferencia: {
          componente: 'Variacional / Geométrico',
          competencia: 'Resolución y planteamiento de problemas',
          afirmaciones: [
            'Selecciona el método más eficiente para resolver un sistema de ecuaciones 2x2.',
            'Interpreta gráficamente el significado de la solución de un sistema de ecuaciones.'
          ],
          evidenciasICFES: [
            'Determina la solución de un sistema de ecuaciones usando el método indicado.',
            'Identifica el tipo de sistema según su representación gráfica o algebraica.'
          ]
        },

        aprendizajesICFES: ['mat-s9-03', 'mat-s9-07', 'mat-s9-08'],
        evidenciasICFES: ['mat-s9-03-e2', 'mat-s9-03-e3', 'mat-s9-07-e1', 'mat-s9-07-e2', 'mat-s9-08-e3'],
        nivelEsperado: 'Satisfactorio',

        materialesEducativos: [
          'Texto escolar de Matemáticas 9°',
          'GeoGebra para representación gráfica de sistemas de ecuaciones',
          'Papel cuadriculado para construcciones geométricas',
          'Guías de problemas contextualizados con sistemas de ecuaciones',
          'Calculadora científica'
        ],

        estrategiasMetodologicas: [
          'Introducción con el método gráfico para visualizar la solución antes de los métodos algebraicos.',
          'Comparación de métodos: cuándo conviene usar cada uno.',
          'Problemas de modelación: mezclas, edades, precios, trabajo conjunto.',
          'Actividades de transformaciones geométricas con papel cuadriculado y GeoGebra.',
          'Análisis de datos reales: cálculo e interpretación de medidas de dispersión.'
        ],

        criteriosEvaluacion: {
          saber: [
            'Describe los métodos de solución de sistemas de ecuaciones 2x2.',
            'Define las transformaciones geométricas en el plano.',
            'Enuncia las medidas de dispersión y su interpretación.'
          ],
          hacer: [
            'Resuelve sistemas de ecuaciones por sustitución, igualación y eliminación.',
            'Clasifica un sistema según el número y tipo de soluciones.',
            'Aplica transformaciones geométricas a figuras en el plano cartesiano.',
            'Calcula varianza y desviación estándar de conjuntos de datos.'
          ],
          ser: [
            'Persiste ante la dificultad cuando un sistema de ecuaciones resulta complejo.',
            'Verifica sus respuestas por métodos alternativos con espíritu crítico.',
            'Colabora en la solución de problemas contextualizados.'
          ],
          porcentajes: { saber: 30, hacer: 50, ser: 20 }
        },

        tiposPensamiento: ['Variacional', 'Espacial', 'Métrico']
      },

      // ----------------------------------------------------------
      // GRADO 9 - PERIODO 3
      // ----------------------------------------------------------
      {
        periodo: 3,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Identifico y utilizo diferentes maneras de definir y medir la pendiente',
          'Analizo las propiedades de correlación positiva y negativa'
        ],

        diagnostico: 'El 55% de los estudiantes no interpreta el significado de la pendiente en contextos reales ni distingue funciones exponenciales de lineales.',

        competenciaCiudadana: 'Comprende el crecimiento exponencial aplicado a situaciones sociales como el crecimiento poblacional, el interés compuesto y la propagación de información.',

        competenciasICFES: {
          razonamiento: 'Analiza las propiedades de funciones lineales, exponenciales y logarítmicas, comparando sus tasas de cambio.',
          comunicacion: 'Representa e interpreta funciones en diferentes registros (tablas, gráficas, ecuaciones) y comunica conclusiones sobre correlación.',
          resolucionProblemas: 'Modela situaciones de crecimiento y decrecimiento usando funciones exponenciales y logarítmicas.'
        },

        dba: 'Identifica y analiza relaciones entre propiedades de las gráficas y propiedades de las expresiones algebraicas.',

        preguntaProblema: '¿Cómo las funciones lineales, exponenciales y logarítmicas nos permiten modelar tasas de cambio en fenómenos naturales y sociales?',

        ejesTematicos: [
          'Función lineal y afín',
          'Pendiente e interceptos',
          'Función exponencial',
          'Función logarítmica',
          'Correlación y regresión lineal'
        ],

        evidenciasAprendizaje: [
          'Calcula e interpreta la pendiente de una recta en contextos reales (velocidad, costo por unidad).',
          'Grafica y analiza funciones lineales y afines identificando pendiente e interceptos.',
          'Reconoce la forma y comportamiento de funciones exponenciales (crecimiento y decrecimiento).',
          'Aplica logaritmos para resolver ecuaciones exponenciales simples.',
          'Determina el tipo y grado de correlación entre dos variables usando diagramas de dispersión.'
        ],

        matrizReferencia: {
          componente: 'Variacional / Aleatorio',
          competencia: 'Razonamiento y argumentación',
          afirmaciones: [
            'Interpreta la pendiente como razón de cambio en situaciones reales.',
            'Distingue comportamientos lineales, exponenciales y logarítmicos a partir de tablas o gráficas.'
          ],
          evidenciasICFES: [
            'Determina la pendiente de una recta a partir de dos puntos o de su ecuación.',
            'Identifica si una situación corresponde a un modelo lineal o exponencial.'
          ]
        },

        aprendizajesICFES: ['mat-s9-04', 'mat-s9-08', 'mat-s9-10'],
        evidenciasICFES: ['mat-s9-04-e1', 'mat-s9-04-e2', 'mat-s9-08-e2', 'mat-s9-08-e3', 'mat-s9-10-e1', 'mat-s9-10-e2'],
        nivelEsperado: 'Satisfactorio',

        materialesEducativos: [
          'Texto escolar de Matemáticas 9°',
          'GeoGebra para explorar funciones lineales, exponenciales y logarítmicas',
          'Datos reales de internet (crecimiento poblacional, tasas de interés)',
          'Calculadora científica',
          'Hojas de cálculo para análisis de correlación y regresión'
        ],

        estrategiasMetodologicas: [
          'Modelación con datos reales: crecimiento de bacterias, interés bancario, deprecación.',
          'Exploración dinámica con GeoGebra: variación de parámetros en funciones.',
          'Introducción intuitiva del logaritmo como inverso de la exponencial.',
          'Análisis de correlación con datos del entorno (temperatura-consumo, estatura-peso).',
          'Discusión sobre diferencias entre crecimiento lineal y exponencial en contextos reales.'
        ],

        criteriosEvaluacion: {
          saber: [
            'Define pendiente y explica su significado geométrico y en contexto.',
            'Describe las características de las funciones exponencial y logarítmica.',
            'Explica qué es correlación y cómo se mide.'
          ],
          hacer: [
            'Calcula la pendiente e interceptos de una función lineal y la grafica.',
            'Construye tablas y grafica funciones exponenciales simples.',
            'Resuelve ecuaciones exponenciales usando logaritmos básicos.',
            'Construye e interpreta diagramas de dispersión y determina el tipo de correlación.'
          ],
          ser: [
            'Relaciona los conceptos matemáticos con fenómenos reales con actitud investigativa.',
            'Argumenta con evidencia (gráficas, datos) sus conclusiones matemáticas.',
            'Demuestra honestidad académica en la recolección y análisis de datos.'
          ],
          porcentajes: { saber: 30, hacer: 50, ser: 20 }
        },

        tiposPensamiento: ['Variacional', 'Aleatorio', 'Numérico']
      },

      // ----------------------------------------------------------
      // GRADO 9 - PERIODO 4
      // ----------------------------------------------------------
      {
        periodo: 4,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Resuelvo y formulo problemas usando modelos geométricos',
          'Uso conceptos básicos de probabilidad'
        ],

        diagnostico: 'El 47% de los estudiantes no distingue probabilidad condicional de probabilidad simple, ni calcula correctamente áreas y volúmenes de sólidos.',

        competenciaCiudadana: 'Aplica el pensamiento probabilístico para tomar decisiones informadas ante situaciones de incertidumbre en contextos de salud, economía y medio ambiente.',

        competenciasICFES: {
          razonamiento: 'Justifica el cálculo de probabilidades usando reglas de adición y multiplicación, distinguiendo eventos dependientes e independientes.',
          comunicacion: 'Representa situaciones probabilísticas usando diagramas de árbol, tablas de contingencia y notación formal.',
          resolucionProblemas: 'Resuelve problemas de probabilidad condicional y calcula áreas y volúmenes de sólidos en contextos reales.'
        },

        dba: 'Utiliza conceptos de probabilidad para analizar situaciones de incertidumbre.',

        preguntaProblema: '¿Cómo la geometría de los sólidos y la probabilidad nos ayudan a tomar mejores decisiones en situaciones de incertidumbre?',

        ejesTematicos: [
          'Circunferencia y círculo',
          'Áreas y volúmenes de sólidos',
          'Probabilidad condicional',
          'Eventos independientes y dependientes',
          'Proyecto integrador'
        ],

        evidenciasAprendizaje: [
          'Calcula longitud de arco, área de sector y área del círculo en situaciones reales.',
          'Determina áreas laterales, totales y volúmenes de prismas, pirámides, cilindros, conos y esferas.',
          'Calcula probabilidades condicionales usando la definición P(A|B) = P(A∩B)/P(B).',
          'Distingue eventos independientes de dependientes y aplica la regla de multiplicación.',
          'Desarrolla un proyecto integrador que articule geometría tridimensional y probabilidad.'
        ],

        matrizReferencia: {
          componente: 'Geométrico-Métrico / Aleatorio',
          competencia: 'Resolución y planteamiento de problemas',
          afirmaciones: [
            'Calcula áreas y volúmenes de sólidos geométricos en contextos de diseño y construcción.',
            'Determina probabilidades de eventos dependientes e independientes en situaciones reales.'
          ],
          evidenciasICFES: [
            'Selecciona la fórmula correcta para calcular el volumen de un sólido dado.',
            'Determina la probabilidad condicional de un evento dado otro evento relacionado.'
          ]
        },

        aprendizajesICFES: ['mat-s9-06', 'mat-s9-09', 'mat-s9-10'],
        evidenciasICFES: ['mat-s9-06-e2', 'mat-s9-06-e3', 'mat-s9-09-e1', 'mat-s9-09-e2', 'mat-s9-10-e2'],
        nivelEsperado: 'Avanzado',

        materialesEducativos: [
          'Texto escolar de Matemáticas 9°',
          'Modelos tridimensionales de sólidos (armar con cartón o plástico)',
          'GeoGebra 3D para visualizar sólidos',
          'Dados, barajas y urnas para experimentos probabilísticos',
          'Videos sobre aplicaciones de probabilidad (seguros, medicina, climatología)'
        ],

        estrategiasMetodologicas: [
          'Construcción de modelos tridimensionales con material reciclable para calcular área y volumen.',
          'Experimentos probabilísticos: diagramas de árbol con extracción sin reemplazo.',
          'Aprendizaje basado en proyectos: diseño de un empaque optimizando materiales.',
          'Análisis de situaciones reales de probabilidad condicional (pruebas médicas, encuestas).',
          'Autoevaluación y coevaluación del proyecto integrador.'
        ],

        criteriosEvaluacion: {
          saber: [
            'Enuncia las fórmulas de área y volumen de los principales sólidos geométricos.',
            'Define probabilidad condicional y explica la diferencia entre eventos dependientes e independientes.',
            'Describe la regla de multiplicación para probabilidad.'
          ],
          hacer: [
            'Calcula áreas y volúmenes de sólidos en contextos de diseño y construcción.',
            'Determina probabilidades condicionales usando diagramas de árbol y tablas.',
            'Clasifica eventos como independientes o dependientes y aplica la regla correspondiente.',
            'Presenta y sustenta el proyecto integrador con rigor matemático.'
          ],
          ser: [
            'Demuestra responsabilidad y autonomía en el desarrollo del proyecto integrador.',
            'Valora la probabilidad como herramienta de pensamiento crítico en la toma de decisiones.',
            'Respeta los turnos de exposición y valora las presentaciones de sus compañeros.'
          ],
          porcentajes: { saber: 30, hacer: 50, ser: 20 }
        },

        tiposPensamiento: ['Espacial', 'Métrico', 'Aleatorio']
      }
    ]
  },

  // ============================================================
  // GRADO 10
  // ============================================================
  '10': {
    grado: '10°',
    intensidadHoraria: 4,
    totalSemanas: 40,
    totalHorasAnuales: 160,
    objetivo: 'Desarrollar el pensamiento trigonométrico y geométrico analítico, articulando las funciones trigonométricas con la geometría del plano y la estadística inferencial',

    periodos: [
      // ----------------------------------------------------------
      // GRADO 10 - PERIODO 1
      // ----------------------------------------------------------
      {
        periodo: 1,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Uso argumentos geométricos y trigonométricos para resolver problemas de medición indirecta',
          'Generalizo procedimientos de cálculo válidos para encontrar patrones y analizar regularidades'
        ],

        diagnostico: 'El 54% de los estudiantes no establece la relación entre ángulos, funciones trigonométricas y la circunferencia unitaria, limitándose a memorizar fórmulas.',

        competenciaCiudadana: 'Reconoce aplicaciones de la trigonometría en la ingeniería, arquitectura, navegación y geografía, valorando las matemáticas como herramienta para entender el mundo.',

        competenciasICFES: {
          razonamiento: 'Justifica relaciones entre las razones trigonométricas usando el triángulo rectángulo y la circunferencia unitaria.',
          comunicacion: 'Representa ángulos en posición normal y usa la notación de razones y funciones trigonométricas con precisión.',
          resolucionProblemas: 'Aplica razones trigonométricas y la Ley de Senos y Cosenos para resolver triángulos en contextos reales.'
        },

        dba: 'Usa razones trigonométricas y sus propiedades para resolver problemas de medición y modelación.',

        preguntaProblema: '¿Cómo la trigonometría nos permite medir lo que no podemos alcanzar directamente?',

        ejesTematicos: [
          'Ángulos y su medida (grados y radianes)',
          'Razones trigonométricas en el triángulo rectángulo',
          'Circunferencia unitaria y funciones trigonométricas',
          'Ley de Senos y Ley de Cosenos',
          'Estadística descriptiva: medidas de posición'
        ],

        evidenciasAprendizaje: [
          'Convierte ángulos entre grados y radianes correctamente.',
          'Calcula las seis razones trigonométricas de un ángulo en el triángulo rectángulo.',
          'Usa la circunferencia unitaria para determinar valores trigonométricos en los cuatro cuadrantes.',
          'Aplica la Ley de Senos y Cosenos para resolver triángulos oblicuángulos.',
          'Calcula e interpreta cuartiles, percentiles y deciles en conjuntos de datos.'
        ],

        matrizReferencia: {
          componente: 'Métrico / Numérico',
          competencia: 'Razonamiento y argumentación',
          afirmaciones: [
            'Justifica el valor de una razón trigonométrica usando la definición en el triángulo rectángulo o la circunferencia unitaria.',
            'Selecciona la Ley de Senos o Cosenos según los datos disponibles de un triángulo.'
          ],
          evidenciasICFES: [
            'Calcula una razón trigonométrica dado un ángulo o un lado del triángulo rectángulo.',
            'Determina medidas desconocidas de un triángulo usando la Ley de Senos o Cosenos.'
          ]
        },

        aprendizajesICFES: ['mat-s11-06', 'mat-s11-08'],
        evidenciasICFES: ['mat-s11-06-e1', 'mat-s11-06-e2', 'mat-s11-08-e1', 'mat-s11-08-e2'],
        nivelEsperado: 'Mínimo',

        materialesEducativos: [
          'Texto escolar de Matemáticas 10°',
          'Transportador, regla y calculadora científica con funciones trigonométricas',
          'GeoGebra para la circunferencia unitaria interactiva',
          'Guías de problemas de medición indirecta (topografía, astronomía)',
          'Tabla de razones trigonométricas'
        ],

        estrategiasMetodologicas: [
          'Construcción de la circunferencia unitaria en GeoGebra para visualizar funciones trig.',
          'Actividad práctica: medir alturas de objetos con clinómetro casero y trigonometría.',
          'Resolución de problemas reales de topografía usando Ley de Senos y Cosenos.',
          'Trabajo colaborativo: cada grupo resuelve un caso de medición indirecta diferente.',
          'Análisis estadístico: cálculo de percentiles en datos de evaluaciones ICFES.'
        ],

        criteriosEvaluacion: {
          saber: [
            'Define las seis razones trigonométricas y sus relaciones recíprocas.',
            'Enuncia la Ley de Senos y la Ley de Cosenos.',
            'Explica la conversión entre grados y radianes.'
          ],
          hacer: [
            'Calcula razones trigonométricas de ángulos en los cuatro cuadrantes.',
            'Resuelve triángulos rectángulos y oblicuángulos en contextos de medición.',
            'Aplica la Ley de Senos y Cosenos para determinar medidas desconocidas.',
            'Calcula cuartiles y percentiles de conjuntos de datos reales.'
          ],
          ser: [
            'Muestra curiosidad por las aplicaciones reales de la trigonometría.',
            'Trabaja con precisión y rigurosidad en los cálculos trigonométricos.',
            'Comparte estrategias de solución con respeto por las diferencias de pensamiento.'
          ],
          porcentajes: { saber: 30, hacer: 50, ser: 20 }
        },

        tiposPensamiento: ['Métrico', 'Espacial', 'Numérico']
      },

      // ----------------------------------------------------------
      // GRADO 10 - PERIODO 2
      // ----------------------------------------------------------
      {
        periodo: 2,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Modelo situaciones de variación periódica con funciones trigonométricas',
          'Identifico y uso relaciones entre propiedades de las gráficas y propiedades de las funciones trigonométricas'
        ],

        diagnostico: 'El 58% de los estudiantes no identifica correctamente el período, amplitud y desplazamiento de funciones trigonométricas transformadas.',

        competenciaCiudadana: 'Reconoce fenómenos periódicos del mundo natural (mareas, sonido, ondas) y valora la importancia del modelado matemático para comprenderlos.',

        competenciasICFES: {
          razonamiento: 'Analiza el efecto de los parámetros A, B, C y D sobre la gráfica de funciones trigonométricas transformadas.',
          comunicacion: 'Representa funciones trigonométricas en su forma general y describe sus propiedades usando terminología precisa.',
          resolucionProblemas: 'Modela fenómenos periódicos reales usando funciones trigonométricas, determinando parámetros a partir de datos.'
        },

        dba: 'Analiza el comportamiento de funciones trigonométricas e identifica sus propiedades para resolver problemas de variación periódica.',

        preguntaProblema: '¿Cómo las funciones trigonométricas nos permiten modelar fenómenos que se repiten cíclicamente en la naturaleza?',

        ejesTematicos: [
          'Funciones seno y coseno: gráfica y propiedades',
          'Transformaciones de funciones trigonométricas (amplitud, período, fase)',
          'Función tangente y funciones recíprocas',
          'Identidades trigonométricas fundamentales',
          'Estadística inferencial: muestreo y estimación'
        ],

        evidenciasAprendizaje: [
          'Grafica las funciones seno y coseno identificando amplitud, período, frecuencia y desplazamiento.',
          'Determina los parámetros de una función trigonométrica a partir de su gráfica.',
          'Verifica identidades trigonométricas usando las relaciones fundamentales (Pitágoras, cociente, recíproca).',
          'Modela una situación periódica real con una función seno o coseno.',
          'Distingue entre muestra y población e identifica tipos de muestreo.'
        ],

        matrizReferencia: {
          componente: 'Variacional',
          competencia: 'Comunicación, representación y modelación',
          afirmaciones: [
            'Relaciona los parámetros de una función trigonométrica con su representación gráfica.',
            'Verifica identidades trigonométricas usando las relaciones fundamentales.'
          ],
          evidenciasICFES: [
            'Determina la amplitud y período de una función trigonométrica dada su ecuación.',
            'Identifica la identidad trigonométrica equivalente a una expresión dada.'
          ]
        },

        aprendizajesICFES: ['mat-s11-01', 'mat-s11-06'],
        evidenciasICFES: ['mat-s11-01-e1', 'mat-s11-01-e2', 'mat-s11-06-e3'],
        nivelEsperado: 'Satisfactorio',

        materialesEducativos: [
          'Texto escolar de Matemáticas 10°',
          'GeoGebra para graficar y transformar funciones trigonométricas',
          'Simulaciones de ondas de sonido y luz (PhET Interactive)',
          'Calculadora científica',
          'Guías de modelación de fenómenos periódicos'
        ],

        estrategiasMetodologicas: [
          'Exploración dinámica con GeoGebra: deslizadores para variar parámetros A, B, C, D.',
          'Modelación de datos reales de mareas o temperatura usando funciones seno.',
          'Demostración de identidades: trabajo en parejas, cada pareja verifica una identidad diferente.',
          'Análisis de fenómenos de sonido y música usando funciones periódicas.',
          'Introducción al muestreo: simulación de encuestas en el contexto escolar.'
        ],

        criteriosEvaluacion: {
          saber: [
            'Define amplitud, período, frecuencia y desplazamiento de una función trigonométrica.',
            'Enuncia las identidades trigonométricas fundamentales (pitagórica, cociente, recíproca).',
            'Describe los tipos de muestreo estadístico y sus características.'
          ],
          hacer: [
            'Grafica funciones seno y coseno transformadas identificando todos sus parámetros.',
            'Determina la ecuación de una función trigonométrica a partir de su gráfica.',
            'Verifica identidades trigonométricas usando operaciones algebraicas.',
            'Diseña un plan de muestreo para una investigación escolar.'
          ],
          ser: [
            'Valora la conexión entre matemáticas y fenómenos naturales con actitud investigativa.',
            'Muestra perseverancia en la verificación de identidades trigonométricas.',
            'Asume con responsabilidad los roles asignados en el trabajo colaborativo.'
          ],
          porcentajes: { saber: 30, hacer: 50, ser: 20 }
        },

        tiposPensamiento: ['Variacional', 'Métrico', 'Aleatorio']
      },

      // ----------------------------------------------------------
      // GRADO 10 - PERIODO 3
      // ----------------------------------------------------------
      {
        periodo: 3,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Uso conceptos y propiedades de la geometría analítica para representar figuras en el plano cartesiano',
          'Modelo situaciones usando ecuaciones de figuras geométricas en el plano cartesiano'
        ],

        diagnostico: 'El 50% de los estudiantes tiene dificultades para derivar la ecuación de una cónica a partir de su definición geométrica y para identificar los elementos de cada cónica.',

        competenciaCiudadana: 'Reconoce las cónicas en el mundo real (órbitas planetarias, diseño de antenas, arquitectura) y aprecia la conexión entre geometría y tecnología.',

        competenciasICFES: {
          razonamiento: 'Deduce las ecuaciones de la circunferencia, parábola, elipse e hipérbola a partir de sus definiciones geométricas.',
          comunicacion: 'Representa cónicas en el plano cartesiano e identifica sus elementos con precisión notacional.',
          resolucionProblemas: 'Determina la ecuación de una cónica a partir de datos geométricos y la usa para resolver problemas de diseño.'
        },

        dba: 'Utiliza la geometría analítica para representar y analizar figuras geométricas en el plano cartesiano resolviendo problemas en contexto.',

        preguntaProblema: '¿Cómo la geometría analítica nos permite describir con ecuaciones las trayectorias y formas que observamos en el universo?',

        ejesTematicos: [
          'Lugar geométrico y distancia entre puntos',
          'Circunferencia: ecuación ordinaria y general',
          'Parábola: elementos y ecuaciones',
          'Elipse: elementos y ecuaciones',
          'Hipérbola: elementos y ecuaciones'
        ],

        evidenciasAprendizaje: [
          'Calcula la distancia entre dos puntos y el punto medio de un segmento.',
          'Determina la ecuación de una circunferencia dados el centro y el radio, o tres puntos.',
          'Identifica y calcula los elementos de una parábola (foco, vértice, directriz, lado recto).',
          'Identifica los elementos de una elipse (focos, vértices, ejes, excentricidad) y escribe su ecuación.',
          'Identifica los elementos de una hipérbola y grafica sus asíntotas.'
        ],

        matrizReferencia: {
          componente: 'Geométrico-Métrico',
          competencia: 'Razonamiento y argumentación',
          afirmaciones: [
            'Justifica la ecuación de una cónica a partir de su definición geométrica.',
            'Identifica los elementos de una cónica a partir de su ecuación o gráfica.'
          ],
          evidenciasICFES: [
            'Determina la ecuación de una circunferencia o parábola dados sus elementos.',
            'Identifica los focos y vértices de una elipse o hipérbola a partir de su ecuación.'
          ]
        },

        aprendizajesICFES: ['mat-s11-05', 'mat-s11-07'],
        evidenciasICFES: ['mat-s11-05-e1', 'mat-s11-05-e2', 'mat-s11-05-e3', 'mat-s11-07-e1'],
        nivelEsperado: 'Satisfactorio',

        materialesEducativos: [
          'Texto escolar de Matemáticas 10°',
          'GeoGebra para construcción dinámica de cónicas',
          'Material concreto: cuerdas para construir elipses con dos focos y cuerda fija',
          'Papel cuadriculado para gráficas de cónicas',
          'Videos sobre aplicaciones astronómicas de las cónicas (NASA, ESA)'
        ],

        estrategiasMetodologicas: [
          'Construcción intuitiva de cónicas con material concreto antes de la ecuación.',
          'GeoGebra: lugar geométrico dinámico para deducir la ecuación de cada cónica.',
          'Análisis de aplicaciones reales: antenas parabólicas, órbitas de planetas.',
          'Trabajo por estaciones: cada estación corresponde a una cónica diferente.',
          'Resolución de problemas de diseño arquitectónico usando cónicas.'
        ],

        criteriosEvaluacion: {
          saber: [
            'Define cada cónica como lugar geométrico y enuncia su ecuación estándar.',
            'Identifica los elementos principales de cada cónica (focos, vértices, ejes, directriz).',
            'Explica aplicaciones reales de las cónicas en ciencia y tecnología.'
          ],
          hacer: [
            'Determina la ecuación de una cónica a partir de sus elementos geométricos.',
            'Identifica y calcula los elementos de una cónica dada su ecuación.',
            'Grafica cónicas en el plano cartesiano con precisión.',
            'Resuelve problemas de diseño que involucren cónicas.'
          ],
          ser: [
            'Muestra asombro e interés por la presencia de las matemáticas en el universo.',
            'Trabaja con orden y precisión en las construcciones geométricas.',
            'Contribuye equitativamente en las actividades de trabajo en equipo.'
          ],
          porcentajes: { saber: 30, hacer: 50, ser: 20 }
        },

        tiposPensamiento: ['Espacial', 'Métrico', 'Variacional']
      },

      // ----------------------------------------------------------
      // GRADO 10 - PERIODO 4
      // ----------------------------------------------------------
      {
        periodo: 4,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Uso argumentos estadísticos e inferenciales para analizar datos y tomar decisiones',
          'Resuelvo y formulo problemas que requieren el uso de conceptos avanzados de probabilidad'
        ],

        diagnostico: 'El 46% de los estudiantes confunde distribución normal con otros modelos estadísticos y no interpreta el intervalo de confianza ni los niveles de significancia.',

        competenciaCiudadana: 'Usa el pensamiento estadístico para interpretar críticamente encuestas, estudios y datos presentados en medios de comunicación, desarrollando ciudadanía informada.',

        competenciasICFES: {
          razonamiento: 'Justifica inferencias estadísticas basándose en datos muestrales e intervalos de confianza.',
          comunicacion: 'Representa y comunica distribuciones de datos usando histogramas, diagramas de caja y distribuciones de probabilidad.',
          resolucionProblemas: 'Calcula probabilidades usando distribuciones binomial y normal, y aplica pruebas estadísticas básicas.'
        },

        dba: 'Aplica conceptos de estadística inferencial y probabilidad para tomar decisiones informadas en situaciones de incertidumbre.',

        preguntaProblema: '¿Cómo la estadística inferencial y la probabilidad nos permiten tomar decisiones confiables a partir de muestras limitadas?',

        ejesTematicos: [
          'Distribución normal y tipificación Z',
          'Intervalos de confianza',
          'Combinatoria: permutaciones y combinaciones',
          'Distribución binomial',
          'Proyecto integrador estadístico'
        ],

        evidenciasAprendizaje: [
          'Calcula probabilidades usando la distribución normal estándar (tabla Z).',
          'Construye e interpreta intervalos de confianza para la media poblacional.',
          'Calcula permutaciones y combinaciones para contar arreglos y selecciones.',
          'Aplica la distribución binomial para calcular probabilidades de eventos repetidos.',
          'Diseña, ejecuta e interpreta un proyecto de investigación estadística completo.'
        ],

        matrizReferencia: {
          componente: 'Aleatorio',
          competencia: 'Resolución y planteamiento de problemas',
          afirmaciones: [
            'Calcula probabilidades usando la distribución normal e interpreta los resultados.',
            'Usa combinatoria para contar posibilidades en situaciones de elección y arreglo.'
          ],
          evidenciasICFES: [
            'Determina la probabilidad de un intervalo usando la distribución normal estándar.',
            'Calcula el número de combinaciones o permutaciones en una situación dada.'
          ]
        },

        aprendizajesICFES: ['mat-s11-09', 'mat-s11-10'],
        evidenciasICFES: ['mat-s11-09-e1', 'mat-s11-09-e3', 'mat-s11-10-e1', 'mat-s11-10-e2'],
        nivelEsperado: 'Avanzado',

        materialesEducativos: [
          'Texto escolar de Matemáticas 10°',
          'Tabla de distribución normal estándar (tabla Z)',
          'Calculadora estadística o GeoGebra (módulo de probabilidad)',
          'Hojas de cálculo para análisis estadístico',
          'Bases de datos reales (DANE, ICFES, OMS) para el proyecto integrador'
        ],

        estrategiasMetodologicas: [
          'Aprendizaje basado en proyectos: investigación estadística sobre tema de interés estudiantil.',
          'Análisis de encuestas reales: identificar muestras, márgenes de error e intervalos de confianza.',
          'Juegos de combinatoria para desarrollar intuición antes de las fórmulas.',
          'Simulación de distribución binomial con monedas y dados.',
          'Presentación final del proyecto integrador con análisis estadístico completo.'
        ],

        criteriosEvaluacion: {
          saber: [
            'Describe las características de la distribución normal y su curva de Gauss.',
            'Define intervalo de confianza y nivel de confianza.',
            'Enuncia la diferencia entre permutación y combinación.'
          ],
          hacer: [
            'Calcula probabilidades usando la distribución normal con tabla Z.',
            'Construye intervalos de confianza para la media con muestras grandes.',
            'Calcula permutaciones y combinaciones en situaciones de conteo.',
            'Presenta un proyecto de investigación estadística con análisis completo.'
          ],
          ser: [
            'Interpreta datos estadísticos con espíritu crítico y responsabilidad ciudadana.',
            'Lidera o colabora efectivamente en el proyecto de investigación grupal.',
            'Reflexiona sobre la validez y confiabilidad de sus propias conclusiones estadísticas.'
          ],
          porcentajes: { saber: 30, hacer: 50, ser: 20 }
        },

        tiposPensamiento: ['Aleatorio', 'Numérico', 'Variacional']
      }
    ]
  },

  // ============================================================
  // GRADO 11
  // ============================================================
  '11': {
    grado: '11°',
    intensidadHoraria: 4,
    totalSemanas: 40,
    totalHorasAnuales: 160,
    objetivo: 'Introducir el cálculo diferencial e integral básico, consolidar el análisis de funciones y desarrollar el pensamiento matemático avanzado para la educación superior',

    periodos: [
      // ----------------------------------------------------------
      // GRADO 11 - PERIODO 1
      // ----------------------------------------------------------
      {
        periodo: 1,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Analizo las propiedades de diferentes tipos de funciones usando los conceptos de límite y continuidad',
          'Uso conceptos del análisis matemático para modelar y resolver situaciones problema del entorno'
        ],

        diagnostico: 'El 60% de los estudiantes no comprende el concepto intuitivo de límite ni lo distingue del valor de la función en un punto, lo que dificulta el paso al cálculo.',

        competenciaCiudadana: 'Reflexiona sobre el papel del cálculo diferencial en el desarrollo tecnológico e industrial, reconociendo la importancia de la matemática avanzada para el progreso social.',

        competenciasICFES: {
          razonamiento: 'Analiza el comportamiento de una función en la vecindad de un punto usando el concepto de límite.',
          comunicacion: 'Representa límites usando notación formal (lim) e interpreta su significado gráfico y numérico.',
          resolucionProblemas: 'Calcula límites de funciones algebraicas y racionales usando técnicas algebraicas y el Teorema del Emparedado.'
        },

        dba: 'Comprende el concepto de límite como fundamento del cálculo y lo aplica para analizar el comportamiento de funciones.',

        preguntaProblema: '¿Cómo el concepto de límite nos permite entender y describir el comportamiento de una función cuando nos acercamos infinitamente a un punto?',

        ejesTematicos: [
          'Revisión y profundización de funciones: dominio, recorrido, composición, inversas',
          'Concepto intuitivo y formal de límite',
          'Cálculo de límites: técnicas algebraicas',
          'Límites laterales y en el infinito',
          'Continuidad de una función'
        ],

        evidenciasAprendizaje: [
          'Determina dominio, recorrido, función inversa y función compuesta de funciones dadas.',
          'Calcula límites de funciones polinómicas, racionales y con radicales usando sustitución y factorización.',
          'Determina límites laterales e identifica cuándo el límite existe o no existe.',
          'Analiza el comportamiento asintótico de una función (límites en el infinito).',
          'Determina si una función es continua en un punto o en un intervalo.'
        ],

        matrizReferencia: {
          componente: 'Variacional / Numérico',
          competencia: 'Razonamiento y argumentación',
          afirmaciones: [
            'Justifica la existencia o no existencia de un límite usando límites laterales.',
            'Analiza la continuidad de una función en un punto usando la definición formal.'
          ],
          evidenciasICFES: [
            'Calcula el límite de una función en un punto usando las técnicas algebraicas adecuadas.',
            'Determina si una función es continua en un punto dado, justificando la respuesta.'
          ]
        },

        aprendizajesICFES: ['mat-s11-01', 'mat-s11-02', 'mat-s11-11'],
        evidenciasICFES: ['mat-s11-01-e1', 'mat-s11-02-e1', 'mat-s11-02-e2', 'mat-s11-11-e1'],
        nivelEsperado: 'Mínimo',

        materialesEducativos: [
          'Texto de Cálculo (Stewart, Purcell o Larson, adaptado para media)',
          'GeoGebra para visualizar límites y continuidad gráficamente',
          'Guías de cálculo de límites con niveles graduados de dificultad',
          'Videos de Khan Academy sobre límites (en español)',
          'Calculadora científica'
        ],

        estrategiasMetodologicas: [
          'Introducción intuitiva con tablas numéricas y gráficas antes de la definición formal.',
          'Exploración con GeoGebra: acercarse a un punto desde la izquierda y la derecha.',
          'Resolución progresiva: límites por sustitución, luego factorización, luego racionalización.',
          'Análisis de casos especiales: funciones a trozos, discontinuidades removibles y esenciales.',
          'Conexión con situaciones reales: velocidad instantánea como motivación del cálculo.'
        ],

        criteriosEvaluacion: {
          saber: [
            'Define límite de una función en un punto con palabras propias y con notación formal.',
            'Enuncia las condiciones de continuidad de una función en un punto.',
            'Describe la diferencia entre límite lateral izquierdo y derecho.'
          ],
          hacer: [
            'Calcula límites usando sustitución directa, factorización y racionalización.',
            'Determina límites laterales y establece si el límite bilateral existe.',
            'Analiza límites al infinito e identifica asíntotas horizontales.',
            'Determina la continuidad de una función en puntos específicos.'
          ],
          ser: [
            'Muestra apertura ante ideas matemáticas abstractas y persiste ante la dificultad conceptual.',
            'Valora la precisión del lenguaje matemático para comunicar ideas con claridad.',
            'Participa con iniciativa en las discusiones sobre el concepto de límite.'
          ],
          porcentajes: { saber: 30, hacer: 50, ser: 20 }
        },

        tiposPensamiento: ['Variacional', 'Numérico', 'Métrico']
      },

      // ----------------------------------------------------------
      // GRADO 11 - PERIODO 2
      // ----------------------------------------------------------
      {
        periodo: 2,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Uso el concepto de derivada como razón de cambio y como pendiente de la recta tangente',
          'Aplico reglas de derivación para analizar el comportamiento de funciones'
        ],

        diagnostico: 'El 57% de los estudiantes calcula derivadas mecánicamente sin comprender su significado geométrico ni aplicarlas al análisis de funciones.',

        competenciaCiudadana: 'Comprende cómo la derivada es usada en economía (costo marginal, ingreso marginal) y en física (velocidad, aceleración) para optimizar recursos y decisiones.',

        competenciasICFES: {
          razonamiento: 'Interpreta la derivada como razón de cambio instantánea y como pendiente de la recta tangente, relacionando conceptos geométricos y analíticos.',
          comunicacion: 'Expresa la derivada usando diferentes notaciones (Leibniz, prima, operador D) e interpreta resultados en contexto.',
          resolucionProblemas: 'Aplica reglas de derivación para analizar el comportamiento de funciones y resolver problemas de optimización básicos.'
        },

        dba: 'Calcula derivadas usando reglas y las interpreta como razón de cambio para analizar el comportamiento de funciones en contextos reales.',

        preguntaProblema: '¿Cómo la derivada nos permite conocer la tasa de cambio instantánea de cualquier proceso y optimizar resultados?',

        ejesTematicos: [
          'Definición de derivada: límite del cociente diferencial',
          'Reglas de derivación (potencia, producto, cociente, cadena)',
          'Derivadas de funciones trascendentes (exponencial, logarítmica, trigonométricas)',
          'Análisis de funciones: crecimiento, decrecimiento, máximos y mínimos',
          'Problemas de optimización'
        ],

        evidenciasAprendizaje: [
          'Calcula la derivada de una función usando la definición (límite del cociente diferencial).',
          'Aplica las reglas de derivación (potencia, producto, cociente, cadena) correctamente.',
          'Deriva funciones exponenciales, logarítmicas y trigonométricas.',
          'Determina intervalos de crecimiento y decrecimiento, máximos y mínimos de una función.',
          'Resuelve problemas de optimización básicos usando la derivada.'
        ],

        matrizReferencia: {
          componente: 'Variacional',
          competencia: 'Resolución y planteamiento de problemas',
          afirmaciones: [
            'Calcula derivadas usando las reglas correspondientes y las interpreta en contexto.',
            'Usa la derivada para determinar el comportamiento de una función (crecimiento, extremos).'
          ],
          evidenciasICFES: [
            'Determina la derivada de una función usando la regla adecuada.',
            'Identifica los intervalos donde una función es creciente o decreciente usando la derivada.'
          ]
        },

        aprendizajesICFES: ['mat-s11-02', 'mat-s11-11', 'mat-s11-12'],
        evidenciasICFES: ['mat-s11-02-e2', 'mat-s11-11-e2', 'mat-s11-11-e3', 'mat-s11-12-e1'],
        nivelEsperado: 'Satisfactorio',

        materialesEducativos: [
          'Texto de Cálculo (Stewart o Purcell, adaptado para media)',
          'GeoGebra para visualizar la recta tangente y el significado geométrico de la derivada',
          'Guías de ejercitación de reglas de derivación',
          'Videos tutoriales sobre derivadas y aplicaciones',
          'Calculadora científica o CAS (GeoGebra Algebra)'
        ],

        estrategiasMetodologicas: [
          'Introducción geométrica: secante que se convierte en tangente al acercar los puntos.',
          'Derivación por definición: calcular límites del cociente para funciones simples.',
          'Práctica progresiva de reglas: potencia → producto → cociente → cadena.',
          'Análisis gráfico: relacionar gráfica de f(x) con la gráfica de f\'(x).',
          'Problemas de optimización contextualizados (máximo beneficio, mínimo costo, máxima área).'
        ],

        criteriosEvaluacion: {
          saber: [
            'Define la derivada usando el límite del cociente diferencial.',
            'Enuncia las reglas de derivación (potencia, producto, cociente, cadena).',
            'Describe el criterio de la primera derivada para determinar máximos y mínimos.'
          ],
          hacer: [
            'Calcula derivadas de funciones polinómicas, racionales y trascendentes.',
            'Aplica la regla de la cadena a funciones compuestas.',
            'Determina extremos relativos y absolutos de funciones usando la derivada.',
            'Resuelve problemas de optimización planteando la función objetivo y sus restricciones.'
          ],
          ser: [
            'Conecta el cálculo diferencial con aplicaciones reales de su interés (física, economía, biología).',
            'Verifica sus resultados por métodos gráficos, mostrando espíritu crítico.',
            'Apoya a sus compañeros en la comprensión de las reglas de derivación.'
          ],
          porcentajes: { saber: 30, hacer: 50, ser: 20 }
        },

        tiposPensamiento: ['Variacional', 'Numérico', 'Métrico']
      },

      // ----------------------------------------------------------
      // GRADO 11 - PERIODO 3
      // ----------------------------------------------------------
      {
        periodo: 3,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Uso el concepto de integral como acumulación y como inverso de la derivada',
          'Aplico el Teorema Fundamental del Cálculo para calcular áreas bajo curvas'
        ],

        diagnostico: 'El 62% de los estudiantes no comprende la relación entre derivada e integral y no interpreta la integral definida como área bajo la curva en contextos reales.',

        competenciaCiudadana: 'Reconoce cómo la integral permite calcular trabajo, distancia recorrida, área de regiones irregulares y otros problemas prácticos en ingeniería y ciencias.',

        competenciasICFES: {
          razonamiento: 'Justifica la relación entre derivación e integración usando el Teorema Fundamental del Cálculo.',
          comunicacion: 'Usa la notación de la integral definida e indefinida con precisión e interpreta resultados en contexto.',
          resolucionProblemas: 'Calcula integrales indefinidas y definidas, y usa la integral definida para calcular áreas entre curvas.'
        },

        dba: 'Comprende la integral como operación inversa de la derivada y como herramienta para calcular acumulaciones en situaciones reales.',

        preguntaProblema: '¿Cómo la integral nos permite calcular acumulaciones (distancias, áreas, volúmenes) que no podemos medir directamente?',

        ejesTematicos: [
          'Antiderivada e integral indefinida',
          'Reglas básicas de integración (potencia, exponencial, trigonométricas)',
          'Integral definida y Teorema Fundamental del Cálculo',
          'Cálculo de áreas entre curvas',
          'Aplicaciones de la integral (distancia, trabajo, área)'
        ],

        evidenciasAprendizaje: [
          'Calcula antiderivadas usando las reglas básicas de integración.',
          'Aplica el Teorema Fundamental del Cálculo para evaluar integrales definidas.',
          'Calcula el área bajo una curva entre dos límites dados.',
          'Determina el área entre dos curvas identificando la región de integración.',
          'Aplica la integral a problemas de distancia recorrida y acumulación.'
        ],

        matrizReferencia: {
          componente: 'Variacional / Métrico',
          competencia: 'Razonamiento y argumentación',
          afirmaciones: [
            'Justifica la relación inversa entre derivada e integral usando el Teorema Fundamental del Cálculo.',
            'Calcula el área de una región plana usando integrales definidas.'
          ],
          evidenciasICFES: [
            'Determina la antiderivada de una función usando las reglas de integración.',
            'Calcula el área bajo una curva usando la integral definida.'
          ]
        },

        aprendizajesICFES: ['mat-s11-04', 'mat-s11-11', 'mat-s11-12'],
        evidenciasICFES: ['mat-s11-04-e1', 'mat-s11-11-e2', 'mat-s11-11-e3', 'mat-s11-12-e2'],
        nivelEsperado: 'Satisfactorio',

        materialesEducativos: [
          'Texto de Cálculo (Stewart o Purcell, adaptado para media)',
          'GeoGebra para visualizar sumas de Riemann y convergencia a la integral',
          'Guías de integración con técnicas básicas',
          'Videos tutoriales sobre el Teorema Fundamental del Cálculo',
          'Papel cuadriculado para estimar áreas por cuadriculas (motivación intuitiva)'
        ],

        estrategiasMetodologicas: [
          'Introducción intuitiva: estimación de áreas por sumas de rectángulos (sumas de Riemann).',
          'Visualización con GeoGebra: cómo las sumas de Riemann se acercan a la integral.',
          'Demostración informal del Teorema Fundamental: derivada de la integral es la función.',
          'Práctica de integración: reglas básicas, constante de integración.',
          'Problemas de aplicación: área de regiones irregulares, distancia desde velocidad.'
        ],

        criteriosEvaluacion: {
          saber: [
            'Define integral indefinida y enuncia las reglas básicas de integración.',
            'Enuncia el Teorema Fundamental del Cálculo y su significado.',
            'Explica el concepto de área como integral definida.'
          ],
          hacer: [
            'Calcula integrales indefinidas usando reglas de potencia, exponencial y trigonométricas.',
            'Evalúa integrales definidas usando el Teorema Fundamental del Cálculo.',
            'Calcula áreas bajo curvas y entre dos curvas.',
            'Resuelve problemas de aplicación: distancia a partir de velocidad, trabajo.'
          ],
          ser: [
            'Muestra admiración por la elegancia del Teorema Fundamental del Cálculo.',
            'Trabaja con rigor y precisión en los cálculos de integrales.',
            'Reflexiona sobre cómo el cálculo integral resuelve problemas imposibles con geometría elemental.'
          ],
          porcentajes: { saber: 30, hacer: 50, ser: 20 }
        },

        tiposPensamiento: ['Variacional', 'Métrico', 'Numérico']
      },

      // ----------------------------------------------------------
      // GRADO 11 - PERIODO 4
      // ----------------------------------------------------------
      {
        periodo: 4,
        semanas: 10,
        horasSemana: 4,
        horasTotales: 40,

        estandares: [
          'Uso conceptos y procedimientos matemáticos avanzados para modelar y resolver situaciones complejas',
          'Interpreto y uso matemáticas en contextos de otras disciplinas y de la vida real'
        ],

        diagnostico: 'El 44% de los estudiantes no integra los conocimientos matemáticos adquiridos a lo largo del bachillerato para resolver problemas interdisciplinares ni para las pruebas Saber 11.',

        competenciaCiudadana: 'Reflexiona sobre su proceso de aprendizaje matemático, proyecta su vida académica y profesional, y reconoce la matemática como herramienta para la ciudadanía activa.',

        competenciasICFES: {
          razonamiento: 'Articula conceptos de álgebra, geometría, cálculo y estadística para razonar en situaciones matemáticas complejas propias de las pruebas Saber 11.',
          comunicacion: 'Comunica argumentos matemáticos con precisión y coherencia, justificando procedimientos y resultados ante diferentes audiencias.',
          resolucionProblemas: 'Resuelve situaciones problema que integran múltiples campos de las matemáticas, con énfasis en el formato y habilidades evaluadas por el ICFES.'
        },

        dba: 'Integra conocimientos matemáticos de toda la educación básica y media para resolver problemas complejos y prepararse para la vida universitaria.',

        preguntaProblema: '¿Cómo los conocimientos matemáticos acumulados durante el bachillerato me preparan para los desafíos académicos, laborales y ciudadanos?',

        ejesTematicos: [
          'Repaso integral: álgebra, funciones y cálculo',
          'Preparación pruebas Saber 11: componente matemático',
          'Probabilidad avanzada: combinatoria y distribuciones',
          'Modelación matemática interdisciplinar',
          'Proyecto de vida y matemáticas: aplicaciones en carreras'
        ],

        evidenciasAprendizaje: [
          'Resuelve simulacros de pruebas Saber 11 en el componente matemático con nivel mínimo B.',
          'Identifica y aplica estrategias específicas para cada tipo de pregunta del ICFES.',
          'Desarrolla un proyecto de modelación matemática aplicada a un campo de interés personal.',
          'Calcula probabilidades usando principio de conteo, permutaciones y combinaciones en problemas complejos.',
          'Sustenta su proyecto final integrando al menos tres campos de las matemáticas.'
        ],

        matrizReferencia: {
          componente: 'Multidimensional (todos los componentes)',
          competencia: 'Resolución y planteamiento de problemas / Razonamiento y argumentación',
          afirmaciones: [
            'Integra conocimientos de álgebra, geometría, estadística y cálculo para resolver situaciones complejas.',
            'Selecciona y aplica la estrategia matemática más eficiente para resolver problemas del formato ICFES.'
          ],
          evidenciasICFES: [
            'Resuelve problemas que integran múltiples conceptos matemáticos en un solo contexto.',
            'Justifica y comunica el procedimiento de solución de manera clara y precisa.'
          ]
        },

        aprendizajesICFES: ['mat-s11-03', 'mat-s11-04', 'mat-s11-09', 'mat-s11-12'],
        evidenciasICFES: ['mat-s11-03-e1', 'mat-s11-04-e2', 'mat-s11-09-e2', 'mat-s11-09-e3', 'mat-s11-12-e2'],
        nivelEsperado: 'Avanzado',

        materialesEducativos: [
          'Cuadernillo de simulacros ICFES (pruebas anteriores Saber 11)',
          'Aplicación ICFES oficial o simuladores en línea',
          'GeoGebra para revisión de temas de geometría y cálculo',
          'Texto de referencia de matemáticas media (todos los temas)',
          'Recursos en línea: Khan Academy, Desmos, YouTube (canales de matemáticas en español)'
        ],

        estrategiasMetodologicas: [
          'Simulacros semanales de preguntas tipo ICFES con análisis de errores.',
          'Aprendizaje basado en proyectos: modelación matemática en una carrera de interés.',
          'Trabajo en estaciones: cada estación refuerza un campo matemático diferente.',
          'Análisis de errores frecuentes en pruebas anteriores y estrategias de resolución.',
          'Presentación y defensa del proyecto integrador ante jurados (pares y docente).'
        ],

        criteriosEvaluacion: {
          saber: [
            'Reconoce y describe los principales conceptos matemáticos de toda la educación media.',
            'Identifica el tipo de razonamiento requerido en diferentes tipos de preguntas ICFES.',
            'Enuncia aplicaciones de las matemáticas en al menos tres áreas del conocimiento.'
          ],
          hacer: [
            'Resuelve simulacros Saber 11 con desempeño en nivel B o superior.',
            'Calcula probabilidades en situaciones complejas usando combinatoria.',
            'Desarrolla y presenta un proyecto de modelación matemática aplicada.',
            'Integra conceptos de álgebra, geometría, estadística y cálculo en la resolución de problemas.'
          ],
          ser: [
            'Reflexiona sobre su propio aprendizaje matemático con madurez y honestidad.',
            'Proyecta con motivación y realismo su vida académica y profesional.',
            'Valora la matemática como herramienta indispensable para la ciudadanía y el desarrollo personal.'
          ],
          porcentajes: { saber: 30, hacer: 50, ser: 20 }
        },

        tiposPensamiento: ['Numérico', 'Variacional', 'Espacial', 'Métrico', 'Aleatorio']
      }
    ]
  }

};

// Exportar para uso en módulos (CommonJS y ESM)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PLANES_MATEMATICAS };
}
