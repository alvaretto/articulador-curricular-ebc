/**
 * Planes de aula de Ciencias Sociales - Grados 1° a 5° (Primaria)
 * Estructura: 4 periodos x 10 semanas x 3 horas/semana = 120 horas/año
 * Basado en Estándares Básicos de Competencias (EBC) del MEN - Colombia
 * Competencias ICFES: Pensamiento social, Interpretación y análisis de perspectivas,
 *                     Pensamiento reflexivo y sistémico
 */

const PLANES_SOCIALES_PRIMARIA = {

  // ============================================================
  // GRADO 1
  // ============================================================
  '1': {
    grado: '1°',
    intensidadHoraria: 3,
    totalSemanas: 40,
    totalHorasAnuales: 120,
    objetivo: 'Desarrollar en el estudiante el reconocimiento de sí mismo como ser social que pertenece a una familia y una comunidad, identificando las normas de convivencia, el entorno natural y construido, y los símbolos patrios de Colombia, fortaleciendo el sentido de identidad y pertenencia desde los primeros años de escolaridad.',

    periodos: {

      // ----------------------------------------------------------
      // GRADO 1 - PERIODO 1
      // ----------------------------------------------------------
      1: {
        periodo: 1,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Identifico y describo características de mi familia, de las familias de mis compañeros y de las familias de otras culturas.',
          'Reconozco que pertenezco a diferentes grupos (familia, colegio, comunidad) y que en cada uno de ellos tengo derechos y deberes.',
          'Reconozco la existencia de diversas culturas en Colombia y en el mundo, y las respeto.'
        ],

        dba: 'Reconoce características de su familia, escuela y comunidad como los grupos sociales más cercanos, comprendiendo que cada uno cumple funciones importantes para el desarrollo y bienestar de sus integrantes.',

        ejesTematicos: [
          'Mi familia: tipos, integrantes y funciones',
          'La escuela: espacios, personas y normas de convivencia',
          'Mi comunidad: barrio, vecinos y lugares representativos',
          'Los grupos a los que pertenezco: derechos y deberes',
          'Diversidad de familias en Colombia'
        ],

        tiposPensamiento: ['Relaciones con la historia y las culturas', 'Relaciones ético-políticas'],

        preguntaProblema: '¿Por qué es importante pertenecer a una familia y a una comunidad, y qué deberes y derechos tengo en cada uno de estos grupos?',

        diagnostico: 'El 65% de los estudiantes no identifica con claridad los roles de los integrantes de su familia ni las normas básicas de convivencia en la escuela y la comunidad.',

        competenciasICFES: {
          pensamientoSocial: 'Reconoce las características de su familia y su comunidad como grupos sociales que tienen normas, funciones y formas de organización.',
          interpretacion: 'Identifica semejanzas y diferencias entre distintos tipos de familias y comunidades, valorando la diversidad como riqueza social.',
          pensamientoSistemico: 'Establece relaciones entre los grupos sociales a los que pertenece (familia, escuela, comunidad) y los derechos y deberes que tiene en cada uno.'
        },

        matrizReferencia: {
          componente: 'conocimientos-sociales',
          competencia: 'Pensamiento social',
          afirmaciones: [
            'Reconoce las características de los grupos sociales primarios (familia, escuela, comunidad) y comprende su importancia para la vida en sociedad.',
            'Identifica normas de convivencia en espacios cotidianos y comprende para qué sirven.'
          ]
        },

        aprendizajesICFES: ['soc-s3-02', 'soc-s3-04'],
        evidenciasICFES: ['soc-s3-02-e1', 'soc-s3-04-e1'],
        nivelEsperado: 'Mínimo',

        evidenciasAprendizaje: [
          'Describe quiénes conforman su familia y qué funciones cumple cada integrante.',
          'Identifica los espacios de la escuela y las personas que trabajan en ella.',
          'Nombra normas de convivencia en el hogar y en la escuela.',
          'Reconoce derechos y deberes que tiene como estudiante y como miembro de su familia.',
          'Identifica semejanzas y diferencias entre distintos tipos de familias.'
        ],

        estrategiasMetodologicas: [
          'Dibujo y presentación del árbol familiar: cada estudiante dibuja su familia y la presenta al grupo.',
          'Recorrido por los espacios de la escuela: identificar funciones y personas de cada espacio.',
          'Construcción colectiva del "Manual de convivencia del salón": normas acordadas entre todos.',
          'Juego de roles: ¿qué hago yo en mi familia? ¿qué hace cada integrante?',
          'Mural de la diversidad: familias de diferentes formas y tamaños en Colombia.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 1° (editorial Norma o Santillana)',
          'Fotografías de diferentes tipos de familias colombianas',
          'Fichas ilustradas de normas de convivencia',
          'Materiales de arte (cartulina, colores, marcadores) para el árbol familiar',
          'Cuentos infantiles sobre la familia y la comunidad'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Nombra a los integrantes de su familia y describe sus funciones.',
            'Identifica los espacios y personas de la escuela.',
            'Menciona normas de convivencia del hogar y la escuela.'
          ],
          hacer: [
            'Dibuja y expone su árbol familiar.',
            'Participa en la construcción del manual de convivencia del salón.',
            'Elabora una ficha descriptiva de su familia.',
            'Reconoce los espacios de la escuela en un recorrido guiado.'
          ],
          ser: [
            'Valora su familia y la de sus compañeros con respeto y sin discriminación.',
            'Cumple las normas de convivencia acordadas en el salón.',
            'Participa con entusiasmo y colaboración en las actividades grupales.'
          ]
        },

        competenciaCiudadana: 'Reconoce que pertenece a diferentes grupos sociales (familia, escuela, comunidad) y que en cada uno tiene derechos y deberes que debe cumplir para garantizar la convivencia pacífica y el bienestar colectivo.'
      },

      // ----------------------------------------------------------
      // GRADO 1 - PERIODO 2
      // ----------------------------------------------------------
      2: {
        periodo: 2,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Reconozco y describo el espacio en el que vivo y me ubico en él usando puntos de referencia.',
          'Identifico y describo características del entorno físico: relieve, clima, agua y suelos de la región donde vivo.',
          'Identifico recursos naturales de la región y las formas en que las personas los utilizan.'
        ],

        dba: 'Describe características del entorno natural y construido de su comunidad, y reconoce cómo el ser humano lo transforma mediante sus actividades cotidianas.',

        ejesTematicos: [
          'El entorno natural: elementos del paisaje cercano',
          'El entorno construido: casas, calles, parques y edificios',
          'Los recursos naturales: agua, suelo, aire y plantas',
          'El cuidado del medio ambiente en la comunidad',
          'Mi barrio o vereda: lugares y características'
        ],

        tiposPensamiento: ['Relaciones espaciales y ambientales'],

        preguntaProblema: '¿Cómo es el lugar donde vivo y qué recursos naturales tenemos en nuestra comunidad para cuidar y aprovechar responsablemente?',

        diagnostico: 'El 60% de los estudiantes no distingue entre entorno natural y entorno construido, ni identifica recursos naturales básicos de su región.',

        competenciasICFES: {
          pensamientoSocial: 'Describe características del entorno natural (agua, suelo, plantas, animales) y del entorno construido (casas, calles, parques) de su comunidad.',
          interpretacion: 'Reconoce cómo las personas utilizan los recursos naturales y reflexiona sobre la importancia de cuidarlos.',
          pensamientoSistemico: 'Establece relaciones entre las características del entorno físico y las actividades que realizan las personas en su comunidad.'
        },

        matrizReferencia: {
          componente: 'conocimientos-sociales',
          competencia: 'Pensamiento reflexivo y sistémico',
          afirmaciones: [
            'Identifica y describe elementos del entorno natural y construido de su comunidad.',
            'Reconoce recursos naturales de su región y comprende la importancia de cuidarlos.'
          ]
        },

        aprendizajesICFES: ['soc-s3-01', 'soc-s3-02'],
        evidenciasICFES: ['soc-s3-01-e1', 'soc-s3-01-e2'],
        nivelEsperado: 'Mínimo',

        evidenciasAprendizaje: [
          'Nombra y describe elementos del paisaje de su comunidad (montañas, ríos, árboles, casas).',
          'Diferencia entre entorno natural (lo que existe sin la intervención humana) y entorno construido (lo que el ser humano ha creado).',
          'Identifica recursos naturales de su región: agua, suelo fértil, bosques, animales.',
          'Explica cómo las personas utilizan los recursos naturales en actividades como la agricultura, la pesca y la construcción.',
          'Propone acciones sencillas para cuidar el medio ambiente en su comunidad.'
        ],

        estrategiasMetodologicas: [
          'Salida de observación al entorno cercano (patio, parque, barrio): identificar elementos naturales y construidos.',
          'Elaboración de un dibujo del paisaje de la comunidad con sus elementos naturales y construidos.',
          'Juego de clasificación: tarjetas con imágenes para separar entre entorno natural y entorno construido.',
          'Cuento ilustrado: "Los recursos naturales de mi región y cómo los cuidamos".',
          'Campaña de reciclaje en el salón: sensibilización sobre el cuidado ambiental.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 1°',
          'Fotografías y tarjetas de elementos naturales y construidos del entorno',
          'Materiales de arte para elaborar el dibujo del paisaje',
          'Cuentos infantiles sobre el medio ambiente y los recursos naturales',
          'Videos cortos sobre la naturaleza en diferentes regiones de Colombia'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Distingue entre entorno natural y entorno construido.',
            'Nombra recursos naturales de su región.',
            'Describe cómo las personas utilizan los recursos naturales.'
          ],
          hacer: [
            'Dibuja el paisaje de su comunidad identificando elementos naturales y construidos.',
            'Clasifica imágenes entre entorno natural y construido.',
            'Participa en la campaña de reciclaje del salón.',
            'Elabora un dibujo o collage sobre el cuidado ambiental.'
          ],
          ser: [
            'Muestra actitud de cuidado y respeto hacia el medio ambiente.',
            'Valora los recursos naturales de su región como un bien colectivo.',
            'Participa con responsabilidad en las actividades de conservación ambiental.'
          ]
        },

        competenciaCiudadana: 'Reconoce que el entorno natural es un bien de todos y asume actitudes de cuidado y responsabilidad ambiental desde su vida cotidiana en la familia y la escuela.'
      },

      // ----------------------------------------------------------
      // GRADO 1 - PERIODO 3
      // ----------------------------------------------------------
      3: {
        periodo: 3,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Comparo aspectos de la vida cotidiana de niños y niñas de otras épocas y culturas con los de la actualidad.',
          'Reconozco y describo festividades y conmemoraciones de mi región y explico su significado histórico y cultural.',
          'Reconozco la existencia de diversas culturas en Colombia y en el mundo, y las respeto.'
        ],

        dba: 'Ubica en el tiempo sucesos cotidianos usando nociones temporales (antes, ahora, después, ayer, hoy, mañana), y reconoce la diversidad de culturas, costumbres y tradiciones en Colombia.',

        ejesTematicos: [
          'El tiempo y las nociones temporales: antes, ahora y después',
          'La historia de mi familia y mi comunidad',
          'Costumbres y tradiciones de mi región',
          'Festividades colombianas y su significado cultural',
          'Diversidad cultural en Colombia: grupos étnicos y expresiones culturales'
        ],

        tiposPensamiento: ['Relaciones con la historia y las culturas'],

        preguntaProblema: '¿Cómo han cambiado las costumbres y formas de vida en mi familia y comunidad a través del tiempo, y qué tradiciones se mantienen vigentes?',

        diagnostico: 'El 70% de los estudiantes no usa correctamente nociones temporales y no identifica costumbres o tradiciones regionales con su significado histórico.',

        competenciasICFES: {
          pensamientoSocial: 'Describe cambios y permanencias en la vida cotidiana de su familia y comunidad usando nociones temporales básicas.',
          interpretacion: 'Reconoce y valora las costumbres, tradiciones y festividades de su región como expresiones de identidad cultural.',
          pensamientoSistemico: 'Establece relaciones entre el pasado, el presente y las tradiciones culturales que se conservan en su comunidad y en Colombia.'
        },

        matrizReferencia: {
          componente: 'conocimientos-sociales',
          competencia: 'Pensamiento social',
          afirmaciones: [
            'Usa nociones temporales para ubicar y comparar aspectos de la vida cotidiana en diferentes momentos históricos.',
            'Reconoce la diversidad cultural de Colombia e identifica expresiones de costumbres y tradiciones regionales.'
          ]
        },

        aprendizajesICFES: ['soc-s3-03', 'soc-s3-04'],
        evidenciasICFES: ['soc-s3-03-e1', 'soc-s3-04-e1'],
        nivelEsperado: 'Mínimo',

        evidenciasAprendizaje: [
          'Usa correctamente nociones temporales: antes, ahora, después, ayer, hoy, mañana.',
          'Compara aspectos de la vida cotidiana de antes y de ahora (medios de transporte, tecnología, vestimenta).',
          'Describe costumbres y tradiciones de su familia y su región.',
          'Nombra festividades importantes de su municipio o región y explica su significado.',
          'Identifica algunos grupos étnicos de Colombia (indígenas, afrocolombianos, mestizos) y sus expresiones culturales.'
        ],

        estrategiasMetodologicas: [
          'Línea de tiempo de la vida familiar: desde los abuelos hasta hoy, con fotos y dibujos.',
          'Entrevista a abuelos o personas mayores sobre costumbres y formas de vida del pasado.',
          'Elaboración de un calendario de festividades regionales y nacionales.',
          'Exposición de objetos o fotografías del pasado familiar: ¿cómo era antes?',
          'Actividad lúdica: juegos tradicionales colombianos versus juegos actuales.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 1°',
          'Fotografías de la familia en diferentes épocas',
          'Imágenes de festividades colombianas (Carnaval de Barranquilla, Feria de las Flores, etc.)',
          'Cuentos sobre tradiciones colombianas',
          'Videos cortos sobre grupos étnicos de Colombia'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Usa nociones temporales básicas (antes, ahora, después).',
            'Describe costumbres y tradiciones de su familia y región.',
            'Nombra festividades regionales y su significado.'
          ],
          hacer: [
            'Elabora una línea de tiempo de la vida familiar.',
            'Realiza una entrevista a un familiar mayor sobre costumbres del pasado.',
            'Dibuja o representa una festividad de su región.',
            'Participa en la recreación de juegos tradicionales colombianos.'
          ],
          ser: [
            'Valora y respeta las tradiciones culturales de su familia y región.',
            'Muestra curiosidad e interés por conocer otras culturas colombianas.',
            'Participa con entusiasmo en actividades de reconocimiento cultural.'
          ]
        },

        competenciaCiudadana: 'Reconoce y valora la diversidad cultural de Colombia como parte de su identidad nacional, asumiendo actitudes de respeto y aprecio hacia las costumbres y tradiciones de diferentes grupos étnicos y regiones del país.'
      },

      // ----------------------------------------------------------
      // GRADO 1 - PERIODO 4
      // ----------------------------------------------------------
      4: {
        periodo: 4,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Reconozco que pertenezco a diferentes grupos (familia, colegio, comunidad) y que en cada uno de ellos tengo derechos y deberes.',
          'Participo en actividades escolares y de mi comunidad con actitud colaborativa y respeto.',
          'Reconozco la importancia de tomar decisiones democráticas, escuchar las opiniones de los demás y llegar a acuerdos.'
        ],

        dba: 'Identifica los símbolos patrios de Colombia y su significado para la nación, y reconoce normas de convivencia en el hogar, la escuela y la comunidad, comprendiendo su importancia para la vida en sociedad.',

        ejesTematicos: [
          'Los símbolos patrios de Colombia: bandera, escudo e himno',
          'Colombia: mi país, mi nación',
          'Normas de convivencia y vida en comunidad',
          'La participación y la democracia en la escuela',
          'Los derechos de los niños y las niñas'
        ],

        tiposPensamiento: ['Relaciones ético-políticas'],

        preguntaProblema: '¿Por qué es importante conocer los símbolos patrios de Colombia y participar activamente en las decisiones del grupo para construir una convivencia pacífica?',

        diagnostico: 'El 65% de los estudiantes no reconoce el significado de los símbolos patrios ni participa activamente en espacios de toma de decisiones colectivas en el aula.',

        competenciasICFES: {
          pensamientoSocial: 'Identifica los símbolos patrios de Colombia y comprende su importancia para la identidad nacional.',
          interpretacion: 'Reconoce la importancia de las normas y los acuerdos para la convivencia pacífica en la escuela y la comunidad.',
          pensamientoSistemico: 'Establece relaciones entre los derechos y deberes de los niños y las normas de convivencia que permiten vivir en comunidad.'
        },

        matrizReferencia: {
          componente: 'multiperspectividad',
          competencia: 'Interpretación y análisis de perspectivas',
          afirmaciones: [
            'Reconoce los símbolos patrios de Colombia y explica su significado para la identidad nacional.',
            'Comprende la importancia de los derechos y deberes en la convivencia escolar y comunitaria.'
          ]
        },

        aprendizajesICFES: ['soc-s3-05', 'soc-s3-06'],
        evidenciasICFES: ['soc-s3-05-e1', 'soc-s3-06-e1'],
        nivelEsperado: 'Mínimo',

        evidenciasAprendizaje: [
          'Nombra y describe los símbolos patrios de Colombia: bandera, escudo e himno nacional.',
          'Explica el significado de cada símbolo patrio para la identidad colombiana.',
          'Identifica derechos fundamentales de los niños y las niñas.',
          'Participa en votaciones y toma de decisiones en el aula.',
          'Propone y respeta normas de convivencia para vivir en comunidad.'
        ],

        estrategiasMetodologicas: [
          'Aprendizaje del Himno Nacional: estrofas, significado y contexto histórico.',
          'Construcción colectiva de la bandera y el escudo con materiales del aula.',
          'Simulacro de gobierno escolar: elección del personero del salón.',
          'Lectura y análisis de los derechos de los niños y las niñas (Convención).',
          'Elaboración de un decálogo de derechos y deberes del estudiante.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 1°',
          'Imágenes de los símbolos patrios (bandera, escudo, himno)',
          'Letra del Himno Nacional de Colombia',
          'Cartilla ilustrada de los derechos de los niños y las niñas',
          'Videos educativos sobre los símbolos patrios colombianos'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe los símbolos patrios de Colombia y su significado.',
            'Identifica derechos fundamentales de los niños.',
            'Nombra normas de convivencia para la vida en comunidad.'
          ],
          hacer: [
            'Reproduce correctamente los símbolos patrios (dibujo, pintura).',
            'Participa en el simulacro de elección del personero del salón.',
            'Elabora el decálogo de derechos y deberes del estudiante.',
            'Interpreta una estrofa del Himno Nacional.'
          ],
          ser: [
            'Muestra orgullo y respeto por los símbolos patrios de Colombia.',
            'Cumple los acuerdos de convivencia establecidos en el aula.',
            'Participa con respeto y escucha activa en las decisiones del grupo.'
          ]
        },

        competenciaCiudadana: 'Reconoce los símbolos de identidad nacional colombiana y participa activamente en la toma de decisiones del aula, comprendiendo que la democracia implica escuchar las opiniones de los demás y llegar a acuerdos que beneficien a todos.'
      }
    }
  },

  // ============================================================
  // GRADO 2
  // ============================================================
  '2': {
    grado: '2°',
    intensidadHoraria: 3,
    totalSemanas: 40,
    totalHorasAnuales: 120,
    objetivo: 'Ampliar la comprensión del estudiante sobre el territorio colombiano, su diversidad geográfica y cultural, el papel de las instituciones públicas y los servicios del Estado, la historia compartida de múltiples culturas, y los derechos y deberes ciudadanos, fomentando el sentido de pertenencia a Colombia como nación diversa y la participación responsable en la vida comunitaria.',

    periodos: {

      // ----------------------------------------------------------
      // GRADO 2 - PERIODO 1
      // ----------------------------------------------------------
      1: {
        periodo: 1,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Identifico y describo costumbres y tradiciones de mi comunidad y de otras comunidades y culturas.',
          'Reconozco que pertenezco a diferentes grupos (familia, colegio, comunidad) y que en cada uno de ellos tengo derechos y deberes.',
          'Identifico y respeto las diferencias étnicas, culturales y de género en mi familia, mi comunidad y mi país.'
        ],

        dba: 'Reconoce que Colombia tiene una historia que se construye a partir del aporte de diferentes culturas (indígenas, africanas, europeas), valorando la diversidad como riqueza de la nación.',

        ejesTematicos: [
          'Mi familia, mi comunidad y mi municipio',
          'Los grupos culturales de Colombia: indígenas, afrocolombianos, mestizos y raizales',
          'Costumbres, tradiciones y fiestas de las regiones colombianas',
          'El municipio: organización, autoridades y servicios',
          'Identidad y diversidad: valorar las diferencias'
        ],

        tiposPensamiento: ['Relaciones con la historia y las culturas', 'Relaciones ético-políticas'],

        preguntaProblema: '¿Cómo la diversidad de culturas (indígenas, afrocolombianas, europeas) ha construido la identidad de Colombia y por qué es importante valorar y respetar esa riqueza cultural?',

        diagnostico: 'El 63% de los estudiantes no reconoce los grupos culturales que conforman Colombia ni valora la diversidad étnica y cultural como una riqueza de la nación.',

        competenciasICFES: {
          pensamientoSocial: 'Describe los grupos culturales que conforman Colombia y sus aportes a la identidad nacional.',
          interpretacion: 'Reconoce y valora las diferencias culturales, étnicas y de costumbres entre comunidades colombianas.',
          pensamientoSistemico: 'Establece relaciones entre la diversidad cultural de Colombia y la organización social y comunitaria de las diferentes regiones.'
        },

        matrizReferencia: {
          componente: 'multiperspectividad',
          competencia: 'Interpretación y análisis de perspectivas',
          afirmaciones: [
            'Identifica los grupos étnicos y culturales de Colombia y reconoce sus costumbres y tradiciones.',
            'Valora la diversidad cultural como una riqueza de la nación colombiana.'
          ]
        },

        aprendizajesICFES: ['soc-s3-04', 'soc-s3-02'],
        evidenciasICFES: ['soc-s3-04-e1', 'soc-s3-04-e2'],
        nivelEsperado: 'Mínimo',

        evidenciasAprendizaje: [
          'Nombra los grupos étnicos principales de Colombia: indígenas, afrocolombianos, mestizos y raizales.',
          'Describe costumbres y tradiciones de al menos dos culturas colombianas.',
          'Explica cómo las culturas indígena, africana y europea aportaron a la construcción de Colombia.',
          'Identifica fiestas y expresiones culturales de diferentes regiones colombianas.',
          'Expresa respeto por las diferencias culturales y étnicas de sus compañeros.'
        ],

        estrategiasMetodologicas: [
          'Mural de la diversidad cultural: representar los grupos étnicos de Colombia con imágenes y textos.',
          'Exposición de objetos culturales: cada estudiante lleva un objeto representativo de su tradición familiar.',
          'Lectura de cuentos y leyendas de diferentes culturas colombianas (Wayuu, Emberá, Palenquera).',
          'Juego de clasificación: relacionar trajes, comidas y costumbres con los grupos culturales.',
          'Proyecto "Mi herencia cultural": investigar sobre los orígenes culturales de su familia.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 2°',
          'Imágenes y fotografías de grupos étnicos colombianos',
          'Cuentos y leyendas de tradición indígena y afrocolombiana',
          'Videos sobre fiestas y costumbres de las regiones de Colombia',
          'Mapas de Colombia con ubicación de los grupos étnicos'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Nombra los grupos étnicos principales de Colombia.',
            'Describe costumbres de al menos dos culturas colombianas.',
            'Explica los aportes de las culturas indígena, africana y europea a Colombia.'
          ],
          hacer: [
            'Elabora el mural de la diversidad cultural de Colombia.',
            'Participa en la exposición de objetos culturales familiares.',
            'Clasifica costumbres y tradiciones con los grupos culturales correspondientes.',
            'Presenta el proyecto "Mi herencia cultural".'
          ],
          ser: [
            'Muestra respeto y valoración por la diversidad cultural colombiana.',
            'Reconoce y celebra las diferencias culturales como una riqueza.',
            'Participa con entusiasmo y apertura en actividades interculturales.'
          ]
        },

        competenciaCiudadana: 'Reconoce y valora la diversidad étnica y cultural de Colombia como una riqueza de la nación, asumiendo actitudes de respeto, aprecio e inclusión hacia personas de distintas culturas, etnias y tradiciones.'
      },

      // ----------------------------------------------------------
      // GRADO 2 - PERIODO 2
      // ----------------------------------------------------------
      2: {
        periodo: 2,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Reconozco y describo el espacio en el que vivo y me ubico en él usando puntos de referencia.',
          'Identifico y describo características del entorno físico: relieve, clima, agua y suelos de la región donde vivo.',
          'Identifico recursos naturales de la región y las formas en que las personas los utilizan.'
        ],

        dba: 'Describe características físicas del territorio colombiano (ríos, montañas, costas, llanuras) y las relaciona con las actividades humanas que realizan sus habitantes en cada región.',

        ejesTematicos: [
          'El territorio colombiano: ubicación y características generales',
          'Accidentes geográficos de Colombia: montañas, ríos, costas y llanuras',
          'Los puntos cardinales y la orientación en el espacio',
          'Mapas sencillos: cómo leer e interpretar un mapa',
          'Relación entre geografía y actividades humanas en Colombia'
        ],

        tiposPensamiento: ['Relaciones espaciales y ambientales'],

        preguntaProblema: '¿Cuáles son las principales características geográficas del territorio colombiano y cómo influyen en las actividades que realizan sus habitantes?',

        diagnostico: 'El 62% de los estudiantes no identifica accidentes geográficos de Colombia ni usa los puntos cardinales para orientarse en mapas sencillos.',

        competenciasICFES: {
          pensamientoSocial: 'Identifica características físicas del territorio colombiano y las relaciona con las formas de vida de sus habitantes.',
          interpretacion: 'Usa mapas sencillos y los puntos cardinales para ubicarse en el espacio y comprender la distribución del territorio colombiano.',
          pensamientoSistemico: 'Establece relaciones entre los accidentes geográficos de Colombia (ríos, montañas, costas) y las actividades económicas y culturales de sus habitantes.'
        },

        matrizReferencia: {
          componente: 'conocimientos-sociales',
          competencia: 'Pensamiento reflexivo y sistémico',
          afirmaciones: [
            'Describe accidentes geográficos del territorio colombiano y los ubica en mapas sencillos.',
            'Relaciona las características físicas del territorio con las actividades humanas predominantes en cada zona.'
          ]
        },

        aprendizajesICFES: ['soc-s3-01', 'soc-s3-03'],
        evidenciasICFES: ['soc-s3-01-e1', 'soc-s3-01-e2'],
        nivelEsperado: 'Mínimo',

        evidenciasAprendizaje: [
          'Nombra accidentes geográficos de Colombia: montañas, ríos, costas y llanuras.',
          'Usa los puntos cardinales para orientarse en un mapa de Colombia.',
          'Ubica en el mapa el municipio donde vive y su departamento.',
          'Relaciona las características geográficas con actividades como la pesca, la agricultura y el comercio.',
          'Describe las características del paisaje de la región donde vive.'
        ],

        estrategiasMetodologicas: [
          'Elaboración de un mapa sencillo de Colombia identificando accidentes geográficos principales.',
          'Juego de los puntos cardinales: ejercicios de orientación en el aula y en el patio.',
          'Trabajo con fotografías: identificar paisajes de diferentes regiones de Colombia.',
          'Construcción de un relieve de Colombia con plastilina o papel maché.',
          'Proyecto "Mi región": elaborar una descripción geográfica de la región donde viven.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 2°',
          'Mapa físico de Colombia (mudo y político)',
          'Atlas geográfico básico para primaria',
          'Fotografías de paisajes de las diferentes regiones colombianas',
          'Plastilina o papel maché para modelar el relieve'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Nombra accidentes geográficos de Colombia.',
            'Identifica los puntos cardinales y los usa para orientarse.',
            'Describe características geográficas de la región donde vive.'
          ],
          hacer: [
            'Elabora un mapa de Colombia señalando accidentes geográficos.',
            'Ubica su municipio y departamento en el mapa de Colombia.',
            'Construye un relieve de Colombia con plastilina.',
            'Presenta el proyecto "Mi región" con descripción geográfica.'
          ],
          ser: [
            'Valora la riqueza geográfica de Colombia como parte de su identidad.',
            'Muestra interés y curiosidad por conocer las diferentes regiones del país.',
            'Trabaja colaborativamente en la elaboración de materiales geográficos.'
          ]
        },

        competenciaCiudadana: 'Reconoce el territorio colombiano como el espacio compartido de toda la nación y asume actitudes de valoración y cuidado del entorno geográfico como un bien colectivo que debe preservarse para las generaciones futuras.'
      },

      // ----------------------------------------------------------
      // GRADO 2 - PERIODO 3
      // ----------------------------------------------------------
      3: {
        periodo: 3,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Comparo aspectos de la vida cotidiana de niños y niñas de otras épocas y culturas con los de la actualidad.',
          'Identifico y describo costumbres y tradiciones de mi comunidad y de otras comunidades y culturas.',
          'Reconozco la existencia de diversas culturas en Colombia y en el mundo, y las respeto.'
        ],

        dba: 'Reconoce que Colombia tiene una historia que se construye a partir del aporte de diferentes culturas (indígenas, africanas, europeas), y comprende la función de los servicios públicos y las instituciones del Estado en el bienestar de la comunidad.',

        ejesTematicos: [
          'La historia de Colombia: el encuentro de tres culturas',
          'Los pueblos indígenas de Colombia antes de la llegada de los europeos',
          'El aporte de las culturas africanas a Colombia',
          'Los servicios públicos y el bienestar de la comunidad',
          'Las instituciones del Estado: alcaldía, gobernación y gobierno nacional'
        ],

        tiposPensamiento: ['Relaciones con la historia y las culturas', 'Relaciones ético-políticas'],

        preguntaProblema: '¿Cómo el encuentro de las culturas indígena, africana y europea construyó la historia y la identidad de Colombia, y qué papel cumplen hoy las instituciones del Estado en nuestra vida?',

        diagnostico: 'El 67% de los estudiantes no relaciona el origen histórico de Colombia con el encuentro de tres culturas, ni identifica las funciones básicas de las instituciones del Estado.',

        competenciasICFES: {
          pensamientoSocial: 'Describe el proceso histórico de conformación de Colombia a partir del aporte de tres culturas (indígena, africana y europea).',
          interpretacion: 'Reconoce la función de los servicios públicos e instituciones del Estado como mecanismos para garantizar el bienestar de la comunidad.',
          pensamientoSistemico: 'Establece relaciones entre los aportes históricos de cada cultura y la diversidad étnica y cultural de Colombia en la actualidad.'
        },

        matrizReferencia: {
          componente: 'conocimientos-sociales',
          competencia: 'Pensamiento social',
          afirmaciones: [
            'Reconoce el encuentro de las tres culturas (indígena, africana, europea) como base de la historia y la identidad de Colombia.',
            'Identifica la función de los servicios públicos e instituciones del Estado para garantizar el bienestar colectivo.'
          ]
        },

        aprendizajesICFES: ['soc-s3-03', 'soc-s3-04'],
        evidenciasICFES: ['soc-s3-03-e1', 'soc-s3-03-e2'],
        nivelEsperado: 'Mínimo',

        evidenciasAprendizaje: [
          'Describe quiénes vivían en Colombia antes de la llegada de los europeos.',
          'Explica cómo llegaron las culturas africana y europea a Colombia.',
          'Nombra aportes de cada cultura a la identidad colombiana (lengua, comida, música, religión).',
          'Identifica servicios públicos de su municipio: acueducto, energía, salud, educación.',
          'Describe las funciones básicas de la alcaldía y el gobierno en la vida de la comunidad.'
        ],

        estrategiasMetodologicas: [
          'Línea de tiempo histórica: desde las culturas prehispánicas hasta la Colombia actual.',
          'Juego de roles: representar el encuentro entre indígenas, africanos y europeos.',
          'Investigación sencilla: ¿qué costumbres, palabras y alimentos heredamos de cada cultura?',
          'Visita virtual o fichas sobre los servicios públicos del municipio.',
          'Elaboración de un tríptico sobre los aportes de las tres culturas a Colombia.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 2°',
          'Imágenes de pueblos indígenas colombianos, cultura afrocolombiana y legado europeo',
          'Línea de tiempo histórica de Colombia para el aula',
          'Fichas informativas sobre los servicios públicos municipales',
          'Videos cortos sobre la historia de Colombia para niños'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe el encuentro de las tres culturas en la formación de Colombia.',
            'Nombra aportes de cada cultura a la identidad colombiana.',
            'Identifica servicios públicos e instituciones del Estado.'
          ],
          hacer: [
            'Construye una línea de tiempo de la historia de Colombia.',
            'Participa en el juego de roles sobre el encuentro cultural.',
            'Elabora el tríptico sobre los aportes de las tres culturas.',
            'Identifica los servicios públicos de su municipio en una ficha.'
          ],
          ser: [
            'Valora los aportes de las diferentes culturas a la identidad colombiana.',
            'Muestra respeto por la historia y el patrimonio cultural del país.',
            'Reconoce la importancia de los servicios públicos para el bienestar colectivo.'
          ]
        },

        competenciaCiudadana: 'Reconoce que Colombia es el resultado del encuentro de múltiples culturas y valora esta diversidad como una riqueza nacional, al tiempo que comprende la importancia de las instituciones del Estado para garantizar los derechos y el bienestar de todos los ciudadanos.'
      },

      // ----------------------------------------------------------
      // GRADO 2 - PERIODO 4
      // ----------------------------------------------------------
      4: {
        periodo: 4,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Reconozco que pertenezco a diferentes grupos (familia, colegio, comunidad) y que en cada uno de ellos tengo derechos y deberes.',
          'Identifico situaciones de injusticia y maltrato en mi entorno y propongo acciones para superarlas.',
          'Reconozco la importancia de tomar decisiones democráticas, escuchar las opiniones de los demás y llegar a acuerdos.'
        ],

        dba: 'Identifica los derechos y deberes de los niños y las niñas, y los relaciona con la Constitución Política de Colombia, comprendiendo la importancia de las normas para la convivencia pacífica.',

        ejesTematicos: [
          'Los derechos de los niños y las niñas en Colombia',
          'La Constitución Política de Colombia: el acuerdo de todos',
          'Normas de convivencia: en la escuela, la familia y la comunidad',
          'La justicia y la equidad en la vida cotidiana',
          'Participación democrática: el gobierno escolar'
        ],

        tiposPensamiento: ['Relaciones ético-políticas'],

        preguntaProblema: '¿Por qué es importante conocer y defender los derechos de los niños y las niñas, y cómo podemos participar democráticamente en nuestra escuela y comunidad para que todos seamos tratados con justicia?',

        diagnostico: 'El 60% de los estudiantes no identifica sus derechos fundamentales como niños ni participa activamente en mecanismos de democracia escolar.',

        competenciasICFES: {
          pensamientoSocial: 'Identifica los derechos de los niños y los relaciona con la Constitución Política de Colombia como norma fundamental del país.',
          interpretacion: 'Reconoce situaciones de injusticia y maltrato en el entorno escolar y cotidiano, y propone alternativas de solución.',
          pensamientoSistemico: 'Establece relaciones entre las normas de convivencia, los derechos ciudadanos y la participación democrática en la escuela.'
        },

        matrizReferencia: {
          componente: 'argumentacion',
          competencia: 'Pensamiento social',
          afirmaciones: [
            'Identifica derechos fundamentales de los niños y los relaciona con normas constitucionales.',
            'Reconoce situaciones de vulneración de derechos y propone acciones para garantizarlos.'
          ]
        },

        aprendizajesICFES: ['soc-s3-05', 'soc-s3-06'],
        evidenciasICFES: ['soc-s3-05-e1', 'soc-s3-05-e2'],
        nivelEsperado: 'Mínimo',

        evidenciasAprendizaje: [
          'Nombra los derechos fundamentales de los niños: a la educación, la salud, la familia, la alimentación y la protección.',
          'Explica qué es la Constitución Política de Colombia y para qué sirve.',
          'Identifica situaciones de injusticia o maltrato y propone cómo resolverlas.',
          'Participa en el gobierno escolar del salón (personero, comité de convivencia).',
          'Explica por qué es importante que todos respetemos las normas y los derechos de los demás.'
        ],

        estrategiasMetodologicas: [
          'Lectura y análisis de la Convención sobre los Derechos del Niño (versión ilustrada para niños).',
          'Elaboración del "Libro de mis derechos": cada estudiante ilustra un derecho fundamental.',
          'Simulacro de elección del personero del salón: campaña, votación y posesión.',
          'Análisis de casos: ¿se están cumpliendo los derechos en esta situación?',
          'Construcción del "Mapa de la convivencia": normas que nos permiten vivir bien juntos.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 2°',
          'Versión ilustrada de la Convención sobre los Derechos del Niño (UNICEF)',
          'Constitución Política de Colombia (versión pedagógica para niños)',
          'Fichas de casos sobre cumplimiento e incumplimiento de derechos',
          'Materiales de arte para el "Libro de mis derechos"'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Nombra los derechos fundamentales de los niños y las niñas.',
            'Explica qué es la Constitución Política de Colombia.',
            'Identifica situaciones de injusticia y propone soluciones.'
          ],
          hacer: [
            'Elabora el "Libro de mis derechos" con ilustraciones.',
            'Participa en el simulacro de elección del personero del salón.',
            'Analiza casos sobre cumplimiento de derechos.',
            'Construye el "Mapa de la convivencia" del aula.'
          ],
          ser: [
            'Defiende sus derechos y los de sus compañeros con respeto.',
            'Asume actitudes de justicia y equidad en la convivencia escolar.',
            'Participa democráticamente en las decisiones del grupo.'
          ]
        },

        competenciaCiudadana: 'Reconoce sus derechos como niño y ciudadano colombiano y participa activamente en los mecanismos democráticos de la escuela, asumiendo compromisos de justicia, equidad y respeto hacia todos los integrantes de su comunidad educativa.'
      }
    }
  },

  // ============================================================
  // GRADO 3
  // ============================================================
  '3': {
    grado: '3°',
    intensidadHoraria: 3,
    totalSemanas: 40,
    totalHorasAnuales: 120,
    objetivo: 'Desarrollar en el estudiante la comprensión de las regiones naturales de Colombia, los procesos de poblamiento del territorio, la organización política del Estado colombiano y los principios de la democracia, fortaleciendo la identidad nacional y la valoración de la diversidad étnica y cultural como riqueza del país.',

    periodos: {

      // ----------------------------------------------------------
      // GRADO 3 - PERIODO 1
      // ----------------------------------------------------------
      1: {
        periodo: 1,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Identifico y describo características de mi familia, de las familias de mis compañeros y de las familias de otras culturas.',
          'Identifico y describo costumbres y tradiciones de mi comunidad y de otras comunidades y culturas.',
          'Reconozco la existencia de diversas culturas en Colombia y en el mundo, y las respeto.'
        ],

        dba: 'Comprende cómo las características geográficas de las regiones de Colombia influyen en las actividades económicas y culturales de sus habitantes, relacionando territorio y formas de vida.',

        ejesTematicos: [
          'Las regiones naturales de Colombia: características y localización',
          'La región Andina: clima, relieve, población y actividades',
          'La región Caribe: clima, cultura y festividades',
          'Región Pacífica y Orinoquía: biodiversidad y comunidades',
          'Relación entre geografía, cultura y formas de vida regional'
        ],

        tiposPensamiento: ['Relaciones espaciales y ambientales', 'Relaciones con la historia y las culturas'],

        preguntaProblema: '¿Cómo las características geográficas de las regiones de Colombia (clima, relieve, agua) determinan las actividades, costumbres y formas de vida de sus habitantes?',

        diagnostico: 'El 61% de los estudiantes no identifica las regiones naturales de Colombia ni establece relaciones entre la geografía y las formas de vida de sus habitantes.',

        competenciasICFES: {
          pensamientoSocial: 'Describe las principales regiones naturales de Colombia y las relaciona con las actividades económicas y culturales de sus habitantes.',
          interpretacion: 'Reconoce las diferencias culturales entre las regiones colombianas y las valora como expresión de la diversidad del país.',
          pensamientoSistemico: 'Establece relaciones entre las condiciones geográficas (clima, relieve, agua) y las formas de vida, costumbres y actividades de cada región.'
        },

        matrizReferencia: {
          componente: 'conocimientos-sociales',
          competencia: 'Pensamiento reflexivo y sistémico',
          afirmaciones: [
            'Identifica las regiones naturales de Colombia y describe sus características geográficas principales.',
            'Establece relaciones entre las condiciones geográficas de cada región y las actividades humanas y expresiones culturales de sus habitantes.'
          ]
        },

        aprendizajesICFES: ['soc-s3-01', 'soc-s3-04'],
        evidenciasICFES: ['soc-s3-01-e1', 'soc-s3-01-e2', 'soc-s3-01-e3'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Nombra las regiones naturales de Colombia y las ubica en el mapa.',
          'Describe características del clima y el relieve de la región Andina y la región Caribe.',
          'Relaciona las características geográficas con actividades económicas como la ganadería, la agricultura y la pesca.',
          'Identifica expresiones culturales (música, vestimenta, comida) propias de cada región.',
          'Explica por qué Colombia tiene una gran variedad de climas y paisajes.'
        ],

        estrategiasMetodologicas: [
          'Elaboración de un mapa de Colombia con las regiones naturales identificadas y coloreadas.',
          'Investigación por grupos: cada grupo presenta una región natural de Colombia.',
          'Álbum fotográfico de las regiones: paisajes, actividades y expresiones culturales.',
          'Comparación: ¿en qué se parecen y en qué se diferencian las regiones de Colombia?',
          'Video-foro sobre las regiones naturales y su biodiversidad.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 3°',
          'Atlas geográfico de Colombia con regiones naturales',
          'Mapa mudo de Colombia para colorear e identificar regiones',
          'Fotografías y videos de las regiones naturales colombianas',
          'Fichas informativas sobre cada región natural'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Nombra y ubica las regiones naturales de Colombia en el mapa.',
            'Describe características geográficas de al menos dos regiones.',
            'Relaciona la geografía con las actividades económicas regionales.'
          ],
          hacer: [
            'Elabora el mapa de Colombia con las regiones naturales.',
            'Presenta la investigación sobre una región natural asignada.',
            'Completa el álbum fotográfico de las regiones.',
            'Realiza un cuadro comparativo entre dos regiones naturales.'
          ],
          ser: [
            'Muestra interés y curiosidad por conocer las regiones de Colombia.',
            'Valora la biodiversidad y diversidad cultural de las regiones del país.',
            'Trabaja colaborativamente en las actividades de investigación grupal.'
          ]
        },

        competenciaCiudadana: 'Reconoce la diversidad geográfica y cultural de Colombia como una riqueza que debe valorarse y protegerse, y asume actitudes de respeto y aprecio hacia las expresiones culturales de las diferentes regiones del país.'
      },

      // ----------------------------------------------------------
      // GRADO 3 - PERIODO 2
      // ----------------------------------------------------------
      2: {
        periodo: 2,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Identifico y describo características del entorno físico: relieve, clima, agua y suelos de la región donde vivo.',
          'Identifico recursos naturales de la región y las formas en que las personas los utilizan.',
          'Identifico y describo situaciones de contaminación ambiental en mi comunidad y sus causas.'
        ],

        dba: 'Describe las principales regiones naturales de Colombia y las relaciona con la biodiversidad y las culturas regionales, comprendiendo la importancia de conservar los recursos naturales.',

        ejesTematicos: [
          'La biodiversidad de Colombia: flora y fauna por región',
          'Los recursos hídricos de Colombia: ríos, lagos y mares',
          'Problemas ambientales en Colombia: deforestación y contaminación',
          'La Amazonia y el Pacífico: pulmones del planeta',
          'Cómo podemos cuidar el medio ambiente desde nuestra comunidad'
        ],

        tiposPensamiento: ['Relaciones espaciales y ambientales'],

        preguntaProblema: '¿Por qué Colombia es uno de los países más biodiversos del mundo y qué podemos hacer los colombianos para proteger nuestra riqueza natural?',

        diagnostico: 'El 58% de los estudiantes no relaciona la biodiversidad colombiana con las regiones naturales, ni identifica problemas ambientales y sus causas.',

        competenciasICFES: {
          pensamientoSocial: 'Describe la biodiversidad de Colombia y la relaciona con la diversidad de regiones naturales del territorio.',
          interpretacion: 'Identifica problemas ambientales en Colombia (deforestación, contaminación) y reconoce sus causas y consecuencias.',
          pensamientoSistemico: 'Establece relaciones entre la conservación de los recursos naturales y el bienestar de las comunidades que dependen de ellos.'
        },

        matrizReferencia: {
          componente: 'conocimientos-sociales',
          competencia: 'Pensamiento reflexivo y sistémico',
          afirmaciones: [
            'Describe la biodiversidad de Colombia como resultado de la diversidad geográfica y climática del territorio.',
            'Identifica problemas ambientales de Colombia y establece relaciones entre las actividades humanas y el deterioro del entorno natural.'
          ]
        },

        aprendizajesICFES: ['soc-s3-01', 'soc-s3-02'],
        evidenciasICFES: ['soc-s3-01-e2', 'soc-s3-01-e3'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Explica por qué Colombia es uno de los países más biodiversos del mundo.',
          'Identifica especies representativas de flora y fauna de diferentes regiones colombianas.',
          'Nombra los principales ríos de Colombia y explica su importancia.',
          'Describe problemas ambientales como la deforestación y la contaminación de ríos.',
          'Propone acciones para cuidar el medio ambiente en su comunidad.'
        ],

        estrategiasMetodologicas: [
          'Elaboración de un atlas de biodiversidad: animales y plantas representativos de cada región.',
          'Campaña ambiental: "Yo cuido la naturaleza de Colombia" con afiches y compromisos.',
          'Análisis de noticias sobre problemas ambientales en Colombia.',
          'Proyecto de huerta escolar: sensibilización sobre el valor del suelo y el agua.',
          'Visita virtual a la Amazonia o el Pacífico colombiano (video o recurso digital).'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 3°',
          'Guías de biodiversidad de Colombia (flora y fauna por región)',
          'Noticias sobre problemas ambientales en Colombia',
          'Videos documentales sobre la Amazonia y el Pacífico colombiano',
          'Materiales para la huerta escolar o el experimento de germinación'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Explica por qué Colombia es megadiversa.',
            'Nombra los principales ríos de Colombia.',
            'Describe problemas ambientales y sus causas.'
          ],
          hacer: [
            'Elabora el atlas de biodiversidad por regiones.',
            'Diseña un afiche para la campaña ambiental.',
            'Analiza noticias sobre problemas ambientales.',
            'Participa en el proyecto de huerta escolar.'
          ],
          ser: [
            'Asume compromisos de cuidado ambiental en su vida cotidiana.',
            'Valora la biodiversidad de Colombia como patrimonio de la humanidad.',
            'Muestra sensibilidad y responsabilidad frente a los problemas ambientales.'
          ]
        },

        competenciaCiudadana: 'Reconoce que la biodiversidad de Colombia es un bien de todos los colombianos y de la humanidad, y asume compromisos concretos de conservación ambiental desde su vida escolar y familiar.'
      },

      // ----------------------------------------------------------
      // GRADO 3 - PERIODO 3
      // ----------------------------------------------------------
      3: {
        periodo: 3,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Comparo aspectos de la vida cotidiana de niños y niñas de otras épocas y culturas con los de la actualidad.',
          'Reconozco y describo festividades y conmemoraciones de mi región y explico su significado histórico y cultural.',
          'Reconozco la existencia de diversas culturas en Colombia y en el mundo, y las respeto.'
        ],

        dba: 'Identifica los procesos de poblamiento de América y Colombia (indígenas, colonización europea, esclavitud africana) y sus consecuencias para la configuración cultural y social de la nación.',

        ejesTematicos: [
          'Los primeros pobladores de América y Colombia',
          'Los grandes pueblos indígenas de Colombia: Muisca, Tayrona, Zenú',
          'La conquista española: llegada de los europeos a Colombia',
          'La colonización y la esclavitud africana en Colombia',
          'Consecuencias del encuentro de tres culturas para la Colombia actual'
        ],

        tiposPensamiento: ['Relaciones con la historia y las culturas'],

        preguntaProblema: '¿Cómo se pobló el territorio colombiano y de qué manera el encuentro entre indígenas, africanos y europeos definió las características culturales y sociales de la Colombia que conocemos hoy?',

        diagnostico: 'El 64% de los estudiantes no identifica los procesos históricos de poblamiento de Colombia ni relaciona el pasado prehispánico con la identidad cultural del país.',

        competenciasICFES: {
          pensamientoSocial: 'Describe los procesos de poblamiento de América y Colombia (indígenas, colonización, esclavitud africana) e identifica sus consecuencias en la conformación de la sociedad colombiana.',
          interpretacion: 'Reconoce los aportes de las culturas indígena, africana y española a la identidad cultural de Colombia.',
          pensamientoSistemico: 'Establece relaciones entre los procesos históricos de poblamiento y la diversidad étnica y cultural de la Colombia actual.'
        },

        matrizReferencia: {
          componente: 'conocimientos-sociales',
          competencia: 'Pensamiento social',
          afirmaciones: [
            'Describe el proceso histórico de poblamiento de América y Colombia, identificando a los actores principales y sus aportes.',
            'Relaciona el encuentro de las tres culturas con la diversidad étnica y cultural de la Colombia contemporánea.'
          ]
        },

        aprendizajesICFES: ['soc-s3-03', 'soc-s3-04'],
        evidenciasICFES: ['soc-s3-03-e1', 'soc-s3-03-e2'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Describe quiénes eran los primeros habitantes de Colombia y cómo vivían.',
          'Nombra culturas indígenas colombianas: Muisca, Tayrona, Zenú y sus características.',
          'Explica cómo llegaron los españoles y los africanos a Colombia y por qué.',
          'Identifica consecuencias del encuentro de tres culturas: mezcla de lenguas, religiones, costumbres.',
          'Usa una línea de tiempo para ubicar los principales eventos del poblamiento de Colombia.'
        ],

        estrategiasMetodologicas: [
          'Construcción de una línea de tiempo del poblamiento de Colombia desde las culturas prehispánicas.',
          'Investigación grupal: cada grupo estudia una cultura indígena colombiana y la presenta.',
          'Análisis de imágenes: artefactos, monumentos y expresiones de las culturas precolombinas.',
          'Dramatización: el encuentro entre indígenas y españoles en el siglo XV.',
          'Elaboración de un infograma sobre los aportes de las tres culturas a la Colombia actual.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 3°',
          'Imágenes de culturas indígenas colombianas (Muisca, Tayrona, Zenú)',
          'Línea de tiempo del poblamiento de Colombia para el aula',
          'Videos documentales sobre las culturas prehispánicas colombianas',
          'Fichas informativas sobre la conquista y la colonización española'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe los primeros habitantes de Colombia y sus características.',
            'Nombra culturas indígenas colombianas y sus aportes.',
            'Explica el proceso de conquista y sus consecuencias.'
          ],
          hacer: [
            'Construye la línea de tiempo del poblamiento de Colombia.',
            'Presenta la investigación sobre una cultura indígena colombiana.',
            'Elabora el infograma sobre los aportes de las tres culturas.',
            'Participa en la dramatización del encuentro cultural.'
          ],
          ser: [
            'Valora y respeta el legado de las culturas indígenas colombianas.',
            'Reconoce la importancia del pasado histórico para comprender el presente.',
            'Muestra curiosidad e interés por la historia de Colombia.'
          ]
        },

        competenciaCiudadana: 'Reconoce que la diversidad étnica y cultural de Colombia es el resultado de un proceso histórico de encuentros y mezclas culturales, y valora ese legado como parte esencial de la identidad nacional y como fundamento para el respeto y la inclusión.'
      },

      // ----------------------------------------------------------
      // GRADO 3 - PERIODO 4
      // ----------------------------------------------------------
      4: {
        periodo: 4,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Reconozco y respeto las normas que regulan la convivencia en mi familia, en mi salón y en la escuela.',
          'Participo en actividades escolares y de mi comunidad con actitud colaborativa y respeto.',
          'Reconozco la importancia de tomar decisiones democráticas, escuchar las opiniones de los demás y llegar a acuerdos.'
        ],

        dba: 'Reconoce la organización política de Colombia (municipio, departamento, nación) y las funciones básicas de sus instituciones, comprendiendo que la democracia implica derechos y responsabilidades para todos los ciudadanos.',

        ejesTematicos: [
          'La organización política de Colombia: municipio, departamento y nación',
          'El gobierno en Colombia: alcalde, gobernador y presidente',
          'La democracia: qué es y cómo se practica',
          'El gobierno escolar: personero, consejo estudiantil y comité de convivencia',
          'Los derechos y deberes de los ciudadanos colombianos'
        ],

        tiposPensamiento: ['Relaciones ético-políticas'],

        preguntaProblema: '¿Cómo está organizado políticamente Colombia y de qué manera la democracia nos permite a todos participar en las decisiones que afectan nuestra vida en comunidad?',

        diagnostico: 'El 66% de los estudiantes no distingue entre municipio, departamento y nación, ni comprende el funcionamiento básico de la democracia colombiana.',

        competenciasICFES: {
          pensamientoSocial: 'Describe la organización político-administrativa de Colombia (municipio, departamento, nación) e identifica las funciones de sus representantes.',
          interpretacion: 'Reconoce los principios de la democracia y los relaciona con formas de participación en la escuela y la comunidad.',
          pensamientoSistemico: 'Establece relaciones entre la organización política del Estado colombiano y la garantía de derechos y servicios para todos los ciudadanos.'
        },

        matrizReferencia: {
          componente: 'conocimientos-sociales',
          competencia: 'Pensamiento social',
          afirmaciones: [
            'Describe la organización político-administrativa de Colombia y las funciones de sus representantes en cada nivel.',
            'Relaciona los principios de la democracia con formas concretas de participación ciudadana en la escuela y la comunidad.'
          ]
        },

        aprendizajesICFES: ['soc-s3-05', 'soc-s3-06'],
        evidenciasICFES: ['soc-s3-06-e1', 'soc-s3-06-e2'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Explica la diferencia entre municipio, departamento y nación.',
          'Nombra las funciones del alcalde, el gobernador y el presidente.',
          'Describe qué es la democracia y cuáles son sus principios básicos.',
          'Participa en el gobierno escolar del salón (personero, consejo estudiantil).',
          'Identifica derechos y deberes de los ciudadanos colombianos.'
        ],

        estrategiasMetodologicas: [
          'Elaboración de un organigrama de la organización política de Colombia (municipio, departamento, nación).',
          'Simulacro de elección del personero estudiantil: campaña, debate y votación.',
          'Debate en el aula: ¿cuáles son las responsabilidades del alcalde y el presidente?',
          'Análisis de situaciones: ¿qué institución resuelve este problema? (alcaldía, gobernación, gobierno nacional).',
          'Construcción del "Código de convivencia del salón" de forma democrática.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 3°',
          'Constitución Política de Colombia (versión para niños)',
          'Organigrama de la organización política de Colombia',
          'Noticias sobre el ejercicio democrático en Colombia',
          'Videos educativos sobre la democracia y la participación ciudadana'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Explica la diferencia entre municipio, departamento y nación.',
            'Describe las funciones del alcalde, gobernador y presidente.',
            'Define democracia y nombra sus principios básicos.'
          ],
          hacer: [
            'Elabora el organigrama de la organización política de Colombia.',
            'Participa en el simulacro de elección del personero.',
            'Construye el código de convivencia del salón democráticamente.',
            'Analiza casos sobre las funciones de las instituciones del Estado.'
          ],
          ser: [
            'Participa democráticamente en las decisiones del grupo.',
            'Cumple los compromisos del código de convivencia acordado.',
            'Muestra respeto hacia las instituciones democráticas y sus representantes.'
          ]
        },

        competenciaCiudadana: 'Comprende la organización democrática del Estado colombiano y participa activamente en los mecanismos de gobierno escolar, asumiendo compromisos de respeto, convivencia pacífica y ejercicio responsable de sus derechos y deberes ciudadanos.'
      }
    }
  },

  // ============================================================
  // GRADO 4
  // ============================================================
  '4': {
    grado: '4°',
    intensidadHoraria: 3,
    totalSemanas: 40,
    totalHorasAnuales: 120,
    objetivo: 'Ampliar la comprensión del estudiante sobre la historia de Colombia desde la Independencia hasta el siglo XX, la organización política y económica del país, la ciudadanía y los mecanismos de participación democrática, y los problemas ambientales del territorio colombiano, desarrollando el pensamiento crítico y el compromiso con el bien común.',

    periodos: {

      // ----------------------------------------------------------
      // GRADO 4 - PERIODO 1
      // ----------------------------------------------------------
      1: {
        periodo: 1,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Identifico y describo costumbres y tradiciones de mi comunidad y de otras comunidades y culturas.',
          'Reconozco características de las principales culturas y civilizaciones prehispánicas de América y establezco relaciones entre sus legados y el presente.',
          'Describo el proceso de formación de la nación colombiana y reconozco aportes de los distintos grupos étnicos.'
        ],

        dba: 'Comprende las causas y consecuencias del proceso de Independencia de Colombia y su significado para la identidad nacional, reconociendo los actores y valores que impulsaron la lucha por la libertad.',

        ejesTematicos: [
          'La Colombia colonial: sociedad, economía y cultura en el Virreinato',
          'Las causas de la Independencia: ideas ilustradas y criollos',
          'El proceso de Independencia: fechas, batallas y héroes',
          'El 20 de julio de 1810: significado histórico y símbolo nacional',
          'Los héroes de la Independencia: Simón Bolívar, Francisco de Paula Santander, Policarpa Salavarrieta'
        ],

        tiposPensamiento: ['Relaciones con la historia y las culturas'],

        preguntaProblema: '¿Por qué los colombianos decidieron independizarse de España y cuál es el significado del 20 de julio de 1810 para la identidad y la historia de Colombia?',

        diagnostico: 'El 63% de los estudiantes no identifica las causas de la Independencia de Colombia ni reconoce a los principales actores y fechas del proceso independentista.',

        competenciasICFES: {
          pensamientoSocial: 'Describe las causas y el proceso de la Independencia de Colombia, identificando los actores clave y las fechas históricas relevantes.',
          interpretacion: 'Reconoce el significado del 20 de julio de 1810 para la identidad colombiana y lo relaciona con los valores de libertad, justicia e igualdad.',
          pensamientoSistemico: 'Establece relaciones entre las ideas de la Ilustración, el descontento de los criollos y el proceso de Independencia de Colombia.'
        },

        matrizReferencia: {
          componente: 'conocimientos-sociales',
          competencia: 'Pensamiento social',
          afirmaciones: [
            'Describe las causas del proceso de Independencia de Colombia e identifica los principales actores y eventos del período.',
            'Comprende el significado histórico del 20 de julio de 1810 para la formación de la nación colombiana.'
          ]
        },

        aprendizajesICFES: ['soc-s5-02', 'soc-s5-08'],
        evidenciasICFES: ['soc-s5-02-e1', 'soc-s5-02-e2'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Explica cómo era la sociedad en el Virreinato de la Nueva Granada.',
          'Nombra las causas que llevaron a los criollos a buscar la independencia.',
          'Describe los eventos del 20 de julio de 1810 y su significado.',
          'Identifica héroes de la Independencia: Bolívar, Santander, Policarpa Salavarrieta.',
          'Ubica en una línea de tiempo los principales eventos de la Independencia.'
        ],

        estrategiasMetodologicas: [
          'Construcción de una línea de tiempo de la Independencia de Colombia (1810-1819).',
          'Lectura de biografías breves de los héroes de la Independencia.',
          'Dramatización del 20 de julio de 1810 en el aula.',
          'Análisis de imágenes históricas: retratos de los próceres y escenas de batallas.',
          'Debate: ¿por qué fue importante la Independencia para Colombia?'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 4°',
          'Línea de tiempo de la Independencia de Colombia',
          'Biografías ilustradas de los héroes de la Independencia',
          'Imágenes y pinturas históricas de la época de la Independencia',
          'Videos educativos sobre el 20 de julio y la Independencia de Colombia'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Explica las causas de la Independencia de Colombia.',
            'Describe los eventos del 20 de julio de 1810.',
            'Nombra los principales héroes de la Independencia y sus aportes.'
          ],
          hacer: [
            'Construye la línea de tiempo de la Independencia.',
            'Participa en la dramatización del 20 de julio.',
            'Elabora una ficha biográfica de un héroe de la Independencia.',
            'Analiza imágenes históricas del período independentista.'
          ],
          ser: [
            'Valora el legado de los héroes de la Independencia para la nación colombiana.',
            'Muestra sentido de pertenencia y orgullo por la historia de Colombia.',
            'Participa con entusiasmo en la conmemoración de la Independencia.'
          ]
        },

        competenciaCiudadana: 'Reconoce el proceso de Independencia como un momento fundacional de la nación colombiana en el que valores como la libertad, la justicia y la igualdad motivaron la acción colectiva, y reflexiona sobre la vigencia de esos valores en la construcción de una sociedad más justa en el presente.'
      },

      // ----------------------------------------------------------
      // GRADO 4 - PERIODO 2
      // ----------------------------------------------------------
      2: {
        periodo: 2,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Identifico y describo las características geográficas de las regiones naturales de Colombia.',
          'Utilizo mapas, planos y otros instrumentos para representar y ubicar regiones, países y continentes.',
          'Descripto los modos de vida de las principales regiones de Colombia y los relaciono con el clima, el relieve y los recursos naturales.'
        ],

        dba: 'Analiza la división política de Colombia (departamentos, municipios) y sus características geográficas, económicas y culturales, usando mapas e instrumentos de representación espacial.',

        ejesTematicos: [
          'La división política de Colombia: 32 departamentos y sus capitales',
          'Lectura e interpretación de mapas políticos y físicos de Colombia',
          'Características geográficas y económicas de los departamentos',
          'Las capitales de departamento: ubicación e importancia',
          'Relación entre la división política y las regiones naturales de Colombia'
        ],

        tiposPensamiento: ['Relaciones espaciales y ambientales'],

        preguntaProblema: '¿Cómo se divide políticamente el territorio colombiano y de qué manera las características geográficas de cada departamento influyen en su economía y cultura?',

        diagnostico: 'El 60% de los estudiantes no identifica la división política de Colombia en departamentos ni usa mapas para ubicar regiones y capitales.',

        competenciasICFES: {
          pensamientoSocial: 'Describe la división política de Colombia en departamentos y municipios, identificando sus capitales y características principales.',
          interpretacion: 'Usa mapas políticos y físicos para ubicar y relacionar la división territorial con las características geográficas y económicas de cada región.',
          pensamientoSistemico: 'Establece relaciones entre la organización político-administrativa del territorio y las condiciones geográficas, económicas y culturales de cada departamento.'
        },

        matrizReferencia: {
          componente: 'conocimientos-sociales',
          competencia: 'Pensamiento social',
          afirmaciones: [
            'Describe la organización política del territorio colombiano, identificando departamentos, municipios y sus capitales.',
            'Interpreta mapas políticos y físicos de Colombia para relacionar la división territorial con las características geográficas y económicas.'
          ]
        },

        aprendizajesICFES: ['soc-s5-01', 'soc-s5-06'],
        evidenciasICFES: ['soc-s5-01-e1', 'soc-s5-06-e1', 'soc-s5-06-e2'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Nombra los 32 departamentos de Colombia y ubica los de su región en el mapa.',
          'Identifica las capitales de los departamentos de su región.',
          'Lee e interpreta un mapa político de Colombia.',
          'Relaciona el departamento donde vive con sus características geográficas y actividades económicas.',
          'Compara las características de dos departamentos de diferentes regiones de Colombia.'
        ],

        estrategiasMetodologicas: [
          'Juego de los departamentos: cartas con nombres de departamentos y capitales para memorizar.',
          'Elaboración de un mapa político de Colombia con los 32 departamentos.',
          'Investigación por departamentos: cada grupo investiga un departamento asignado.',
          'Uso de atlas y mapas digitales para ubicar departamentos y capitales.',
          'Proyecto "Mi departamento": descripción geográfica, económica y cultural del departamento propio.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 4°',
          'Mapa político de Colombia (mudo y con nombres)',
          'Atlas geográfico de Colombia con departamentos',
          'Fichas informativas sobre los departamentos colombianos',
          'Recursos digitales: mapas interactivos de Colombia'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Nombra los departamentos de Colombia y ubica los de su región.',
            'Identifica las capitales de los departamentos de su región.',
            'Describe características geográficas y económicas de su departamento.'
          ],
          hacer: [
            'Elabora el mapa político de Colombia con los 32 departamentos.',
            'Presenta la investigación sobre el departamento asignado.',
            'Lee e interpreta mapas políticos y físicos de Colombia.',
            'Realiza el proyecto "Mi departamento".'
          ],
          ser: [
            'Muestra sentido de pertenencia hacia su departamento y región.',
            'Trabaja colaborativamente en los proyectos de investigación.',
            'Valora la diversidad geográfica y cultural de los departamentos de Colombia.'
          ]
        },

        competenciaCiudadana: 'Reconoce el territorio colombiano como un espacio organizado políticamente en departamentos y municipios, e identifica la importancia de esa organización para garantizar la administración del Estado y la prestación de servicios a todos los colombianos.'
      },

      // ----------------------------------------------------------
      // GRADO 4 - PERIODO 3
      // ----------------------------------------------------------
      3: {
        periodo: 3,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Describo el proceso de formación de la nación colombiana y reconozco aportes de los distintos grupos étnicos.',
          'Identifico y describo costumbres, tradiciones y fiestas de las diferentes regiones de Colombia.',
          'Reconozco la diversidad étnica y cultural de Colombia y la riqueza que representa para el país.'
        ],

        dba: 'Describe la organización política y económica de Colombia durante el siglo XIX y sus cambios hasta el siglo XX, comprendiendo cómo se fue construyendo la nación colombiana después de la Independencia.',

        ejesTematicos: [
          'La Gran Colombia y su disolución: Bolívar y Santander',
          'Colombia en el siglo XIX: guerras civiles y formación del Estado',
          'La regeneración y la Constitución de 1886',
          'El siglo XX en Colombia: industria, urbanización y conflictos',
          'La Constitución de 1991: un nuevo pacto para la nación'
        ],

        tiposPensamiento: ['Relaciones con la historia y las culturas', 'Relaciones ético-políticas'],

        preguntaProblema: '¿Cómo se fue construyendo la nación colombiana después de la Independencia y cuáles fueron los principales retos y transformaciones que vivió Colombia en los siglos XIX y XX?',

        diagnostico: 'El 67% de los estudiantes no identifica los principales eventos de la historia colombiana posterior a la Independencia ni comprende el proceso de formación del Estado-nación.',

        competenciasICFES: {
          pensamientoSocial: 'Describe los principales procesos históricos de Colombia en los siglos XIX y XX, desde la disolución de la Gran Colombia hasta la Constitución de 1991.',
          interpretacion: 'Reconoce los factores que dificultaron y favorecieron la construcción de la nación colombiana en el siglo XIX.',
          pensamientoSistemico: 'Establece relaciones entre los procesos históricos del siglo XIX y XX y la configuración de la Colombia contemporánea.'
        },

        matrizReferencia: {
          componente: 'conocimientos-sociales',
          competencia: 'Pensamiento social',
          afirmaciones: [
            'Describe los principales eventos de la historia de Colombia en los siglos XIX y XX, comprendiendo el proceso de formación del Estado-nación.',
            'Relaciona los procesos históricos del pasado con la organización política y social de la Colombia actual.'
          ]
        },

        aprendizajesICFES: ['soc-s5-02', 'soc-s5-05'],
        evidenciasICFES: ['soc-s5-02-e1', 'soc-s5-02-e2'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Describe la formación y disolución de la Gran Colombia.',
          'Nombra las guerras civiles del siglo XIX y sus causas.',
          'Explica qué fue la Regeneración y la Constitución de 1886.',
          'Describe los principales cambios de Colombia en el siglo XX.',
          'Explica la importancia de la Constitución de 1991 para la democracia colombiana.'
        ],

        estrategiasMetodologicas: [
          'Línea de tiempo de Colombia: desde la Independencia hasta la Constitución de 1991.',
          'Lectura y análisis de textos históricos sobre la Gran Colombia.',
          'Debate: ¿por qué Colombia tuvo tantas guerras civiles en el siglo XIX?',
          'Análisis de la Constitución de 1991: ¿qué cambió con esta nueva Carta?',
          'Elaboración de un periódico histórico sobre un evento clave del siglo XIX o XX.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 4°',
          'Línea de tiempo de la historia de Colombia (siglos XIX y XX)',
          'Fragmentos adaptados de textos históricos sobre la Gran Colombia',
          'Constitución de 1991 (versión pedagógica para estudiantes)',
          'Videos educativos sobre la historia de Colombia en el siglo XIX'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe los eventos principales de la historia colombiana en el siglo XIX.',
            'Explica qué fue la Gran Colombia y por qué se disolvió.',
            'Describe la importancia de la Constitución de 1991.'
          ],
          hacer: [
            'Construye la línea de tiempo de Colombia en el siglo XIX y XX.',
            'Participa en el debate sobre las guerras civiles del siglo XIX.',
            'Elabora el periódico histórico sobre un evento clave.',
            'Analiza la Constitución de 1991 en comparación con la de 1886.'
          ],
          ser: [
            'Muestra respeto por la historia de Colombia y sus actores.',
            'Reflexiona sobre la importancia de la paz y la democracia en Colombia.',
            'Valora la Constitución de 1991 como un logro para la convivencia nacional.'
          ]
        },

        competenciaCiudadana: 'Comprende que la Constitución de 1991 representa un avance fundamental en la construcción de una Colombia más democrática, incluyente y respetuosa de los derechos, y reflexiona sobre la responsabilidad de todos los ciudadanos en la construcción de la paz.'
      },

      // ----------------------------------------------------------
      // GRADO 4 - PERIODO 4
      // ----------------------------------------------------------
      4: {
        periodo: 4,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Reconozco los derechos de los niños y las niñas en Colombia y en el mundo y las instituciones que los protegen.',
          'Reconozco la importancia de la participación ciudadana y describo mecanismos para ejercerla.',
          'Identifico y describo situaciones de conflicto en la vida cotidiana y propongo formas pacíficas de resolverlos.'
        ],

        dba: 'Comprende el concepto de ciudadanía y los mecanismos de participación democrática en Colombia, identificando sus derechos y deberes como ciudadano y las instituciones que los garantizan.',

        ejesTematicos: [
          'La ciudadanía en Colombia: derechos y deberes',
          'La Constitución de 1991 y los derechos fundamentales',
          'Mecanismos de participación ciudadana: voto, tutela, petición',
          'Las instituciones que protegen los derechos en Colombia: ICBF, Defensoría',
          'Resolución pacífica de conflictos: diálogo, mediación y conciliación'
        ],

        tiposPensamiento: ['Relaciones ético-políticas'],

        preguntaProblema: '¿Cómo puedo ejercer mis derechos y cumplir mis deberes como ciudadano colombiano, y qué mecanismos de participación democrática existen para que todos tengamos voz en las decisiones que nos afectan?',

        diagnostico: 'El 62% de los estudiantes no identifica mecanismos de participación ciudadana ni conoce instituciones que protegen los derechos en Colombia.',

        competenciasICFES: {
          pensamientoSocial: 'Identifica los derechos fundamentales de los colombianos y los mecanismos de participación ciudadana establecidos en la Constitución de 1991.',
          interpretacion: 'Reconoce el papel de instituciones como el ICBF, la Defensoría y la Personería en la protección de los derechos ciudadanos.',
          pensamientoSistemico: 'Establece relaciones entre el ejercicio de los derechos, el cumplimiento de los deberes y la participación democrática como pilares de la convivencia en Colombia.'
        },

        matrizReferencia: {
          componente: 'argumentacion',
          competencia: 'Pensamiento social',
          afirmaciones: [
            'Identifica los derechos fundamentales de los colombianos y los mecanismos constitucionales para exigirlos.',
            'Reconoce la importancia de la participación ciudadana para el funcionamiento de la democracia en Colombia.'
          ]
        },

        aprendizajesICFES: ['soc-s5-04', 'soc-s5-07'],
        evidenciasICFES: ['soc-s5-04-e1', 'soc-s5-04-e2'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Nombra derechos fundamentales de los colombianos consagrados en la Constitución de 1991.',
          'Explica qué es la tutela y para qué sirve.',
          'Identifica mecanismos de participación ciudadana: voto, referendo, consulta popular.',
          'Describe las funciones del ICBF, la Defensoría del Pueblo y la Personería.',
          'Propone formas pacíficas de resolver conflictos en la escuela y la comunidad.'
        ],

        estrategiasMetodologicas: [
          'Lectura y análisis de la Constitución de 1991: derechos fundamentales y mecanismos de participación.',
          'Taller de resolución de conflictos: simulaciones de mediación y conciliación.',
          'Investigación sobre el ICBF y la Defensoría del Pueblo: ¿qué hacen?',
          'Simulacro de ejercicio de la tutela: ¿en qué casos se usa y cómo funciona?',
          'Foro estudiantil: ¿cómo podemos participar democráticamente en nuestra escuela y comunidad?'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 4°',
          'Constitución de 1991 (versión pedagógica para estudiantes)',
          'Fichas sobre mecanismos de participación ciudadana',
          'Videos sobre el ICBF y la Defensoría del Pueblo',
          'Guías para el taller de resolución de conflictos'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Nombra derechos fundamentales de la Constitución de 1991.',
            'Explica qué es la tutela y los mecanismos de participación ciudadana.',
            'Describe las funciones de las instituciones que protegen los derechos.'
          ],
          hacer: [
            'Analiza situaciones para determinar qué derechos se vulneran.',
            'Participa en el simulacro de ejercicio de la tutela.',
            'Aplica estrategias de mediación en el taller de resolución de conflictos.',
            'Participa en el foro sobre participación democrática.'
          ],
          ser: [
            'Defiende sus derechos y los de sus compañeros con argumentos.',
            'Asume actitudes de diálogo y mediación frente a los conflictos.',
            'Participa democráticamente en las decisiones de la escuela.'
          ]
        },

        competenciaCiudadana: 'Comprende sus derechos y deberes como ciudadano colombiano, conoce los mecanismos constitucionales para exigirlos y asume el compromiso de participar democráticamente en la construcción de una convivencia pacífica en su escuela y comunidad.'
      }
    }
  },

  // ============================================================
  // GRADO 5
  // ============================================================
  '5': {
    grado: '5°',
    intensidadHoraria: 3,
    totalSemanas: 40,
    totalHorasAnuales: 120,
    objetivo: 'Desarrollar en el estudiante la comprensión de la historia y la geografía de América Latina, los procesos de globalización y sus efectos, los derechos humanos y los organismos internacionales, fomentando el pensamiento crítico, la identidad latinoamericana y el compromiso con la convivencia pacífica y el desarrollo sostenible.',

    periodos: {

      // ----------------------------------------------------------
      // GRADO 5 - PERIODO 1
      // ----------------------------------------------------------
      1: {
        periodo: 1,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Reconozco características de las principales culturas y civilizaciones prehispánicas de América y establezco relaciones entre sus legados y el presente.',
          'Describo el proceso de conquista y colonización de América y sus consecuencias para los pueblos originarios.',
          'Reconozco la diversidad étnica y cultural de Colombia y la riqueza que representa para el país.'
        ],

        dba: 'Comprende los procesos históricos que configuraron América Latina como región con características culturales, políticas y económicas comunes, reconociendo la diversidad y los rasgos compartidos de los pueblos latinoamericanos.',

        ejesTematicos: [
          'América Latina: concepto, ubicación y diversidad',
          'Las grandes civilizaciones prehispánicas: Maya, Azteca e Inca',
          'Legados culturales de las civilizaciones prehispánicas al mundo',
          'La conquista y colonización de América: causas y consecuencias',
          'Identidad latinoamericana: rasgos comunes y diversidad regional'
        ],

        tiposPensamiento: ['Relaciones con la historia y las culturas'],

        preguntaProblema: '¿Qué características comparten los países de América Latina y qué aportaron las grandes civilizaciones prehispánicas (Maya, Azteca, Inca) a la humanidad?',

        diagnostico: 'El 64% de los estudiantes no identifica las civilizaciones prehispánicas de América ni comprende los rasgos comunes que caracterizan a América Latina como región.',

        competenciasICFES: {
          pensamientoSocial: 'Describe las características de las grandes civilizaciones prehispánicas de América (Maya, Azteca, Inca) y sus aportes a la humanidad.',
          interpretacion: 'Reconoce los rasgos comunes y las diferencias entre los países de América Latina, comprendiendo la identidad latinoamericana.',
          pensamientoSistemico: 'Establece relaciones entre el legado de las civilizaciones prehispánicas y las características culturales de América Latina en el presente.'
        },

        matrizReferencia: {
          componente: 'conocimientos-sociales',
          competencia: 'Pensamiento social',
          afirmaciones: [
            'Describe las características de las civilizaciones prehispánicas de América y sus aportes culturales, científicos y políticos.',
            'Relaciona los legados prehispánicos con la identidad y la diversidad cultural de América Latina en la actualidad.'
          ]
        },

        aprendizajesICFES: ['soc-s5-02', 'soc-s5-08'],
        evidenciasICFES: ['soc-s5-02-e1', 'soc-s5-02-e2'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Ubica en el mapa los territorios de las civilizaciones Maya, Azteca e Inca.',
          'Describe características de la organización social, política y cultural de cada civilización.',
          'Identifica aportes de las civilizaciones prehispánicas: agricultura, astronomía, arquitectura, escritura.',
          'Explica qué características culturales, lingüísticas e históricas comparten los países de América Latina.',
          'Describe las consecuencias de la conquista para los pueblos indígenas americanos.'
        ],

        estrategiasMetodologicas: [
          'Mapa de América con la ubicación de las civilizaciones prehispánicas.',
          'Investigación por grupos: cada grupo presenta una civilización prehispánica.',
          'Análisis de imágenes: Machu Picchu, Chichén Itzá, Teotihuacán.',
          'Cuadro comparativo entre las civilizaciones Maya, Azteca e Inca.',
          'Debate: ¿qué habría sido de América si no hubiera llegado la conquista española?'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 5°',
          'Mapa de América con ubicación de las civilizaciones prehispánicas',
          'Imágenes y fotografías de las obras arquitectónicas prehispánicas',
          'Videos documentales sobre las civilizaciones Maya, Azteca e Inca',
          'Fichas informativas sobre los legados culturales prehispánicos'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Describe las características de las civilizaciones Maya, Azteca e Inca.',
            'Nombra aportes de las civilizaciones prehispánicas a la humanidad.',
            'Explica rasgos comunes de la identidad latinoamericana.'
          ],
          hacer: [
            'Elabora el mapa de América con las civilizaciones prehispánicas.',
            'Presenta la investigación sobre una civilización prehispánica.',
            'Construye el cuadro comparativo entre las tres civilizaciones.',
            'Participa en el debate sobre la conquista y sus consecuencias.'
          ],
          ser: [
            'Valora el legado de las civilizaciones prehispánicas como patrimonio de la humanidad.',
            'Muestra respeto y aprecio por la diversidad cultural de América Latina.',
            'Reflexiona críticamente sobre las consecuencias de la conquista para los pueblos indígenas.'
          ]
        },

        competenciaCiudadana: 'Reconoce el legado de las civilizaciones prehispánicas como parte del patrimonio cultural de la humanidad y de la identidad latinoamericana, y reflexiona sobre la importancia de preservar y valorar la diversidad cultural y el conocimiento ancestral de los pueblos indígenas.'
      },

      // ----------------------------------------------------------
      // GRADO 5 - PERIODO 2
      // ----------------------------------------------------------
      2: {
        periodo: 2,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Identifico y describo las características geográficas de las regiones naturales de Colombia.',
          'Utilizo mapas, planos y otros instrumentos para representar y ubicar regiones, países y continentes.',
          'Reconozco el impacto de las actividades humanas sobre el entorno natural de Colombia.'
        ],

        dba: 'Identifica problemas ambientales globales (deforestación, contaminación, cambio climático) y comprende su impacto en el planeta, relacionando las actividades humanas con el deterioro ambiental.',

        ejesTematicos: [
          'El territorio de América Latina: geografía física y diversidad natural',
          'Los problemas ambientales globales: causas y consecuencias',
          'La deforestación en América Latina: Amazonia y Chocó biogeográfico',
          'El cambio climático: qué es y cómo nos afecta',
          'Desarrollo sostenible: vivir bien sin destruir el planeta'
        ],

        tiposPensamiento: ['Relaciones espaciales y ambientales'],

        preguntaProblema: '¿Cuáles son los principales problemas ambientales que enfrenta América Latina y el mundo, y qué podemos hacer desde nuestra vida cotidiana para contribuir al desarrollo sostenible?',

        diagnostico: 'El 61% de los estudiantes no identifica problemas ambientales globales ni establece relaciones entre las actividades humanas y el deterioro del medio ambiente.',

        competenciasICFES: {
          pensamientoSocial: 'Describe los principales problemas ambientales globales (deforestación, cambio climático, contaminación) y sus causas.',
          interpretacion: 'Reconoce el impacto de las actividades humanas sobre el medio ambiente y valora la importancia del desarrollo sostenible.',
          pensamientoSistemico: 'Establece relaciones entre el modelo de consumo y producción, el deterioro ambiental y sus consecuencias para la vida en el planeta.'
        },

        matrizReferencia: {
          componente: 'conocimientos-sociales',
          competencia: 'Pensamiento reflexivo y sistémico',
          afirmaciones: [
            'Describe los principales problemas ambientales globales e identifica las actividades humanas que los generan.',
            'Relaciona el deterioro ambiental con las condiciones de vida de las comunidades y propone alternativas de solución sostenible.'
          ]
        },

        aprendizajesICFES: ['soc-s5-03', 'soc-s5-06'],
        evidenciasICFES: ['soc-s5-03-e1', 'soc-s5-03-e2'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Describe las características geográficas de América Latina: Andes, Amazonia, Llanos, Costas.',
          'Explica qué es el cambio climático y cuáles son sus causas.',
          'Identifica los impactos de la deforestación en la Amazonia y el Pacífico.',
          'Describe qué es el desarrollo sostenible y cómo se puede aplicar.',
          'Propone acciones concretas para reducir el impacto ambiental en su vida cotidiana.'
        ],

        estrategiasMetodologicas: [
          'Análisis de mapas y datos sobre deforestación y cambio climático en América Latina.',
          'Video-foro: documental sobre la Amazonia y los problemas ambientales.',
          'Campaña escolar por el desarrollo sostenible: reciclaje, ahorro de agua y energía.',
          'Elaboración de infografías sobre el cambio climático para el aula.',
          'Debate: ¿desarrollo económico o protección ambiental? ¿Son incompatibles?'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 5°',
          'Mapas y datos sobre deforestación y cambio climático',
          'Videos documentales sobre la Amazonia y el cambio climático',
          'Guías para la campaña de desarrollo sostenible',
          'Infografías sobre el calentamiento global y sus efectos'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Explica qué es el cambio climático y cuáles son sus causas.',
            'Describe el impacto de la deforestación en América Latina.',
            'Define el desarrollo sostenible y sus principios.'
          ],
          hacer: [
            'Analiza mapas de deforestación y cambio climático.',
            'Elabora una infografía sobre el cambio climático.',
            'Participa en la campaña escolar por el desarrollo sostenible.',
            'Propone acciones de reducción del impacto ambiental.'
          ],
          ser: [
            'Asume compromisos de cuidado ambiental en su vida cotidiana.',
            'Valora la biodiversidad de América Latina como patrimonio de la humanidad.',
            'Muestra responsabilidad y conciencia ambiental en sus acciones.'
          ]
        },

        competenciaCiudadana: 'Reconoce los problemas ambientales globales como una amenaza para el planeta y asume compromisos concretos de desarrollo sostenible desde su vida cotidiana, comprendiendo que cada acción individual contribuye al bienestar colectivo de la humanidad.'
      },

      // ----------------------------------------------------------
      // GRADO 5 - PERIODO 3
      // ----------------------------------------------------------
      3: {
        periodo: 3,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Identifico las características de la sociedad colonial y las razones que llevaron a la independencia.',
          'Describo el proceso de formación de la nación colombiana y reconozco aportes de los distintos grupos étnicos.',
          'Identifico y describo costumbres, tradiciones y fiestas de las diferentes regiones de Colombia.'
        ],

        dba: 'Describe las grandes civilizaciones prehispánicas (Maya, Azteca, Inca) y analiza su legado cultural, relacionando el pasado prehispánico con la identidad cultural de América Latina en el presente.',

        ejesTematicos: [
          'La globalización: ¿qué es y cómo nos afecta?',
          'Globalización y economía: mercados, comercio e intercambio',
          'Globalización y cultura: identidad local versus cultura global',
          'Las migraciones en América Latina: causas, efectos y realidades',
          'Colombia en el mundo: relaciones internacionales y comercio exterior'
        ],

        tiposPensamiento: ['Relaciones con la historia y las culturas', 'Relaciones ético-políticas'],

        preguntaProblema: '¿Qué es la globalización, cómo nos afecta en Colombia y de qué manera podemos preservar nuestra identidad cultural en un mundo cada vez más interconectado?',

        diagnostico: 'El 66% de los estudiantes no comprende el concepto de globalización ni identifica sus efectos en la economía, la cultura y la sociedad colombiana.',

        competenciasICFES: {
          pensamientoSocial: 'Describe el proceso de globalización y sus efectos en las economías, las culturas y las sociedades de Colombia y América Latina.',
          interpretacion: 'Reconoce el impacto de la globalización sobre la identidad cultural y reflexiona sobre la importancia de preservar las culturas locales.',
          pensamientoSistemico: 'Establece relaciones entre la globalización, las migraciones y los cambios culturales en Colombia y América Latina.'
        },

        matrizReferencia: {
          componente: 'multiperspectividad',
          competencia: 'Interpretación y análisis de perspectivas',
          afirmaciones: [
            'Describe el proceso de globalización y sus efectos en la economía, la cultura y la sociedad colombiana.',
            'Reconoce diferentes perspectivas sobre los beneficios y las consecuencias negativas de la globalización para los países de América Latina.'
          ]
        },

        aprendizajesICFES: ['soc-s5-05', 'soc-s5-08'],
        evidenciasICFES: ['soc-s5-08-e1', 'soc-s5-08-e2'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Explica qué es la globalización y cuáles son sus principales características.',
          'Describe efectos de la globalización en la economía colombiana (exportaciones, importaciones, TLC).',
          'Identifica impactos de la globalización en la cultura (música, comida, ropa, tecnología).',
          'Describe las causas y consecuencias de las migraciones en Colombia y América Latina.',
          'Reflexiona sobre cómo preservar la identidad cultural en un mundo globalizado.'
        ],

        estrategiasMetodologicas: [
          'Análisis de objetos cotidianos: ¿de dónde viene lo que usamos y comemos?',
          'Debate: ¿la globalización es buena o mala para Colombia?',
          'Investigación sobre los países de origen de los productos que consume la familia.',
          'Video-foro sobre las migraciones en América Latina.',
          'Proyecto "Mi identidad en el mundo global": reflexión sobre la cultura local y la global.'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 5°',
          'Etiquetas de productos de consumo diario (para analizar su origen)',
          'Mapas de flujos comerciales y migratorios en América Latina',
          'Videos sobre globalización y sus efectos en comunidades locales',
          'Noticias sobre migraciones colombianas y latinoamericanas'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Explica qué es la globalización y sus principales características.',
            'Describe efectos de la globalización en la economía y cultura colombiana.',
            'Explica las causas y consecuencias de las migraciones.'
          ],
          hacer: [
            'Analiza etiquetas de productos para identificar su origen global.',
            'Participa en el debate sobre la globalización.',
            'Elabora el proyecto "Mi identidad en el mundo global".',
            'Analiza un mapa de flujos migratorios en América Latina.'
          ],
          ser: [
            'Valora la identidad cultural colombiana y latinoamericana en el contexto global.',
            'Muestra empatía hacia las personas migrantes y sus situaciones.',
            'Reflexiona críticamente sobre los efectos de la globalización en su vida cotidiana.'
          ]
        },

        competenciaCiudadana: 'Reconoce que vive en un mundo globalizado y reflexiona sobre la importancia de preservar la identidad cultural propia, valorando la diversidad cultural del planeta y mostrando empatía hacia las personas migrantes y sus derechos.'
      },

      // ----------------------------------------------------------
      // GRADO 5 - PERIODO 4
      // ----------------------------------------------------------
      4: {
        periodo: 4,
        semanas: 10,
        horasSemana: 3,
        horasTotales: 30,

        estandares: [
          'Reconozco los derechos de los niños y las niñas en Colombia y en el mundo y las instituciones que los protegen.',
          'Identifico la Constitución Política de Colombia como el principal acuerdo de la nación y reconozco sus principios fundamentales.',
          'Reconozco la importancia de la participación ciudadana y describo mecanismos para ejercerla.'
        ],

        dba: 'Analiza la estructura y funciones de organismos internacionales (ONU, OEA) y su papel en la solución de conflictos mundiales, comprendiendo los derechos humanos como un marco universal para la convivencia.',

        ejesTematicos: [
          'Los derechos humanos: origen, historia y principios',
          'La Declaración Universal de los Derechos Humanos (1948)',
          'Los organismos internacionales: ONU y OEA',
          'Los derechos humanos en Colombia: avances y desafíos',
          'Ciudadanía global: responsabilidades en un mundo interdependiente'
        ],

        tiposPensamiento: ['Relaciones ético-políticas'],

        preguntaProblema: '¿Qué son los derechos humanos, cómo surgieron y qué papel cumplen la ONU y los organismos internacionales en la protección de los derechos de todas las personas del mundo?',

        diagnostico: 'El 65% de los estudiantes no comprende el concepto de derechos humanos ni identifica los organismos internacionales que velan por su protección.',

        competenciasICFES: {
          pensamientoSocial: 'Describe el origen y los principios de los derechos humanos, y la función de organismos internacionales como la ONU y la OEA en su protección.',
          interpretacion: 'Reconoce situaciones de vulneración y protección de los derechos humanos en Colombia y el mundo, y evalúa el papel de las instituciones para garantizarlos.',
          pensamientoSistemico: 'Establece relaciones entre los derechos humanos, los mecanismos de participación ciudadana y la construcción de una sociedad más justa y pacífica.'
        },

        matrizReferencia: {
          componente: 'multiperspectividad',
          competencia: 'Interpretación y análisis de perspectivas',
          afirmaciones: [
            'Describe el origen y los principios de los derechos humanos y los relaciona con instrumentos internacionales como la Declaración Universal.',
            'Identifica el papel de la ONU y otros organismos en la protección de los derechos humanos y la resolución de conflictos internacionales.'
          ]
        },

        aprendizajesICFES: ['soc-s5-04', 'soc-s5-07'],
        evidenciasICFES: ['soc-s5-07-e1', 'soc-s5-07-e2'],
        nivelEsperado: 'Satisfactorio',

        evidenciasAprendizaje: [
          'Explica cuándo y por qué se creó la Declaración Universal de los Derechos Humanos.',
          'Nombra derechos humanos fundamentales y los relaciona con situaciones concretas.',
          'Describe qué es la ONU y cuáles son sus principales funciones.',
          'Identifica situaciones de vulneración de derechos humanos en Colombia y el mundo.',
          'Propone acciones para defender los derechos humanos en su comunidad.'
        ],

        estrategiasMetodologicas: [
          'Lectura y análisis de la Declaración Universal de los Derechos Humanos (versión adaptada).',
          'Análisis de casos: situaciones donde se violan o protegen los derechos humanos.',
          'Investigación sobre el papel de la ONU en la resolución de conflictos mundiales.',
          'Proyecto "Embajadores de los derechos humanos": campaña en la escuela.',
          'Foro estudiantil: ¿los derechos humanos se cumplen para todos en Colombia?'
        ],

        materialesEducativos: [
          'Texto escolar de Ciencias Sociales 5°',
          'Declaración Universal de los Derechos Humanos (versión ilustrada para niños)',
          'Fichas de casos sobre vulneración y protección de derechos humanos',
          'Videos sobre la ONU y sus misiones en el mundo',
          'Periódicos y noticias sobre derechos humanos en Colombia y el mundo'
        ],

        criteriosEvaluacion: {
          porcentajes: { saber: 30, hacer: 50, ser: 20 },
          saber: [
            'Explica el origen y los principios de los derechos humanos.',
            'Nombra derechos humanos fundamentales de la Declaración Universal.',
            'Describe las funciones de la ONU y la OEA.'
          ],
          hacer: [
            'Analiza casos sobre vulneración y protección de derechos humanos.',
            'Investiga sobre el papel de la ONU en conflictos mundiales.',
            'Elabora la campaña "Embajadores de los derechos humanos".',
            'Participa en el foro sobre derechos humanos en Colombia.'
          ],
          ser: [
            'Defiende los derechos humanos propios y de los demás con convicción.',
            'Muestra empatía y solidaridad hacia personas cuyos derechos son vulnerados.',
            'Asume compromisos de acción en favor de los derechos humanos en su comunidad.'
          ]
        },

        competenciaCiudadana: 'Comprende los derechos humanos como un marco universal que protege la dignidad de todas las personas y asume el compromiso de ser un ciudadano activo en la defensa de los derechos propios y de los demás, en Colombia y en el mundo.'
      }
    }
  }

}; // fin PLANES_SOCIALES_PRIMARIA

if (typeof module !== 'undefined') module.exports = PLANES_SOCIALES_PRIMARIA;
else window.PLANES_SOCIALES_PRIMARIA = PLANES_SOCIALES_PRIMARIA;
