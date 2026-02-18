/**
 * Banco de Preguntas tipo ICFES - Uso Offline
 * Instituto Colombiano para la Evaluación de la Educación (ICFES)
 *
 * Preguntas originales inspiradas en el formato y nivel de dificultad
 * de las pruebas Saber 9° y Saber 11° de Colombia.
 * NO son preguntas copiadas de exámenes oficiales.
 *
 * Áreas cubiertas:
 *   - Matemáticas: Saber 9° (5 preguntas) y Saber 11° (5 preguntas)
 *   - Lectura Crítica: Saber 9° (5 preguntas) y Saber 11° (5 preguntas)
 *
 * Formato de ID: {area-abrev}-p-{prueba}-{numero}
 *   mat  = Matemáticas
 *   lc   = Lectura Crítica
 *   s9   = Saber 9°
 *   s11  = Saber 11°
 */

const PREGUNTAS_ICFES = {

  // ===========================================================
  // MATEMÁTICAS
  // ===========================================================
  matematicas: {

    // ---------------------------------------------------------
    // SABER 9°
    // ---------------------------------------------------------
    'saber-9': [

      // 1. Numérico-variacional + razonamiento
      {
        id: 'mat-p-s9-01',
        enunciado: 'Sea x un número real que satisface la ecuación 3(x − 2) + 5 = 2x + 1. ¿Cuál de las siguientes afirmaciones es VERDADERA respecto a x?',
        opciones: [
          { letra: 'A', texto: 'x es negativo porque al despejar se obtiene x = −2.' },
          { letra: 'B', texto: 'x es un número natural porque al despejar se obtiene x = 2.' },
          { letra: 'C', texto: 'x es un entero positivo porque al despejar se obtiene x = 4.' },
          { letra: 'D', texto: 'x es un número irracional porque la ecuación no tiene solución entera.' },
        ],
        clave: 'B',
        justificacion: 'Desarrollando: 3x − 6 + 5 = 2x + 1, es decir, 3x − 1 = 2x + 1, de donde x = 2. Por lo tanto x = 2, que es un número natural positivo. Las opciones A, C y D presentan valores incorrectos de x o clasificaciones equivocadas del número.',
        competencia: 'razonamiento',
        componente: 'numerico-variacional',
      },

      // 2. Numérico-variacional + resolución
      {
        id: 'mat-p-s9-02',
        enunciado: 'En una tienda de Medellín, Valentina compra 3 cuadernos y 2 lápices por $14.500. Si un lápiz cuesta $500 más que un cuaderno, ¿cuánto cuesta cada cuaderno?',
        opciones: [
          { letra: 'A', texto: '$2.500' },
          { letra: 'B', texto: '$2.700' },
          { letra: 'C', texto: '$3.000' },
          { letra: 'D', texto: '$3.500' },
        ],
        clave: 'B',
        justificacion: 'Sea c el precio de un cuaderno. El lápiz vale c + 500. La ecuación es: 3c + 2(c + 500) = 14.500, lo que da 5c + 1.000 = 14.500, entonces 5c = 13.500 y c = 2.700. Verificación: cuaderno = $2.700, lápiz = $3.200; 3(2.700) + 2(3.200) = 8.100 + 6.400 = 14.500. Las otras opciones ($2.500, $3.000, $3.500) no satisfacen la ecuación al ser sustituidas.',
        competencia: 'resolucion',
        componente: 'numerico-variacional',
      },

      // 3. Geométrico-métrico + comunicación
      {
        id: 'mat-p-s9-03',
        enunciado: 'En el plano cartesiano, los vértices de un triángulo son A(1, 1), B(5, 1) y C(3, 4). ¿Cuál es la longitud de la base AB del triángulo y cuál es su altura?',
        opciones: [
          { letra: 'A', texto: 'Base = 4 unidades; altura = 3 unidades.' },
          { letra: 'B', texto: 'Base = 4 unidades; altura = 4 unidades.' },
          { letra: 'C', texto: 'Base = 5 unidades; altura = 3 unidades.' },
          { letra: 'D', texto: 'Base = 3 unidades; altura = 4 unidades.' },
        ],
        clave: 'A',
        justificacion: 'La base AB va de (1,1) a (5,1): longitud = 5 − 1 = 4 unidades (ambos puntos tienen y = 1, por lo que la distancia es la diferencia en x). La altura es la distancia vertical desde C(3, 4) hasta la recta y = 1: altura = 4 − 1 = 3 unidades. La opción B confunde la altura con la coordenada y de C; las opciones C y D tienen valores incorrectos para la base.',
        competencia: 'comunicacion',
        componente: 'geometrico-metrico',
      },

      // 4. Geométrico-métrico + razonamiento
      {
        id: 'mat-p-s9-04',
        enunciado: 'Un cable va desde la cima de un poste de 6 m hasta un punto en el suelo a 8 m de la base del poste. ¿Cuál es la longitud del cable?',
        opciones: [
          { letra: 'A', texto: '10 m' },
          { letra: 'B', texto: '14 m' },
          { letra: 'C', texto: '√28 m' },
          { letra: 'D', texto: '7 m' },
        ],
        clave: 'A',
        justificacion: 'El poste, el suelo y el cable forman un triángulo rectángulo donde los catetos miden 6 m y 8 m. Aplicando el Teorema de Pitágoras: hipotenusa² = 6² + 8² = 36 + 64 = 100, por tanto la hipotenusa = √100 = 10 m. La opción B suma los catetos en vez de aplicar Pitágoras; la opción C calcula incorrectamente; la opción D no corresponde a ningún cálculo válido.',
        competencia: 'razonamiento',
        componente: 'geometrico-metrico',
      },

      // 5. Aleatorio + resolución
      {
        id: 'mat-p-s9-05',
        enunciado: 'Las notas de un grupo de 7 estudiantes en un examen de ciencias fueron: 3,5 — 4,0 — 2,5 — 4,5 — 3,5 — 5,0 — 4,0. ¿Cuáles son la media y la mediana de estas notas?',
        opciones: [
          { letra: 'A', texto: 'Media = 3,86; mediana = 4,0.' },
          { letra: 'B', texto: 'Media = 4,0; mediana = 3,5.' },
          { letra: 'C', texto: 'Media = 3,86; mediana = 3,5.' },
          { letra: 'D', texto: 'Media = 4,0; mediana = 4,0.' },
        ],
        clave: 'A',
        justificacion: 'La suma de las notas es 3,5 + 4,0 + 2,5 + 4,5 + 3,5 + 5,0 + 4,0 = 27,0. La media es 27,0 ÷ 7 ≈ 3,86. Ordenando los datos: 2,5 — 3,5 — 3,5 — 4,0 — 4,0 — 4,5 — 5,0; el valor central (4.° de 7) es 4,0, por lo que la mediana = 4,0. Las opciones B y D tienen la media incorrecta; la opción C tiene la mediana incorrecta.',
        competencia: 'resolucion',
        componente: 'aleatorio',
      },
    ],

    // ---------------------------------------------------------
    // SABER 11°
    // ---------------------------------------------------------
    'saber-11': [

      // 1. Numérico-variacional + razonamiento (funciones / límites)
      {
        id: 'mat-p-s11-01',
        enunciado: 'La función f(x) = (x² − 9) / (x − 3) no está definida en x = 3. Sin embargo, al analizar los valores de f(x) cuando x se aproxima a 3 desde ambos lados, se concluye que:',
        opciones: [
          { letra: 'A', texto: 'El límite cuando x → 3 no existe, porque la función no está definida en ese punto.' },
          { letra: 'B', texto: 'El límite cuando x → 3 es 0, porque el numerador se anula en x = 3.' },
          { letra: 'C', texto: 'El límite cuando x → 3 es 6, porque se puede simplificar f(x) = x + 3 para x ≠ 3.' },
          { letra: 'D', texto: 'El límite cuando x → 3 es infinito, porque hay una división por cero.' },
        ],
        clave: 'C',
        justificacion: 'El numerador x² − 9 = (x − 3)(x + 3). Para x ≠ 3, la expresión se simplifica a f(x) = x + 3. Cuando x → 3, f(x) → 3 + 3 = 6. El límite existe aunque f no esté definida en x = 3; la no definición en un punto no implica que el límite no exista (opción A). El límite no es 0 (opción B) ni infinito (opción D), pues la indeterminación 0/0 se resuelve al factorizar.',
        competencia: 'razonamiento',
        componente: 'numerico-variacional',
      },

      // 2. Numérico-variacional + resolución (sistemas / optimización)
      {
        id: 'mat-p-s11-02',
        enunciado: 'Una finca productora de café en Huila debe distribuir 120 hectáreas entre dos variedades: Castillo y Colombia. La variedad Castillo genera una utilidad de $2.000.000 por hectárea y la Colombia de $1.500.000. Si se requiere plantar al menos 30 ha de cada variedad, ¿cuántas hectáreas de Castillo se deben plantar para maximizar la utilidad total?',
        opciones: [
          { letra: 'A', texto: '30 hectáreas de Castillo y 90 de Colombia.' },
          { letra: 'B', texto: '60 hectáreas de cada variedad.' },
          { letra: 'C', texto: '90 hectáreas de Castillo y 30 de Colombia.' },
          { letra: 'D', texto: '120 hectáreas de Castillo y 0 de Colombia.' },
        ],
        clave: 'C',
        justificacion: 'Sea c las hectáreas de Castillo. La función de utilidad es U = 2.000.000c + 1.500.000(120 − c) = 500.000c + 180.000.000, que es creciente en c. Para maximizar U, se debe maximizar c sujeto a: c ≥ 30 y 120 − c ≥ 30 (es decir, c ≤ 90). El máximo se alcanza en c = 90. La opción D viola la restricción mínima de 30 ha de Colombia; las opciones A y B no maximizan la utilidad.',
        competencia: 'resolucion',
        componente: 'numerico-variacional',
      },

      // 3. Geométrico-métrico + comunicación (vectores / transformaciones)
      {
        id: 'mat-p-s11-03',
        enunciado: 'El punto P(2, 5) es sometido primero a una reflexión sobre el eje x y luego a una traslación de vector (3, −1). ¿Cuáles son las coordenadas del punto imagen final P\'\'?',
        opciones: [
          { letra: 'A', texto: 'P\'\' = (5, −6)' },
          { letra: 'B', texto: 'P\'\' = (5, 4)' },
          { letra: 'C', texto: 'P\'\' = (−1, 6)' },
          { letra: 'D', texto: 'P\'\' = (5, −4)' },
        ],
        clave: 'A',
        justificacion: 'Reflexión de P(2, 5) sobre el eje x: P\'(2, −5) (la coordenada y cambia de signo). Traslación con vector (3, −1): P\'\'(2 + 3, −5 + (−1)) = P\'\'(5, −6). La opción B olvida cambiar el signo de y en la reflexión; la opción D aplica la traslación al punto original sin reflejar; la opción C comete errores en ambas transformaciones.',
        competencia: 'comunicacion',
        componente: 'geometrico-metrico',
      },

      // 4. Aleatorio + razonamiento (distribuciones / inferencia)
      {
        id: 'mat-p-s11-04',
        enunciado: 'En dos colegios de Bogotá se midió el tiempo de desplazamiento (en minutos) de los estudiantes. Colegio A: media = 25 min, desviación estándar = 5 min. Colegio B: media = 25 min, desviación estándar = 15 min. ¿Cuál afirmación es CORRECTA?',
        opciones: [
          { letra: 'A', texto: 'Los estudiantes del colegio A tienen tiempos más homogéneos que los del colegio B.' },
          { letra: 'B', texto: 'Los estudiantes del colegio B tienen, en promedio, mayor tiempo de desplazamiento.' },
          { letra: 'C', texto: 'No es posible comparar los dos grupos porque tienen distribuciones diferentes.' },
          { letra: 'D', texto: 'La mediana del colegio A es mayor que la del colegio B porque su desviación estándar es menor.' },
        ],
        clave: 'A',
        justificacion: 'La desviación estándar mide la dispersión de los datos alrededor de la media. Como el colegio A tiene desviación estándar de 5 min (menor), sus tiempos están más concentrados cerca de la media de 25 min, es decir, son más homogéneos. La opción B es falsa porque ambas medias son iguales (25 min). La opción C es incorrecta: se pueden comparar grupos con diferentes dispersiones. La opción D confunde desviación estándar con mediana.',
        competencia: 'razonamiento',
        componente: 'aleatorio',
      },

      // 5. Aleatorio + resolución (probabilidad condicional / conteo)
      {
        id: 'mat-p-s11-05',
        enunciado: 'En una urna hay 4 bolas rojas y 6 bolas azules. Se extraen dos bolas sin reposición. ¿Cuál es la probabilidad de que la segunda bola sea azul, dado que la primera también fue azul?',
        opciones: [
          { letra: 'A', texto: '6/10' },
          { letra: 'B', texto: '5/9' },
          { letra: 'C', texto: '5/10' },
          { letra: 'D', texto: '6/9' },
        ],
        clave: 'B',
        justificacion: 'Si la primera bola extraída fue azul, quedan en la urna 4 rojas y 5 azules (9 en total). La probabilidad de que la segunda sea azul dado que la primera lo fue es P(2.ª azul | 1.ª azul) = 5/9. La opción A usa el total inicial sin actualizar; la opción C divide incorrectamente; la opción D usa numerador incorrecto de 6 sin descontar la bola ya extraída.',
        competencia: 'resolucion',
        componente: 'aleatorio',
      },
    ],
  },

  // ===========================================================
  // CIENCIAS NATURALES
  // ===========================================================
  naturales: {

    // ---------------------------------------------------------
    // SABER 9°
    // ---------------------------------------------------------
    'saber-9': [

      // 1. Entorno vivo + uso-conocimiento
      {
        id: 'nat-p-s9-01',
        enunciado: 'Un estudiante observa que en su jardín hay plantas que crecen a la sombra de un árbol grande. Estas plantas tienen hojas más grandes y de color verde más oscuro que las plantas expuestas al sol. ¿Cuál es la explicación más adecuada para esta adaptación?',
        opciones: [
          { letra: 'A', texto: 'Las plantas de sombra tienen hojas más grandes porque reciben más lluvia que las plantas del sol.' },
          { letra: 'B', texto: 'Las plantas de sombra tienen hojas más grandes y con más cloroplastos para captar mayor cantidad de luz disponible y realizar la fotosíntesis.' },
          { letra: 'C', texto: 'Las plantas de sombra son de especies diferentes y por eso sus hojas tienen características distintas, independientemente de la luz.' },
          { letra: 'D', texto: 'Las plantas de sombra no realizan fotosíntesis; obtienen sus nutrientes directamente del suelo.' },
        ],
        clave: 'B',
        justificacion: 'Las plantas que viven a la sombra han desarrollado adaptaciones para maximizar la captación de luz: hojas más grandes aumentan el área de absorción y el color verde oscuro indica mayor concentración de cloroplastos, que son los organelos donde ocurre la fotosíntesis. La opción A confunde un factor climático (lluvia) con uno lumínico. La opción C ignora que el ambiente moldea las adaptaciones fisiológicas. La opción D es incorrecta: todas las plantas con cloroplastos realizan fotosíntesis.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-vivo',
      },

      // 2. Entorno vivo + explicacion
      {
        id: 'nat-p-s9-02',
        enunciado: 'En un cruce entre una planta de flores rojas (RR) y una planta de flores blancas (rr), todos los descendientes de la primera generación (F1) tienen flores rosas (Rr). Si dos plantas de la F1 se cruzan entre sí, ¿qué proporción de plantas de flores blancas se espera en la segunda generación (F2)?',
        opciones: [
          { letra: 'A', texto: '1/4 (25%)' },
          { letra: 'B', texto: '1/2 (50%)' },
          { letra: 'C', texto: '3/4 (75%)' },
          { letra: 'D', texto: '0% porque el blanco desapareció en la F1.' },
        ],
        clave: 'A',
        justificacion: 'Al cruzar dos plantas Rr, se obtiene la proporción mendeliana 1 RR : 2 Rr : 1 rr. Solo las plantas rr tendrán flores blancas, lo que equivale a 1/4 (25%) de la descendencia. La opción B sería correcta si se buscara la proporción de heterocigotos (Rr). La opción C corresponde a la proporción de plantas que tienen al menos un alelo R (RR + Rr). La opción D es incorrecta: el alelo r estaba presente en las plantas F1 de manera recesiva y puede reaparecer en F2.',
        competencia: 'explicacion',
        componente: 'entorno-vivo',
      },

      // 3. Entorno físico + explicacion
      {
        id: 'nat-p-s9-03',
        enunciado: 'Una pelota de 2 kg se lanza verticalmente hacia arriba desde el suelo con una velocidad inicial de 10 m/s. Ignorando la fricción del aire, ¿cuál de las afirmaciones sobre la energía de la pelota es CORRECTA mientras sube?',
        opciones: [
          { letra: 'A', texto: 'La energía cinética aumenta y la energía potencial disminuye.' },
          { letra: 'B', texto: 'La energía cinética disminuye y la energía potencial aumenta, pero la energía mecánica total permanece constante.' },
          { letra: 'C', texto: 'Tanto la energía cinética como la potencial disminuyen porque la pelota pierde energía al subir.' },
          { letra: 'D', texto: 'La energía mecánica total aumenta porque la pelota gana altura.' },
        ],
        clave: 'B',
        justificacion: 'Al subir, la pelota desacelera: su energía cinética (Ec = ½mv²) disminuye. Al mismo tiempo, aumenta su altura y por tanto su energía potencial gravitacional (Ep = mgh). Como no hay fricción, la energía mecánica total (Ec + Ep) se conserva, según el principio de conservación de la energía. La opción A invierte correctamente la relación. Las opciones C y D violan el principio de conservación de la energía.',
        competencia: 'explicacion',
        componente: 'entorno-fisico',
      },

      // 4. CTS + indagacion
      {
        id: 'nat-p-s9-04',
        enunciado: 'Una investigadora quiere determinar si la temperatura afecta la velocidad de germinación de semillas de frijol. Diseña el siguiente experimento: coloca 20 semillas en tres grupos de 20 semillas cada uno, con las mismas condiciones de humedad y luz, pero a diferentes temperaturas (15°C, 25°C y 35°C). ¿Cuál es la variable independiente en este experimento?',
        opciones: [
          { letra: 'A', texto: 'La velocidad de germinación de las semillas.' },
          { letra: 'B', texto: 'La cantidad de humedad suministrada a cada grupo.' },
          { letra: 'C', texto: 'La temperatura a la que se expone cada grupo de semillas.' },
          { letra: 'D', texto: 'El número de semillas usadas en cada grupo.' },
        ],
        clave: 'C',
        justificacion: 'La variable independiente es la que la investigadora manipula deliberadamente para observar su efecto: en este caso, la temperatura (15°C, 25°C y 35°C). La opción A (velocidad de germinación) es la variable dependiente, pues es lo que se mide como resultado. La humedad (opción B) y el número de semillas (opción D) son variables de control, que se mantienen iguales para que no afecten los resultados.',
        competencia: 'indagacion',
        componente: 'cts',
      },

      // 5. Entorno físico + uso-conocimiento
      {
        id: 'nat-p-s9-05',
        enunciado: 'Un químico mezcla ácido clorhídrico (HCl) con hidróxido de sodio (NaOH) en proporciones iguales y obtiene cloruro de sodio (NaCl) y agua (H₂O). ¿Qué tipo de reacción química ocurrió?',
        opciones: [
          { letra: 'A', texto: 'Reacción de síntesis, porque se forman dos nuevas sustancias.' },
          { letra: 'B', texto: 'Reacción de descomposición, porque el ácido se separa en sus componentes.' },
          { letra: 'C', texto: 'Reacción de neutralización (doble sustitución), porque un ácido reacciona con una base para formar una sal y agua.' },
          { letra: 'D', texto: 'Reacción de combustión, porque se libera energía en forma de calor.' },
        ],
        clave: 'C',
        justificacion: 'La reacción entre un ácido (HCl) y una base (NaOH) para producir una sal (NaCl) y agua (H₂O) es una reacción de neutralización ácido-base, clasificada como doble sustitución. No es síntesis (opción A), que implica formar una sola sustancia desde dos simples. No es descomposición (opción B), que parte de una sola sustancia. No es combustión (opción D), que requiere oxígeno y produce CO₂ y H₂O al quemar un material orgánico.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-fisico',
      },
    ],

    // ---------------------------------------------------------
    // SABER 11°
    // ---------------------------------------------------------
    'saber-11': [

      // 1. Entorno vivo + uso-conocimiento (genética molecular)
      {
        id: 'nat-p-s11-01',
        enunciado: 'Durante el proceso de traducción, el ARN mensajero (ARNm) es leído por los ribosomas en grupos de tres nucleótidos llamados codones. El codón AUG codifica para la metionina y es el codón de inicio. Si una mutación cambia el codón AUG por AUA (que codifica para isoleucina), ¿cuál sería el efecto más probable sobre la proteína resultante?',
        opciones: [
          { letra: 'A', texto: 'La proteína no se verá afectada porque AUA codifica para un aminoácido diferente pero igualmente válido.' },
          { letra: 'B', texto: 'La síntesis de la proteína no se iniciará correctamente, porque AUG es el único codón de inicio reconocido por los ribosomas.' },
          { letra: 'C', texto: 'La proteína será más larga de lo normal porque la mutación crea un nuevo codón de inicio.' },
          { letra: 'D', texto: 'La mutación no tiene ningún efecto porque el código genético es redundante.' },
        ],
        clave: 'B',
        justificacion: 'El codón AUG tiene una función dual: codifica para la metionina y sirve como señal de inicio de la traducción. Si se muta a AUA, los ribosomas no reconocerán el sitio de inicio y la síntesis de la proteína se verá comprometida. La opción A es incorrecta porque no solo importa el aminoácido, sino la señal de inicio. La opción C es incorrecta: la mutación elimina el codón de inicio, no crea uno nuevo. La opción D es incorrecta: la redundancia del código genético se refiere a que varios codones pueden codificar el mismo aminoácido, no al codón de inicio.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-vivo',
      },

      // 2. Entorno físico + explicacion (termodinámica)
      {
        id: 'nat-p-s11-02',
        enunciado: 'Una máquina térmica absorbe 1.000 J de calor de un foco caliente y realiza 400 J de trabajo útil, cediendo el calor restante a un foco frío. ¿Cuál es la eficiencia de esta máquina y cuánto calor cede al foco frío?',
        opciones: [
          { letra: 'A', texto: 'Eficiencia = 60%; calor cedido = 600 J.' },
          { letra: 'B', texto: 'Eficiencia = 40%; calor cedido = 600 J.' },
          { letra: 'C', texto: 'Eficiencia = 40%; calor cedido = 400 J.' },
          { letra: 'D', texto: 'Eficiencia = 100%; calor cedido = 0 J porque toda la energía se convierte en trabajo.' },
        ],
        clave: 'B',
        justificacion: 'La eficiencia de una máquina térmica es η = W / Qc = 400 J / 1000 J = 0,40 = 40%. Por conservación de la energía (primer principio): el calor cedido al foco frío = Qc − W = 1000 − 400 = 600 J. La opción A tiene invertidos el trabajo y el calor cedido. La opción C usa el trabajo absorbido en lugar del calor total para calcular el cedido. La opción D viola el segundo principio de la termodinámica: ninguna máquina real puede tener eficiencia del 100%.',
        competencia: 'explicacion',
        componente: 'entorno-fisico',
      },

      // 3. CTS + indagacion (evaluación de investigación)
      {
        id: 'nat-p-s11-03',
        enunciado: 'Un grupo de investigadores publicó un estudio que concluye que consumir un suplemento X reduce el colesterol en un 30%. El estudio evaluó a 50 personas durante 2 semanas, sin grupo de control. ¿Cuál es la principal debilidad metodológica de este estudio?',
        opciones: [
          { letra: 'A', texto: 'El estudio duró muy poco tiempo y careció de grupo de control, lo que impide atribuir los cambios al suplemento y no a otros factores.' },
          { letra: 'B', texto: 'La muestra de 50 personas es adecuada, pero el estudio debió durar al menos 6 meses para ser válido.' },
          { letra: 'C', texto: 'El estudio es válido porque el porcentaje de reducción (30%) es estadísticamente significativo.' },
          { letra: 'D', texto: 'La ausencia de grupo de control no es un problema si todos los participantes tomaron el suplemento.' },
        ],
        clave: 'A',
        justificacion: 'Las dos debilidades principales son: (1) la falta de grupo de control impide determinar si los cambios se deben al suplemento o a factores externos (dieta, ejercicio, placebo); (2) dos semanas es un tiempo muy corto para evaluar cambios en el colesterol. La opción B solo menciona el tiempo y no la ausencia de grupo control, que es igualmente crítica. La opción C es incorrecta: la significancia estadística requiere un diseño experimental adecuado, que aquí no existe. La opción D es incorrecta: el grupo de control es esencial precisamente para comparar con quienes no toman el suplemento.',
        competencia: 'indagacion',
        componente: 'cts',
      },

      // 4. Entorno físico + uso-conocimiento (equilibrio químico)
      {
        id: 'nat-p-s11-04',
        enunciado: 'En la síntesis industrial del amoníaco (N₂ + 3H₂ ⇌ 2NH₃), la reacción es exotérmica. Según el principio de Le Chatelier, ¿qué condición favorecería la producción de amoníaco?',
        opciones: [
          { letra: 'A', texto: 'Aumentar la temperatura para acelerar la reacción.' },
          { letra: 'B', texto: 'Disminuir la presión para dar más espacio a los reactivos.' },
          { letra: 'C', texto: 'Aumentar la presión y disminuir la temperatura del sistema.' },
          { letra: 'D', texto: 'Extraer el nitrógeno del sistema para desplazar el equilibrio hacia los productos.' },
        ],
        clave: 'C',
        justificacion: 'Por el principio de Le Chatelier: (1) Aumentar la presión favorece el lado con menor número de moles de gas: 4 moles de reactivos (1 N₂ + 3 H₂) → 2 moles de producto (2 NH₃), por lo que la presión alta desplaza el equilibrio hacia la derecha (más NH₃). (2) Como la reacción es exotérmica, disminuir la temperatura favorece la formación de productos. La opción A favorecería los reactivos (equilibrio hacia la izquierda). La opción B favorecería también a los reactivos. La opción D es incorrecta: extraer N₂ (reactivo) desplazaría el equilibrio hacia los reactivos, no hacia los productos.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-fisico',
      },

      // 5. Entorno vivo + explicacion (evolución)
      {
        id: 'nat-p-s11-05',
        enunciado: 'En las Islas Galápagos, los pinzones de Darwin muestran una gran variedad en la forma y tamaño de sus picos, adaptados a distintos tipos de alimento. Este proceso, en el que una especie ancestral da origen a múltiples especies con diferentes adaptaciones, se denomina:',
        opciones: [
          { letra: 'A', texto: 'Convergencia evolutiva, porque los picos se adaptaron de manera similar en distintas islas.' },
          { letra: 'B', texto: 'Radiación adaptativa, porque a partir de un ancestro común se originaron múltiples especies que ocupan distintos nichos ecológicos.' },
          { letra: 'C', texto: 'Deriva génica, porque el aislamiento geográfico de las islas redujo al azar la diversidad genética de los pinzones.' },
          { letra: 'D', texto: 'Mutación dirigida, porque el ambiente de cada isla indujo cambios específicos en los genes del pico.' },
        ],
        clave: 'B',
        justificacion: 'La radiación adaptativa es el proceso por el cual un grupo de organismos de un ancestro común se diversifica rápidamente para ocupar distintos nichos ecológicos. Los pinzones de Darwin son el ejemplo clásico: a partir de un ancestro llegado al continente, evolucionaron en distintas islas hacia especies con picos adaptados a semillas, insectos o flores. La convergencia evolutiva (opción A) ocurre cuando especies no relacionadas desarrollan características similares. La deriva génica (opción C) es un cambio aleatorio en las frecuencias génicas, no dirigido por la selección natural. La mutación dirigida (opción D) no existe: las mutaciones son aleatorias.',
        competencia: 'explicacion',
        componente: 'entorno-vivo',
      },
    ],
  },

  // ===========================================================
  // CIENCIAS SOCIALES
  // ===========================================================
  sociales: {

    // ---------------------------------------------------------
    // SABER 9°
    // ---------------------------------------------------------
    'saber-9': [

      // 1. Conocimientos sociales + pensamiento-social
      {
        id: 'soc-p-s9-01',
        enunciado: 'La Constitución Política de Colombia de 1991 establece en su artículo 1° que Colombia es un "Estado social de derecho". ¿Cuál de las siguientes afirmaciones describe mejor el significado de este principio?',
        opciones: [
          { letra: 'A', texto: 'El Estado colombiano se organiza exclusivamente con base en las leyes, sin consideración de las necesidades sociales de la población.' },
          { letra: 'B', texto: 'El Estado tiene la obligación de garantizar no solo el cumplimiento de las leyes, sino también condiciones de vida digna, igualdad y justicia social para todos los ciudadanos.' },
          { letra: 'C', texto: 'El Estado colombiano es un estado social porque la mayoría de sus ciudadanos pertenece a la clase media.' },
          { letra: 'D', texto: 'El Estado social de derecho implica que todos los ciudadanos tienen los mismos ingresos económicos garantizados por la Constitución.' },
        ],
        clave: 'B',
        justificacion: 'El Estado social de derecho implica que el Estado no se limita a garantizar el orden jurídico formal, sino que asume la responsabilidad de promover condiciones de vida digna, equidad y justicia social. En Colombia, esto se refleja en derechos como la educación, la salud y la vivienda. La opción A describe un Estado de derecho formal (sin el componente social). Las opciones C y D son incorrectas: el término no se refiere a la composición socioeconómica ni a la igualdad de ingresos.',
        competencia: 'pensamiento-social',
        componente: 'conocimientos-sociales',
      },

      // 2. Multiperspectividad + interpretacion
      {
        id: 'soc-p-s9-02',
        enunciado: 'Durante la conquista española de América en el siglo XVI, los cronistas europeos describieron a los pueblos indígenas como "salvajes" que necesitaban ser "civilizados". Los pueblos indígenas, por su parte, experimentaron la conquista como una invasión y destrucción de su cultura y territorio. ¿Qué concepto histórico ilustra mejor la coexistencia de estas dos visiones?',
        opciones: [
          { letra: 'A', texto: 'La objetividad histórica, porque los cronistas registraron los hechos tal como ocurrieron.' },
          { letra: 'B', texto: 'La multiperspectividad, porque un mismo evento histórico puede ser interpretado de maneras diferentes según los actores involucrados.' },
          { letra: 'C', texto: 'La relatividad cultural, porque ninguna de las dos culturas es superior a la otra.' },
          { letra: 'D', texto: 'El etnocentrismo indígena, porque los pueblos originarios también juzgaban a los europeos desde su propia cultura.' },
        ],
        clave: 'B',
        justificacion: 'La multiperspectividad es la capacidad de analizar un evento histórico desde los puntos de vista de los diferentes actores involucrados. La conquista fue vivida de manera radicalmente diferente por los conquistadores y por los pueblos indígenas, y ambas perspectivas son válidas para comprender el proceso histórico en su complejidad. La opción A es incorrecta: las crónicas europeas no son objetivas, están marcadas por una visión eurocéntrica. La opción C describe la relatividad cultural, que es un concepto relacionado pero distinto. La opción D es incorrecta: la pregunta ilustra el etnocentrismo europeo, no el indígena.',
        competencia: 'interpretacion',
        componente: 'multiperspectividad',
      },

      // 3. Argumentacion + pensamiento-sistemico
      {
        id: 'soc-p-s9-03',
        enunciado: 'Lee el siguiente argumento:\n\n"Colombia debería prohibir todas las exportaciones de carbón porque contamina el ambiente. Si continuamos exportando carbón, en 20 años el planeta será inhabitable."\n\n¿Cuál es la principal debilidad de este argumento?',
        opciones: [
          { letra: 'A', texto: 'El argumento no tiene debilidades: la contaminación del carbón es un hecho científico comprobado.' },
          { letra: 'B', texto: 'El argumento usa una proyección catastrófica sin evidencia que la sustente ("en 20 años el planeta será inhabitable") y no considera los impactos económicos y sociales de la prohibición.' },
          { letra: 'C', texto: 'El argumento es débil porque Colombia no exporta carbón.' },
          { letra: 'D', texto: 'El argumento es correcto en su conclusión pero usa un lenguaje demasiado técnico que dificulta su comprensión.' },
        ],
        clave: 'B',
        justificacion: 'El argumento incurre en dos debilidades: (1) una generalización catastrófica sin evidencia ("en 20 años el planeta será inhabitable"), que es una exageración que resta credibilidad al argumento; (2) no considera los efectos económicos y sociales de una prohibición total, lo que lo hace simplista. La opción A ignora las debilidades señaladas. La opción C es factualmente incorrecta: Colombia sí exporta carbón. La opción D invierte el problema: el lenguaje del argumento no es técnico, sino impreciso y alarmista.',
        competencia: 'pensamiento-sistemico',
        componente: 'argumentacion',
      },

      // 4. Conocimientos sociales + pensamiento-social
      {
        id: 'soc-p-s9-04',
        enunciado: 'El proceso de globalización ha generado tanto oportunidades como desigualdades. ¿Cuál de las siguientes consecuencias de la globalización es una expresión de sus efectos desiguales?',
        opciones: [
          { letra: 'A', texto: 'La difusión de internet ha permitido el acceso igualitario a la información en todos los países del mundo.' },
          { letra: 'B', texto: 'Los países productores de materias primas tienen menor poder de negociación y reciben menores ingresos que los países que producen bienes manufacturados y tecnología.' },
          { letra: 'C', texto: 'La globalización ha eliminado las diferencias culturales entre los países, creando una cultura mundial unificada.' },
          { letra: 'D', texto: 'Los tratados de libre comercio han beneficiado por igual a todos los países firmantes, sin excepción.' },
        ],
        clave: 'B',
        justificacion: 'Una de las críticas más documentadas a la globalización es la asimetría en los términos de intercambio: los países que exportan materias primas (petróleo, carbón, café, flores) reciben menos valor agregado que los que exportan tecnología y bienes manufacturados, lo que perpetúa la dependencia económica. La opción A es incorrecta: la brecha digital es precisamente una de las desigualdades de la globalización. La opción C es incorrecta: la globalización coexiste con la diversidad cultural y, en algunos casos, la amenaza. La opción D es incorrecta: los tratados de libre comercio generan ganadores y perdedores.',
        competencia: 'pensamiento-social',
        componente: 'conocimientos-sociales',
      },

      // 5. Multiperspectividad + interpretacion
      {
        id: 'soc-p-s9-05',
        enunciado: 'En Colombia, el conflicto armado ha afectado especialmente a comunidades indígenas y afrocolombianas. Desde la perspectiva de los derechos humanos, ¿cuál de las siguientes afirmaciones es la más adecuada para analizar esta situación?',
        opciones: [
          { letra: 'A', texto: 'El conflicto afecta por igual a toda la población colombiana, por lo que no es necesario hablar de grupos más vulnerables.' },
          { letra: 'B', texto: 'Las comunidades indígenas y afrocolombianas han sido desproporcionadamente afectadas por el conflicto debido a su ubicación en territorios con recursos estratégicos y a históricos procesos de exclusión social.' },
          { letra: 'C', texto: 'El conflicto armado es exclusivamente una disputa entre grupos armados y no tiene consecuencias humanitarias para la población civil.' },
          { letra: 'D', texto: 'Las comunidades afrocolombianas e indígenas son las causantes del conflicto porque se niegan a abandonar sus territorios.' },
        ],
        clave: 'B',
        justificacion: 'Desde el enfoque de derechos humanos y diferencial, se reconoce que ciertas comunidades han sido desproporcionadamente victimizadas por el conflicto armado colombiano. Las comunidades indígenas y afrocolombianas están ubicadas en territorios ricos en recursos naturales disputados por actores armados y han sufrido históricamente procesos de exclusión. La opción A niega la diferenciación necesaria para proteger a poblaciones vulnerables. La opción C desconoce las graves consecuencias humanitarias del conflicto. La opción D invierte la responsabilidad, culpando a las víctimas.',
        competencia: 'interpretacion',
        componente: 'multiperspectividad',
      },
    ],

    // ---------------------------------------------------------
    // SABER 11°
    // ---------------------------------------------------------
    'saber-11': [

      // 1. Conocimientos sociales + pensamiento-social
      {
        id: 'soc-p-s11-01',
        enunciado: 'Lee el siguiente fragmento:\n\n"La Guerra Fría (1947-1991) fue un conflicto ideológico, político y geopolítico entre los Estados Unidos y la Unión Soviética. Aunque no hubo enfrentamiento militar directo entre las dos superpotencias, la guerra se libró a través de conflictos regionales en Asia, África y América Latina, donde cada bloque apoyó a facciones aliadas."\n\nSegún el texto, ¿cuál fue la principal característica de la Guerra Fría?',
        opciones: [
          { letra: 'A', texto: 'Fue un conflicto exclusivamente económico entre los países capitalistas y los socialistas.' },
          { letra: 'B', texto: 'Fue una guerra directa entre EE.UU. y la URSS que se libró principalmente en Europa.' },
          { letra: 'C', texto: 'Fue una confrontación ideológica y geopolítica que se manifestó a través de conflictos regionales sin enfrentamiento militar directo entre las superpotencias.' },
          { letra: 'D', texto: 'Fue un conflicto que solo afectó a los países en desarrollo, sin consecuencias para las grandes potencias.' },
        ],
        clave: 'C',
        justificacion: 'El texto es explícito: la Guerra Fría fue una confrontación ideológica y geopolítica que, aunque no tuvo enfrentamiento directo entre EE.UU. y la URSS, se manifestó en conflictos regionales (guerras en Corea, Vietnam, Angola, Nicaragua) donde cada bloque apoyó a sus aliados. La opción A reduce el conflicto a lo económico, cuando también fue ideológico y militar. La opción B contradice el texto, que afirma que no hubo enfrentamiento directo. La opción D es incorrecta: las consecuencias para las superpotencias fueron enormes (carrera armamentista, influencia global).',
        competencia: 'pensamiento-social',
        componente: 'conocimientos-sociales',
      },

      // 2. Argumentacion + pensamiento-sistemico
      {
        id: 'soc-p-s11-02',
        enunciado: 'Un senador propone una ley para reducir el salario mínimo argumentando: "En los países donde se bajó el salario mínimo, el desempleo cayó. Por lo tanto, si reducimos el salario mínimo en Colombia, el desempleo también caerá." ¿Cuál es la principal falla lógica de este argumento?',
        opciones: [
          { letra: 'A', texto: 'El argumento es válido porque está basado en evidencia empírica de otros países.' },
          { letra: 'B', texto: 'El argumento comete una falacia de generalización apresurada: asume que lo que ocurrió en otros contextos ocurrirá necesariamente en Colombia, sin considerar factores específicos del país.' },
          { letra: 'C', texto: 'El argumento es incorrecto porque ningún país del mundo ha reducido el salario mínimo.' },
          { letra: 'D', texto: 'El argumento es correcto en su lógica, pero tiene un error de cálculo en las cifras de desempleo.' },
        ],
        clave: 'B',
        justificacion: 'El argumento incurre en una generalización apresurada (o falacia de analogía débil): extrapola resultados de otros países al contexto colombiano sin considerar que cada economía tiene características específicas (estructura laboral, inflación, productividad, instituciones) que pueden producir resultados distintos. Además, la correlación entre salario mínimo bajo y menor desempleo no implica causalidad. La opción A ignora la falacia. La opción C es factualmente incorrecta. La opción D desvía el problema: la falla es lógica, no aritmética.',
        competencia: 'pensamiento-sistemico',
        componente: 'argumentacion',
      },

      // 3. Multiperspectividad + interpretacion
      {
        id: 'soc-p-s11-03',
        enunciado: 'El Acuerdo de Paz firmado en Colombia en 2016 fue apoyado por organizaciones de víctimas, comunidades rurales y organismos internacionales, pero rechazado por sectores políticos que consideraron que concedía demasiados beneficios a los actores armados. ¿Qué herramienta analítica es más útil para comprender este debate?',
        opciones: [
          { letra: 'A', texto: 'La objetividad histórica, que permite determinar quién tiene razón en el debate sobre el acuerdo de paz.' },
          { letra: 'B', texto: 'El análisis multiperspectivo, que permite comprender las distintas posiciones y los valores que las sustentan sin reducir el debate a una sola verdad.' },
          { letra: 'C', texto: 'El positivismo jurídico, que establece que lo único relevante es lo que dice el texto del acuerdo, independientemente de las opiniones.' },
          { letra: 'D', texto: 'La teoría conspirativa, que permite identificar los intereses ocultos detrás de cada posición.' },
        ],
        clave: 'B',
        justificacion: 'El debate sobre el Acuerdo de Paz involucra actores con experiencias, valores e intereses legítimamente distintos: las víctimas buscan reparación y no repetición; los opositores políticos exigen mayor justicia retributiva; las comunidades rurales priorizan la seguridad territorial. El análisis multiperspectivo permite comprender estas posiciones sin descalificar ninguna a priori. La opción A supone equivocadamente que existe una "verdad objetiva" en debates normativos y políticos. La opción C reduce el análisis al texto legal, ignorando las experiencias de las personas. La opción D no es una herramienta analítica válida en las ciencias sociales.',
        competencia: 'interpretacion',
        componente: 'multiperspectividad',
      },

      // 4. Conocimientos sociales + pensamiento-sistemico
      {
        id: 'soc-p-s11-04',
        enunciado: 'El Índice de Desarrollo Humano (IDH) mide el progreso de un país en tres dimensiones: salud (esperanza de vida), educación (años de escolaridad) e ingreso (PIB per cápita). Si un país tiene un PIB per cápita alto pero baja esperanza de vida y pocos años de escolaridad, ¿qué conclusión es más adecuada?',
        opciones: [
          { letra: 'A', texto: 'El país tiene un alto desarrollo humano porque su ingreso económico es elevado.' },
          { letra: 'B', texto: 'El crecimiento económico del país no se ha traducido en mejoras proporcionales en la salud y la educación de la población, lo que indica una distribución desigual del bienestar.' },
          { letra: 'C', texto: 'El IDH del país será alto porque el PIB per cápita compensa las bajas cifras de salud y educación.' },
          { letra: 'D', texto: 'El país no necesita mejorar la salud ni la educación si ya tiene un PIB alto.' },
        ],
        clave: 'B',
        justificacion: 'El IDH es un indicador multidimensional que combina salud, educación e ingreso. Un PIB alto con baja esperanza de vida y poca escolaridad indica que el crecimiento económico no beneficia por igual a toda la población, evidenciando desigualdad en la distribución del bienestar. El IDH de ese país será medio o bajo porque las tres dimensiones se combinan. La opción A usa solo una dimensión para concluir el nivel de desarrollo. La opción C es incorrecta: las dimensiones se combinan pero no se compensan proporcionalmente de esa forma. La opción D refleja una visión economicista que el IDH precisamente busca superar.',
        competencia: 'pensamiento-sistemico',
        componente: 'conocimientos-sociales',
      },

      // 5. Multiperspectividad + interpretacion
      {
        id: 'soc-p-s11-05',
        enunciado: 'Lee el siguiente fragmento de un discurso político:\n\n"Los movimientos feministas han destruido la familia colombiana. Antes las mujeres eran felices en el hogar y los hombres podían trabajar tranquilos. Hoy, por culpa del feminismo, tenemos más divorcios, menos hijos y una sociedad en crisis."\n\n¿Cuál de los siguientes análisis es más adecuado para evaluar este discurso desde las ciencias sociales?',
        opciones: [
          { letra: 'A', texto: 'El discurso es correcto porque las estadísticas de divorcio en Colombia han aumentado en las últimas décadas.' },
          { letra: 'B', texto: 'El discurso presenta una relación causal no demostrada entre el feminismo y los cambios familiares, ignora los beneficios del movimiento para las mujeres e invisibiliza las perspectivas de quienes han sido históricamente excluidas.' },
          { letra: 'C', texto: 'El discurso es un ejemplo de pensamiento científico porque usa datos observables (divorcios, natalidad) para sustentar su argumento.' },
          { letra: 'D', texto: 'El discurso es neutral porque describe cambios sociales sin tomar partido por ningún grupo.' },
        ],
        clave: 'B',
        justificacion: 'El discurso incurre en varias fallas analíticas: (1) establece una relación causal sin evidencia entre el feminismo y el aumento de divorcios; (2) usa un lenguaje nostálgico ("antes las mujeres eran felices") que invisibiliza las desigualdades históricas; (3) ignora completamente la perspectiva de las mujeres y los beneficios reales del feminismo (derechos laborales, acceso a la educación, protección contra la violencia). La opción A confunde correlación con causalidad. La opción C es incorrecta: observar un dato sin establecer relaciones causales válidas no es pensamiento científico. La opción D es incorrecta: el discurso toma claramente una posición contraria al feminismo.',
        competencia: 'interpretacion',
        componente: 'multiperspectividad',
      },
    ],
  },

  // ===========================================================
  // LECTURA CRÍTICA (LENGUAJE)
  // ===========================================================
  lenguaje: {

    // ---------------------------------------------------------
    // SABER 9°
    // ---------------------------------------------------------
    'saber-9': [

      // 1. Semántico + identificar
      {
        id: 'lc-p-s9-01',
        enunciado: 'Lee el siguiente fragmento:\n\n"Los páramos son ecosistemas únicos del trópico andino. Su nombre proviene del latín paludem, que hace referencia a terrenos húmedos y pantanosos. En Colombia, los páramos regulan el ciclo del agua y abastecen a millones de personas; sin embargo, la minería y la expansión agropecuaria los han convertido en territorios en vilo."\n\nSegún el contexto del texto, la expresión "en vilo" significa que los páramos están:',
        opciones: [
          { letra: 'A', texto: 'En proceso de recuperación gracias a las políticas ambientales.' },
          { letra: 'B', texto: 'En una situación de riesgo e incertidumbre sobre su futuro.' },
          { letra: 'C', texto: 'En alto estado de conservación, libres de amenazas.' },
          { letra: 'D', texto: 'En zona de reserva internacional protegida.' },
        ],
        clave: 'B',
        justificacion: '"En vilo" es una expresión que indica una situación de suspenso, incertidumbre o peligro. El contexto confirma este sentido: el texto menciona que la minería y la expansión agropecuaria representan amenazas concretas para los páramos. Las opciones A, C y D contradicen el tono de alerta del párrafo, que presenta a los páramos como ecosistemas amenazados, no protegidos ni en recuperación.',
        competencia: 'identificar',
        componente: 'semantico',
      },

      // 2. Semántico + comprender
      {
        id: 'lc-p-s9-02',
        enunciado: 'Lee el siguiente párrafo:\n\n"La lectura no es un lujo reservado a los intelectuales: es una herramienta de emancipación al alcance de cualquier persona. Quien lee amplía su mundo, cuestiona la realidad y construye autonomía de pensamiento. En un país donde la desigualdad es estructural, el acceso a los libros debería ser una política pública prioritaria."\n\n¿Cuál es la idea principal del párrafo?',
        opciones: [
          { letra: 'A', texto: 'Solo los intelectuales tienen acceso real a la lectura en Colombia.' },
          { letra: 'B', texto: 'La lectura es un derecho fundamental que el Estado debe garantizar como herramienta de transformación social.' },
          { letra: 'C', texto: 'Los libros son caros y por eso la gente no lee en países desiguales.' },
          { letra: 'D', texto: 'La autonomía de pensamiento se logra únicamente a través de la educación formal.' },
        ],
        clave: 'B',
        justificacion: 'El párrafo argumenta que la lectura emancipa y que, dada la desigualdad del país, el acceso a los libros debe ser una prioridad del Estado. Esa es la tesis central: la lectura como herramienta de transformación que el Estado debe promover. La opción A contradice el texto, que dice que la lectura no es un privilegio exclusivo. La opción C es una inferencia no sustentada. La opción D limita la autonomía a la educación formal, lo que no dice el texto.',
        competencia: 'comprender',
        componente: 'semantico',
      },

      // 3. Sintáctico + comprender
      {
        id: 'lc-p-s9-03',
        enunciado: 'Lee el siguiente fragmento de un artículo de opinión:\n\n"El transporte público en Bogotá ha mejorado en infraestructura; no obstante, los usuarios siguen reportando problemas de puntualidad y cobertura en los barrios periféricos."\n\n¿Qué función cumple el conector "no obstante" en la oración?',
        opciones: [
          { letra: 'A', texto: 'Introduce una consecuencia de la mejora en infraestructura.' },
          { letra: 'B', texto: 'Indica una causa de los problemas de puntualidad.' },
          { letra: 'C', texto: 'Establece una relación de contraste entre dos ideas.' },
          { letra: 'D', texto: 'Señala una condición necesaria para que mejore el servicio.' },
        ],
        clave: 'C',
        justificacion: '"No obstante" es un conector adversativo o de contraste: introduce una idea que matiza, contradice o limita lo afirmado anteriormente. En el fragmento, contrasta la mejora en infraestructura (aspecto positivo) con los problemas persistentes de los usuarios (aspecto negativo). No expresa consecuencia (opción A), causa (opción B) ni condición (opción D).',
        competencia: 'comprender',
        componente: 'sintactico',
      },

      // 4. Pragmático + reflexionar (intención del autor)
      {
        id: 'lc-p-s9-04',
        enunciado: 'Lee el siguiente texto:\n\n"Señores del concejo municipal: los habitantes del barrio La Esperanza llevamos tres años solicitando la pavimentación de nuestra calle principal. Cada invierno, el barro impide el paso de ambulancias y niños al colegio. Exigimos que se incluya esta obra en el presupuesto del próximo año. La dignidad de nuestro barrio no puede seguir esperando."\n\n¿Cuál es la intención principal del autor de este texto?',
        opciones: [
          { letra: 'A', texto: 'Informar al concejo sobre las condiciones climáticas del barrio.' },
          { letra: 'B', texto: 'Narrar las dificultades cotidianas de los habitantes del barrio La Esperanza.' },
          { letra: 'C', texto: 'Persuadir al concejo para que tome una decisión favorable respecto a la pavimentación.' },
          { letra: 'D', texto: 'Describir el proceso histórico de abandono del barrio La Esperanza.' },
        ],
        clave: 'C',
        justificacion: 'El texto es una petición formal dirigida al concejo municipal. Su propósito es persuadir: el autor presenta argumentos (tiempo de espera, impacto en la comunidad) y formula una exigencia directa. Informar (opción A) y narrar (opción B) son funciones secundarias que sirven al propósito persuasivo, pero no son la intención principal. Describir historia (opción D) no corresponde al texto.',
        competencia: 'reflexionar',
        componente: 'pragmatico',
      },

      // 5. Pragmático + reflexionar (evaluación crítica)
      {
        id: 'lc-p-s9-05',
        enunciado: 'Lee el siguiente párrafo de un editorial:\n\n"Las redes sociales son la causa principal del deterioro académico de los jóvenes colombianos. Cualquier profesor puede confirmarlo: los estudiantes ya no saben leer ni escribir correctamente. Si se prohibieran los celulares en los colegios, las notas mejorarían de inmediato."\n\n¿Cuál es la principal debilidad argumentativa del texto?',
        opciones: [
          { letra: 'A', texto: 'El autor cita fuentes académicas que no son confiables.' },
          { letra: 'B', texto: 'El autor generaliza a partir de impresiones subjetivas sin presentar evidencia verificable.' },
          { letra: 'C', texto: 'El autor defiende una posición favorable a las redes sociales.' },
          { letra: 'D', texto: 'El texto carece de conclusión, por lo que no puede considerarse argumentativo.' },
        ],
        clave: 'B',
        justificacion: 'El editorial hace afirmaciones categóricas ("causa principal", "cualquier profesor puede confirmarlo", "mejorarían de inmediato") sin presentar datos, estudios o evidencia empírica. Apela a la opinión colectiva de los profesores como si fuera prueba suficiente, incurriendo en una generalización indebida. La opción A es incorrecta porque el texto no cita fuentes. La opción C contradice el contenido. La opción D es falsa: el texto sí tiene una conclusión (prohibir celulares).',
        competencia: 'reflexionar',
        componente: 'pragmatico',
      },
    ],

    // ---------------------------------------------------------
    // SABER 11°
    // ---------------------------------------------------------
    'saber-11': [

      // 1. Semántico + identificar (texto argumentativo)
      {
        id: 'lc-p-s11-01',
        enunciado: 'Lee el siguiente fragmento de un ensayo:\n\n"La inteligencia artificial no sustituye el pensamiento crítico; lo que amenaza es la disposición a delegarlo. Cuando una persona acepta sin cuestionamiento las conclusiones de un algoritmo —ya sea en diagnósticos médicos, veredictos judiciales o noticias— renuncia a la facultad más humana que posee: la capacidad de dudar. El peligro no está en la máquina, sino en la abdicación del sujeto."\n\n¿Cuál de las siguientes opciones recoge con mayor precisión la información que el autor presenta como el verdadero riesgo de la IA?',
        opciones: [
          { letra: 'A', texto: 'Que los algoritmos cometan errores en diagnósticos médicos y veredictos judiciales.' },
          { letra: 'B', texto: 'Que las personas renuncien a pensar críticamente y acepten pasivamente las decisiones de los algoritmos.' },
          { letra: 'C', texto: 'Que la inteligencia artificial reemplace a los profesionales en sus campos de trabajo.' },
          { letra: 'D', texto: 'Que las noticias generadas por IA sean falsas y distorsionen la realidad.' },
        ],
        clave: 'B',
        justificacion: 'El autor es explícito: "El peligro no está en la máquina, sino en la abdicación del sujeto." La amenaza identificada es que las personas cedan su capacidad crítica, no que los algoritmos fallen (opción A) ni que reemplacen empleos (opción C). La opción D refiere a las noticias, pero el texto la usa como ejemplo, no como el riesgo central. La opción B sintetiza con precisión la tesis del fragmento.',
        competencia: 'identificar',
        componente: 'semantico',
      },

      // 2. Semántico + comprender (sentido global / tesis)
      {
        id: 'lc-p-s11-02',
        enunciado: 'Lee el siguiente texto filosófico:\n\n"La libertad no puede fundarse en la ausencia de restricciones: esa concepción la confunde con el capricho. Una voluntad verdaderamente libre es aquella que se rige por una ley que ella misma se ha dado, no por el impulso momentáneo ni por la presión exterior. Ser libre, en sentido pleno, es ser autor de las normas que guían la propia conducta."\n\n¿Cuál es la tesis central del texto?',
        opciones: [
          { letra: 'A', texto: 'La libertad consiste en hacer lo que uno desee sin ningún tipo de restricción.' },
          { letra: 'B', texto: 'La verdadera libertad es aquella que se gobierna por leyes externas impuestas por la sociedad.' },
          { letra: 'C', texto: 'La libertad auténtica implica la autonomía: actuar según normas que uno mismo se ha dado racionalmente.' },
          { letra: 'D', texto: 'El capricho y el impulso son expresiones legítimas de la libertad individual.' },
        ],
        clave: 'C',
        justificacion: 'El texto, de corte kantiano, distingue entre libertad como ausencia de restricciones (que rechaza, llamándola "capricho") y la libertad como autonomía: la voluntad que se rige por una ley autolegislada. La tesis central es que la libertad verdadera es autonomía racional. La opción A representa exactamente la concepción que el autor critica. La opción B confunde la ley autoimpuesta con leyes externas. La opción D es otra posición que el texto rechaza explícitamente.',
        competencia: 'comprender',
        componente: 'semantico',
      },

      // 3. Sintáctico + comprender (estructura argumentativa / falacias)
      {
        id: 'lc-p-s11-03',
        enunciado: 'Lee el siguiente fragmento de un debate público:\n\n"El candidato Rodríguez propone reducir el presupuesto para ciencia y tecnología. No es de extrañar: él estudió en un colegio de provincia y nunca ha pisado una universidad de investigación. ¿Cómo va a entender alguien así la importancia del conocimiento?"\n\n¿Qué estrategia argumentativa INCORRECTA utiliza el autor del fragmento?',
        opciones: [
          { letra: 'A', texto: 'Apelación a la autoridad, porque cita expertos para refutar la propuesta.' },
          { letra: 'B', texto: 'Argumento ad hominem, porque ataca el origen del candidato en vez de evaluar su propuesta.' },
          { letra: 'C', texto: 'Analogía, porque compara la situación del candidato con la de otro funcionario.' },
          { letra: 'D', texto: 'Apelación a datos estadísticos, porque usa cifras para invalidar la propuesta.' },
        ],
        clave: 'B',
        justificacion: 'El fragmento no refuta la propuesta de reducir el presupuesto con argumentos sobre ciencia o economía, sino que descalifica al candidato por su origen educativo y geográfico. Eso es un argumento ad hominem: atacar a la persona en lugar de rebatir sus ideas. No hay apelación a autoridades (opción A), analogía (opción C) ni datos estadísticos (opción D) en el texto.',
        competencia: 'comprender',
        componente: 'sintactico',
      },

      // 4. Pragmático + reflexionar (supuestos e implicaciones)
      {
        id: 'lc-p-s11-04',
        enunciado: 'Lee el siguiente enunciado de un artículo de economía:\n\n"Solo cuando los países en desarrollo adopten plenamente el modelo de libre mercado podrán alcanzar el nivel de prosperidad de las naciones desarrolladas."\n\n¿Cuál de los siguientes supuestos subyace necesariamente a esta afirmación?',
        opciones: [
          { letra: 'A', texto: 'Los países desarrollados han alcanzado su prosperidad exclusivamente gracias al libre mercado.' },
          { letra: 'B', texto: 'Los países en desarrollo tienen recursos naturales suficientes para competir en el mercado global.' },
          { letra: 'C', texto: 'El libre mercado genera desigualdad y por eso los países pobres siguen siendo pobres.' },
          { letra: 'D', texto: 'La prosperidad de las naciones depende principalmente de su historia colonial.' },
        ],
        clave: 'A',
        justificacion: 'La afirmación establece que el libre mercado es la condición para que los países en desarrollo alcancen la prosperidad de los desarrollados. Para que este argumento funcione, debe asumir que los países desarrollados lograron su prosperidad mediante el libre mercado: ese es el supuesto implícito. Si ese supuesto fuera falso, el argumento caería. La opción B introduce una idea no implicada por el enunciado. Las opciones C y D contradicen la posición del texto.',
        competencia: 'reflexionar',
        componente: 'pragmatico',
      },

      // 5. Pragmático + reflexionar (estrategias retóricas)
      {
        id: 'lc-p-s11-05',
        enunciado: 'Lee el siguiente texto de divulgación científica:\n\n"Imagina que tu cerebro es una ciudad: las neuronas son los habitantes, las sinapsis son las calles y los neurotransmisores son los mensajeros que circulan entre ellas. Cuando aprendes algo nuevo, construyes una avenida donde antes había un camino de tierra. Así funciona la neuroplasticidad: la capacidad del cerebro de reorganizarse y crecer con la experiencia."\n\n¿Con qué propósito el autor usa la analogía de la ciudad?',
        opciones: [
          { letra: 'A', texto: 'Para demostrar que los cerebros humanos y las ciudades tienen la misma estructura física.' },
          { letra: 'B', texto: 'Para hacer accesible un concepto científico complejo mediante una comparación con algo cotidiano.' },
          { letra: 'C', texto: 'Para persuadir al lector de que debe estudiar neurociencia.' },
          { letra: 'D', texto: 'Para criticar la forma en que las ciudades están organizadas en comparación con el cerebro.' },
        ],
        clave: 'B',
        justificacion: 'La analogía ciudad-cerebro es una estrategia pedagógica y retórica que busca hacer comprensible la neuroplasticidad para un público no especializado, usando referencias cotidianas (ciudad, calles, mensajeros). No busca probar equivalencia estructural real (opción A), persuadir de estudiar neurociencia (opción C) ni criticar urbanismo (opción D). La función es explicativa y divulgativa: acercar un concepto técnico al lector general.',
        competencia: 'reflexionar',
        componente: 'pragmatico',
      },
    ],
  },
  // ===========================================================
  // INGLÉS
  // ===========================================================
  ingles: {

    // ---------------------------------------------------------
    // SABER 11°
    // ---------------------------------------------------------
    'saber-11': [

      // 1. Comprensión de lectura — idea principal (comprension-lectura / lexical)
      {
        id: 'eng-s11-p01',
        enunciado: 'Read the following text and answer the question.\n\n"Recycling is one of the most important habits we can adopt to protect the environment. When we recycle paper, glass, and plastic, we reduce the amount of waste that ends up in landfills. This simple action also saves energy and natural resources. However, recycling alone is not enough; we also need to reduce our consumption and reuse materials whenever possible."\n\nWhat is the main idea of the text?',
        opciones: [
          { letra: 'A', texto: 'Landfills are the biggest environmental problem in modern cities.' },
          { letra: 'B', texto: 'Recycling paper, glass, and plastic is easy and fun.' },
          { letra: 'C', texto: 'Recycling is important, but protecting the environment also requires reducing consumption and reusing materials.' },
          { letra: 'D', texto: 'We should only focus on saving energy to protect the environment.' },
        ],
        clave: 'C',
        justificacion: 'El texto afirma que reciclar es importante, pero añade que no es suficiente por sí solo: también es necesario reducir el consumo y reutilizar materiales. La opción A reduce el problema a los vertederos. La opción B trivializa el mensaje. La opción D ignora el reciclaje y la reutilización mencionados en el texto.',
        competencia: 'comprension-lectura',
        componente: 'lexical',
      },

      // 2. Uso de la lengua — tiempos verbales (uso-lengua / gramatical)
      {
        id: 'eng-s11-p02',
        enunciado: 'Choose the option that correctly completes the sentence.\n\n"By the time we arrived at the station, the train ______ already ______."',
        opciones: [
          { letra: 'A', texto: 'had / left' },
          { letra: 'B', texto: 'has / left' },
          { letra: 'C', texto: 'was / leaving' },
          { letra: 'D', texto: 'will have / left' },
        ],
        clave: 'A',
        justificacion: 'La oración describe dos acciones pasadas: llegar a la estación y la salida del tren, que ocurrió antes de la llegada. En inglés, la acción anterior se expresa con el Past Perfect (had + participio pasado). La opción B usa Present Perfect, incorrecto para contexto pasado. La opción C usa Past Continuous, que no expresa anterioridad. La opción D usa Future Perfect, que no corresponde a contexto pasado.',
        competencia: 'uso-lengua',
        componente: 'gramatical',
      },

      // 3. Comprensión de lectura — vocabulario en contexto (comprension-lectura / lexical)
      {
        id: 'eng-s11-p03',
        enunciado: 'Read the following sentence and answer the question.\n\n"The scientist\'s groundbreaking discovery changed the way we understand the human brain forever."\n\nWhat does the word "groundbreaking" mean in this context?',
        opciones: [
          { letra: 'A', texto: 'Dangerous and controversial.' },
          { letra: 'B', texto: 'Revolutionary and highly significant.' },
          { letra: 'C', texto: 'Related to digging in the ground.' },
          { letra: 'D', texto: 'Old-fashioned and outdated.' },
        ],
        clave: 'B',
        justificacion: '"Groundbreaking" en inglés significa innovador o revolucionario, es decir, algo que rompe con lo establecido y tiene gran importancia. El contexto lo confirma: el descubrimiento cambió para siempre la comprensión del cerebro humano. La opción A agrega connotación negativa que no está en el texto. La opción C interpreta la palabra de forma literal (relacionada con el suelo). La opción D es lo opuesto al significado correcto.',
        competencia: 'comprension-lectura',
        componente: 'lexical',
      },

      // 4. Uso de la lengua — pragmática y actos de habla (uso-lengua / pragmatico)
      {
        id: 'eng-s11-p04',
        enunciado: 'Read the following dialogue.\n\nA: "I\'m really sorry I forgot your birthday. I feel terrible about it."\nB: "______"\n\nWhich response best fits the context?',
        opciones: [
          { letra: 'A', texto: '"Don\'t worry about it. It happens to everyone."' },
          { letra: 'B', texto: '"Birthdays are very important to me."' },
          { letra: 'C', texto: '"I have a lot of friends who forgot my birthday too."' },
          { letra: 'D', texto: '"I will call you tomorrow to discuss this."' },
        ],
        clave: 'A',
        justificacion: 'A expresa una disculpa sincera. La respuesta más pragmáticamente adecuada es aceptar la disculpa y minimizar el daño, lo que hace la opción A. La opción B solo menciona la importancia de los cumpleaños sin responder a la disculpa. La opción C desvía la conversación hacia otros. La opción D pospone una respuesta de manera innecesaria y no corresponde al contexto emocional.',
        competencia: 'uso-lengua',
        componente: 'pragmatico',
      },

      // 5. Comprensión de lectura — inferencia (comprension-lectura / pragmatico)
      {
        id: 'eng-s11-p05',
        enunciado: 'Read the following text and answer the question.\n\n"Maria studied engineering for five years. After graduating, she worked in a construction company for two years. She then decided to go back to university to get a master\'s degree in sustainable architecture. Today, she designs eco-friendly buildings in three different countries."\n\nWhat can be inferred about Maria?',
        opciones: [
          { letra: 'A', texto: 'She prefers to live and work in one country only.' },
          { letra: 'B', texto: 'She abandoned her engineering career to become an architect.' },
          { letra: 'C', texto: 'She is committed to professional growth and has an international career.' },
          { letra: 'D', texto: 'She found her first job difficult and that is why she returned to university.' },
        ],
        clave: 'C',
        justificacion: 'A partir del texto se puede inferir que María ha invertido continuamente en su formación (ingeniería, maestría en arquitectura sostenible) y trabaja en tres países, lo que indica compromiso con el desarrollo profesional y una carrera internacional. La opción A contradice la información (trabaja en tres países). La opción B es incorrecta porque complementó, no abandonó, su carrera. La opción D es una suposición no sustentada en el texto.',
        competencia: 'comprension-lectura',
        componente: 'pragmatico',
      },
    ],
  },

};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PREGUNTAS_ICFES };
}
