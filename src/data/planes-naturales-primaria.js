/**
 * Planes de aula de Ciencias Naturales - Grados 1° a 5° (Primaria)
 * Estructura: 4 periodos x 10 semanas x 3 horas/semana = 120 horas/año
 * Basado en Estándares Básicos de Competencias (EBC) del MEN - Colombia
 * Competencias ICFES: Uso comprensivo del conocimiento, Explicación de fenómenos, Indagación
 */

const PLANES_NATURALES_PRIMARIA = {

  // ============================================================
  // GRADO 1
  // ============================================================
  '1': {
    grado: '1°',
    intensidadHoraria: 3,
    totalSemanas: 40,
    totalHorasAnuales: 120,
    objetivo: 'Desarrollar la capacidad de observación y exploración del entorno natural cercano, reconociendo características de los seres vivos, propiedades de los materiales y fenómenos físicos cotidianos, a través de experiencias sensoriales y actividades lúdicas que fomenten la curiosidad científica.',

    periodos: [
      // ----------------------------------------------------------
      // GRADO 1 - PERIODO 1
      // ----------------------------------------------------------
      {
        periodo: 1,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Describo características de seres vivos y objetos inertes, establezco semejanzas y diferencias entre ellos y los clasifico.',
          'Reconozco y describo organismos del entorno como animales, plantas, hongos y microorganismos.',
          'Propongo respuestas a mis preguntas y las comparo con las de otras personas.'
        ],

        dba: 'Describe características observables de los seres vivos (plantas y animales) que les permiten sobrevivir en su entorno. Diferencia los seres vivos de los objetos inertes a partir de características como crecimiento, reproducción y nutrición.',

        ejesTematicos: [
          'Seres vivos y objetos sin vida: características y diferencias',
          'Las plantas: partes y funciones (raíz, tallo, hojas, flor, fruto)',
          'Los animales: características, alimentación y desplazamiento',
          'El cuerpo humano: partes externas y cuidado personal',
          'Ciclo de vida: nacimiento, crecimiento y reproducción'
        ],

        tiposPensamiento: ['Entorno vivo'],

        preguntaProblema: '¿Qué tienen en común los seres vivos y en qué se diferencian de los objetos que nos rodean?',

        diagnostico: 'La mayoría de los estudiantes de grado 1° distinguen intuitivamente plantas y animales, pero no identifican con claridad las características que definen a un ser vivo ni los diferencian sistemáticamente de los objetos inertes.',

        competenciasICFES: {
          usoConocimiento: 'Reconoce características de los seres vivos y los diferencia de los objetos sin vida usando criterios observables.',
          explicacion: 'Describe las funciones básicas de plantas y animales (alimentarse, crecer, reproducirse) con ejemplos del entorno cercano.',
          indagacion: 'Usa los sentidos para explorar el entorno y registra observaciones sencillas sobre seres vivos y objetos.'
        },

        matrizReferencia: {
          componente: 'entorno-vivo',
          competencia: 'uso-conocimiento',
          afirmaciones: [
            'Identifica características de los seres vivos: crecer, reproducirse, alimentarse y responder al entorno.',
            'Clasifica objetos y organismos usando criterios como vivo o no vivo, con o sin movimiento propio.'
          ]
        },

        aprendizajesICFES: ['nat-s3-01', 'nat-s3-02'],
        nivelEsperado: 'Mínimo',

        evidenciasICFES: ['nat-s3-01-e1', 'nat-s3-01-e2', 'nat-s3-01-e3', 'nat-s3-02-e1', 'nat-s3-02-e2'],

        evidenciasAprendizaje: [
          'Menciona al menos tres características que distinguen a los seres vivos de los objetos inertes.',
          'Clasifica imágenes de seres vivos y objetos usando criterios observables (crece, se mueve, se reproduce).',
          'Identifica y nombra las partes principales de una planta y explica para qué sirve cada una.',
          'Describe cómo se alimentan y se desplazan algunos animales del entorno escolar.',
          'Reconoce que los seres vivos nacen, crecen, se reproducen y mueren.'
        ],

        estrategiasMetodologicas: [
          'Salida de observación al patio escolar para identificar seres vivos y objetos inertes.',
          'Clasificación de tarjetas con imágenes: seres vivos vs. objetos (juego de grupos).',
          'Cultivo de una semilla en vaso transparente para observar el proceso de germinación.',
          'Elaboración de un álbum ilustrado "Los seres vivos de mi barrio" con dibujos y recortes.',
          'Canción y ronda sobre las partes del cuerpo y las funciones de los animales.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Naturales 1° (editorial Norma o Santillana)',
          'Semillas de fríjol o maíz para actividad de germinación',
          'Láminas y tarjetas con imágenes de seres vivos y objetos',
          'Lupas para observación en el patio escolar',
          'Videos cortos sobre animales y plantas del entorno colombiano'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Menciona características que diferencian los seres vivos de los objetos inertes.',
            'Nombra las partes principales de una planta y un animal del entorno.',
            'Explica con sus palabras qué significa nacer, crecer y reproducirse.'
          ],
          hacer: [
            'Clasifica correctamente imágenes de seres vivos y objetos en tablas sencillas.',
            'Registra observaciones del proceso de germinación con dibujos y descripciones cortas.',
            'Elabora un álbum ilustrado con seres vivos identificados en el entorno escolar.'
          ],
          ser: [
            'Cuida las plantas del aula y del patio con responsabilidad.',
            'Participa con entusiasmo en las actividades de observación y clasificación.',
            'Respeta los seres vivos del entorno escolar y evita lastimarlos.'
          ]
        },

        competenciaCiudadana: 'Reflexiona sobre la importancia de cuidar y respetar los seres vivos del entorno escolar y familiar, reconociendo que todos los organismos merecen ser tratados con responsabilidad.'
      },

      // ----------------------------------------------------------
      // GRADO 1 - PERIODO 2
      // ----------------------------------------------------------
      {
        periodo: 2,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Describo y clasifico objetos según características que percibo con los sentidos (forma, textura, color, olor, sabor).',
          'Identifico los estados de la materia (sólido, líquido, gaseoso) en objetos y sustancias cotidianas.',
          'Reconozco en el entorno fenómenos físicos que me afectan y registro mis observaciones.'
        ],

        dba: 'Identifica los estados de la materia (sólido, líquido, gaseoso) en objetos y sustancias cotidianas y reconoce algunos cambios entre ellos. Usa los sentidos para explorar el entorno y describe características de objetos y fenómenos naturales.',

        ejesTematicos: [
          'Los sentidos: órganos y funciones',
          'Propiedades de los objetos: color, forma, textura, tamaño, olor',
          'Los tres estados de la materia: sólido, líquido y gaseoso',
          'El agua y sus estados en la naturaleza',
          'Cambios de estado: derretir, congelar, evaporar'
        ],

        tiposPensamiento: ['Entorno físico'],

        preguntaProblema: '¿Cómo podemos conocer las características de los objetos que nos rodean y en qué estados puede encontrarse la materia?',

        diagnostico: 'Los estudiantes conocen los sentidos pero tienen dificultad para asociarlos con propiedades específicas de los objetos. Confunden frecuentemente los estados de la materia, especialmente el gaseoso.',

        competenciasICFES: {
          usoConocimiento: 'Identifica propiedades de los materiales (color, textura, forma) usando los sentidos y los agrupa según sus características.',
          explicacion: 'Reconoce los estados de la materia en objetos cotidianos y describe cambios sencillos como derretir o evaporar.',
          indagacion: 'Realiza observaciones usando los sentidos y registra sus hallazgos mediante dibujos y descripciones orales.'
        },

        matrizReferencia: {
          componente: 'entorno-fisico',
          competencia: 'uso-conocimiento',
          afirmaciones: [
            'Observa y describe propiedades de materiales del entorno cotidiano.',
            'Agrupa materiales según propiedades comunes y justifica el criterio de clasificación.'
          ]
        },

        aprendizajesICFES: ['nat-s3-03', 'nat-s3-04'],
        nivelEsperado: 'Mínimo',

        evidenciasICFES: ['nat-s3-03-e1', 'nat-s3-03-e2', 'nat-s3-04-e1', 'nat-s3-04-e2'],

        evidenciasAprendizaje: [
          'Identifica los cinco sentidos y el órgano correspondiente a cada uno.',
          'Describe propiedades de objetos del aula usando al menos tres sentidos.',
          'Clasifica materiales según propiedades observables en tablas sencillas.',
          'Distingue un sólido, un líquido y un gas con ejemplos cotidianos.',
          'Describe qué ocurre cuando el agua se calienta o se congela.'
        ],

        estrategiasMetodologicas: [
          'Caja sensorial: explorar objetos vendados para identificar propiedades usando los sentidos.',
          'Experimento de cambios de estado con agua: hielo, agua líquida y vapor.',
          'Clasificación de materiales del aula en tablas de doble entrada (color y textura).',
          'Observación y registro de materiales sólidos, líquidos y gaseosos en el hogar.',
          'Juego "Adivina qué es" usando solo un sentido para describir un objeto.'
        ],

        materialesEducativos: [
          'Objetos de diversas texturas, formas y colores para exploración sensorial',
          'Hielo, agua y recipientes para experimento de estados de la materia',
          'Fichas de clasificación elaboradas por el docente',
          'Texto escolar de Ciencias Naturales 1°',
          'Videos cortos sobre los estados del agua en la naturaleza'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Nombra los cinco sentidos y los órganos correspondientes.',
            'Distingue sólidos, líquidos y gases con ejemplos del entorno cotidiano.',
            'Describe al menos dos propiedades de objetos explorados en clase.'
          ],
          hacer: [
            'Clasifica objetos usando criterios sensoriales en tablas sencillas.',
            'Realiza y registra el experimento de cambios de estado del agua con dibujos.',
            'Describe oralmente las propiedades de objetos usando vocabulario científico básico.'
          ],
          ser: [
            'Participa activamente en los experimentos con responsabilidad.',
            'Cuida los materiales de trabajo del aula.',
            'Respeta el turno de hablar y escucha las observaciones de sus compañeros.'
          ]
        },

        competenciaCiudadana: 'Reconoce la importancia del agua en sus diferentes estados para la vida cotidiana y reflexiona sobre la necesidad de usarla de forma responsable y sin desperdiciarla.'
      },

      // ----------------------------------------------------------
      // GRADO 1 - PERIODO 3
      // ----------------------------------------------------------
      {
        periodo: 3,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Identifico y describo características del suelo, el agua y el aire de mi entorno.',
          'Identifico y describo la flora, la fauna, el agua y el suelo de mi entorno y el impacto que sobre ellos tienen las actividades humanas.',
          'Reconozco la importancia del agua, el suelo y el aire para el sostenimiento de la vida.'
        ],

        dba: 'Describe las propiedades del agua (color, sabor, olor) y su importancia para los seres vivos. Reconoce que la Tierra está conformada por suelo, agua y aire, y describe características básicas de cada componente.',

        ejesTematicos: [
          'El suelo: características, tipos y usos',
          'El agua: propiedades, fuentes y usos cotidianos',
          'El aire: características e importancia para la vida',
          'Los recursos naturales del entorno cercano',
          'Impacto humano: contaminación y cuidado del ambiente'
        ],

        tiposPensamiento: ['Entorno físico', 'Ciencia, tecnología y sociedad'],

        preguntaProblema: '¿Cómo son el suelo, el agua y el aire de nuestro entorno y por qué son tan importantes para todos los seres vivos?',

        diagnostico: 'Los estudiantes tienen noción de que el agua y el aire son importantes, pero desconocen sus propiedades específicas y no comprenden el impacto de las acciones humanas sobre estos recursos.',

        competenciasICFES: {
          usoConocimiento: 'Reconoce prácticas cotidianas que protegen o deterioran el ambiente y los seres vivos del entorno cercano.',
          explicacion: 'Describe características básicas del suelo, el agua y el aire, y los relaciona con la supervivencia de los seres vivos.',
          indagacion: 'Formula preguntas sobre el entorno natural y propone formas sencillas de cuidar los recursos naturales.'
        },

        matrizReferencia: {
          componente: 'cts',
          competencia: 'uso-conocimiento',
          afirmaciones: [
            'Identifica acciones humanas que contaminan el agua, el suelo o el aire.',
            'Propone acciones concretas para cuidar los recursos naturales de su entorno.'
          ]
        },

        aprendizajesICFES: ['nat-s3-05', 'nat-s3-06'],
        nivelEsperado: 'Mínimo',

        evidenciasICFES: ['nat-s3-05-e1', 'nat-s3-05-e2', 'nat-s3-06-e1', 'nat-s3-06-e2'],

        evidenciasAprendizaje: [
          'Describe con sus palabras qué es el suelo, el agua y el aire.',
          'Identifica al menos dos propiedades del agua observable (sin color, sin olor, sin sabor).',
          'Menciona acciones humanas que contaminan el agua, el suelo o el aire.',
          'Propone al menos dos acciones para cuidar los recursos naturales del entorno.',
          'Explica por qué los seres vivos necesitan agua, aire y suelo para sobrevivir.'
        ],

        estrategiasMetodologicas: [
          'Experimento: filtrar agua turbia con arena, grava y tela para observar su purificación.',
          'Observación del suelo del patio: textura, color y seres vivos que viven en él.',
          'Debate guiado: ¿Qué pasaría si no tuviéramos agua limpia o aire puro?',
          'Cartelera colectiva "Yo cuido mi entorno" con dibujos y compromisos.',
          'Lectura de cuento ambiental sobre el cuidado del agua y el suelo.'
        ],

        materialesEducativos: [
          'Recipientes, arena, grava y tela para experimento de filtración',
          'Muestras de diferentes tipos de suelo (arcilla, arena, tierra negra)',
          'Cuento ambiental para niños (ej. "El último árbol" u otro apropiado)',
          'Texto escolar de Ciencias Naturales 1°',
          'Láminas sobre contaminación y cuidado del ambiente'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe características del suelo, el agua y el aire.',
            'Explica por qué los seres vivos necesitan agua, suelo y aire.',
            'Identifica acciones que contaminan el ambiente cercano.'
          ],
          hacer: [
            'Realiza el experimento de filtración del agua y registra sus observaciones.',
            'Elabora dibujos o collages sobre el cuidado de los recursos naturales.',
            'Participa en la elaboración de compromisos ambientales para el aula.'
          ],
          ser: [
            'Demuestra actitud de cuidado y respeto por el agua y el entorno natural.',
            'Practica en el aula acciones de ahorro de agua y separación de residuos.',
            'Valora los recursos naturales como patrimonio de toda la comunidad.'
          ]
        },

        competenciaCiudadana: 'Asume compromisos concretos para cuidar el agua, el suelo y el aire del entorno escolar y familiar, entendiendo que su conservación es responsabilidad de toda la comunidad.'
      },

      // ----------------------------------------------------------
      // GRADO 1 - PERIODO 4
      // ----------------------------------------------------------
      {
        periodo: 4,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Reconozco los movimientos de la Tierra (rotación y traslación) y los relaciono con los cambios de día/noche y las estaciones.',
          'Propongo respuestas a mis preguntas y las relaciono con las formuladas por científicos y científicas.',
          'Comunico el proceso de indagación y los resultados, utilizando lenguaje oral y escrito.'
        ],

        dba: 'Reconoce los movimientos de la Tierra (rotación y traslación) y los relaciona con los cambios de día/noche y las estaciones. Usa los sentidos para explorar el entorno y describe características de objetos y fenómenos naturales.',

        ejesTematicos: [
          'El Sol: fuente de luz y calor',
          'Movimiento de rotación: día y noche',
          'Movimiento de traslación: estaciones del año',
          'La Luna: fases y observación',
          'Integración: lo que aprendí este año sobre el mundo natural'
        ],

        tiposPensamiento: ['Entorno físico', 'Entorno vivo'],

        preguntaProblema: '¿Por qué hay día y noche, y cómo los movimientos de la Tierra afectan la vida de los seres vivos?',

        diagnostico: 'Los estudiantes asocian el día con el Sol y la noche con la Luna, pero desconocen que es la rotación de la Tierra la que produce el ciclo día-noche, y confunden los dos movimientos terrestres.',

        competenciasICFES: {
          usoConocimiento: 'Reconoce los movimientos de la Tierra y los relaciona con fenómenos observables como el día, la noche y los cambios climáticos.',
          explicacion: 'Explica con ejemplos por qué hay día y noche, y cómo el Sol afecta a los seres vivos.',
          indagacion: 'Formula preguntas sobre fenómenos naturales observables y propone formas sencillas de explorarlos.'
        },

        matrizReferencia: {
          componente: 'entorno-fisico',
          competencia: 'explicacion',
          afirmaciones: [
            'Reconoce cambios de estado (sólido, líquido, gaseoso) en situaciones cotidianas.',
            'Observa y describe qué sucede cuando se mezclan agua con sal o agua con aceite.'
          ]
        },

        aprendizajesICFES: ['nat-s3-01', 'nat-s3-05'],
        nivelEsperado: 'Mínimo',

        evidenciasICFES: ['nat-s3-01-e1', 'nat-s3-05-e1', 'nat-s3-05-e2'],

        evidenciasAprendizaje: [
          'Explica con sus palabras qué es la rotación y por qué hay día y noche.',
          'Describe la diferencia entre el movimiento de rotación y el de traslación.',
          'Identifica el Sol como fuente de luz y calor necesaria para la vida.',
          'Menciona cómo cambia la vida de las plantas y los animales con el día y la noche.',
          'Comunica en forma oral y con dibujos lo aprendido durante el año.'
        ],

        estrategiasMetodologicas: [
          'Modelado con linterna y esferas para simular la rotación terrestre y el día-noche.',
          'Observación del Sol (indirecta, con sombras) y registro de cambios a distintas horas.',
          'Elaboración de un libro viajero sobre "Lo que aprendí de las Ciencias Naturales este año".',
          'Mural de integración: seres vivos, materiales, recursos naturales y movimientos terrestres.',
          'Exposición oral individual: "Mi descubrimiento favorito del año".'
        ],

        materialesEducativos: [
          'Linterna y pelotas de icopor o similares para simulación de movimientos terrestres',
          'Papel para registro de sombras a distintas horas',
          'Texto escolar de Ciencias Naturales 1°',
          'Imágenes del sistema solar apropiadas para primer grado',
          'Materiales para el libro viajero (cartulina, colores, marcadores)'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Explica qué causa el día y la noche en la Tierra.',
            'Distingue entre rotación y traslación con ejemplos sencillos.',
            'Describe cómo el Sol afecta a los seres vivos del entorno.'
          ],
          hacer: [
            'Reproduce el modelo de día-noche con linterna y esfera.',
            'Registra observaciones de sombras a distintas horas del día.',
            'Elabora el libro viajero con lo aprendido durante el año.'
          ],
          ser: [
            'Demuestra curiosidad y asombro por los fenómenos del universo.',
            'Comparte sus aprendizajes con entusiasmo en la exposición oral.',
            'Valora el trabajo científico como una forma de conocer el mundo.'
          ]
        },

        competenciaCiudadana: 'Reconoce que el conocimiento científico nos ayuda a comprender el mundo natural y que compartir lo que aprendemos enriquece a toda la comunidad educativa.'
      }
    ]
  },

  // ============================================================
  // GRADO 2
  // ============================================================
  '2': {
    grado: '2°',
    intensidadHoraria: 3,
    totalSemanas: 40,
    totalHorasAnuales: 120,
    objetivo: 'Profundizar en el reconocimiento de los seres vivos y sus necesidades, el ciclo del agua, las propiedades de los materiales y las mezclas del entorno, desarrollando habilidades de observación, registro y comunicación de fenómenos naturales mediante experiencias prácticas y contextualizadas.',

    periodos: [
      // ----------------------------------------------------------
      // GRADO 2 - PERIODO 1
      // ----------------------------------------------------------
      {
        periodo: 1,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Describo y verifico el efecto de la luz, el sonido, el calor y la humedad sobre algunos seres vivos.',
          'Identifico condiciones de cambio y de equilibrio en los seres vivos y en los objetos de mi entorno.',
          'Propongo y verifico necesidades de luz, agua, suelo y aire de plantas y animales.'
        ],

        dba: 'Describe las necesidades básicas de los seres vivos (alimento, agua, luz, aire) y cómo el entorno las satisface. Explica la función de los órganos de los sentidos en la relación del ser humano con el entorno.',

        ejesTematicos: [
          'Necesidades de los seres vivos: agua, luz, aire y alimento',
          'Las plantas y la luz solar: fotosíntesis básica',
          'Los animales y su alimentación: herbívoros, carnívoros y omnívoros',
          'El ser humano y sus necesidades: nutrición y salud básica',
          'Adaptaciones sencillas de plantas y animales al entorno'
        ],

        tiposPensamiento: ['Entorno vivo'],

        preguntaProblema: '¿Qué necesitan los seres vivos para sobrevivir y cómo obtienen lo que necesitan del entorno?',

        diagnostico: 'Los estudiantes reconocen que los seres vivos necesitan alimento y agua, pero no comprenden la importancia de la luz para las plantas ni distinguen tipos de alimentación en los animales.',

        competenciasICFES: {
          usoConocimiento: 'Reconoce características de los seres vivos e identifica qué necesitan para crecer y desarrollarse.',
          explicacion: 'Describe cómo las plantas usan la luz solar y cómo los animales se alimentan según su tipo.',
          indagacion: 'Propone y verifica experimentalmente las necesidades de luz y agua en plantas del entorno escolar.'
        },

        matrizReferencia: {
          componente: 'entorno-vivo',
          competencia: 'explicacion',
          afirmaciones: [
            'Explica cómo se alimentan y reproducen algunos animales de su entorno.',
            'Describe la función de las partes de una planta (raíz, tallo, hojas, flor, fruto).'
          ]
        },

        aprendizajesICFES: ['nat-s3-01', 'nat-s3-02'],
        nivelEsperado: 'Mínimo',

        evidenciasICFES: ['nat-s3-01-e1', 'nat-s3-01-e2', 'nat-s3-02-e1', 'nat-s3-02-e2'],

        evidenciasAprendizaje: [
          'Menciona las necesidades básicas de plantas y animales: agua, luz, aire y alimento.',
          'Clasifica animales en herbívoros, carnívoros y omnívoros con ejemplos del entorno.',
          'Explica con sus palabras por qué las plantas necesitan luz solar.',
          'Diseña un experimento sencillo para verificar el efecto de la luz en una planta.',
          'Identifica adaptaciones sencillas de animales y plantas al entorno colombiano.'
        ],

        estrategiasMetodologicas: [
          'Experimento de planta con y sin luz: comparar el crecimiento durante dos semanas.',
          'Elaboración de un mapa de alimentos: clasificar animales según su dieta.',
          'Visita al huerto escolar o jardín para observar las condiciones de vida de las plantas.',
          'Juego de roles: cada estudiante es un animal y debe buscar su alimento.',
          'Diario de observación del crecimiento de una semilla durante el periodo.'
        ],

        materialesEducativos: [
          'Plantas o semillas para experimento de luz (caja de cartón para oscurecer)',
          'Tarjetas con imágenes de animales para clasificación',
          'Diario de ciencias personal para cada estudiante',
          'Texto escolar de Ciencias Naturales 2°',
          'Videos sobre animales y sus formas de alimentación'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Enumera las necesidades básicas de los seres vivos.',
            'Clasifica animales en herbívoros, carnívoros y omnívoros con ejemplos.',
            'Explica por qué las plantas necesitan luz solar para vivir.'
          ],
          hacer: [
            'Realiza y registra el experimento sobre el efecto de la luz en las plantas.',
            'Elabora un mapa de alimentos clasificando animales por tipo de dieta.',
            'Mantiene el diario de ciencias con observaciones semanales.'
          ],
          ser: [
            'Demuestra responsabilidad en el cuidado de las plantas del experimento.',
            'Trabaja colaborativamente en las actividades de grupo.',
            'Muestra curiosidad al observar cambios en los seres vivos del entorno.'
          ]
        },

        competenciaCiudadana: 'Comprende que todos los seres vivos tienen necesidades que deben ser respetadas, y que los seres humanos tenemos la responsabilidad de no destruir las condiciones que otros organismos necesitan para vivir.'
      },

      // ----------------------------------------------------------
      // GRADO 2 - PERIODO 2
      // ----------------------------------------------------------
      {
        periodo: 2,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Identifico y describo el ciclo del agua en el entorno.',
          'Propongo respuestas a preguntas sobre mi entorno físico y registro mis observaciones en forma organizada y las comunico.',
          'Reconozco instrumentos para medir variables del entorno físico (regla, balanza, termómetro) y los uso correctamente.'
        ],

        dba: 'Describe el ciclo del agua en la naturaleza y explica su importancia para los ecosistemas. Reconoce que la Tierra está conformada por suelo, agua y aire, y describe características básicas de cada componente.',

        ejesTematicos: [
          'El ciclo del agua: evaporación, condensación y precipitación',
          'Fuentes de agua: ríos, lagos, mares y agua subterránea',
          'El agua y los seres vivos: importancia vital',
          'Medición básica: uso del termómetro y la regla',
          'El clima y sus efectos en el entorno'
        ],

        tiposPensamiento: ['Entorno físico', 'Ciencia, tecnología y sociedad'],

        preguntaProblema: '¿Cómo viaja el agua en la naturaleza y por qué es tan importante para todos los seres vivos?',

        diagnostico: 'Los estudiantes saben que la lluvia viene de las nubes pero no comprenden el ciclo completo del agua ni los procesos de evaporación y condensación que lo hacen posible.',

        competenciasICFES: {
          usoConocimiento: 'Reconoce prácticas cotidianas que protegen o deterioran el ambiente, especialmente relacionadas con el agua.',
          explicacion: 'Describe el ciclo del agua usando los conceptos de evaporación, condensación y precipitación.',
          indagacion: 'Realiza observaciones y registra datos sobre el ciclo del agua con tablas y dibujos sencillos.'
        },

        matrizReferencia: {
          componente: 'entorno-fisico',
          competencia: 'explicacion',
          afirmaciones: [
            'Observa y describe qué sucede cuando se mezclan agua con sal o agua con aceite.',
            'Reconoce cambios de estado (sólido, líquido, gaseoso) en situaciones cotidianas.'
          ]
        },

        aprendizajesICFES: ['nat-s3-04', 'nat-s3-06'],
        nivelEsperado: 'Mínimo',

        evidenciasICFES: ['nat-s3-04-e1', 'nat-s3-04-e2', 'nat-s3-06-e1', 'nat-s3-06-e2'],

        evidenciasAprendizaje: [
          'Describe las tres etapas del ciclo del agua: evaporación, condensación y precipitación.',
          'Explica con sus palabras por qué el agua lluvia puede volver a caer como lluvia.',
          'Identifica fuentes de agua dulce y agua salada con ejemplos reales.',
          'Menciona al menos dos formas de contaminación del agua y cómo prevenirlas.',
          'Usa el termómetro para medir la temperatura del agua en diferentes condiciones.'
        ],

        estrategiasMetodologicas: [
          'Experimento del ciclo del agua en una bolsa plástica sellada expuesta al sol.',
          'Elaboración de un diagrama del ciclo del agua con flechas y descripciones.',
          'Salida de campo para identificar fuentes de agua en el entorno local.',
          'Uso del termómetro para medir temperatura del agua caliente, tibia y fría.',
          'Cuento sobre el viaje de una gota de agua para comprender el ciclo completo.'
        ],

        materialesEducativos: [
          'Bolsas plásticas transparentes sellables para experimento del ciclo del agua',
          'Termómetros para uso escolar',
          'Texto escolar de Ciencias Naturales 2°',
          'Mapas del municipio o región para identificar fuentes de agua',
          'Cuento ilustrado sobre el ciclo del agua'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe las etapas del ciclo del agua con vocabulario apropiado.',
            'Explica la importancia del agua para los seres vivos.',
            'Identifica fuentes de agua y prácticas que la contaminan.'
          ],
          hacer: [
            'Realiza el experimento del ciclo del agua y explica sus observaciones.',
            'Elabora el diagrama del ciclo del agua con etapas correctamente identificadas.',
            'Usa el termómetro correctamente y registra datos de temperatura.'
          ],
          ser: [
            'Valora el agua como recurso vital y practica su ahorro en el aula.',
            'Participa activamente en la salida de campo con respeto al entorno.',
            'Escucha y respeta las opiniones de sus compañeros en el debate.'
          ]
        },

        competenciaCiudadana: 'Reconoce el agua como un recurso vital escaso y asume compromisos específicos para su ahorro y protección en el hogar y la escuela, entendiendo que su cuidado es una responsabilidad compartida.'
      },

      // ----------------------------------------------------------
      // GRADO 2 - PERIODO 3
      // ----------------------------------------------------------
      {
        periodo: 3,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Identifica mezclas en el entorno cotidiano y describe métodos sencillos para separarlas.',
          'Reconozco y describo cambios en los seres vivos y en los objetos de mi entorno.',
          'Identifico objetos tecnológicos de mi entorno cotidiano y los relaciono con las ciencias naturales.'
        ],

        dba: 'Identifica mezclas en el entorno cotidiano y describe métodos sencillos para separarlas (filtración, decantación). Realiza observaciones, registra datos y formula preguntas a partir de fenómenos naturales cotidianos.',

        ejesTematicos: [
          'Las mezclas en el entorno: mezclas de sólidos, líquidos y sólido-líquido',
          'Mezclas homogéneas y heterogéneas: diferencias observables',
          'Separación de mezclas: filtración, decantación y tamizado',
          'Cambios en los materiales: reversibles e irreversibles',
          'Tecnología en el hogar: instrumentos basados en las ciencias'
        ],

        tiposPensamiento: ['Entorno físico', 'Ciencia, tecnología y sociedad'],

        preguntaProblema: '¿Cómo podemos separar las mezclas que encontramos a diario y para qué nos sirve saber hacerlo?',

        diagnostico: 'Los estudiantes identifican mezclas en el entorno (agua con tierra, arena con piedritas) pero desconocen los métodos para separar sus componentes y no distinguen mezclas homogéneas de heterogéneas.',

        competenciasICFES: {
          usoConocimiento: 'Identifica y clasifica mezclas del entorno y las relaciona con métodos sencillos de separación.',
          explicacion: 'Describe el proceso de filtración y decantación explicando qué sucede con los componentes de la mezcla.',
          indagacion: 'Diseña y realiza experimentos de separación de mezclas, registrando el procedimiento y los resultados.'
        },

        matrizReferencia: {
          componente: 'entorno-fisico',
          competencia: 'uso-conocimiento',
          afirmaciones: [
            'Observa y describe qué sucede cuando se mezclan agua con sal o agua con aceite.',
            'Reconoce cambios de estado (sólido, líquido, gaseoso) en situaciones cotidianas.'
          ]
        },

        aprendizajesICFES: ['nat-s3-03', 'nat-s3-04'],
        nivelEsperado: 'Mínimo',

        evidenciasICFES: ['nat-s3-03-e1', 'nat-s3-03-e2', 'nat-s3-04-e1', 'nat-s3-04-e2'],

        evidenciasAprendizaje: [
          'Identifica mezclas en el entorno cotidiano (agua con tierra, arena con piedras, etc.).',
          'Distingue entre mezclas donde se ven los componentes (heterogéneas) y donde no (homogéneas).',
          'Realiza una filtración sencilla para separar una mezcla de agua con arena.',
          'Describe los pasos de la decantación para separar agua y aceite.',
          'Menciona ejemplos de tecnología cotidiana que usa principios de separación de mezclas.'
        ],

        estrategiasMetodologicas: [
          'Laboratorio de mezclas: preparar mezclas de diferentes tipos y clasificarlas.',
          'Práctica de filtración con embudo, papel de filtro, arena y agua turbia.',
          'Práctica de decantación con agua y aceite en envase transparente.',
          'Elaboración de un recetario científico: "Cómo separar diferentes mezclas".',
          'Investigación en casa: identificar mezclas y tecnologías de separación del hogar.'
        ],

        materialesEducativos: [
          'Arena, agua, sal, aceite, tierra, piedras pequeñas para experimentos de mezclas',
          'Embudos, filtros de café, recipientes transparentes para separación',
          'Guías de laboratorio adaptadas al nivel de grado 2°',
          'Texto escolar de Ciencias Naturales 2°',
          'Imágenes de tecnologías de filtración y separación (purificadoras, coladores)'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Diferencia mezclas homogéneas de heterogéneas con ejemplos concretos.',
            'Explica qué es filtrar y para qué se usa.',
            'Describe la diferencia entre un cambio reversible y uno irreversible.'
          ],
          hacer: [
            'Realiza filtración y decantación siguiendo los pasos correctamente.',
            'Registra el procedimiento de los experimentos con dibujos y descripciones.',
            'Elabora el recetario científico con las técnicas de separación aprendidas.'
          ],
          ser: [
            'Sigue las normas de seguridad en los experimentos de laboratorio.',
            'Trabaja ordenadamente y cuida los materiales de trabajo.',
            'Comparte sus hallazgos con respeto y escucha los de sus compañeros.'
          ]
        },

        competenciaCiudadana: 'Comprende que el conocimiento de la separación de mezclas tiene aplicaciones prácticas para purificar el agua y los alimentos, valorando la ciencia como herramienta para mejorar las condiciones de vida de las comunidades.'
      },

      // ----------------------------------------------------------
      // GRADO 2 - PERIODO 4
      // ----------------------------------------------------------
      {
        periodo: 4,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Reconoce que la Tierra está conformada por suelo, agua y aire y describe características básicas de cada componente.',
          'Participa en actividades grupales para proponer soluciones a problemas del entorno cercano.',
          'Observo mi entorno y formulo preguntas sobre él. Registro mis observaciones y resultados en forma organizada.'
        ],

        dba: 'Realiza observaciones, registra datos y formula preguntas a partir de fenómenos naturales cotidianos. Describe las necesidades básicas de los seres vivos y cómo el entorno las satisface.',

        ejesTematicos: [
          'Integración: seres vivos, materia y recursos naturales',
          'La indagación científica: preguntar, observar, experimentar y comunicar',
          'Problemas ambientales locales y soluciones posibles',
          'El científico en mí: diseño de una mini investigación',
          'Feria de ciencias: exposición de aprendizajes del año'
        ],

        tiposPensamiento: ['Entorno vivo', 'Entorno físico', 'Ciencia, tecnología y sociedad'],

        preguntaProblema: '¿Cómo podemos usar lo que aprendemos en Ciencias Naturales para resolver problemas de nuestro entorno?',

        diagnostico: 'Los estudiantes han adquirido conocimientos sobre seres vivos, ciclo del agua y mezclas, pero tienen dificultad para integrar saberes y aplicarlos en la resolución de problemas del entorno real.',

        competenciasICFES: {
          usoConocimiento: 'Aplica conocimientos sobre seres vivos, materiales y recursos naturales para interpretar situaciones del entorno.',
          explicacion: 'Explica fenómenos naturales sencillos integrando conceptos de los tres periodos anteriores.',
          indagacion: 'Formula preguntas sobre fenómenos naturales observables y propone formas sencillas de explorarlos mediante experimentos.'
        },

        matrizReferencia: {
          componente: 'cts',
          competencia: 'indagacion',
          afirmaciones: [
            'Plantea preguntas que pueden responderse mediante observación o experimentación simple.',
            'Propone pasos sencillos para responder una pregunta sobre el mundo natural.'
          ]
        },

        aprendizajesICFES: ['nat-s3-05', 'nat-s3-06'],
        nivelEsperado: 'Mínimo',

        evidenciasICFES: ['nat-s3-05-e1', 'nat-s3-05-e2', 'nat-s3-06-e1', 'nat-s3-06-e2'],

        evidenciasAprendizaje: [
          'Formula al menos una pregunta investigable sobre el entorno natural.',
          'Propone pasos sencillos para responder su pregunta (qué observar, qué medir).',
          'Registra observaciones de forma organizada en tablas o dibujos.',
          'Comunica los resultados de su indagación de forma oral y escrita.',
          'Propone una solución a un problema ambiental sencillo del entorno escolar.'
        ],

        estrategiasMetodologicas: [
          'Proyecto integrador: "Mi mini investigación científica" sobre una pregunta de interés.',
          'Organización de una pequeña feria de ciencias del salón.',
          'Elaboración de un portafolio de ciencias con los trabajos del año.',
          'Debate: ¿Cómo podemos mejorar el entorno de nuestra escuela usando lo aprendido?',
          'Autoevaluación: ¿Qué aprendí, cómo lo aprendí y para qué me sirve?'
        ],

        materialesEducativos: [
          'Materiales variados para los proyectos de investigación de cada estudiante',
          'Portafolio de ciencias personal (carpeta o cuaderno especial)',
          'Guía de feria de ciencias adaptada a grado 2°',
          'Texto escolar de Ciencias Naturales 2°',
          'Rúbrica de autoevaluación ilustrada para niños de segundo grado'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Responde preguntas que integran conocimientos de los cuatro periodos.',
            'Explica el proceso de indagación científica con sus pasos básicos.',
            'Propone soluciones a problemas ambientales del entorno escolar.'
          ],
          hacer: [
            'Desarrolla su mini investigación siguiendo pasos organizados.',
            'Presenta su proyecto en la feria de ciencias con claridad.',
            'Organiza su portafolio de ciencias con los trabajos más relevantes del año.'
          ],
          ser: [
            'Muestra confianza al exponer sus aprendizajes ante los compañeros.',
            'Reconoce sus logros y dificultades de aprendizaje con honestidad.',
            'Valora el trabajo científico de sus compañeros y les da retroalimentación respetuosa.'
          ]
        },

        competenciaCiudadana: 'Reconoce que el conocimiento científico es una herramienta colectiva para mejorar el entorno y la calidad de vida, y que todos podemos contribuir con observaciones, preguntas y propuestas de solución a problemas comunes.'
      }
    ]
  },

  // ============================================================
  // GRADO 3
  // ============================================================
  '3': {
    grado: '3°',
    intensidadHoraria: 3,
    totalSemanas: 40,
    totalHorasAnuales: 120,
    objetivo: 'Fortalecer la comprensión de la clasificación de los seres vivos, el cuerpo humano y sus sistemas, las propiedades de los materiales y las cadenas alimentarias, desarrollando habilidades de indagación científica, formulación de hipótesis y comunicación de resultados experimentales.',

    periodos: [
      // ----------------------------------------------------------
      // GRADO 3 - PERIODO 1
      // ----------------------------------------------------------
      {
        periodo: 1,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Describo características de seres vivos y objetos inertes, establezco semejanzas y diferencias entre ellos y los clasifico.',
          'Reconozco y describo organismos del entorno como animales, plantas, hongos y microorganismos.',
          'Identifico y describo características de los seres vivos (células, tejidos, órganos, sistemas) en organismos del entorno.'
        ],

        dba: 'Clasifica los seres vivos en grupos (plantas, animales, hongos, microorganismos) usando criterios observables. Explica el ciclo de vida de plantas con flores y lo relaciona con la reproducción de las especies.',

        ejesTematicos: [
          'Clasificación de los seres vivos: criterios y grupos principales',
          'El reino vegetal: plantas con y sin flores, vasculares y no vasculares',
          'El reino animal: vertebrados e invertebrados',
          'Hongos y microorganismos: características básicas',
          'Ciclo de vida de una planta con flores: germinación, crecimiento y reproducción'
        ],

        tiposPensamiento: ['Entorno vivo'],

        preguntaProblema: '¿Cómo podemos organizar los seres vivos en grupos y qué características comparten los organismos de cada grupo?',

        diagnostico: 'El 60% de los estudiantes clasifica los seres vivos solo en plantas y animales, sin reconocer otros reinos. Tienen dificultades para usar criterios de clasificación sistemáticos.',

        competenciasICFES: {
          usoConocimiento: 'Reconoce características de los seres vivos y los diferencia de los objetos sin vida; clasifica organismos usando múltiples criterios observables.',
          explicacion: 'Describe las funciones básicas de los seres vivos y explica el ciclo de vida de plantas con flores.',
          indagacion: 'Formula preguntas sobre la clasificación de los seres vivos y diseña formas sencillas de explorarlas.'
        },

        matrizReferencia: {
          componente: 'entorno-vivo',
          competencia: 'uso-conocimiento',
          afirmaciones: [
            'Identifica características de los seres vivos: crecer, reproducirse, alimentarse y responder al entorno.',
            'Clasifica objetos y organismos usando criterios como vivo o no vivo, con o sin movimiento propio.',
            'Describe cambios que experimentan los seres vivos a lo largo de su ciclo de vida.'
          ]
        },

        aprendizajesICFES: ['nat-s3-01', 'nat-s3-02'],
        nivelEsperado: 'Satisfactorio',

        evidenciasICFES: ['nat-s3-01-e1', 'nat-s3-01-e2', 'nat-s3-01-e3', 'nat-s3-02-e1', 'nat-s3-02-e2'],

        evidenciasAprendizaje: [
          'Clasifica organismos conocidos en los cuatro grupos principales: plantas, animales, hongos y microorganismos.',
          'Identifica características que diferencian vertebrados de invertebrados con ejemplos.',
          'Describe las etapas del ciclo de vida de una planta con flores.',
          'Elabora una clave de clasificación sencilla usando criterios observables.',
          'Describe características generales de los hongos y los diferencia de las plantas.'
        ],

        estrategiasMetodologicas: [
          'Construcción de una clave dicotómica sencilla para clasificar seres vivos del entorno.',
          'Observación de muestras de hongos (champiñones, moho controlado) y comparación con plantas.',
          'Cultivo de una planta con flores para observar su ciclo de vida completo.',
          'Elaboración de un herbario sencillo con plantas del entorno escolar.',
          'Juego de clasificación: tarjetas de organismos que los estudiantes deben organizar en grupos.'
        ],

        materialesEducativos: [
          'Lupas, muestras de hongos y plantas diversas para observación',
          'Tarjetas de clasificación con imágenes de organismos variados',
          'Macetas para cultivo de plantas con flores',
          'Texto escolar de Ciencias Naturales 3°',
          'Video sobre los reinos de la naturaleza adaptado a primaria'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Clasifica los seres vivos en los cuatro grupos principales con criterios claros.',
            'Distingue entre vertebrados e invertebrados con ejemplos del entorno.',
            'Describe las etapas del ciclo de vida de una planta con flores.'
          ],
          hacer: [
            'Construye una clave de clasificación sencilla y la usa correctamente.',
            'Elabora un herbario con plantas identificadas y clasificadas.',
            'Registra observaciones del ciclo de vida de una planta en el diario de ciencias.'
          ],
          ser: [
            'Cuida las plantas del cultivo con constancia y responsabilidad.',
            'Respeta la biodiversidad y evita dañar organismos durante las actividades.',
            'Participa activamente en el trabajo en equipo con actitud colaborativa.'
          ]
        },

        competenciaCiudadana: 'Valora la biodiversidad como riqueza de los ecosistemas colombianos y reconoce la responsabilidad colectiva de conservarla, comprendiendo que cada especie tiene un papel en el equilibrio natural.'
      },

      // ----------------------------------------------------------
      // GRADO 3 - PERIODO 2
      // ----------------------------------------------------------
      {
        periodo: 2,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Explica las funciones de los sistemas de órganos de los seres vivos y sus interacciones.',
          'Identifica factores de riesgo que afectan la salud de mi comunidad y propongo alternativas de solución.',
          'Propongo y verifico hipótesis sobre características y comportamientos de organismos y objetos.'
        ],

        dba: 'Comprende la función de los sistemas del cuerpo humano (digestivo, respiratorio, circulatorio) y su relación con la salud. Realiza experimentos sencillos para verificar hipótesis y comunica sus resultados de forma oral y escrita.',

        ejesTematicos: [
          'El sistema digestivo: órganos y proceso de digestión',
          'El sistema respiratorio: pulmones y proceso de respiración',
          'El sistema circulatorio: corazón, sangre y vasos sanguíneos',
          'Relaciones entre los sistemas del cuerpo humano',
          'Hábitos saludables: alimentación, ejercicio e higiene'
        ],

        tiposPensamiento: ['Entorno vivo', 'Ciencia, tecnología y sociedad'],

        preguntaProblema: '¿Cómo funcionan los sistemas del cuerpo humano y qué debemos hacer para mantenerlos saludables?',

        diagnostico: 'Los estudiantes identifican algunos órganos del cuerpo humano pero no comprenden cómo funcionan en conjunto los sistemas ni por qué los hábitos saludables son importantes para su funcionamiento.',

        competenciasICFES: {
          usoConocimiento: 'Describe los órganos de los sistemas digestivo, respiratorio y circulatorio e identifica su función en el mantenimiento de la salud.',
          explicacion: 'Explica cómo se relacionan los sistemas del cuerpo humano para mantener el organismo funcionando.',
          indagacion: 'Formula hipótesis sobre hábitos saludables y diseña formas de verificarlas experimentalmente.'
        },

        matrizReferencia: {
          componente: 'entorno-vivo',
          competencia: 'explicacion',
          afirmaciones: [
            'Explica cómo se alimentan y reproducen algunos animales de su entorno.',
            'Describe la función de las partes de una planta.'
          ]
        },

        aprendizajesICFES: ['nat-s3-02', 'nat-s3-05'],
        nivelEsperado: 'Satisfactorio',

        evidenciasICFES: ['nat-s3-02-e1', 'nat-s3-02-e2', 'nat-s3-05-e1', 'nat-s3-05-e2'],

        evidenciasAprendizaje: [
          'Describe el recorrido de los alimentos desde la boca hasta el intestino.',
          'Explica la función de los pulmones en el proceso de respiración.',
          'Identifica el corazón como la bomba que mueve la sangre por el cuerpo.',
          'Relaciona al menos dos hábitos saludables con el buen funcionamiento de los sistemas.',
          'Diseña y realiza un experimento sencillo sobre la frecuencia cardíaca antes y después del ejercicio.'
        ],

        estrategiasMetodologicas: [
          'Construcción de un modelo del sistema digestivo con bolsas y tubos plásticos.',
          'Experimento de frecuencia cardíaca: medir el pulso antes y después de ejercicio.',
          'Elaboración de un afiche sobre hábitos saludables para el bienestar de los sistemas.',
          'Visita a un centro de salud o charla de un profesional de la salud del barrio.',
          'Juego de roles: cada estudiante representa un órgano y explica su función.'
        ],

        materialesEducativos: [
          'Bolsas plásticas, tubos y recipientes para modelo del sistema digestivo',
          'Cronómetros o relojes para medición del pulso',
          'Láminas del cuerpo humano con sistemas identificados',
          'Texto escolar de Ciencias Naturales 3°',
          'Video sobre el funcionamiento del cuerpo humano para primaria'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe la función de los órganos principales de los tres sistemas estudiados.',
            'Explica cómo se relacionan el sistema digestivo, respiratorio y circulatorio.',
            'Menciona tres hábitos saludables y justifica su importancia para el cuerpo.'
          ],
          hacer: [
            'Construye el modelo del sistema digestivo y lo explica correctamente.',
            'Mide su frecuencia cardíaca y registra los resultados en una tabla.',
            'Elabora el afiche de hábitos saludables con información correcta y presentación clara.'
          ],
          ser: [
            'Practica hábitos saludables y los promueve entre sus compañeros.',
            'Participa con seriedad y respeto en las actividades sobre el cuerpo humano.',
            'Valora la importancia del cuidado del cuerpo como responsabilidad personal.'
          ]
        },

        competenciaCiudadana: 'Comprende que mantener el cuerpo sano es una responsabilidad personal y también un derecho, reflexionando sobre el acceso equitativo a los servicios de salud y la importancia de los hábitos saludables para toda la comunidad.'
      },

      // ----------------------------------------------------------
      // GRADO 3 - PERIODO 3
      // ----------------------------------------------------------
      {
        periodo: 3,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Describe las propiedades de materiales y sustancias (dureza, solubilidad, conductividad) y las relaciona con sus usos.',
          'Establezco relaciones entre las propiedades de los materiales y su utilización.',
          'Identifico artefactos tecnológicos de mi entorno y describo el principio físico en que se basan.'
        ],

        dba: 'Describe las propiedades de materiales y sustancias (dureza, solubilidad, conductividad) y las relaciona con sus usos. Identifica y describe cadenas alimentarias sencillas en ecosistemas locales.',

        ejesTematicos: [
          'Propiedades de los materiales: dureza, flexibilidad, solubilidad, conductividad',
          'Materiales y sus usos: relación entre propiedades y aplicaciones',
          'Cadenas alimentarias: productores, consumidores y descomponedores',
          'Redes tróficas en ecosistemas colombianos',
          'Los hongos y las bacterias como descomponedores del ecosistema'
        ],

        tiposPensamiento: ['Entorno físico', 'Entorno vivo'],

        preguntaProblema: '¿Cómo las propiedades de los materiales determinan sus usos y cómo fluye la energía entre los seres vivos de un ecosistema?',

        diagnostico: 'Los estudiantes conocen algunos materiales del entorno pero no relacionan sistemáticamente sus propiedades con los usos que les damos. Tienen una noción intuitiva de cadena alimentaria pero no identifican roles de productor, consumidor y descomponedor.',

        competenciasICFES: {
          usoConocimiento: 'Identifica propiedades de los materiales y las relaciona con sus usos; construye cadenas alimentarias sencillas identificando roles de cada organismo.',
          explicacion: 'Explica por qué se usan materiales específicos en objetos cotidianos y qué pasaría si faltara un eslabón en una cadena alimentaria.',
          indagacion: 'Realiza experimentos para verificar propiedades de materiales y registra resultados ordenadamente.'
        },

        matrizReferencia: {
          componente: 'entorno-fisico',
          competencia: 'uso-conocimiento',
          afirmaciones: [
            'Observa y describe propiedades de materiales del entorno cotidiano.',
            'Agrupa materiales según propiedades comunes y justifica el criterio de clasificación.'
          ]
        },

        aprendizajesICFES: ['nat-s3-03', 'nat-s3-04'],
        nivelEsperado: 'Satisfactorio',

        evidenciasICFES: ['nat-s3-03-e1', 'nat-s3-03-e2', 'nat-s3-04-e1', 'nat-s3-04-e2'],

        evidenciasAprendizaje: [
          'Identifica y describe propiedades de materiales: dureza, flexibilidad, solubilidad y conductividad.',
          'Justifica la elección de materiales para objetos del entorno según sus propiedades.',
          'Construye una cadena alimentaria de un ecosistema colombiano con al menos cuatro eslabones.',
          'Distingue productores, consumidores de primer y segundo nivel, y descomponedores.',
          'Explica qué ocurre en el ecosistema cuando se elimina uno de los organismos de la cadena.'
        ],

        estrategiasMetodologicas: [
          'Estación de propiedades: experimentos rotatorios para verificar dureza, solubilidad y conductividad de materiales.',
          'Elaboración de cadenas alimentarias de la región con imágenes de organismos locales.',
          'Investigación guiada: ¿De qué material están hechos los objetos del aula y por qué?',
          'Juego de cadena trófica: cada estudiante es un organismo y se conectan con lana.',
          'Experimento: observación del proceso de descomposición de un trozo de fruta.'
        ],

        materialesEducativos: [
          'Colección de materiales: madera, metal, plástico, tela, vidrio, caucho para pruebas',
          'Pilas, cables y bombilla para prueba de conductividad eléctrica básica',
          'Imágenes de organismos de ecosistemas colombianos para cadenas tróficas',
          'Texto escolar de Ciencias Naturales 3°',
          'Video sobre cadenas alimentarias en selva y sabana colombiana'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Define y da ejemplos de propiedades de los materiales: dureza, solubilidad y conductividad.',
            'Distingue productor, consumidor y descomponedor en una cadena alimentaria.',
            'Explica la importancia de los descomponedores en el ecosistema.'
          ],
          hacer: [
            'Realiza las estaciones de propiedades y registra resultados en tablas.',
            'Construye una cadena alimentaria de un ecosistema colombiano con roles correctos.',
            'Observa y registra el proceso de descomposición de la fruta durante el experimento.'
          ],
          ser: [
            'Trabaja con orden y seguridad en las estaciones de experimentos.',
            'Respeta las observaciones de sus compañeros y aporta con respeto.',
            'Valora el papel de los descomponedores aunque no sean organismos visibles o atractivos.'
          ]
        },

        competenciaCiudadana: 'Comprende que todos los organismos del ecosistema, incluyendo los descomponedores como hongos y bacterias, tienen un papel fundamental en el equilibrio natural, promoviendo una actitud de respeto hacia toda forma de vida.'
      },

      // ----------------------------------------------------------
      // GRADO 3 - PERIODO 4
      // ----------------------------------------------------------
      {
        periodo: 4,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Realizo experimentos sencillos para verificar hipótesis y comunico mis resultados de forma oral y escrita.',
          'Identifico y describo la flora, la fauna, el agua y el suelo de mi entorno y el impacto que sobre ellos tienen las actividades humanas.',
          'Indago sobre el uso que mi comunidad hace de los recursos naturales.'
        ],

        dba: 'Realiza experimentos sencillos para verificar hipótesis y comunica sus resultados de forma oral y escrita. Identifica y describe cadenas alimentarias sencillas en ecosistemas locales.',

        ejesTematicos: [
          'El método científico: pasos y aplicación',
          'Formulación de preguntas e hipótesis',
          'Diseño de experimentos sencillos y registro de datos',
          'Comunicación de resultados: informe científico básico',
          'Impacto humano en el entorno y propuestas de conservación local'
        ],

        tiposPensamiento: ['Entorno vivo', 'Ciencia, tecnología y sociedad'],

        preguntaProblema: '¿Cómo hacen los científicos para conocer el mundo natural y cómo podemos nosotros usar sus métodos para explorar nuestro entorno?',

        diagnostico: 'Los estudiantes han realizado experimentos pero no comprenden los pasos del método científico como un proceso sistemático. Tienen dificultad para formular hipótesis comprobables y para comunicar sus resultados de forma organizada.',

        competenciasICFES: {
          usoConocimiento: 'Aplica los pasos del método científico en la exploración de fenómenos naturales del entorno escolar.',
          explicacion: 'Explica sus observaciones y resultados de experimentos usando vocabulario científico básico.',
          indagacion: 'Formula preguntas sobre fenómenos naturales observables y propone formas sencillas de explorarlos, registrando datos de manera organizada.'
        },

        matrizReferencia: {
          componente: 'cts',
          competencia: 'indagacion',
          afirmaciones: [
            'Plantea preguntas que pueden responderse mediante observación o experimentación simple.',
            'Propone pasos sencillos para responder una pregunta sobre el mundo natural.'
          ]
        },

        aprendizajesICFES: ['nat-s3-05', 'nat-s3-06'],
        nivelEsperado: 'Satisfactorio',

        evidenciasICFES: ['nat-s3-05-e1', 'nat-s3-05-e2', 'nat-s3-06-e1', 'nat-s3-06-e2'],

        evidenciasAprendizaje: [
          'Identifica y aplica los pasos del método científico en un experimento sencillo.',
          'Formula una hipótesis comprobable en respuesta a una pregunta de indagación.',
          'Registra datos de un experimento en tablas o diagramas organizados.',
          'Comunica los resultados de su investigación con un informe básico oral y escrito.',
          'Propone una acción concreta para reducir el impacto humano en el entorno local.'
        ],

        estrategiasMetodologicas: [
          'Proyecto de indagación libre: cada grupo elige una pregunta sobre el entorno y la investiga.',
          'Construcción colectiva del "Protocolo del científico": pasos del método científico en cartelera.',
          'Feria de ciencias del grado: exposición de proyectos de investigación.',
          'Elaboración del primer informe científico básico: pregunta, hipótesis, materiales, procedimiento y conclusiones.',
          'Debate sobre el impacto humano en el entorno y compromisos de acción comunitaria.'
        ],

        materialesEducativos: [
          'Materiales variados según el proyecto de cada grupo (negociados con los estudiantes)',
          'Formato de informe científico básico adaptado a grado 3°',
          'Carteleras para la feria de ciencias',
          'Texto escolar de Ciencias Naturales 3°',
          'Rúbrica de evaluación de la feria de ciencias'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Enumera y explica los pasos del método científico.',
            'Define qué es una hipótesis y cómo debe ser para ser comprobable.',
            'Identifica acciones humanas que afectan el entorno local y propone alternativas.'
          ],
          hacer: [
            'Desarrolla un proyecto de investigación siguiendo los pasos del método científico.',
            'Elabora un informe básico con todos los componentes requeridos.',
            'Expone su proyecto en la feria de ciencias con claridad y dominio del tema.'
          ],
          ser: [
            'Muestra honestidad al registrar y comunicar los resultados, incluso si no confirmaron la hipótesis.',
            'Colabora responsablemente con su grupo en el proyecto de investigación.',
            'Demuestra curiosidad científica y actitud de asombro ante los fenómenos naturales.'
          ]
        },

        competenciaCiudadana: 'Comprende que la ciencia es una práctica humana y colectiva, y que cada persona puede contribuir al conocimiento científico mediante la observación y el cuestionamiento responsable del entorno natural.'
      }
    ]
  },

  // ============================================================
  // GRADO 4
  // ============================================================
  '4': {
    grado: '4°',
    intensidadHoraria: 3,
    totalSemanas: 40,
    totalHorasAnuales: 120,
    objetivo: 'Ampliar la comprensión de los sistemas del cuerpo humano, la célula como unidad de vida, las cadenas tróficas y las propiedades del suelo, profundizando en el pensamiento científico mediante la formulación de hipótesis, la realización de experimentos controlados y la comunicación de resultados con mayor rigor.',

    periodos: [
      // ----------------------------------------------------------
      // GRADO 4 - PERIODO 1
      // ----------------------------------------------------------
      {
        periodo: 1,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Clasifico organismos en grupos taxonómicos de acuerdo con sus características.',
          'Explico las funciones de los sistemas de órganos de los seres vivos y sus interacciones.',
          'Identifico factores de riesgo que afectan la salud de mi comunidad y propongo alternativas de solución.'
        ],

        dba: 'Comprende la célula como unidad básica de los seres vivos y distingue entre células animales y vegetales. Describe la función de los sistemas del cuerpo humano (nervioso, excretor, locomotor) y los relaciona con el mantenimiento de la salud.',

        ejesTematicos: [
          'La célula: unidad básica de vida y sus partes principales',
          'Células animales y vegetales: semejanzas y diferencias',
          'El sistema nervioso: cerebro, médula y nervios',
          'El sistema excretor: riñones, piel y pulmones',
          'El sistema locomotor: huesos, músculos y articulaciones'
        ],

        tiposPensamiento: ['Entorno vivo'],

        preguntaProblema: '¿Cómo está organizado el cuerpo humano desde la célula hasta los sistemas de órganos y cómo se mantiene saludable?',

        diagnostico: 'El 65% de los estudiantes no conoce la célula como unidad de vida y confunde el sistema nervioso con el sistema muscular. Tienen conocimiento intuitivo del movimiento pero no comprenden su base biológica.',

        competenciasICFES: {
          usoConocimiento: 'Identifica la célula como unidad básica de vida y describe los sistemas nervioso, excretor y locomotor del cuerpo humano.',
          explicacion: 'Explica cómo interactúan los sistemas del cuerpo humano para realizar funciones vitales como moverse, sentir y eliminar desechos.',
          indagacion: 'Formula hipótesis sobre el funcionamiento del sistema nervioso o locomotor y propone formas de verificarlas.'
        },

        matrizReferencia: {
          componente: 'entorno-vivo',
          competencia: 'uso-conocimiento',
          afirmaciones: [
            'Identifica características de los seres vivos y describe cambios a lo largo del ciclo de vida.',
            'Explica cómo se alimentan y reproducen algunos organismos de su entorno.'
          ]
        },

        aprendizajesICFES: ['nat-s5-01', 'nat-s5-02'],
        nivelEsperado: 'Satisfactorio',

        evidenciasICFES: ['nat-s5-01-e1', 'nat-s5-01-e2', 'nat-s5-01-e3', 'nat-s5-02-e1'],

        evidenciasAprendizaje: [
          'Identifica las partes principales de la célula: membrana, citoplasma y núcleo.',
          'Distingue entre célula animal y célula vegetal señalando al menos dos diferencias.',
          'Describe la función del sistema nervioso en la coordinación de las respuestas del cuerpo.',
          'Explica cómo funcionan los riñones como órganos de excreción.',
          'Describe cómo huesos y músculos trabajan juntos para producir el movimiento.'
        ],

        estrategiasMetodologicas: [
          'Construcción de un modelo de célula animal y vegetal con materiales reciclados.',
          'Elaboración de un mapa del cuerpo humano con los tres sistemas identificados.',
          'Experimento de reflejos simples: velocidad de reacción con regla.',
          'Análisis de radiografías o imágenes del sistema locomotor.',
          'Juego de roles: el sistema nervioso central como director de una orquesta.'
        ],

        materialesEducativos: [
          'Plastilina, gelatina y materiales reciclados para modelos de célula',
          'Láminas del cuerpo humano con sistemas diferenciados',
          'Regla para experimento de reflejos y tiempo de reacción',
          'Texto escolar de Ciencias Naturales 4°',
          'Video sobre el sistema nervioso y locomotor para primaria'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Identifica y describe las partes principales de la célula y sus funciones.',
            'Explica la función del sistema nervioso, excretor y locomotor.',
            'Distingue células animales de vegetales con criterios precisos.'
          ],
          hacer: [
            'Construye modelos de célula animal y vegetal correctamente etiquetados.',
            'Realiza el experimento de reflejos y registra los tiempos de reacción.',
            'Elabora el mapa del cuerpo humano con los sistemas identificados.'
          ],
          ser: [
            'Cuida los materiales de modelado y los comparte con sus compañeros.',
            'Practica hábitos de cuidado del sistema locomotor (postura correcta, ejercicio).',
            'Demuestra respeto al cuerpo propio y ajeno en todas las actividades.'
          ]
        },

        competenciaCiudadana: 'Comprende que el cuerpo humano es una unidad integrada que requiere cuidado y respeto, reflexionando sobre el acceso equitativo a condiciones que permiten el desarrollo saludable de todos los niños y niñas.'
      },

      // ----------------------------------------------------------
      // GRADO 4 - PERIODO 2
      // ----------------------------------------------------------
      {
        periodo: 2,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Describe cadenas alimentarias en ecosistemas y explica el flujo de energía en ellas.',
          'Explica cómo la energía solar es transformada y transferida en los ecosistemas a través de las cadenas tróficas.',
          'Identifica adaptaciones de los seres vivos en diferentes ecosistemas.'
        ],

        dba: 'Explica cómo la energía solar es transformada y transferida en los ecosistemas a través de las cadenas tróficas. Comprende la célula como unidad básica de los seres vivos y distingue entre células animales y vegetales.',

        ejesTematicos: [
          'El ecosistema: componentes bióticos y abióticos',
          'La energía solar y la fotosíntesis: base de la vida',
          'Cadenas y redes tróficas: flujo de energía',
          'Adaptaciones de los seres vivos a diferentes ecosistemas',
          'Ecosistemas colombianos: selva, páramo, sabana y costa'
        ],

        tiposPensamiento: ['Entorno vivo', 'Ciencia, tecnología y sociedad'],

        preguntaProblema: '¿Cómo llega la energía del Sol a todos los seres vivos de un ecosistema y cómo se adaptan los organismos a las condiciones de su entorno?',

        diagnostico: 'Los estudiantes construyen cadenas alimentarias lineales pero no comprenden el concepto de flujo de energía ni por qué los productores siempre inician la cadena. Desconocen ecosistemas colombianos específicos.',

        competenciasICFES: {
          usoConocimiento: 'Identifica el papel del Sol en la fotosíntesis y describe cómo fluye la energía en las cadenas tróficas.',
          explicacion: 'Explica las adaptaciones de organismos a ecosistemas colombianos específicos relacionándolas con las condiciones del entorno.',
          indagacion: 'Analiza información sobre ecosistemas colombianos y elabora redes tróficas con organismos reales.'
        },

        matrizReferencia: {
          componente: 'entorno-vivo',
          competencia: 'explicacion',
          afirmaciones: [
            'Construye cadenas alimentarias identificando productores, consumidores y descomponedores.',
            'Explica qué sucede en un ecosistema cuando desaparece uno de sus organismos.'
          ]
        },

        aprendizajesICFES: ['nat-s5-02', 'nat-s5-07'],
        nivelEsperado: 'Satisfactorio',

        evidenciasICFES: ['nat-s5-02-e1', 'nat-s5-02-e2', 'nat-s5-07-e1', 'nat-s5-07-e2'],

        evidenciasAprendizaje: [
          'Explica cómo las plantas capturan energía solar a través de la fotosíntesis.',
          'Construye una red trófica de un ecosistema colombiano con al menos seis organismos.',
          'Describe qué sucede cuando desaparece un organismo de la red trófica.',
          'Identifica una adaptación de al menos tres organismos a sus ecosistemas.',
          'Compara dos ecosistemas colombianos indicando sus componentes bióticos y abióticos característicos.'
        ],

        estrategiasMetodologicas: [
          'Simulación del flujo de energía: juego con tarjetas de energía que se pasan entre organismos.',
          'Elaboración de redes tróficas de ecosistemas colombianos en papelógrafo.',
          'Investigación en grupo sobre un ecosistema colombiano asignado (selva, páramo, costa, sabana).',
          'Construcción de un terrario sencillo para observar un ecosistema en miniatura.',
          'Debate: ¿Qué pasaría si desaparecieran las abejas de Colombia?'
        ],

        materialesEducativos: [
          'Tarjetas de organismos de ecosistemas colombianos para la red trófica',
          'Materiales para terrario: recipiente, tierra, plantas y pequeños animales',
          'Imágenes de ecosistemas colombianos: selva amazónica, páramo, Llanos, costa',
          'Texto escolar de Ciencias Naturales 4°',
          'Videos sobre biodiversidad colombiana (ej. series del Canal Trece Colombia)'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Explica el proceso de fotosíntesis y su relación con el flujo de energía en el ecosistema.',
            'Describe las características principales de dos ecosistemas colombianos.',
            'Explica qué son las adaptaciones y da ejemplos concretos.'
          ],
          hacer: [
            'Construye una red trófica correcta de un ecosistema colombiano.',
            'Elabora un informe de investigación sobre un ecosistema colombiano.',
            'Participa activamente en el debate sobre el impacto de la pérdida de una especie.'
          ],
          ser: [
            'Valora la biodiversidad de Colombia como un patrimonio que se debe proteger.',
            'Trabaja en equipo con responsabilidad en la investigación grupal.',
            'Demuestra interés por conocer y proteger los ecosistemas de su región.'
          ]
        },

        competenciaCiudadana: 'Reconoce la riqueza de los ecosistemas colombianos y asume una actitud de respeto y cuidado hacia la biodiversidad, comprendiendo que su conservación beneficia a toda la sociedad presente y futura.'
      },

      // ----------------------------------------------------------
      // GRADO 4 - PERIODO 3
      // ----------------------------------------------------------
      {
        periodo: 3,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Identifica y describo las propiedades del suelo y su importancia para el sostenimiento de la vida.',
          'Comprendo el concepto de mezcla homogénea y heterogénea y técnicas de separación aplicadas.',
          'Establezco relaciones entre el desarrollo tecnológico y el impacto sobre el entorno natural.'
        ],

        dba: 'Identifica y describe las propiedades del suelo y su importancia para el sostenimiento de la vida. Comprende el concepto de mezcla homogénea y heterogénea, y técnicas de separación aplicadas en la industria y la vida diaria.',

        ejesTematicos: [
          'El suelo: composición, capas (horizontes) y tipos',
          'Propiedades del suelo: textura, permeabilidad y capacidad de retención de agua',
          'Importancia del suelo para los seres vivos',
          'Mezclas homogéneas y heterogéneas: profundización',
          'Técnicas de separación de mezclas y sus aplicaciones industriales'
        ],

        tiposPensamiento: ['Entorno físico', 'Ciencia, tecnología y sociedad'],

        preguntaProblema: '¿Qué propiedades tiene el suelo que lo hacen tan importante para la vida y cómo podemos separar mezclas para aprovechar mejor los materiales?',

        diagnostico: 'Los estudiantes conocen el suelo superficialmente pero desconocen su composición por horizontes ni las propiedades físicas que lo hacen fértil. Confunden mezclas homogéneas y heterogéneas con mayor frecuencia cuando las sustancias son similares.',

        competenciasICFES: {
          usoConocimiento: 'Identifica las propiedades del suelo y diferencia mezclas homogéneas de heterogéneas usando criterios precisos.',
          explicacion: 'Explica la importancia del suelo para el sostenimiento de los ecosistemas y la agricultura, y relaciona las técnicas de separación con aplicaciones reales.',
          indagacion: 'Diseña y realiza experimentos para determinar propiedades del suelo como permeabilidad y retención de agua.'
        },

        matrizReferencia: {
          componente: 'entorno-fisico',
          competencia: 'uso-conocimiento',
          afirmaciones: [
            'Diferencia entre mezclas homogéneas y heterogéneas con ejemplos del entorno.',
            'Selecciona el método de separación adecuado según el tipo de mezcla.'
          ]
        },

        aprendizajesICFES: ['nat-s5-03', 'nat-s5-07'],
        nivelEsperado: 'Satisfactorio',

        evidenciasICFES: ['nat-s5-03-e1', 'nat-s5-03-e2', 'nat-s5-03-e3', 'nat-s5-07-e1'],

        evidenciasAprendizaje: [
          'Identifica los horizontes del suelo y describe las características de cada capa.',
          'Determina experimentalmente la permeabilidad de tres tipos diferentes de suelo.',
          'Diferencia mezclas homogéneas de heterogéneas con criterios precisos y ejemplos reales.',
          'Selecciona y justifica el método de separación adecuado para distintas mezclas.',
          'Relaciona la pérdida de suelo fértil con la deforestación y la erosión.'
        ],

        estrategiasMetodologicas: [
          'Experimento de permeabilidad del suelo: comparar suelo arcilloso, arenoso y humus.',
          'Construcción de un perfil del suelo con capas visibles en un recipiente de vidrio.',
          'Laboratorio de mezclas avanzado: identificar y separar mezclas más complejas.',
          'Investigación sobre la erosión del suelo en Colombia: causas y consecuencias.',
          'Proyecto de compostaje en el aula para observar la formación de humus.'
        ],

        materialesEducativos: [
          'Muestras de suelo arcilloso, arenoso y tierra negra',
          'Recipientes, embudos, papel de filtro para experimentos de permeabilidad',
          'Recipiente de vidrio para perfil del suelo',
          'Texto escolar de Ciencias Naturales 4°',
          'Videos sobre degradación del suelo y agricultura sostenible en Colombia'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe los horizontes del suelo y las características de cada uno.',
            'Explica qué es la permeabilidad del suelo y cómo influye en la vida de las plantas.',
            'Diferencia mezclas homogéneas y heterogéneas con criterios claros.'
          ],
          hacer: [
            'Realiza el experimento de permeabilidad y presenta los resultados en una gráfica sencilla.',
            'Construye el perfil del suelo con las capas correctamente identificadas.',
            'Lleva el registro del proceso de compostaje con observaciones semanales.'
          ],
          ser: [
            'Valora el suelo como un recurso no renovable que debe protegerse.',
            'Practica el compostaje como acción concreta de cuidado ambiental.',
            'Trabaja con orden y limpieza en los experimentos de laboratorio.'
          ]
        },

        competenciaCiudadana: 'Reconoce el suelo como un recurso natural fundamental y no renovable, y promueve prácticas de conservación como el compostaje y la no contaminación del suelo en el entorno escolar y familiar.'
      },

      // ----------------------------------------------------------
      // GRADO 4 - PERIODO 4
      // ----------------------------------------------------------
      {
        periodo: 4,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Reconoce que los fenómenos naturales (terremotos, erupciones, inundaciones) son resultado de procesos internos y externos de la Tierra.',
          'Reconozco que los modelos de la ciencia cambian con el tiempo y que varios pueden coexistir.',
          'Formulo preguntas sobre objetos, organismos y fenómenos de mi entorno y exploro posibles respuestas.'
        ],

        dba: 'Reconoce que los fenómenos naturales (terremotos, erupciones, inundaciones) son resultado de procesos internos y externos de la Tierra. Describe las propiedades del movimiento (velocidad, aceleración) y las relaciona con fuerzas cotidianas.',

        ejesTematicos: [
          'La estructura interna de la Tierra: núcleo, manto y corteza',
          'Fenómenos geológicos: terremotos, volcanes y tsunamis',
          'Riesgo de desastres naturales en Colombia',
          'El movimiento: velocidad y fuerzas cotidianas',
          'Integración y proyecto final: ciencia para la vida'
        ],

        tiposPensamiento: ['Entorno físico', 'Ciencia, tecnología y sociedad'],

        preguntaProblema: '¿Qué procesos internos y externos de la Tierra producen los fenómenos naturales que observamos y cómo podemos prepararnos para ellos?',

        diagnostico: 'Los estudiantes conocen los terremotos y volcanes por experiencias o noticias, pero no comprenden su origen en los procesos internos de la Tierra. Tienen temor frente a estos fenómenos pero no saben cómo actuar ante ellos.',

        competenciasICFES: {
          usoConocimiento: 'Relaciona los fenómenos naturales como terremotos y erupciones con los procesos internos de la Tierra.',
          explicacion: 'Explica por qué Colombia es un país con alto riesgo de terremotos y erupciones volcánicas, y cómo prepararse.',
          indagacion: 'Investiga sobre un fenómeno natural colombiano y comunica los resultados con un informe o presentación.'
        },

        matrizReferencia: {
          componente: 'entorno-fisico',
          competencia: 'explicacion',
          afirmaciones: [
            'Reconoce cambios de estado en situaciones cotidianas.',
            'Observa y describe qué sucede cuando se mezclan diferentes materiales.'
          ]
        },

        aprendizajesICFES: ['nat-s5-04', 'nat-s5-08'],
        nivelEsperado: 'Satisfactorio',

        evidenciasICFES: ['nat-s5-04-e1', 'nat-s5-04-e2', 'nat-s5-08-e1', 'nat-s5-08-e2'],

        evidenciasAprendizaje: [
          'Describe las tres capas internas de la Tierra y sus características básicas.',
          'Explica por qué ocurren los terremotos y las erupciones volcánicas.',
          'Identifica zonas de riesgo sísmico y volcánico en Colombia.',
          'Describe medidas de prevención y planes de evacuación ante un desastre natural.',
          'Investiga un fenómeno natural colombiano reciente y presenta sus hallazgos.'
        ],

        estrategiasMetodologicas: [
          'Modelo de la estructura interna de la Tierra con plastilina de diferentes colores.',
          'Simulación de un volcán con bicarbonato y vinagre.',
          'Análisis de mapas de riesgo sísmico y volcánico de Colombia.',
          'Simulacro de evacuación en el colegio y reflexión sobre su importancia.',
          'Proyecto integrador: presentación sobre un fenómeno natural colombiano.'
        ],

        materialesEducativos: [
          'Plastilina de varios colores para modelo de la Tierra',
          'Bicarbonato, vinagre y recipiente para simulación del volcán',
          'Mapa de zonas sísmicas y volcánicas de Colombia',
          'Texto escolar de Ciencias Naturales 4°',
          'Noticias y videos sobre fenómenos naturales recientes en Colombia'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe las capas internas de la Tierra y las relaciona con los fenómenos geológicos.',
            'Explica por qué Colombia es un país con alto riesgo sísmico y volcánico.',
            'Menciona tres medidas de prevención ante desastres naturales.'
          ],
          hacer: [
            'Construye el modelo de la estructura interna de la Tierra con capas correctas.',
            'Elabora y presenta el informe sobre un fenómeno natural colombiano.',
            'Participa activamente en el simulacro de evacuación.'
          ],
          ser: [
            'Actúa con calma y responsabilidad durante el simulacro de evacuación.',
            'Muestra solidaridad al reflexionar sobre las víctimas de desastres naturales.',
            'Valora la importancia de la ciencia en la prevención de riesgos naturales.'
          ]
        },

        competenciaCiudadana: 'Comprende la importancia de la preparación comunitaria ante desastres naturales y desarrolla una actitud de solidaridad hacia las comunidades afectadas por fenómenos geológicos, reconociendo el papel de la ciencia en la reducción del riesgo.'
      }
    ]
  },

  // ============================================================
  // GRADO 5
  // ============================================================
  '5': {
    grado: '5°',
    intensidadHoraria: 3,
    totalSemanas: 40,
    totalHorasAnuales: 120,
    objetivo: 'Consolidar la comprensión de los ecosistemas, la herencia biológica, los cambios físicos y químicos de la materia, y el movimiento, aplicando el método científico con mayor autonomía y rigor para formular, verificar y comunicar hipótesis, preparando a los estudiantes para las competencias evaluadas en Saber 5°.',

    periodos: [
      // ----------------------------------------------------------
      // GRADO 5 - PERIODO 1
      // ----------------------------------------------------------
      {
        periodo: 1,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Describe el ciclo de vida de organismos de mi entorno.',
          'Explica las funciones de los sistemas de órganos de los seres vivos y sus interacciones.',
          'Clasifico organismos en grupos taxonómicos de acuerdo con sus características.'
        ],

        dba: 'Comprende los procesos de fotosíntesis y respiración celular como base del flujo de energía en los ecosistemas. Describe la biodiversidad como característica de los ecosistemas y explica factores que la amenazan.',

        ejesTematicos: [
          'Fotosíntesis: proceso, reactivos y productos',
          'Respiración celular: obtención de energía en los seres vivos',
          'Relación entre fotosíntesis y respiración en el equilibrio del ecosistema',
          'Biodiversidad: concepto, importancia y amenazas',
          'Estrategias de conservación de la biodiversidad en Colombia'
        ],

        tiposPensamiento: ['Entorno vivo', 'Ciencia, tecnología y sociedad'],

        preguntaProblema: '¿Cómo obtienen energía los seres vivos y por qué la biodiversidad es fundamental para el equilibrio de los ecosistemas?',

        diagnostico: 'El 55% de los estudiantes no comprende la diferencia entre fotosíntesis y respiración y confunde ambos procesos. Conocen el término biodiversidad pero no comprenden por qué su pérdida afecta el equilibrio ecológico.',

        competenciasICFES: {
          usoConocimiento: 'Describe los procesos de fotosíntesis y respiración celular e identifica su papel en el flujo de energía en los ecosistemas.',
          explicacion: 'Explica cómo la pérdida de biodiversidad afecta el equilibrio de los ecosistemas y las consecuencias para los seres humanos.',
          indagacion: 'Diseña y realiza experimentos para verificar la producción de oxígeno en la fotosíntesis o la liberación de CO₂ en la respiración.'
        },

        matrizReferencia: {
          componente: 'entorno-vivo',
          competencia: 'explicacion',
          afirmaciones: [
            'Construye cadenas alimentarias identificando productores, consumidores y descomponedores.',
            'Explica qué sucede en un ecosistema cuando desaparece uno de sus organismos.'
          ]
        },

        aprendizajesICFES: ['nat-s5-02', 'nat-s5-07'],
        nivelEsperado: 'Satisfactorio',

        evidenciasICFES: ['nat-s5-02-e1', 'nat-s5-02-e2', 'nat-s5-07-e1', 'nat-s5-07-e2'],

        evidenciasAprendizaje: [
          'Describe los reactivos y productos de la fotosíntesis usando una ecuación sencilla.',
          'Explica la diferencia entre fotosíntesis (producir energía) y respiración (usarla).',
          'Define biodiversidad y menciona al menos dos razones por las que es importante.',
          'Identifica tres amenazas a la biodiversidad colombiana y sus consecuencias.',
          'Propone al menos dos estrategias concretas de conservación de la biodiversidad local.'
        ],

        estrategiasMetodologicas: [
          'Experimento de fotosíntesis con planta acuática Elodea o musgo en agua: observar burbujas de oxígeno.',
          'Debate "Colombia: uno de los países más biodiversos del mundo, ¿qué estamos haciendo para protegerlo?"',
          'Elaboración de un mapa de biodiversidad de Colombia con especies emblemáticas.',
          'Estudio de caso: la deforestación en el Amazonas colombiano y sus efectos.',
          'Proyecto de siembra de plantas nativas en el colegio o comunidad.'
        ],

        materialesEducativos: [
          'Plantas acuáticas o musgos para el experimento de fotosíntesis',
          'Recipientes transparentes, agua y luz solar o artificial para el experimento',
          'Mapa de Colombia en blanco para identificar zonas de biodiversidad',
          'Texto escolar de Ciencias Naturales 5°',
          'Informes de WWF Colombia y documentales sobre biodiversidad colombiana'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Explica el proceso de fotosíntesis identificando qué entra y qué sale.',
            'Diferencia fotosíntesis de respiración celular con claridad.',
            'Define biodiversidad y explica por qué su pérdida es un problema global.'
          ],
          hacer: [
            'Realiza el experimento de fotosíntesis y registra observaciones con datos.',
            'Elabora el mapa de biodiversidad de Colombia con información correcta.',
            'Participa en la siembra de plantas nativas con responsabilidad.'
          ],
          ser: [
            'Muestra compromiso real con la conservación de la biodiversidad del entorno.',
            'Actúa coherentemente con sus convicciones ambientales en el colegio y el hogar.',
            'Valora la riqueza biológica de Colombia como un patrimonio propio.'
          ]
        },

        competenciaCiudadana: 'Asume una postura crítica y comprometida frente a la pérdida de biodiversidad en Colombia, reconociendo que cada persona puede contribuir a su conservación con acciones concretas en el entorno cotidiano.'
      },

      // ----------------------------------------------------------
      // GRADO 5 - PERIODO 2
      // ----------------------------------------------------------
      {
        periodo: 2,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Explica las funciones de los sistemas del cuerpo humano y sus interacciones.',
          'Identifica y describo características de los seres vivos en organismos del entorno.',
          'Identifico y uso aportes de algunos científicos colombianos en el desarrollo de la ciencia.'
        ],

        dba: 'Comprende las leyes básicas de la herencia y explica cómo los rasgos se transmiten de padres a hijos. Comprende los procesos de fotosíntesis y respiración celular como base del flujo de energía en los ecosistemas.',

        ejesTematicos: [
          'La herencia biológica: rasgos y caracteres hereditarios',
          'Los genes y los cromosomas: introducción básica',
          'Variaciones en los seres vivos: por qué los hijos no son idénticos a los padres',
          'Rasgos heredados vs. rasgos adquiridos',
          'Científicos colombianos y contribuciones a la genética y biología'
        ],

        tiposPensamiento: ['Entorno vivo', 'Ciencia, tecnología y sociedad'],

        preguntaProblema: '¿Cómo se transmiten los rasgos de padres a hijos y por qué los hijos de los mismos padres pueden ser tan diferentes entre sí?',

        diagnostico: 'Los estudiantes entienden intuitivamente que los hijos se parecen a los padres, pero no comprenden el mecanismo de la herencia ni la diferencia entre rasgos heredados y adquiridos. Desconocen científicos colombianos en biología.',

        competenciasICFES: {
          usoConocimiento: 'Identifica rasgos hereditarios en organismos y los diferencia de rasgos adquiridos en situaciones concretas.',
          explicacion: 'Explica de manera sencilla cómo se transmiten los rasgos de generación en generación usando los conceptos de genes y cromosomas.',
          indagacion: 'Realiza observaciones sobre rasgos hereditarios en la familia y registra los resultados en tablas para identificar patrones.'
        },

        matrizReferencia: {
          componente: 'entorno-vivo',
          competencia: 'uso-conocimiento',
          afirmaciones: [
            'Identifica características de los seres vivos y los diferencia de los objetos sin vida.',
            'Describe cambios que experimentan los seres vivos a lo largo de su ciclo de vida.'
          ]
        },

        aprendizajesICFES: ['nat-s5-01', 'nat-s5-06'],
        nivelEsperado: 'Satisfactorio',

        evidenciasICFES: ['nat-s5-01-e1', 'nat-s5-01-e2', 'nat-s5-06-e1', 'nat-s5-06-e2', 'nat-s5-06-e3'],

        evidenciasAprendizaje: [
          'Define rasgo hereditario y da al menos tres ejemplos en humanos.',
          'Distingue entre rasgos heredados y rasgos adquiridos con ejemplos claros.',
          'Explica con sus palabras qué son los genes y cuál es su función.',
          'Observa y registra rasgos hereditarios en su familia (tipo de lóbulo, color de ojos, etc.).',
          'Menciona al menos un científico colombiano y su aporte al conocimiento biológico.'
        ],

        estrategiasMetodologicas: [
          'Encuesta familiar: identificar rasgos hereditarios en familiares y registrarlos en tablas.',
          'Construcción de un árbol genealógico con rasgos hereditarios observados.',
          'Análisis de imágenes de familias de animales: identificar semejanzas hereditarias.',
          'Investigación sobre científicos colombianos: Enrique Pérez Arbeláez o Manuel Elkin Patarroyo.',
          'Debate: ¿Qué rasgos heredé de mi familia y cuáles he desarrollado yo?'
        ],

        materialesEducativos: [
          'Formato de encuesta familiar de rasgos hereditarios',
          'Materiales para el árbol genealógico (cartulina, fotos, marcadores)',
          'Imágenes de familias de animales (perros, gatos, aves) para análisis',
          'Texto escolar de Ciencias Naturales 5°',
          'Fichas biográficas de científicos colombianos relevantes'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Define herencia biológica y distingue rasgos hereditarios de adquiridos.',
            'Explica qué son los genes y cromosomas con vocabulario básico apropiado.',
            'Menciona un científico colombiano y su contribución a la ciencia.'
          ],
          hacer: [
            'Realiza la encuesta familiar y elabora el árbol genealógico con rasgos identificados.',
            'Registra datos sobre rasgos hereditarios en tablas organizadas.',
            'Presenta la investigación sobre el científico colombiano en forma oral.'
          ],
          ser: [
            'Respeta la diversidad de características físicas en su grupo y en la sociedad.',
            'Valora el aporte de los científicos colombianos al conocimiento universal.',
            'Reflexiona críticamente sobre los rasgos propios sin emitir juicios de valor.'
          ]
        },

        competenciaCiudadana: 'Valora la diversidad biológica humana como expresión de la herencia genética y rechaza actitudes de discriminación basadas en características físicas, reconociendo que la diversidad es una riqueza y no una diferencia negativa.'
      },

      // ----------------------------------------------------------
      // GRADO 5 - PERIODO 3
      // ----------------------------------------------------------
      {
        periodo: 3,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Identifica cambios físicos y químicos de la materia y los diferencia según sus características observables.',
          'Identifica y describo fuerzas de mi entorno cotidiano.',
          'Establezco relaciones entre el desarrollo tecnológico y el impacto sobre el entorno natural.'
        ],

        dba: 'Identifica cambios físicos y químicos de la materia, y los diferencia según sus características observables. Describe las propiedades del movimiento (velocidad, aceleración) y las relaciona con fuerzas cotidianas.',

        ejesTematicos: [
          'Cambios físicos de la materia: reversibles y sin formación de nuevas sustancias',
          'Cambios químicos: reacciones con formación de nuevas sustancias',
          'Evidencias de un cambio químico: color, olor, calor, gas, precipitado',
          'Fuerzas cotidianas: gravedad, fricción y fuerza muscular',
          'Movimiento: velocidad, distancia y tiempo'
        ],

        tiposPensamiento: ['Entorno físico'],

        preguntaProblema: '¿Cómo podemos distinguir cuándo la materia cambia de forma de cuándo se transforma en algo completamente diferente, y qué fuerzas producen el movimiento?',

        diagnostico: 'Los estudiantes confunden cambios físicos y químicos, creyendo que cualquier cambio visible es un cambio químico. No comprenden el concepto de fuerza como causa del movimiento y lo confunden con el movimiento mismo.',

        competenciasICFES: {
          usoConocimiento: 'Diferencia cambios físicos de cambios químicos con criterios precisos e identifica fuerzas cotidianas que producen movimiento.',
          explicacion: 'Explica fenómenos cotidianos como la oxidación, la combustión o la fermentación como ejemplos de cambios químicos.',
          indagacion: 'Diseña experimentos para observar y clasificar cambios físicos y químicos, registrando datos y sacando conclusiones.'
        },

        matrizReferencia: {
          componente: 'entorno-fisico',
          competencia: 'uso-conocimiento',
          afirmaciones: [
            'Diferencia entre mezclas homogéneas y heterogéneas con ejemplos del entorno.',
            'Selecciona el método de separación adecuado según el tipo de mezcla.',
            'Relaciona las propiedades de los materiales con los métodos usados para separarlos.'
          ]
        },

        aprendizajesICFES: ['nat-s5-03', 'nat-s5-04', 'nat-s5-05'],
        nivelEsperado: 'Satisfactorio',

        evidenciasICFES: ['nat-s5-03-e1', 'nat-s5-03-e2', 'nat-s5-04-e1', 'nat-s5-04-e2', 'nat-s5-05-e1'],

        evidenciasAprendizaje: [
          'Distingue cambios físicos de cambios químicos usando al menos tres criterios.',
          'Identifica evidencias de un cambio químico en situaciones cotidianas.',
          'Describe la gravedad como una fuerza de atracción y da ejemplos de su efecto.',
          'Calcula la velocidad promedio de un objeto dado el tiempo y la distancia.',
          'Clasifica situaciones del entorno como cambios físicos o químicos justificando su respuesta.'
        ],

        estrategiasMetodologicas: [
          'Laboratorio de cambios: 6 estaciones con cambios físicos y químicos para identificar.',
          'Experimento de oxidación: observar clavo en agua con sal durante una semana.',
          'Experimento de fermentación: levadura con azúcar y agua caliente para observar CO₂.',
          'Práctica de medición del movimiento: calcular velocidad de un objeto en el patio.',
          'Elaboración de un organizador gráfico: diferencias entre cambios físicos y químicos.'
        ],

        materialesEducativos: [
          'Clavos, agua con sal, limón para experimento de oxidación',
          'Levadura, azúcar, agua y globo para experimento de fermentación',
          'Cinta métrica y cronómetro para medición de velocidad',
          'Texto escolar de Ciencias Naturales 5°',
          'Guías de laboratorio para las seis estaciones de cambios'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Define y diferencia cambios físicos y químicos con criterios específicos.',
            'Enumera al menos cuatro evidencias de un cambio químico.',
            'Explica qué es la velocidad y cómo se calcula con datos de distancia y tiempo.'
          ],
          hacer: [
            'Realiza las estaciones de laboratorio y clasifica correctamente cada cambio.',
            'Registra y presenta los resultados del experimento de oxidación o fermentación.',
            'Calcula correctamente la velocidad promedio en la práctica de movimiento.'
          ],
          ser: [
            'Sigue las normas de seguridad en el laboratorio con responsabilidad.',
            'Trabaja metódicamente, registrando datos antes de sacar conclusiones.',
            'Reconoce cuando su hipótesis fue incorrecta y lo expresa con honestidad científica.'
          ]
        },

        competenciaCiudadana: 'Comprende que los cambios químicos en la industria generan residuos que pueden afectar el entorno, y reflexiona sobre el consumo responsable y la reducción de residuos como formas de disminuir el impacto ambiental.'
      },

      // ----------------------------------------------------------
      // GRADO 5 - PERIODO 4
      // ----------------------------------------------------------
      {
        periodo: 4,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Comprendo el concepto de ecosistema, sus componentes (bióticos y abióticos) y las relaciones entre ellos.',
          'Reconozco que los modelos de la ciencia cambian con el tiempo y que varios pueden coexistir.',
          'Saco conclusiones de mis experiencias y las comunico con distintos formatos.'
        ],

        dba: 'Comprende el concepto de ecosistema, sus componentes (bióticos y abióticos) y las relaciones entre ellos. Describe las propiedades del movimiento (velocidad, aceleración) y las relaciona con fuerzas cotidianas.',

        ejesTematicos: [
          'El ecosistema: revisión y profundización de componentes y relaciones',
          'Relaciones interespecíficas: mutualismo, comensalismo, parasitismo, competencia',
          'El ser humano como parte del ecosistema y factor de cambio',
          'Preparación Saber 5°: estrategias de lectura científica y análisis de preguntas',
          'Proyecto final: investigación integradora de los aprendizajes del año'
        ],

        tiposPensamiento: ['Entorno vivo', 'Ciencia, tecnología y sociedad'],

        preguntaProblema: '¿Cómo se relacionan todos los seres vivos en un ecosistema y qué papel cumplimos los seres humanos en el equilibrio o desequilibrio de estos sistemas?',

        diagnostico: 'Los estudiantes comprenden relaciones básicas como depredación, pero desconocen el mutualismo, comensalismo y parasitismo. Tienen dificultades para leer e interpretar textos científicos con gráficas, tablas y preguntas de selección múltiple.',

        competenciasICFES: {
          usoConocimiento: 'Identifica y clasifica relaciones interespecíficas en ecosistemas e interpreta situaciones que involucran el impacto humano en ellos.',
          explicacion: 'Explica cómo las relaciones entre organismos determinan el equilibrio de los ecosistemas y por qué el ser humano es responsable de conservarlos.',
          indagacion: 'Diseña y desarrolla un proyecto de investigación integrando conceptos de biología, física y química aprendidos durante el año.'
        },

        matrizReferencia: {
          componente: 'cts',
          competencia: 'indagacion',
          afirmaciones: [
            'Formula una hipótesis comprobable sobre un fenómeno natural observado.',
            'Registra datos de una observación o experimento usando tablas sencillas.',
            'Saca conclusiones a partir de los datos recolectados y las compara con su hipótesis.'
          ]
        },

        aprendizajesICFES: ['nat-s5-06', 'nat-s5-07', 'nat-s5-08'],
        nivelEsperado: 'Satisfactorio',

        evidenciasICFES: ['nat-s5-06-e1', 'nat-s5-06-e2', 'nat-s5-06-e3', 'nat-s5-07-e1', 'nat-s5-07-e2', 'nat-s5-08-e1'],

        evidenciasAprendizaje: [
          'Clasifica y describe con ejemplos los tipos de relaciones interespecíficas.',
          'Analiza una situación problema de un ecosistema y propone soluciones fundamentadas.',
          'Responde correctamente preguntas tipo Saber 5° sobre ecosistemas, materia y seres vivos.',
          'Desarrolla un proyecto de investigación con todos los pasos del método científico.',
          'Comunica los resultados de su investigación en un informe escrito y una presentación oral.'
        ],

        estrategiasMetodologicas: [
          'Estudio de casos de relaciones interespecíficas: muérdago-árbol, rémora-tiburón, abeja-flor.',
          'Simulación de preguntas tipo Saber 5° con análisis de estrategias de respuesta.',
          'Proyecto de investigación integradora: cada grupo elige un ecosistema o fenómeno a investigar.',
          'Feria de ciencias de grado 5°: exposición de proyectos ante la comunidad escolar.',
          'Autoevaluación y coevaluación del proceso de aprendizaje del año.'
        ],

        materialesEducativos: [
          'Cuadernillo de práctica tipo Saber 5° (Ciencias Naturales)',
          'Materiales según el tema de cada proyecto de investigación',
          'Rúbrica de evaluación del proyecto y la feria de ciencias',
          'Texto escolar de Ciencias Naturales 5°',
          'Videos de divulgación científica apropiados para grado 5°'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe y clasifica las relaciones interespecíficas con ejemplos colombianos.',
            'Responde preguntas tipo Saber 5° sobre contenidos del año con argumentación.',
            'Explica el papel del ser humano en el equilibrio o desequilibrio de los ecosistemas.'
          ],
          hacer: [
            'Desarrolla el proyecto de investigación con rigor y siguiendo el método científico.',
            'Elabora un informe escrito completo con todos sus componentes.',
            'Expone el proyecto en la feria de ciencias con dominio del tema y claridad.'
          ],
          ser: [
            'Demuestra autonomía y responsabilidad en el desarrollo del proyecto.',
            'Valora el trabajo de sus compañeros y les brinda retroalimentación constructiva.',
            'Reflexiona sobre su crecimiento como científico durante los cinco años de primaria.'
          ]
        },

        competenciaCiudadana: 'Reconoce que la ciencia es una herramienta fundamental para comprender y solucionar problemas ambientales y sociales, y asume el compromiso de seguir aprendiendo y actuando como ciudadano informado y responsable con el entorno natural.'
      }
    ]
  }

}; // fin PLANES_NATURALES_PRIMARIA

if (typeof module !== 'undefined') module.exports = PLANES_NATURALES_PRIMARIA;
else window.PLANES_NATURALES_PRIMARIA = PLANES_NATURALES_PRIMARIA;
