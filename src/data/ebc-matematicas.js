/**
 * Estándares Básicos de Competencias en Matemáticas
 * Ministerio de Educación Nacional de Colombia (MEN) - 2006
 *
 * Fuente oficial: "Estándares Básicos de Competencias en Lenguaje,
 * Matemáticas, Ciencias y Ciudadanas" - MEN 2006
 * Disponible en: https://www.mineducacion.gov.co/1621/articles-340021_recurso_1.pdf
 *
 * Estructura:
 * - 5 grupos de grados: 1-3, 4-5, 6-7, 8-9, 10-11
 * - 5 pensamientos matemáticos por grupo
 */

const EBC_MATEMATICAS = {
  area: 'matematicas',
  nombre: 'Matemáticas',
  color: '#4f83f1',
  ejes: [
    { id: 'numerico',    nombre: 'Pensamiento Numérico y Sistemas Numéricos',              color: '#3B82F6' },
    { id: 'espacial',    nombre: 'Pensamiento Espacial y Sistemas Geométricos',            color: '#10B981' },
    { id: 'metrico',     nombre: 'Pensamiento Métrico y Sistemas de Medidas',              color: '#F59E0B' },
    { id: 'aleatorio',   nombre: 'Pensamiento Aleatorio y Sistemas de Datos',              color: '#8B5CF6' },
    { id: 'variacional', nombre: 'Pensamiento Variacional y Sistemas Algebraicos y Analíticos', color: '#EF4444' }
  ],
  grupos: {

    // =========================================================
    // GRADOS 1° a 3°
    // =========================================================
    '1-3': {
      estandarGeneral: 'Me aproximo al conocimiento como científico(a) natural y social. Manejo conocimientos propios de las matemáticas. Desarrollo compromisos personales y sociales.',
      estandares: {
        numerico: [
          'Reconozco significados del número en diferentes contextos (medición, conteo, comparación, codificación, localización entre otros).',
          'Describo, comparo y cuantifico situaciones con números, en diferentes contextos y con diversas representaciones.',
          'Identifico regularidades y propiedades de los números con relación a las operaciones.',
          'Uso representaciones principalmente concretas y pictóricas para explicar el valor posicional en el sistema de numeración decimal.',
          'Reconozco y hago combinaciones y arreglos con objetos del entorno.',
          'Uso diversas estrategias de cálculo (especialmente cálculo mental) y de estimación para resolver problemas en situaciones aditivas y multiplicativas.',
          'Formulo y resuelvo problemas en situaciones aditivas y multiplicativas en diferentes contextos y con diversos significados de las operaciones.'
        ],
        espacial: [
          'Reconozco y nombro figuras geométricas en el entorno y en representaciones bidimensionales y tridimensionales.',
          'Identifico, describo y construyo figuras y cuerpos geométricos usando diversas representaciones.',
          'Reconozco y aplico traslaciones y giros sobre una figura.',
          'Represento el espacio circundante para establecer relaciones espaciales (dirección, distancia, posición entre otras).',
          'Uso sistemas de referencia para describir la posición de objetos en el espacio.',
          'Describo y represento posiciones y movimientos de objetos y personas en el espacio, usando sistemas de referencia como puntos cardinales y otros.'
        ],
        metrico: [
          'Comparo y ordeno objetos según atributos medibles.',
          'Reconozco en los objetos propiedades o atributos que se pueden medir (longitud, área, volumen, capacidad, peso y masa) y los comparo.',
          'Realizo y describo procesos de medición con patrones arbitrarios y algunos estandarizados, de acuerdo con el contexto.',
          'Diferencio entre el uso de unidades de medida no estandarizadas y las estandarizadas (convencionales).',
          'Estimo y mido la longitud, área, volumen, capacidad, peso y masa de objetos y los represento.',
          'Reconozco el uso del dinero en situaciones cotidianas de compra y venta.'
        ],
        aleatorio: [
          'Represento datos relativos al entorno usando objetos concretos, pictogramas y diagramas de barras.',
          'Interpreto cualitativamente datos referidos a situaciones del entorno escolar.',
          'Llevo registro de datos sobre características de objetos, personas o eventos de interés utilizando formatos.',
          'Reconozco la importancia de los datos para dar respuesta a preguntas.',
          'Identifico, en situaciones cotidianas, la influencia del azar y reconozco la posibilidad de ocurrencia de eventos.'
        ],
        variacional: [
          'Reconozco y describo regularidades y patrones en distintos contextos (numérico, geométrico, musical, entre otros).',
          'Describo cualitativamente situaciones de cambio y variación utilizando el lenguaje natural, dibujos y gráficas.',
          'Predico patrones de variación en una secuencia numérica, geométrica o gráfica.',
          'Identifica y sigue reglas para completar patrones de números, figuras y otros elementos.'
        ]
      }
    },

    // =========================================================
    // GRADOS 4° a 5°
    // =========================================================
    '4-5': {
      estandarGeneral: 'Me aproximo al conocimiento como científico(a) natural y social. Manejo conocimientos propios de las matemáticas. Desarrollo compromisos personales y sociales.',
      estandares: {
        numerico: [
          'Reconozco nuevos conjuntos numéricos (números enteros, racionales) para resolver problemas en diferentes contextos.',
          'Identifico y uso los números enteros, fracciones y decimales en contextos cotidianos y comparo sus representaciones.',
          'Formulo y resuelvo problemas cuya solución requiere de las relaciones y operaciones entre fracciones y/o decimales.',
          'Reconozco las propiedades de los números (divisibilidad, múltiplos, factores primos) y las uso en la solución de problemas.',
          'Reconozco y uso la notación potencial para representar productos de factores iguales.',
          'Utilizo estrategias de cálculo para estimar y calcular resultados de operaciones con números enteros, fracciones y decimales.',
          'Formulo y resuelvo problemas en situaciones de proporcionalidad directa e inversa.',
          'Establezco relaciones entre el número de partes de un todo y sus representaciones fraccionarias y decimales.'
        ],
        espacial: [
          'Reconozco y aplico nociones de horizontalidad, verticalidad, paralelismo y perpendicularidad en distintos contextos.',
          'Identifico y describo figuras y cuerpos geométricos a partir de sus componentes (vértices, aristas, caras, lados) y propiedades.',
          'Construyo y descompongo figuras y sólidos con base en sus características.',
          'Reconozco y aplico las nociones de paralelismo y perpendicularidad entre rectas y entre planos en la construcción de figuras.',
          'Comparo y clasifico figuras bidimensionales y tridimensionales de acuerdo con sus componentes y propiedades.',
          'Predigo y comparo los resultados de aplicar transformaciones rígidas (traslaciones, reflexiones, rotaciones) sobre figuras.',
          'Uso coordenadas cartesianas para especificar localizaciones y describir relaciones espaciales.'
        ],
        metrico: [
          'Realizo conversiones entre unidades de medida del sistema métrico e inglés para longitud, masa, capacidad y tiempo.',
          'Utilizo ángulos y sus medidas para describir, comparar y construir figuras y representaciones de objetos.',
          'Resuelvo y formulo problemas que involucren factores escalares (razones de ampliación y reducción) en contextos de medición.',
          'Calculo y establezco relaciones entre las dimensiones lineales, superficiales y de volumen de objetos y figuras.',
          'Reconozco el uso de algunas magnitudes en la vida cotidiana y cálculo perímetros, áreas de figuras planas y volúmenes de sólidos.',
          'Describo y argumento relaciones entre el perímetro y el área de figuras bidimensionales al realizar transformaciones sobre ellas.'
        ],
        aleatorio: [
          'Resuelvo y formulo preguntas que requieran para su solución coleccionar y analizar datos del entorno próximo.',
          'Represento datos usando tablas y gráficas (pictogramas, diagramas de barras, diagramas de líneas, diagramas circulares).',
          'Comparo diferentes representaciones del mismo conjunto de datos; identifico conjuntos de datos que tienen las mismas representaciones.',
          'Interpreto información presentada en tablas y gráficas (diagramas de barras, diagramas circulares, histogramas).',
          'Conjeturo y verifico predicciones acerca de la posibilidad de ocurrencia de eventos.',
          'Describo la manera de obtener información para resolver una pregunta y si esta información refleja la situación que se quiere estudiar.',
          'Reconozco la frecuencia relativa como herramienta para hacer inferencias.'
        ],
        variacional: [
          'Describo y represento situaciones de variación con gráficas y tablas.',
          'Analizo y explico las distintas posibilidades de cambio en situaciones de variación y establezco conjuntos de variación.',
          'Construyo secuencias numéricas y geométricas, utilizando muchas formas de representación.',
          'Reconozco y generalizo propiedades de los números naturales en contextos de variación.',
          'Uso métodos informales para determinar equivalencias entre expresiones que representan una misma situación de variación.',
          'Identifico y establezco relaciones entre distintas representaciones de un patrón de variación (tablas, ecuaciones, gráficas).'
        ]
      }
    },

    // =========================================================
    // GRADOS 6° a 7°
    // =========================================================
    '6-7': {
      estandarGeneral: 'Me aproximo al conocimiento como científico(a) natural y social. Manejo conocimientos propios de las matemáticas. Desarrollo compromisos personales y sociales.',
      estandares: {
        numerico: [
          'Utilizo números racionales, en sus distintas expresiones (fracciones, razones, decimales o porcentajes) para resolver problemas en contextos de medida.',
          'Justifico la extensión de la representación polinomial decimal usual de los números racionales a la representación de los irracionales.',
          'Reconozco y generalizo propiedades de las relaciones entre números racionales y los utilizo en la resolución de situaciones.',
          'Resuelvo y formulo problemas utilizando propiedades básicas de la teoría de números, como factorización y divisibilidad.',
          'Justifico procedimientos aritméticos utilizando las relaciones y propiedades de las operaciones.',
          'Formulo y resuelvo problemas en situaciones aditivas y multiplicativas, en diferentes contextos y dominios numéricos.',
          'Resuelvo y formulo problemas cuya solución requiere potenciación o radicación.',
          'Justifico la pertinencia de un cálculo exacto o aproximado en la solución de un problema y lo realizo con el grado de exactitud requerido.',
          'Justifico la elección de métodos e instrumentos de cálculo en situaciones de solución de problemas.',
          'Reconozco e interpreto argumentos combinatorios como herramienta para interpretar situaciones diversas.',
          'Resuelvo y formulo problemas en contextos de medidas relativas y de variaciones en las medidas.',
          'Utilizo representaciones matriciales para resolver problemas simples.'
        ],
        espacial: [
          'Represento objetos tridimensionales desde diferentes posiciones y vistas (de frente, de perfil, de arriba).',
          'Identifico y describo figuras y cuerpos generados por cortes rectos y oblicuos de objetos tridimensionales.',
          'Clasifico polígonos en relación con sus propiedades: número de lados, relaciones de congruencia y semejanza, entre otras.',
          'Predigo y comparo los resultados de aplicar transformaciones rígidas (traslaciones, reflexiones, rotaciones) y homotecias sobre figuras.',
          'Resuelvo y formulo problemas que involucren relaciones y propiedades de semejanza y congruencia usando representaciones visuales.',
          'Resuelvo y formulo problemas usando propiedades básicas de ángulos, polígonos y círculos (elementos y relaciones).',
          'Identifico características de localización de objetos en sistemas de representación cartesiana y en sistemas de representación geográfica.'
        ],
        metrico: [
          'Utilizo técnicas y herramientas para la construcción de figuras planas y cuerpos con medidas dadas.',
          'Resuelvo y formulo problemas que involucren factores escalares (razones de ampliación y reducción) en diferentes contextos.',
          'Calculo áreas y volúmenes a través de composición y descomposición de figuras y cuerpos.',
          'Identifico relaciones entre distintas unidades utilizadas para medir cantidades de la misma magnitud.',
          'Resuelvo y formulo problemas que requieren técnicas de estimación, con datos provenientes de diversas fuentes (científicas, sociales, económicas).',
          'Reconozco y utilizo la relación entre el perímetro y el área de figuras planas.',
          'Uso sistemas de referencia para localizar objetos y describir trayectorias, a distintas escalas.'
        ],
        aleatorio: [
          'Comparo e interpreto datos provenientes de diversas fuentes (prensa, revistas, televisión, experimentos, consultas, entrevistas).',
          'Reconozco la relación entre un conjunto de datos y su representación estadística y advierto sus posibles errores.',
          'Interpreto, produzco y comparo representaciones gráficas adecuadas para presentar diversos tipos de datos (diagramas de barras, histogramas, polígonos de frecuencias).',
          'Uso medidas de tendencia central (media, mediana, moda) para interpretar y comparar conjuntos de datos.',
          'Uso modelos (diagramas de árbol, tablas) para discutir y predecir la posibilidad de ocurrencia de un evento.',
          'Resuelvo y formulo problemas a partir de un conjunto de datos presentados en tablas, diagramas de barras, diagramas circulares.',
          'Predigo y justifico razonamientos y conclusiones usando información estadística.'
        ],
        variacional: [
          'Describo y represento situaciones de variación relacionando diferentes representaciones (diagramas, expresiones verbales, tablas y gráficas).',
          'Reconozco el conjunto de valores de cada una de las cantidades variables ligadas entre sí en una situación de variación.',
          'Analizo las propiedades de correlación positiva y negativa entre variables, de variación lineal o de proporcionalidad directa e inversa.',
          'Utilizo métodos informales (ensayo y error, complementación, procesos inversos) en la solución de ecuaciones y lo verifico.',
          'Identifico características de las gráficas cartesianas de funciones en situaciones de cambio.',
          'Predigo el comportamiento de una función representada gráfica, tabular o algebraicamente.',
          'Construyo expresiones algebraicas equivalentes a una expresión algebraica dada.'
        ]
      }
    },

    // =========================================================
    // GRADOS 8° a 9°
    // =========================================================
    '8-9': {
      estandarGeneral: 'Me aproximo al conocimiento como científico(a) natural y social. Manejo conocimientos propios de las matemáticas. Desarrollo compromisos personales y sociales.',
      estandares: {
        numerico: [
          'Utilizo números reales en sus diferentes representaciones y en distintos contextos.',
          'Establezco relaciones y diferencias entre diferentes notaciones de números reales para decidir sobre su uso en una situación dada.',
          'Resuelvo problemas y simplifico cálculos usando propiedades y relaciones de los números reales y de las relaciones y operaciones entre ellos.',
          'Formulo y resuelvo problemas en contextos de medidas relativas, de variación y en situaciones que involucran números negativos.',
          'Identifico y uso números irracionales en situaciones geométricas y de medición.',
          'Resuelvo y formulo problemas cuya solución requiere cálculo exacto o aproximado con números reales.',
          'Identifico y aplico propiedades de los números reales (cerradura, conmutatividad, asociatividad, distributividad, elemento neutro, elemento inverso) en situaciones de solución de problemas.'
        ],
        espacial: [
          'Reconozco y contrasto propiedades y relaciones geométricas usadas en demostración de teoremas básicos.',
          'Aplico y justifico criterios de congruencia y semejanza entre triángulos en la resolución y formulación de problemas.',
          'Uso representaciones geométricas para resolver y formular problemas en las matemáticas y en otras disciplinas.',
          'Describo y aplico las propiedades de las transformaciones que preservan la congruencia y la semejanza (traslaciones, rotaciones, reflexiones y homotecias).',
          'Identifico y aplico relaciones entre rectas y ángulos (perpendiculares, paralelas, oblicuas, bisectrices, mediatriz) para argumentar sobre propiedades de figuras.',
          'Justifico la selección de métodos e instrumentos de trazado en la construcción de figuras geométricas.',
          'Reconozco y uso argumentos geométricos para resolver y formular problemas en diferentes contextos.'
        ],
        metrico: [
          'Resuelvo y formulo problemas usando modelos geométricos.',
          'Aplico el teorema de Pitágoras para calcular longitudes en distintas situaciones geométricas.',
          'Reconozco y uso las medidas de tendencia central para interpretar comportamiento de un conjunto de datos en su contexto.',
          'Uso argumentos geométricos para resolver y formular problemas de medición.',
          'Calculo áreas y volúmenes de figuras y cuerpos geométricos solucionando problemas de medición.',
          'Identifico características de las magnitudes periódicas y estimo sus medidas.',
          'Determino la validez de procesos de medición y cálculo para resolver problemas.'
        ],
        aleatorio: [
          'Interpreto analíticamente situaciones de variación y establezco relaciones entre magnitudes representadas en tablas y gráficas.',
          'Reconozco situaciones de dependencia e independencia estadística y las relaciono con el concepto de probabilidad.',
          'Uso la media, la mediana y la desviación estándar para interpretar y comparar conjuntos de datos provenientes de diferentes fuentes.',
          'Interpreto y comparo resultados de estudios con información estadística provenientes de medios de comunicación.',
          'Reconozco la diferencia entre los modelos discretos (experimentos binomiales) y los continuos para datos estadísticos.',
          'Calculo probabilidad de eventos simples usando métodos diversos (listados, diagramas de árbol, técnicas de conteo).',
          'Resuelvo problemas usando conceptos básicos de probabilidad (probabilidad simple, probabilidad complementaria, regla de la adición).',
          'Uso el concepto de muestra estadística representativa y lo aplico en situaciones de investigación.'
        ],
        variacional: [
          'Identifico diferentes métodos para solucionar sistemas de ecuaciones lineales.',
          'Uso procesos inductivos y lenguaje algebraico para formular y poner a prueba conjeturas.',
          'Modelo situaciones de variación con funciones lineales y las uso para resolver problemas.',
          'Identifico y uso relaciones de dependencia entre variables cuando analizo situaciones concretas.',
          'Construyo expresiones algebraicas que modelan situaciones en contextos matemáticos y no matemáticos.',
          'Reconozco la diferencia entre una variable, una incógnita y un parámetro en la formulación de un problema.',
          'Formulo y resuelvo sistemas de ecuaciones lineales (con dos incógnitas) y cuadráticas.',
          'Identifico y represento funciones como modelos de situaciones de variación (función lineal, cuadrática, exponencial).'
        ]
      }
    },

    // =========================================================
    // GRADOS 10° a 11°
    // =========================================================
    '10-11': {
      estandarGeneral: 'Me aproximo al conocimiento como científico(a) natural y social. Manejo conocimientos propios de las matemáticas. Desarrollo compromisos personales y sociales.',
      estandares: {
        numerico: [
          'Establezco relaciones y diferencias entre diferentes notaciones de números reales y complejos para decidir sobre su uso en una situación dada.',
          'Identifico el conjunto de los números complejos, sus propiedades y las operaciones entre ellos.',
          'Propongo conjeturas y verifico sus resultados usando propiedades de los sistemas numéricos.',
          'Reconozco y uso la notación científica y el sistema de aproximación para representar y operar con números reales grandes y pequeños.',
          'Identifico y uso la potenciación, la radicación y el logaritmo en la resolución de problemas.',
          'Conjeturo y verifico propiedades de divisibilidad y factorización de polinomios.',
          'Resuelvo problemas usando las propiedades de los logaritmos y sus relaciones con la exponenciación.'
        ],
        espacial: [
          'Uso representaciones cartesianas para modelar situaciones geométricas de variación.',
          'Aplico propiedades de las figuras planas y cuerpos en la solución de problemas de medición.',
          'Identifico y aplico la geometría analítica para describir y analizar relaciones de las figuras en el plano cartesiano.',
          'Describo curvas y lugares geométricos en el plano cartesiano (circunferencia, parábola, elipse, hipérbola) y los uso para modelar situaciones.',
          'Uso sistemas de coordenadas para representar transformaciones geométricas y analizar sus propiedades.',
          'Generalizo propiedades de figuras geométricas para construir argumentos y demostraciones matemáticas.',
          'Reconozco y uso propiedades de los vectores en el plano y en el espacio para resolver problemas de geometría y física.'
        ],
        metrico: [
          'Aplico relaciones trigonométricas para resolver situaciones de medición directa e indirecta.',
          'Uso las funciones trigonométricas para modelar situaciones periódicas y resolver problemas en diferentes contextos.',
          'Resuelvo problemas en situaciones de medición que requieren aplicar la ley de senos y la ley de cosenos.',
          'Convierto y aplico unidades de medida de diferentes sistemas (métrico, imperial, anglosajón) en situaciones problema.',
          'Identifico condiciones de semejanza en figuras y las uso para resolver problemas de medición indirecta.',
          'Describo e interpreto situaciones de medición que involucran magnitudes vectoriales y escalares.'
        ],
        aleatorio: [
          'Interpreto y utilizo conceptos de media, varianza y desviación estándar para analizar conjuntos de datos.',
          'Uso la distribución normal para hacer inferencias sobre una población a partir de muestras representativas.',
          'Calculo probabilidades usando las propiedades básicas del modelo de probabilidad (laplaciana, frecuentista, axiomática).',
          'Resuelvo situaciones que involucran probabilidad condicional e independencia de eventos.',
          'Uso el concepto de probabilidad y sus modelos para cuantificar la posibilidad de ocurrencia de eventos.',
          'Reconozco y aplico conceptos de muestreo para diseñar y llevar a cabo estudios estadísticos sencillos.',
          'Interpreto resultados estadísticos para hacer inferencias y tomar decisiones en contextos reales.',
          'Uso distribuciones de probabilidad discretas (binomial) y continuas (normal) para modelar situaciones.'
        ],
        variacional: [
          'Modelo situaciones de variación con funciones polinómicas, racionales, exponenciales y logarítmicas.',
          'Analizo las propiedades de las funciones (dominio, rango, crecimiento, decrecimiento, máximos y mínimos) a través de su gráfica.',
          'Identifico las características de las funciones trigonométricas y las uso para modelar situaciones periódicas.',
          'Construyo modelos matemáticos de situaciones del mundo físico, económico y social usando funciones.',
          'Formulo y resuelvo ecuaciones e inecuaciones de forma algebraica y gráfica.',
          'Identifico y aplico el concepto de límite de una función para comprender la noción de continuidad.',
          'Resuelvo problemas de optimización usando modelos matemáticos y conceptos de cálculo diferencial.',
          'Reconozco la derivada como herramienta para analizar variación y la aplico en situaciones de cambio instantáneo.'
        ]
      }
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = EBC_MATEMATICAS;
}
