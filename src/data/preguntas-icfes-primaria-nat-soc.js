/**
 * Banco de Preguntas ICFES Primaria — Ciencias Naturales y Ciencias Sociales
 * Archivo temporal para merge con preguntas-icfes-primaria.js
 *
 * Áreas cubiertas:
 *   - Ciencias Naturales: Saber 3° (20 preguntas) y Saber 5° (20 preguntas)
 *   - Ciencias Sociales: Saber 3° (20 preguntas) y Saber 5° (20 preguntas)
 *
 * Formato de ID: {area}-p-{prueba}-{numero}
 *   nat  = Ciencias Naturales
 *   soc  = Ciencias Sociales
 *   p    = primaria
 *   s3   = Saber 3°
 *   s5   = Saber 5°
 *
 * Preguntas originales inspiradas en el formato y nivel de dificultad
 * de las pruebas Saber 3° y Saber 5° de Colombia.
 * NO son preguntas copiadas de exámenes oficiales.
 */

// =====================================================
// CIENCIAS NATURALES — Saber 3°
// =====================================================
PREGUNTAS_ICFES['ciencias-naturales']['saber-3'] = [

  // 1. Entorno vivo + uso-conocimiento
  {
    id: 'nat-p-s3-01',
    enunciado: 'María observa en su jardín una mariposa, una piedra, una flor y un charco de agua. ¿Cuáles de estos son seres vivos?',
    opciones: [
      { letra: 'A', texto: 'La piedra y el charco de agua.' },
      { letra: 'B', texto: 'La mariposa y la flor.' },
      { letra: 'C', texto: 'La mariposa, la flor y el charco de agua.' },
      { letra: 'D', texto: 'La piedra, la mariposa y la flor.' },
    ],
    clave: 'B',
    justificacion: 'Los seres vivos se caracterizan por crecer, reproducirse, alimentarse y responder al entorno. La mariposa y la flor cumplen todas estas características. La piedra y el charco de agua son objetos y sustancias sin vida.',
    competencia: 'uso-conocimiento',
    componente: 'entorno-vivo',
  },

  // 2. Entorno vivo + explicacion
  {
    id: 'nat-p-s3-02',
    enunciado: 'Un árbol de mango tiene raíces, tallo, hojas, flores y frutos. ¿Cuál es la función principal de las raíces?',
    opciones: [
      { letra: 'A', texto: 'Fabricar el alimento de la planta usando la luz del sol.' },
      { letra: 'B', texto: 'Atraer a los insectos para que polinicen la planta.' },
      { letra: 'C', texto: 'Absorber el agua y los nutrientes del suelo.' },
      { letra: 'D', texto: 'Producir los frutos y las semillas.' },
    ],
    clave: 'C',
    justificacion: 'Las raíces tienen como función principal absorber el agua y los nutrientes minerales del suelo, los cuales son transportados hacia el resto de la planta. La fotosíntesis ocurre en las hojas (opción A), las flores atraen polinizadores (opción B) y los frutos y semillas se producen a partir de las flores (opción D).',
    competencia: 'explicacion',
    componente: 'entorno-vivo',
  },

  // 3. Entorno vivo + uso-conocimiento
  {
    id: 'nat-p-s3-03',
    enunciado: 'El ciclo de vida de una rana pasa por los siguientes estados: huevo, renacuajo, rana joven y rana adulta. ¿Qué característica tienen en común TODOS estos estados del ciclo de vida?',
    opciones: [
      { letra: 'A', texto: 'Todos tienen cuatro patas para moverse.' },
      { letra: 'B', texto: 'Todos son seres vivos que crecen y cambian.' },
      { letra: 'C', texto: 'Todos viven únicamente dentro del agua.' },
      { letra: 'D', texto: 'Todos pueden reproducirse para tener crías.' },
    ],
    clave: 'B',
    justificacion: 'En todos los estados del ciclo de vida de la rana, el organismo es un ser vivo que crece y experimenta cambios. El huevo no tiene patas (elimina A). El renacuajo vive en el agua pero la rana adulta vive en tierra y agua (elimina C). Solo la rana adulta puede reproducirse (elimina D).',
    competencia: 'uso-conocimiento',
    componente: 'entorno-vivo',
  },

  // 4. Entorno vivo + explicacion
  {
    id: 'nat-p-s3-04',
    enunciado: 'En la selva amazónica de Colombia viven el jaguar, el mono aullador, el tucán y el delfín rosado. ¿Cómo se alimenta el jaguar?',
    opciones: [
      { letra: 'A', texto: 'Se alimenta de frutas y semillas del bosque.' },
      { letra: 'B', texto: 'Se alimenta de luz solar como las plantas.' },
      { letra: 'C', texto: 'Caza otros animales como el capibara y el venado.' },
      { letra: 'D', texto: 'Se alimenta únicamente de peces del río.' },
    ],
    clave: 'C',
    justificacion: 'El jaguar es un animal carnívoro que caza presas como el capibara, el venado y otros mamíferos. No es herbívoro (elimina A), no realiza fotosíntesis (elimina B), y aunque puede cazar peces, su dieta no se limita únicamente a ellos (elimina D).',
    competencia: 'explicacion',
    componente: 'entorno-vivo',
  },

  // 5. Entorno vivo + uso-conocimiento
  {
    id: 'nat-p-s3-05',
    enunciado: 'Carlos tiene una pecera con peces tropicales, una planta acuática y una roca decorativa. ¿Cuál de los siguientes grupos clasifica correctamente los elementos de la pecera?',
    opciones: [
      { letra: 'A', texto: 'Seres vivos: peces, planta, roca. Sin vida: agua.' },
      { letra: 'B', texto: 'Seres vivos: peces, planta. Sin vida: roca, agua.' },
      { letra: 'C', texto: 'Seres vivos: peces, roca. Sin vida: planta, agua.' },
      { letra: 'D', texto: 'Seres vivos: planta, roca. Sin vida: peces, agua.' },
    ],
    clave: 'B',
    justificacion: 'Los peces y la planta acuática son seres vivos porque crecen, se reproducen y responden al entorno. La roca es un objeto inerte y el agua es una sustancia sin vida. Por esto la clasificación correcta es: seres vivos: peces y planta; sin vida: roca y agua.',
    competencia: 'uso-conocimiento',
    componente: 'entorno-vivo',
  },

  // 6. Entorno fisico + uso-conocimiento
  {
    id: 'nat-p-s3-06',
    enunciado: 'Una estudiante tiene tres objetos: una esponja blanda, una piedra dura y un trozo de tela suave. ¿Qué propiedad usa para diferenciarlos?',
    opciones: [
      { letra: 'A', texto: 'El color, porque cada objeto tiene un color diferente.' },
      { letra: 'B', texto: 'La dureza, porque unos son blandos y otros son duros.' },
      { letra: 'C', texto: 'El tamaño, porque unos son más grandes que otros.' },
      { letra: 'D', texto: 'La temperatura, porque unos están fríos y otros calientes.' },
    ],
    clave: 'B',
    justificacion: 'La propiedad que permite diferenciar la esponja blanda, la piedra dura y la tela suave es la dureza, que describe qué tan resistente es un material a ser rayado o deformado. El color, el tamaño y la temperatura no son las propiedades mencionadas en la descripción de los objetos.',
    competencia: 'uso-conocimiento',
    componente: 'entorno-fisico',
  },

  // 7. Entorno fisico + explicacion
  {
    id: 'nat-p-s3-07',
    enunciado: 'Ana pone agua en la nevera y al día siguiente nota que se convirtió en hielo. ¿Qué cambio de estado ocurrió?',
    opciones: [
      { letra: 'A', texto: 'De sólido a líquido, porque el hielo se derrite.' },
      { letra: 'B', texto: 'De gaseoso a líquido, porque el vapor se convierte en agua.' },
      { letra: 'C', texto: 'De líquido a sólido, porque el agua se congeló.' },
      { letra: 'D', texto: 'De sólido a gaseoso, porque el hielo se evapora.' },
    ],
    clave: 'C',
    justificacion: 'Cuando el agua (estado líquido) se enfría hasta su punto de congelación (0°C), pasa al estado sólido convirtiéndose en hielo. Este cambio se llama solidificación o congelación: de líquido a sólido. Las otras opciones describen cambios diferentes: fusión (A), condensación (B) y sublimación (D).',
    competencia: 'explicacion',
    componente: 'entorno-fisico',
  },

  // 8. Entorno fisico + uso-conocimiento
  {
    id: 'nat-p-s3-08',
    enunciado: 'Juliana mezcla azúcar con agua y agita bien hasta que el azúcar desaparece. ¿Qué observa Juliana?',
    opciones: [
      { letra: 'A', texto: 'El azúcar desapareció para siempre porque se destruyó.' },
      { letra: 'B', texto: 'El agua se volvió sólida porque se mezcló con azúcar.' },
      { letra: 'C', texto: 'El azúcar se disolvió y el agua quedó más dulce.' },
      { letra: 'D', texto: 'Se formó un nuevo material diferente al agua y al azúcar.' },
    ],
    clave: 'C',
    justificacion: 'Cuando el azúcar se mezcla con agua, se disuelve: sus pequeñas partículas se dispersan en el agua de manera uniforme. El azúcar no desaparece ni se destruye (elimina A), el agua sigue siendo líquida (elimina B), y no se forma un material completamente nuevo ya que el azúcar puede recuperarse evaporando el agua (elimina D).',
    competencia: 'uso-conocimiento',
    componente: 'entorno-fisico',
  },

  // 9. Entorno fisico + uso-conocimiento
  {
    id: 'nat-p-s3-09',
    enunciado: 'Un niño tiene estos objetos: un clavo de metal, un borrador de caucho, un papel y una bolsa plástica. ¿Cuál de estos objetos es el más rígido (no se dobla fácilmente)?',
    opciones: [
      { letra: 'A', texto: 'El borrador de caucho.' },
      { letra: 'B', texto: 'El papel.' },
      { letra: 'C', texto: 'El clavo de metal.' },
      { letra: 'D', texto: 'La bolsa plástica.' },
    ],
    clave: 'C',
    justificacion: 'La rigidez es la propiedad de los materiales que indica qué tan difícil es doblarlos o deformarlos. El clavo de metal es el material más rígido de la lista porque el metal resiste la deformación. El caucho, el papel y el plástico son más flexibles y se pueden doblar con menor esfuerzo.',
    competencia: 'uso-conocimiento',
    componente: 'entorno-fisico',
  },

  // 10. CTS + indagacion
  {
    id: 'nat-p-s3-10',
    enunciado: 'Luis quiere saber si las plantas crecen más rápido cuando les da agua todos los días o cada tres días. ¿Cuál sería la mejor manera de explorar esta pregunta?',
    opciones: [
      { letra: 'A', texto: 'Preguntar a sus amigos cuál creen que es la respuesta.' },
      { letra: 'B', texto: 'Buscar la respuesta en una enciclopedia y creerla sin comprobarlo.' },
      { letra: 'C', texto: 'Sembrar dos plantas iguales y regar una a diario y la otra cada tres días, luego medir su crecimiento.' },
      { letra: 'D', texto: 'Sembrar una sola planta y regar una semana a diario y la siguiente semana no regarla.' },
    ],
    clave: 'C',
    justificacion: 'Para explorar la pregunta de manera científica, Luis debe comparar dos condiciones diferentes manteniendo todo lo demás igual. Sembrar dos plantas iguales y regar una a diario y la otra cada tres días le permite observar el efecto de la frecuencia de riego. Las otras opciones no son experimentos controlados porque no establecen una comparación justa.',
    competencia: 'indagacion',
    componente: 'cts',
  },

  // 11. CTS + indagacion
  {
    id: 'nat-p-s3-11',
    enunciado: 'En el colegio de Valeria hay una quebrada cercana. Los estudiantes notan que el agua está de color café y huele mal. ¿Qué acción humana es más probable que esté contaminando la quebrada?',
    opciones: [
      { letra: 'A', texto: 'Los pájaros que beben agua de la quebrada.' },
      { letra: 'B', texto: 'Las lluvias fuertes que caen en la montaña.' },
      { letra: 'C', texto: 'Las basuras que algunas personas arrojan al agua.' },
      { letra: 'D', texto: 'Las plantas que crecen en las orillas de la quebrada.' },
    ],
    clave: 'C',
    justificacion: 'La contaminación del agua (color café, mal olor) es causada principalmente por acciones humanas como arrojar basuras, aguas residuales o desechos industriales. Los pájaros, las lluvias y las plantas orilleras son parte del ecosistema natural y no causan este tipo de contaminación.',
    competencia: 'indagacion',
    componente: 'cts',
  },

  // 12. CTS + uso-conocimiento
  {
    id: 'nat-p-s3-12',
    enunciado: 'El colegio está organizando una campaña para cuidar el medio ambiente. ¿Cuál de las siguientes acciones ayuda MÁS a cuidar los recursos naturales del entorno?',
    opciones: [
      { letra: 'A', texto: 'Dejar el grifo del agua abierto mientras uno se cepilla los dientes.' },
      { letra: 'B', texto: 'Usar bolsas plásticas nuevas cada vez que se va al mercado.' },
      { letra: 'C', texto: 'Separar las basuras en orgánicas, plástico y papel para reciclar.' },
      { letra: 'D', texto: 'Encender todas las luces de la casa aunque haya luz natural.' },
    ],
    clave: 'C',
    justificacion: 'Separar las basuras para reciclar ayuda a reducir la cantidad de residuos que van a los rellenos sanitarios, permite reutilizar materiales y ahorra recursos naturales. Las otras opciones (dejar el grifo abierto, usar bolsas plásticas, encender luces innecesarias) desperdician recursos o generan más contaminación.',
    competencia: 'uso-conocimiento',
    componente: 'cts',
  },

  // 13. Entorno vivo + explicacion
  {
    id: 'nat-p-s3-13',
    enunciado: 'La gallina pone huevos y de ellos nacen los pollitos. El perro tiene cachorros que nacen vivos. ¿En qué se diferencian la gallina y el perro en su forma de reproducirse?',
    opciones: [
      { letra: 'A', texto: 'La gallina se reproduce sexualmente y el perro no se reproduce.' },
      { letra: 'B', texto: 'La gallina pone huevos (ovípara) y el perro da a luz crías vivas (vivíparo).' },
      { letra: 'C', texto: 'El perro pone huevos y la gallina tiene cachorros vivos.' },
      { letra: 'D', texto: 'Los dos ponen huevos pero de tamaños diferentes.' },
    ],
    clave: 'B',
    justificacion: 'Los animales se clasifican según su reproducción: los ovíparos como la gallina ponen huevos en los que se desarrolla la cría; los vivíparos como el perro desarrollan la cría dentro del vientre materno y la dan a luz viva. Las otras opciones invierten los conceptos o los confunden.',
    competencia: 'explicacion',
    componente: 'entorno-vivo',
  },

  // 14. Entorno vivo + uso-conocimiento
  {
    id: 'nat-p-s3-14',
    enunciado: 'En la costa Pacífica colombiana viven las ballenas jorobadas, que llegan cada año a tener sus crías. Las ballenas son mamíferos. ¿Qué característica de los mamíferos comparten las ballenas con los perros y los gatos?',
    opciones: [
      { letra: 'A', texto: 'Todos viven en el agua y respiran por branquias.' },
      { letra: 'B', texto: 'Todos tienen escamas y ponen huevos.' },
      { letra: 'C', texto: 'Las madres alimentan a sus crías con leche.' },
      { letra: 'D', texto: 'Todos tienen plumas y pueden volar.' },
    ],
    clave: 'C',
    justificacion: 'Una característica fundamental de todos los mamíferos, ya sea la ballena, el perro o el gato, es que las hembras producen leche para alimentar a sus crías. Las ballenas no respiran por branquias (A), no tienen escamas ni ponen huevos (B), y no tienen plumas ni vuelan (D).',
    competencia: 'uso-conocimiento',
    componente: 'entorno-vivo',
  },

  // 15. Entorno fisico + explicacion
  {
    id: 'nat-p-s3-15',
    enunciado: 'Sebastián mezcla aceite con agua y agita el recipiente. Después de un momento observa que el aceite y el agua se separan solas. ¿Por qué sucede esto?',
    opciones: [
      { letra: 'A', texto: 'Porque el aceite es más caliente que el agua.' },
      { letra: 'B', texto: 'Porque el aceite y el agua tienen propiedades diferentes y no se mezclan bien.' },
      { letra: 'C', texto: 'Porque el aceite se convierte en gas y sube.' },
      { letra: 'D', texto: 'Porque el agua destruye el aceite al mezclarlos.' },
    ],
    clave: 'B',
    justificacion: 'El agua y el aceite tienen propiedades físicas y químicas diferentes que hacen que no se disuelvan entre sí. El aceite es menos denso que el agua y no es afín a ella (inmiscible), por lo que al agitarlos y dejarlos en reposo se separan naturalmente, quedando el aceite encima. No es cuestión de temperatura (A), el aceite no se convierte en gas (C), ni el agua destruye el aceite (D).',
    competencia: 'explicacion',
    componente: 'entorno-fisico',
  },

  // 16. Entorno fisico + indagacion
  {
    id: 'nat-p-s3-16',
    enunciado: 'Andrea quiere saber qué materiales se hunden y cuáles flotan en el agua. Tiene una moneda, un corcho, un clip metálico y una hoja de papel. ¿Cómo debería hacer para descubrirlo?',
    opciones: [
      { letra: 'A', texto: 'Preguntarle a su profesora cuáles flotan sin hacer ninguna prueba.' },
      { letra: 'B', texto: 'Meter cada objeto uno por uno en un recipiente con agua y observar qué pasa.' },
      { letra: 'C', texto: 'Soplar cada objeto para ver si vuela, porque si vuela también flota.' },
      { letra: 'D', texto: 'Probar solo la moneda y asumir que todos los metales se hunden.' },
    ],
    clave: 'B',
    justificacion: 'Para responder la pregunta de manera científica, Andrea debe hacer una observación directa metiendo cada objeto en el agua. Esto le permite recolectar datos reales y sacar conclusiones propias. Las otras opciones no son métodos válidos: preguntar sin probar (A), soplar no tiene relación con flotar en agua (C), y generalizar a partir de un solo objeto sin probar los demás (D) no es adecuado.',
    competencia: 'indagacion',
    componente: 'entorno-fisico',
  },

  // 17. Entorno vivo + uso-conocimiento
  {
    id: 'nat-p-s3-17',
    enunciado: 'El colibrí es un pájaro pequeño que se alimenta del néctar de las flores. La orquídea produce néctar dulce para atraer al colibrí. Cuando el colibrí visita la flor, transporta el polen de una flor a otra. ¿Qué beneficio obtiene la orquídea de esta relación?',
    opciones: [
      { letra: 'A', texto: 'La orquídea recibe alimento del colibrí a cambio del néctar.' },
      { letra: 'B', texto: 'El colibrí ayuda a la orquídea a reproducirse al transportar su polen.' },
      { letra: 'C', texto: 'La orquídea aprende a volar gracias al colibrí.' },
      { letra: 'D', texto: 'El colibrí protege a la orquídea de los insectos que la pueden dañar.' },
    ],
    clave: 'B',
    justificacion: 'Al transportar el polen de una flor a otra, el colibrí ayuda a la orquídea en la polinización, proceso fundamental para que la planta pueda producir semillas y reproducirse. La orquídea no recibe alimento del colibrí (A), las plantas no aprenden a volar (C), y aunque el colibrí puede espantar insectos, la principal función en este caso es la polinización (D).',
    competencia: 'uso-conocimiento',
    componente: 'entorno-vivo',
  },

  // 18. Entorno fisico + explicacion
  {
    id: 'nat-p-s3-18',
    enunciado: 'En un día muy caliente, Daniel deja un cubo de hielo sobre la mesa. Después de un rato el hielo se convierte en agua. ¿Cómo se llama este cambio de estado?',
    opciones: [
      { letra: 'A', texto: 'Evaporación, porque el hielo se convierte en vapor.' },
      { letra: 'B', texto: 'Congelación, porque el agua se solidifica.' },
      { letra: 'C', texto: 'Fusión, porque el sólido se convierte en líquido.' },
      { letra: 'D', texto: 'Condensación, porque el gas se convierte en líquido.' },
    ],
    clave: 'C',
    justificacion: 'Cuando un sólido (hielo) recibe calor y pasa al estado líquido (agua), el cambio se llama fusión. La evaporación es cuando un líquido pasa a gas (A), la congelación es lo contrario: de líquido a sólido (B), y la condensación es cuando el gas pasa a líquido (D).',
    competencia: 'explicacion',
    componente: 'entorno-fisico',
  },

  // 19. CTS + indagacion
  {
    id: 'nat-p-s3-19',
    enunciado: 'Los estudiantes de tercero grado quieren saber si la basura que botan en el patio del colegio afecta a los animales que viven allí. ¿Cuál es la mejor pregunta de indagación para explorar este tema?',
    opciones: [
      { letra: 'A', texto: '¿De qué color son las basuras del colegio?' },
      { letra: 'B', texto: '¿Cuántos estudiantes hay en el colegio?' },
      { letra: 'C', texto: '¿Qué efecto tiene la basura sobre los animales que viven en el patio del colegio?' },
      { letra: 'D', texto: '¿Qué comida es la preferida de los estudiantes?' },
    ],
    clave: 'C',
    justificacion: 'Una buena pregunta de indagación científica debe ser específica, observable y relacionada con el fenómeno que se quiere estudiar. La opción C pregunta directamente sobre el efecto de la basura sobre los animales, lo cual puede responderse mediante observación y recolección de datos. Las otras opciones no están relacionadas con el tema de estudio o no son preguntas científicas sobre el fenómeno.',
    competencia: 'indagacion',
    componente: 'cts',
  },

  // 20. CTS + uso-conocimiento
  {
    id: 'nat-p-s3-20',
    enunciado: 'En el barrio de Camila hay una fábrica que bota humo negro al aire todos los días. Los vecinos dicen que desde que llegó la fábrica, muchos niños tienen problemas para respirar. ¿Qué concluyes de esta situación?',
    opciones: [
      { letra: 'A', texto: 'El humo negro es bueno porque significa que la fábrica produce muchos productos.' },
      { letra: 'B', texto: 'La contaminación del aire producida por la fábrica puede afectar la salud de las personas.' },
      { letra: 'C', texto: 'Los niños tienen problemas respiratorios porque no se abrigan bien.' },
      { letra: 'D', texto: 'El humo negro de la fábrica no tiene relación con la salud de los vecinos.' },
    ],
    clave: 'B',
    justificacion: 'El humo negro es un contaminante del aire que contiene partículas y gases nocivos. La contaminación del aire puede causar o agravar enfermedades respiratorias. La relación entre la llegada de la fábrica y el aumento de problemas respiratorios en los niños indica que la contaminación del aire afecta la salud de las personas. Las otras opciones ignoran o niegan esta relación.',
    competencia: 'uso-conocimiento',
    componente: 'cts',
  },

];

// =====================================================
// CIENCIAS NATURALES — Saber 5°
// =====================================================
PREGUNTAS_ICFES['ciencias-naturales']['saber-5'] = [

  // 1. Entorno vivo + uso-conocimiento
  {
    id: 'nat-p-s5-01',
    enunciado: 'El sistema digestivo humano transforma los alimentos en nutrientes que el cuerpo puede usar. ¿En qué orden correcto pasan los alimentos por el sistema digestivo?',
    opciones: [
      { letra: 'A', texto: 'Boca → estómago → intestino delgado → intestino grueso → ano.' },
      { letra: 'B', texto: 'Boca → intestino delgado → estómago → intestino grueso → ano.' },
      { letra: 'C', texto: 'Estómago → boca → intestino delgado → intestino grueso → ano.' },
      { letra: 'D', texto: 'Boca → intestino grueso → estómago → intestino delgado → ano.' },
    ],
    clave: 'A',
    justificacion: 'El recorrido correcto de los alimentos en el sistema digestivo es: boca (masticación y primera digestión química), esófago (transporte), estómago (digestión ácida), intestino delgado (absorción de nutrientes), intestino grueso (absorción de agua) y ano (eliminación). La opción A describe correctamente este recorrido.',
    competencia: 'uso-conocimiento',
    componente: 'entorno-vivo',
  },

  // 2. Entorno vivo + explicacion
  {
    id: 'nat-p-s5-02',
    enunciado: 'El corazón bombea sangre a todo el cuerpo. La sangre lleva oxígeno desde los pulmones hasta los músculos y otros órganos. ¿Qué sistema del cuerpo trabaja junto al sistema circulatorio para asegurar que la sangre lleve oxígeno?',
    opciones: [
      { letra: 'A', texto: 'El sistema digestivo, porque digiere los alimentos que dan energía.' },
      { letra: 'B', texto: 'El sistema respiratorio, porque toma el oxígeno del aire y lo entrega a la sangre.' },
      { letra: 'C', texto: 'El sistema óseo, porque los huesos producen la sangre.' },
      { letra: 'D', texto: 'El sistema muscular, porque los músculos mueven la sangre.' },
    ],
    clave: 'B',
    justificacion: 'El sistema respiratorio y el circulatorio trabajan juntos: los pulmones (sistema respiratorio) toman el oxígeno del aire y lo transfieren a la sangre, y el corazón (sistema circulatorio) bombea esa sangre oxigenada a todo el cuerpo. Aunque los huesos producen células sanguíneas (no el corazón), la función de oxigenación corresponde al sistema respiratorio.',
    competencia: 'explicacion',
    componente: 'entorno-vivo',
  },

  // 3. Entorno vivo + explicacion
  {
    id: 'nat-p-s5-03',
    enunciado: 'En un ecosistema de los Andes colombianos existe la siguiente cadena alimentaria: pasto → conejo → zorro → águila. Si los cazadores eliminan todos los zorros, ¿qué ocurriría con la población de conejos?',
    opciones: [
      { letra: 'A', texto: 'La población de conejos disminuiría porque no tendrían quién los proteja.' },
      { letra: 'B', texto: 'La población de conejos aumentaría porque no tendrían depredador que los controle.' },
      { letra: 'C', texto: 'La población de conejos no cambiaría porque el zorro no es importante.' },
      { letra: 'D', texto: 'La población de conejos desaparecería porque depende del zorro para sobrevivir.' },
    ],
    clave: 'B',
    justificacion: 'En una cadena alimentaria, los depredadores controlan la población de sus presas. Si desaparecen los zorros (depredadores de los conejos), los conejos no tendrán quién los cace y su población aumentará sin control. Esto puede alterar el equilibrio del ecosistema, afectando también al pasto y al águila.',
    competencia: 'explicacion',
    componente: 'entorno-vivo',
  },

  // 4. Entorno vivo + uso-conocimiento
  {
    id: 'nat-p-s5-04',
    enunciado: 'En la selva amazónica de Colombia, los productores son las plantas, los consumidores primarios son los insectos herbívoros, los consumidores secundarios son las ranas y los consumidores terciarios son las serpientes. ¿Qué rol cumple la rana en esta cadena alimentaria?',
    opciones: [
      { letra: 'A', texto: 'Productor, porque fabrica su propio alimento mediante fotosíntesis.' },
      { letra: 'B', texto: 'Consumidor primario, porque se alimenta directamente de plantas.' },
      { letra: 'C', texto: 'Consumidor secundario, porque se alimenta de insectos herbívoros.' },
      { letra: 'D', texto: 'Descomponedor, porque descompone la materia orgánica muerta.' },
    ],
    clave: 'C',
    justificacion: 'La rana come insectos herbívoros (que a su vez comen plantas). Como está en el segundo nivel de consumo (come a quien come plantas), es un consumidor secundario. No produce su propio alimento (elimina A), no come plantas directamente (elimina B), y no descompone materia orgánica (elimina D).',
    competencia: 'uso-conocimiento',
    componente: 'entorno-vivo',
  },

  // 5. Entorno fisico + uso-conocimiento
  {
    id: 'nat-p-s5-05',
    enunciado: 'Elena tiene agua con arena en un vaso. Quiere separar la arena del agua. ¿Cuál es el método más adecuado?',
    opciones: [
      { letra: 'A', texto: 'Evaporación, porque calienta el agua hasta que se evapora.' },
      { letra: 'B', texto: 'Filtración, porque pasa la mezcla por un filtro que retiene la arena.' },
      { letra: 'C', texto: 'Imantación, porque usa un imán para atraer la arena.' },
      { letra: 'D', texto: 'Destilación, porque hierve la mezcla para separarla.' },
    ],
    clave: 'B',
    justificacion: 'La filtración es el método adecuado para separar un sólido no disuelto (arena) de un líquido (agua). El filtro retiene las partículas sólidas y deja pasar el líquido. La evaporación sirve para separar un sólido disuelto del líquido (A), la imantación solo funciona con materiales magnéticos como el hierro (C), y la destilación sirve para separar líquidos con distintos puntos de ebullición (D).',
    competencia: 'uso-conocimiento',
    componente: 'entorno-fisico',
  },

  // 6. Entorno fisico + uso-conocimiento
  {
    id: 'nat-p-s5-06',
    enunciado: '¿Cuál de las siguientes mezclas es una mezcla HOMOGÉNEA?',
    opciones: [
      { letra: 'A', texto: 'Agua con aceite, porque las dos partes se pueden ver por separado.' },
      { letra: 'B', texto: 'Ensalada de frutas, porque se ven los diferentes trozos.' },
      { letra: 'C', texto: 'Agua con sal disuelta, porque el agua y la sal no se distinguen a simple vista.' },
      { letra: 'D', texto: 'Agua con arroz, porque el arroz flota en el agua.' },
    ],
    clave: 'C',
    justificacion: 'Una mezcla homogénea es aquella en que los componentes no se distinguen a simple vista y la composición es uniforme en toda la mezcla. El agua con sal disuelta es homogénea porque la sal se disuelve completamente. El agua con aceite, la ensalada de frutas y el agua con arroz son mezclas heterogéneas porque se pueden distinguir sus componentes.',
    competencia: 'uso-conocimiento',
    componente: 'entorno-fisico',
  },

  // 7. Entorno fisico + explicacion
  {
    id: 'nat-p-s5-07',
    enunciado: 'Cuando enciendes una bombilla eléctrica, la energía eléctrica se transforma en luz y calor. ¿Cuál es la afirmación CORRECTA sobre esta transformación de energía?',
    opciones: [
      { letra: 'A', texto: 'La energía se destruye dentro de la bombilla para producir luz.' },
      { letra: 'B', texto: 'La energía eléctrica se transforma en luz y calor, conservándose la energía total.' },
      { letra: 'C', texto: 'La energía crece dentro de la bombilla porque se produce más luz que electricidad hay.' },
      { letra: 'D', texto: 'La energía se crea de la nada en la bombilla para producir luz.' },
    ],
    clave: 'B',
    justificacion: 'La ley de conservación de la energía establece que la energía no se crea ni se destruye, solo se transforma. En una bombilla, la energía eléctrica se convierte en energía luminosa (luz) y energía calorífica (calor), pero la cantidad total de energía permanece constante. Las otras opciones violan este principio fundamental.',
    competencia: 'explicacion',
    componente: 'entorno-fisico',
  },

  // 8. Entorno fisico + explicacion
  {
    id: 'nat-p-s5-08',
    enunciado: 'Un ciclista pedalea cuesta arriba en las montañas de Boyacá. Al subir la pendiente, ¿qué tipo de energía está ganando principalmente?',
    opciones: [
      { letra: 'A', texto: 'Energía cinética, porque se mueve a gran velocidad.' },
      { letra: 'B', texto: 'Energía térmica, porque el esfuerzo genera calor en sus piernas.' },
      { letra: 'C', texto: 'Energía potencial gravitacional, porque está ganando altura.' },
      { letra: 'D', texto: 'Energía química, porque sus músculos usan glucosa.' },
    ],
    clave: 'C',
    justificacion: 'La energía potencial gravitacional es la energía almacenada en un objeto debido a su posición elevada. Al subir la pendiente, el ciclista gana altura y por lo tanto aumenta su energía potencial gravitacional. Si bien también genera calor (energía térmica) y usa energía química, el principal tipo de energía que se acumula al ganar altura es la energía potencial gravitacional.',
    competencia: 'explicacion',
    componente: 'entorno-fisico',
  },

  // 9. Entorno fisico + uso-conocimiento
  {
    id: 'nat-p-s5-09',
    enunciado: 'Un tren sale de Bogotá a las 8:00 a.m. y llega a Medellín a las 2:00 p.m. La distancia entre las dos ciudades es de 420 km. ¿Cuál es la velocidad promedio del tren?',
    opciones: [
      { letra: 'A', texto: '60 km/h' },
      { letra: 'B', texto: '70 km/h' },
      { letra: 'C', texto: '80 km/h' },
      { letra: 'D', texto: '420 km/h' },
    ],
    clave: 'B',
    justificacion: 'La velocidad promedio se calcula dividiendo la distancia recorrida entre el tiempo empleado. El tren viajó 6 horas (de 8 a.m. a 2 p.m.) y recorrió 420 km. Velocidad = 420 km ÷ 6 h = 70 km/h. Las otras opciones no corresponden a este cálculo correcto.',
    competencia: 'uso-conocimiento',
    componente: 'entorno-fisico',
  },

  // 10. CTS + indagacion
  {
    id: 'nat-p-s5-10',
    enunciado: 'Sofía quiere saber si la temperatura del agua afecta qué tan rápido se disuelve el azúcar. Ella prepara dos vasos: uno con agua fría y otro con agua caliente, y añade la misma cantidad de azúcar a cada uno. ¿Qué variable está cambiando Sofía en su experimento?',
    opciones: [
      { letra: 'A', texto: 'La cantidad de azúcar, porque añade más en uno que en otro.' },
      { letra: 'B', texto: 'El tipo de recipiente, porque usa vasos diferentes.' },
      { letra: 'C', texto: 'La temperatura del agua, porque un vaso tiene agua fría y el otro agua caliente.' },
      { letra: 'D', texto: 'El tipo de azúcar, porque usa azúcar diferente en cada vaso.' },
    ],
    clave: 'C',
    justificacion: 'En un experimento controlado, la variable independiente es la que el investigador cambia deliberadamente. Sofía cambia la temperatura del agua (agua fría vs. agua caliente) mientras mantiene todo lo demás igual (misma cantidad de azúcar, mismo tipo de recipiente, mismo tipo de azúcar). Por eso la variable que está cambiando es la temperatura del agua.',
    competencia: 'indagacion',
    componente: 'cts',
  },

  // 11. CTS + indagacion
  {
    id: 'nat-p-s5-11',
    enunciado: 'En los últimos años, la deforestación en el Amazonas colombiano ha aumentado. Los científicos reportan que varias especies de animales han perdido su hábitat. ¿Cuál es la consecuencia MÁS DIRECTA de la deforestación sobre los animales del bosque?',
    opciones: [
      { letra: 'A', texto: 'Los animales aprenden a construir casas como los humanos.' },
      { letra: 'B', texto: 'Los animales pierden su hábitat y fuentes de alimento, lo que amenaza su supervivencia.' },
      { letra: 'C', texto: 'Los animales se vuelven más fuertes porque tienen que esforzarse más para encontrar comida.' },
      { letra: 'D', texto: 'Los animales no se ven afectados porque pueden sobrevivir en cualquier lugar.' },
    ],
    clave: 'B',
    justificacion: 'La deforestación destruye el hábitat natural de los animales, eliminando los lugares donde viven, se alimentan y se reproducen. Esto amenaza directamente su supervivencia y puede llevar a la disminución o extinción de especies. Las otras opciones son incorrectas porque los animales no construyen casas (A), perder el hábitat no los hace más fuertes sino que los pone en peligro (C), y los animales especializados sí dependen de su hábitat específico (D).',
    competencia: 'indagacion',
    componente: 'cts',
  },

  // 12. CTS + uso-conocimiento
  {
    id: 'nat-p-s5-12',
    enunciado: 'La minería a cielo abierto en algunas regiones de Colombia usa mercurio para extraer el oro, contaminando ríos y afectando a las comunidades cercanas. ¿Qué tipo de relación existe entre esta actividad tecnológica y el ambiente?',
    opciones: [
      { letra: 'A', texto: 'Es una relación positiva porque la minería crea empleos y no afecta el ambiente.' },
      { letra: 'B', texto: 'Es una relación negativa porque la minería contamina el agua y afecta los ecosistemas.' },
      { letra: 'C', texto: 'No hay ninguna relación entre la minería y el ambiente.' },
      { letra: 'D', texto: 'Es una relación positiva porque el mercurio purifica el agua de los ríos.' },
    ],
    clave: 'B',
    justificacion: 'La minería con mercurio tiene efectos negativos sobre el ambiente: el mercurio es un metal tóxico que contamina ríos y suelos, afecta la salud de personas y animales, y destruye ecosistemas acuáticos. Aunque la minería puede generar empleo, sus impactos ambientales negativos son evidentes y bien documentados. El mercurio es un contaminante, no purifica el agua.',
    competencia: 'uso-conocimiento',
    componente: 'cts',
  },

  // 13. Entorno vivo + indagacion
  {
    id: 'nat-p-s5-13',
    enunciado: 'Un grupo de estudiantes observa que las plantas del salón que están cerca de la ventana crecen hacia la luz. Ellos formulan la hipótesis: "Las plantas crecen hacia la fuente de luz." ¿Cuál experimento permite comprobar esta hipótesis?',
    opciones: [
      { letra: 'A', texto: 'Poner una planta en un cuarto completamente oscuro y medir su crecimiento.' },
      { letra: 'B', texto: 'Poner una planta en una caja con un agujero lateral por donde entra luz, y observar hacia dónde crece.' },
      { letra: 'C', texto: 'Regar una planta con agua caliente y otra con agua fría, y comparar su crecimiento.' },
      { letra: 'D', texto: 'Sembrar dos plantas y abonar una sí y otra no, y medir cuál crece más.' },
    ],
    clave: 'B',
    justificacion: 'Para comprobar que las plantas crecen hacia la fuente de luz, el experimento debe crear una situación donde la luz venga de una sola dirección. La caja con un agujero lateral dirige la luz desde un solo lado, permitiendo observar si la planta se inclina hacia ese lado. Las otras opciones prueban variables diferentes (oscuridad total, temperatura del agua, abono) que no responden la hipótesis planteada.',
    competencia: 'indagacion',
    componente: 'entorno-vivo',
  },

  // 14. Entorno vivo + explicacion
  {
    id: 'nat-p-s5-14',
    enunciado: 'El sistema excretor elimina los desechos del cuerpo. Los riñones filtran la sangre y producen orina. ¿Qué ocurriría si los riñones dejaran de funcionar correctamente?',
    opciones: [
      { letra: 'A', texto: 'El cuerpo produciría más energía para compensar el fallo de los riñones.' },
      { letra: 'B', texto: 'Los desechos se acumularían en la sangre, afectando la salud de todo el cuerpo.' },
      { letra: 'C', texto: 'El sistema digestivo asumiría la función de los riñones sin ningún problema.' },
      { letra: 'D', texto: 'Nada cambiaría porque el cuerpo puede vivir sin eliminar desechos.' },
    ],
    clave: 'B',
    justificacion: 'Los riñones filtran la sangre eliminando desechos como la urea. Si fallan, los desechos se acumularían en la sangre (uremia), causando intoxicación y afectando el funcionamiento de todos los órganos. El cuerpo no produce más energía para compensar (A), el sistema digestivo no puede asumir esa función (C), y la acumulación de desechos es mortal si no se trata (D).',
    competencia: 'explicacion',
    componente: 'entorno-vivo',
  },

  // 15. Entorno fisico + indagacion
  {
    id: 'nat-p-s5-15',
    enunciado: 'Un estudiante mide la temperatura del agua cada 5 minutos mientras la calienta al fuego y registra los datos en esta tabla:\n\nTiempo: 0, 5, 10, 15, 20 min\nTemperatura: 20, 40, 60, 80, 100 °C\n\n¿Qué conclusión se puede sacar de estos datos?',
    opciones: [
      { letra: 'A', texto: 'La temperatura baja 20°C cada 5 minutos.' },
      { letra: 'B', texto: 'La temperatura sube 20°C cada 5 minutos de manera constante.' },
      { letra: 'C', texto: 'La temperatura sube de forma irregular, a veces más y a veces menos.' },
      { letra: 'D', texto: 'La temperatura no cambia con el tiempo de calentamiento.' },
    ],
    clave: 'B',
    justificacion: 'Analizando los datos: en cada intervalo de 5 minutos la temperatura sube 20°C (20→40, 40→60, 60→80, 80→100). Este incremento constante indica que el calentamiento es uniforme y la temperatura sube 20°C cada 5 minutos de manera regular. Las otras opciones no corresponden a los datos de la tabla.',
    competencia: 'indagacion',
    componente: 'entorno-fisico',
  },

  // 16. CTS + indagacion
  {
    id: 'nat-p-s5-16',
    enunciado: 'Las vacunas han salvado millones de vidas al prevenir enfermedades como la polio y el sarampión. Sin embargo, algunos padres se niegan a vacunar a sus hijos. ¿Cuál es la afirmación que mejor representa la relación ciencia-tecnología-sociedad en este caso?',
    opciones: [
      { letra: 'A', texto: 'Las vacunas son malas porque los padres que las rechazan siempre tienen razón.' },
      { letra: 'B', texto: 'La ciencia desarrolló las vacunas (tecnología) para proteger la salud pública, pero su uso depende de decisiones sociales y culturales.' },
      { letra: 'C', texto: 'Las vacunas no tienen ningún efecto sobre las enfermedades y son innecesarias.' },
      { letra: 'D', texto: 'La sociedad no tiene ninguna influencia en el uso de los avances científicos.' },
    ],
    clave: 'B',
    justificacion: 'La relación CTS reconoce que la ciencia genera conocimiento (cómo funciona el sistema inmune), la tecnología lo aplica (vacunas), pero la sociedad decide si acepta y usa esa tecnología según sus valores, creencias y cultura. Las vacunas tienen eficacia científica comprobada (elimina A y C), y la sociedad sí influye en el uso de los avances científicos (elimina D).',
    competencia: 'indagacion',
    componente: 'cts',
  },

  // 17. Entorno vivo + uso-conocimiento
  {
    id: 'nat-p-s5-17',
    enunciado: 'Colombia es uno de los países con mayor biodiversidad del mundo. En la región Pacífica hay manglares, en los Andes hay páramos y en la Amazonía hay selva tropical. ¿Por qué es importante proteger estos ecosistemas?',
    opciones: [
      { letra: 'A', texto: 'Porque son ecosistemas decorativos que embellecen el paisaje colombiano.' },
      { letra: 'B', texto: 'Porque albergan miles de especies únicas y prestan servicios vitales como purificar el agua y el aire.' },
      { letra: 'C', texto: 'Porque son lugares donde los humanos pueden construir ciudades.' },
      { letra: 'D', texto: 'Porque todos los animales del mundo viven exclusivamente en Colombia.' },
    ],
    clave: 'B',
    justificacion: 'Los ecosistemas como manglares, páramos y selvas son fundamentales porque albergan una gran diversidad de especies (biodiversidad), regulan el clima, purifican el agua y el aire, y proveen recursos vitales para las comunidades humanas. No son simples elementos decorativos (A), no son lugares para construir ciudades (C), y aunque Colombia tiene alta biodiversidad, no todos los animales del mundo viven allí (D).',
    competencia: 'uso-conocimiento',
    componente: 'entorno-vivo',
  },

  // 18. Entorno fisico + uso-conocimiento
  {
    id: 'nat-p-s5-18',
    enunciado: 'Miguel tiene una mezcla de limaduras de hierro y arena. ¿Cuál es el método más eficiente para separar el hierro de la arena?',
    opciones: [
      { letra: 'A', texto: 'Filtración, porque la arena es más grande que el hierro.' },
      { letra: 'B', texto: 'Evaporación, porque el hierro se evapora antes que la arena.' },
      { letra: 'C', texto: 'Imantación, porque un imán atrae el hierro pero no la arena.' },
      { letra: 'D', texto: 'Destilación, porque los dos materiales tienen diferente punto de ebullición.' },
    ],
    clave: 'C',
    justificacion: 'El hierro es un metal magnético, es decir, es atraído por los imanes. Pasando un imán por la mezcla, las limaduras de hierro se adhieren al imán mientras la arena (que no es magnética) queda separada. La filtración no funciona porque las partículas son del mismo tamaño (A), el hierro no se evapora fácilmente (B), y la destilación es para líquidos (D).',
    competencia: 'uso-conocimiento',
    componente: 'entorno-fisico',
  },

  // 19. CTS + uso-conocimiento
  {
    id: 'nat-p-s5-19',
    enunciado: 'Los paneles solares transforman la energía del sol en electricidad. ¿Cuál es el principal beneficio ambiental del uso de paneles solares en comparación con las plantas de carbón?',
    opciones: [
      { letra: 'A', texto: 'Los paneles solares generan más electricidad que cualquier otra fuente de energía.' },
      { letra: 'B', texto: 'Los paneles solares no emiten gases de efecto invernadero al generar electricidad.' },
      { letra: 'C', texto: 'Los paneles solares son más baratos que las plantas de carbón en todos los casos.' },
      { letra: 'D', texto: 'Los paneles solares funcionan mejor de noche que de día.' },
    ],
    clave: 'B',
    justificacion: 'El principal beneficio ambiental de los paneles solares es que no emiten CO₂ ni otros gases de efecto invernadero durante la generación de electricidad, a diferencia de las plantas de carbón que queman combustibles fósiles y liberan gases contaminantes. No siempre generan más electricidad (A), su costo depende del contexto (C), y funcionan con luz solar, no de noche (D).',
    competencia: 'uso-conocimiento',
    componente: 'cts',
  },

  // 20. Entorno vivo + indagacion
  {
    id: 'nat-p-s5-20',
    enunciado: 'Un científico estudia los efectos de la contaminación del río Bogotá sobre los peces que viven en él. Encuentra que donde hay mayor concentración de desechos industriales, hay menos tipos de peces. ¿Qué conclusión puede sacar a partir de esta observación?',
    opciones: [
      { letra: 'A', texto: 'Los peces prefieren vivir en aguas contaminadas porque hay más alimento.' },
      { letra: 'B', texto: 'La contaminación industrial del río parece reducir la diversidad de especies de peces.' },
      { letra: 'C', texto: 'La contaminación no tiene ningún efecto sobre los seres vivos del río.' },
      { letra: 'D', texto: 'Los peces desaparecen de los ríos porque los humanos los pescan demasiado.' },
    ],
    clave: 'B',
    justificacion: 'Los datos muestran una relación entre mayor contaminación industrial y menor diversidad de peces. La conclusión más adecuada es que la contaminación industrial parece reducir la diversidad de especies. No se puede afirmar que los peces prefieren aguas contaminadas (A), los datos muestran efecto negativo de la contaminación (C), y la pesca no es la variable estudiada en este caso (D).',
    competencia: 'indagacion',
    componente: 'entorno-vivo',
  },

];

// =====================================================
// CIENCIAS SOCIALES — Saber 3°
// =====================================================
PREGUNTAS_ICFES['ciencias-sociales']['saber-3'] = [

  // 1. Conocimientos sociales + pensamiento-social
  {
    id: 'soc-p-s3-01',
    enunciado: 'El municipio de Salento está ubicado en las montañas del Eje Cafetero colombiano. Sus habitantes cultivan café y hacen artesanías de guadua. ¿Por qué el relieve montañoso influye en la vida de las personas de Salento?',
    opciones: [
      { letra: 'A', texto: 'Porque en las montañas no hay agua y las personas deben buscarla muy lejos.' },
      { letra: 'B', texto: 'Porque el clima frío de las montañas es adecuado para cultivar café y vivir de la agricultura.' },
      { letra: 'C', texto: 'Porque en las montañas solo se puede pescar y no se puede cultivar nada.' },
      { letra: 'D', texto: 'Porque el relieve montañoso no tiene ninguna relación con las actividades de las personas.' },
    ],
    clave: 'B',
    justificacion: 'El relieve montañoso del Eje Cafetero tiene un clima frío y húmedo que es ideal para el cultivo del café, la principal actividad económica de la región. Las características del paisaje determinan directamente las actividades que las personas pueden realizar. Las montañas sí tienen agua (A), sí se puede cultivar (C), y el relieve sí influye en la vida de las personas (D).',
    competencia: 'pensamiento-social',
    componente: 'conocimientos-sociales',
  },

  // 2. Multiperspectividad + pensamiento-social
  {
    id: 'soc-p-s3-02',
    enunciado: 'En el colegio de Tomás hay una norma que dice que todos deben llegar a tiempo. Algunos estudiantes creen que esta norma no sirve para nada. ¿Para qué sirven las normas de convivencia en una comunidad?',
    opciones: [
      { letra: 'A', texto: 'Para que el director del colegio tenga más autoridad y poder sobre todos.' },
      { letra: 'B', texto: 'Para favorecer la convivencia pacífica y el bienestar de todos los miembros de la comunidad.' },
      { letra: 'C', texto: 'Para castigar a quienes no obedecen, sin importar el bien común.' },
      { letra: 'D', texto: 'Para que solo algunos estudiantes puedan participar en las actividades del colegio.' },
    ],
    clave: 'B',
    justificacion: 'Las normas de convivencia son acuerdos que una comunidad establece para que todos puedan vivir juntos de manera pacífica y organizada. Buscan el bienestar colectivo, no solo el control o el castigo. No se crean para dar poder a una persona (A), no se centran solo en el castigo (C), ni para excluir a personas (D).',
    competencia: 'pensamiento-social',
    componente: 'multiperspectividad',
  },

  // 3. Conocimientos sociales + pensamiento-social
  {
    id: 'soc-p-s3-03',
    enunciado: 'La abuela de Valentina le muestra fotos de cuando era niña. En esas fotos se ve que antes las personas viajaban a caballo y no había televisores. ¿Qué comparación puedes hacer entre el pasado y el presente?',
    opciones: [
      { letra: 'A', texto: 'En el pasado la vida era exactamente igual que hoy en día.' },
      { letra: 'B', texto: 'En el pasado no existían las personas, todo comenzó hace pocos años.' },
      { letra: 'C', texto: 'En el pasado los medios de transporte y la tecnología eran diferentes a los de hoy.' },
      { letra: 'D', texto: 'En el pasado las personas no trabajaban ni tenían familias.' },
    ],
    clave: 'C',
    justificacion: 'Las fotos antiguas son fuentes primarias que muestran cómo era la vida antes. Comparando el pasado con el presente, se puede observar que los medios de transporte y la tecnología han cambiado: antes se usaban caballos para viajar y no existían los televisores. La vida humana siempre ha existido (elimina B), sí ha habido cambios (elimina A), y siempre han existido el trabajo y las familias (elimina D).',
    competencia: 'pensamiento-social',
    componente: 'conocimientos-sociales',
  },

  // 4. Multiperspectividad + interpretacion
  {
    id: 'soc-p-s3-04',
    enunciado: 'En Colombia conviven personas indígenas, afrocolombianas, mestizas y raizales, cada una con sus propias tradiciones, lenguas y costumbres. ¿Por qué es importante respetar estas diferencias culturales?',
    opciones: [
      { letra: 'A', texto: 'Porque todas las culturas deben ser iguales y tener las mismas costumbres.' },
      { letra: 'B', texto: 'Porque la diversidad cultural enriquece a la sociedad y nos permite aprender unos de otros.' },
      { letra: 'C', texto: 'Porque solo las costumbres de un grupo cultural son correctas y las demás están equivocadas.' },
      { letra: 'D', texto: 'Porque las personas con culturas diferentes no deben vivir en el mismo lugar.' },
    ],
    clave: 'B',
    justificacion: 'La diversidad cultural es una riqueza porque permite que las personas compartan diferentes saberes, tradiciones, lenguas y visiones del mundo. Respetar las diferencias culturales promueve la convivencia pacífica y el aprendizaje mutuo. Imponer uniformidad cultural (A), considerar que solo una cultura es correcta (C) o separar a las personas por su cultura (D) son formas de discriminación.',
    competencia: 'interpretacion',
    componente: 'multiperspectividad',
  },

  // 5. Argumentacion + pensamiento-social
  {
    id: 'soc-p-s3-05',
    enunciado: 'La Convención sobre los Derechos del Niño establece que todos los niños tienen derecho a la educación, a la salud y a una familia. En Colombia, ¿qué institución protege principalmente los derechos de los niños?',
    opciones: [
      { letra: 'A', texto: 'El ICBF (Instituto Colombiano de Bienestar Familiar).' },
      { letra: 'B', texto: 'La Policía de Tránsito.' },
      { letra: 'C', texto: 'La Superintendencia de Industria y Comercio.' },
      { letra: 'D', texto: 'El Ministerio de Hacienda.' },
    ],
    clave: 'A',
    justificacion: 'El Instituto Colombiano de Bienestar Familiar (ICBF) es la institución pública colombiana encargada de proteger los derechos de los niños, niñas y adolescentes, y de promover su bienestar y el de sus familias. Las otras instituciones tienen funciones diferentes: la Policía de Tránsito regula el tráfico (B), la SIC protege al consumidor (C), y el Ministerio de Hacienda maneja las finanzas del Estado (D).',
    competencia: 'pensamiento-social',
    componente: 'argumentacion',
  },

  // 6. Multiperspectividad + pensamiento-sistemico
  {
    id: 'soc-p-s3-06',
    enunciado: 'En el salón de clases de Andrea, los estudiantes deben elegir el nombre del equipo de trabajo. Ana propone "Los Tigres", Carlos propone "Los Cóndores" y María propone "Las Águilas". Deciden votar. ¿Por qué es importante respetar el resultado de la votación?',
    opciones: [
      { letra: 'A', texto: 'Porque el que propuso el nombre ganador tiene más derechos que los demás.' },
      { letra: 'B', texto: 'Porque la votación es una forma democrática de tomar decisiones respetando la opinión de la mayoría.' },
      { letra: 'C', texto: 'Porque solo la profesora puede decidir el nombre correcto.' },
      { letra: 'D', texto: 'Porque votar es obligatorio y quien no vota recibe un castigo.' },
    ],
    clave: 'B',
    justificacion: 'La votación es un mecanismo democrático de tomar decisiones colectivas. Respetar el resultado significa reconocer que la opinión de la mayoría es válida para el grupo. Ganar una votación no da más derechos (A), la democracia implica que todos participan, no solo la autoridad (C), y el respeto al voto es por convicción democrática, no por miedo al castigo (D).',
    competencia: 'pensamiento-sistemico',
    componente: 'multiperspectividad',
  },

  // 7. Conocimientos sociales + pensamiento-social
  {
    id: 'soc-p-s3-07',
    enunciado: 'La región Caribe colombiana tiene playas, mar y clima caliente. La región Andina tiene montañas, nevados y clima frío o templado. ¿Cómo influye el clima en la vestimenta de las personas que viven en cada región?',
    opciones: [
      { letra: 'A', texto: 'No influye, porque las personas de todas las regiones usan la misma ropa.' },
      { letra: 'B', texto: 'En la región Caribe usan ropa ligera por el calor, y en la Andina usan ropa más abrigada por el frío.' },
      { letra: 'C', texto: 'En la región Caribe usan ropa de lana gruesa y en la Andina usan vestidos de baño.' },
      { letra: 'D', texto: 'Las personas de las dos regiones no usan ropa porque hace siempre calor en Colombia.' },
    ],
    clave: 'B',
    justificacion: 'El clima determina la vestimenta de las personas: en el caliente Caribe se usa ropa ligera, fresca y de colores claros; en la fría región Andina se usan prendas más gruesas como chaquetas y ruanas. La ropa se adapta a las condiciones climáticas del entorno donde viven las personas.',
    competencia: 'pensamiento-social',
    componente: 'conocimientos-sociales',
  },

  // 8. Conocimientos sociales + pensamiento-social
  {
    id: 'soc-p-s3-08',
    enunciado: 'El río Magdalena es el río más importante de Colombia. Las comunidades que viven a sus orillas pescan, navegan y obtienen agua de él. ¿Qué tipo de accidente geográfico es el río Magdalena?',
    opciones: [
      { letra: 'A', texto: 'Una montaña, porque es una elevación natural del terreno.' },
      { letra: 'B', texto: 'Un valle, porque es una depresión entre montañas.' },
      { letra: 'C', texto: 'Un río, porque es una corriente de agua dulce que corre por el territorio.' },
      { letra: 'D', texto: 'Una isla, porque está rodeado de agua por todos lados.' },
    ],
    clave: 'C',
    justificacion: 'El río Magdalena es un río: una corriente continua de agua dulce que fluye por un cauce natural desde las montañas hasta el mar. Una montaña es una elevación del terreno (A), un valle es un espacio bajo entre montañas (B), y una isla es una extensión de tierra rodeada de agua (D). El río Magdalena no corresponde a ninguna de estas definiciones.',
    competencia: 'pensamiento-social',
    componente: 'conocimientos-sociales',
  },

  // 9. Multiperspectividad + interpretacion
  {
    id: 'soc-p-s3-09',
    enunciado: 'En el pueblo de Lucas, los niños indígenas wayuu hablan en wayuunaiki en casa y aprenden español en el colegio. ¿Qué muestra esta situación sobre la diversidad cultural en Colombia?',
    opciones: [
      { letra: 'A', texto: 'Que los niños wayuu no deben hablar español porque deben preservar solo su lengua.' },
      { letra: 'B', texto: 'Que Colombia tiene grupos étnicos con lenguas propias que coexisten con el español.' },
      { letra: 'C', texto: 'Que el español debe reemplazar todas las lenguas indígenas de Colombia.' },
      { letra: 'D', texto: 'Que en Colombia no hay diversidad cultural porque todos van al mismo colegio.' },
    ],
    clave: 'B',
    justificacion: 'La situación muestra que Colombia es un país plurilingüe y multicultural: los niños wayuu tienen su propia lengua (wayuunaiki) como parte de su identidad cultural, y al mismo tiempo aprenden español para comunicarse con el resto del país. Esto refleja la convivencia de diferentes culturas y lenguas en Colombia. Las opciones A y C promueven la eliminación de una u otra lengua, y la opción D niega la diversidad cultural que sí existe.',
    competencia: 'interpretacion',
    componente: 'multiperspectividad',
  },

  // 10. Argumentacion + pensamiento-social
  {
    id: 'soc-p-s3-10',
    enunciado: 'Daniela tiene 8 años y su vecino mayor de 15 años la obliga a cargar bolsas pesadas del mercado en lugar de ir al colegio. ¿Qué derecho de Daniela está siendo vulnerado?',
    opciones: [
      { letra: 'A', texto: 'El derecho al trabajo, porque Daniela debe trabajar para ayudar a su familia.' },
      { letra: 'B', texto: 'El derecho a la educación, porque no puede ir al colegio.' },
      { letra: 'C', texto: 'El derecho al voto, porque Daniela no puede elegir sus representantes.' },
      { letra: 'D', texto: 'El derecho a la vivienda, porque Daniela no tiene casa propia.' },
    ],
    clave: 'B',
    justificacion: 'Al impedirle asistir al colegio, se vulnera el derecho fundamental de Daniela a la educación, reconocido en la Convención sobre los Derechos del Niño y en la Constitución colombiana. Los niños menores de 15 años no tienen derecho al trabajo sino a la protección contra el trabajo infantil (A). El derecho al voto se ejerce a los 18 años (C), y el derecho a la vivienda no está relacionado con esta situación (D).',
    competencia: 'pensamiento-social',
    componente: 'argumentacion',
  },

  // 11. Conocimientos sociales + pensamiento-social
  {
    id: 'soc-p-s3-11',
    enunciado: 'El personero estudiantil es un representante elegido por los estudiantes del colegio para defender sus derechos. ¿Qué tipo de participación representa la elección del personero?',
    opciones: [
      { letra: 'A', texto: 'Participación deportiva, porque el personero también juega en el equipo del colegio.' },
      { letra: 'B', texto: 'Participación democrática, porque los estudiantes eligen a su representante mediante el voto.' },
      { letra: 'C', texto: 'Participación artística, porque el personero organiza eventos culturales.' },
      { letra: 'D', texto: 'Participación científica, porque el personero estudia los problemas del colegio.' },
    ],
    clave: 'B',
    justificacion: 'La elección del personero estudiantil mediante el voto de los estudiantes es un ejercicio de democracia escolar. Es una forma de participación democrática en la que los ciudadanos (en este caso, los estudiantes) eligen a sus representantes para que defiendan sus intereses. Las otras opciones describen actividades diferentes que no corresponden a la definición de democracia.',
    competencia: 'pensamiento-social',
    componente: 'conocimientos-sociales',
  },

  // 12. Conocimientos sociales + pensamiento-social
  {
    id: 'soc-p-s3-12',
    enunciado: 'Las comunidades afrocolombianas del Pacífico colombiano hacen música con el tambor, bailan el currulao y preparan recetas tradicionales con coco y mariscos. ¿Cómo se llama el conjunto de costumbres, tradiciones y formas de vida de un grupo de personas?',
    opciones: [
      { letra: 'A', texto: 'Geografía, porque tiene que ver con la región donde viven.' },
      { letra: 'B', texto: 'Economía, porque tiene que ver con el trabajo y el dinero.' },
      { letra: 'C', texto: 'Cultura, porque incluye las tradiciones, música, gastronomía y formas de vida de un grupo.' },
      { letra: 'D', texto: 'Política, porque tiene que ver con las leyes del país.' },
    ],
    clave: 'C',
    justificacion: 'La cultura es el conjunto de costumbres, tradiciones, lengua, música, gastronomía, creencias y formas de vida que caracterizan a un grupo humano. La música de tambores, el currulao y la gastronomía afrocolombiana son expresiones culturales. La geografía estudia el territorio (A), la economía estudia la producción y el dinero (B), y la política estudia las formas de gobierno (D).',
    competencia: 'pensamiento-social',
    componente: 'conocimientos-sociales',
  },

  // 13. Multiperspectividad + pensamiento-social
  {
    id: 'soc-p-s3-13',
    enunciado: 'Roberto y Camila se pelean porque los dos quieren usar el mismo balón en el recreo. La profesora les dice que busquen una solución. ¿Cuál es la mejor solución para resolver este conflicto de manera pacífica?',
    opciones: [
      { letra: 'A', texto: 'Que Roberto guarde el balón para que Camila no lo pueda usar nunca.' },
      { letra: 'B', texto: 'Que se turnen el balón: Roberto juega la primera mitad del recreo y Camila la segunda.' },
      { letra: 'C', texto: 'Que la profesora castigue a Camila porque Roberto llegó primero.' },
      { letra: 'D', texto: 'Que ninguno de los dos use el balón para que el conflicto se resuelva.' },
    ],
    clave: 'B',
    justificacion: 'La mejor solución a un conflicto es aquella que beneficia a todas las partes involucradas. Turnarse el balón es una solución justa y pacífica que respeta los derechos de ambos niños. Excluir a uno de los dos (A y C) no es una solución justa, y quitarles el balón a los dos (D) tampoco resuelve el conflicto de manera satisfactoria para ninguno.',
    competencia: 'pensamiento-social',
    componente: 'multiperspectividad',
  },

  // 14. Conocimientos sociales + pensamiento-social
  {
    id: 'soc-p-s3-14',
    enunciado: 'En la ciudad de Bogotá hay muchos edificios altos, transporte masivo y millones de personas. En el municipio de Pueblo Rico (Risaralda) hay pocas personas, calles sin pavimentar y mucha naturaleza. ¿Qué diferencia hay entre estos dos lugares?',
    opciones: [
      { letra: 'A', texto: 'Bogotá es un municipio rural y Pueblo Rico es una ciudad urbana.' },
      { letra: 'B', texto: 'Bogotá es una ciudad urbana grande y Pueblo Rico es un municipio más pequeño y rural.' },
      { letra: 'C', texto: 'Los dos lugares son exactamente iguales porque los dos están en Colombia.' },
      { letra: 'D', texto: 'Pueblo Rico tiene más edificios altos que Bogotá porque es más moderno.' },
    ],
    clave: 'B',
    justificacion: 'Bogotá es la capital de Colombia, una gran ciudad urbana con alta densidad de población, infraestructura desarrollada y transporte masivo. Pueblo Rico es un municipio pequeño con características más rurales, menor población y mayor contacto con la naturaleza. Bogotá no es rural (A), no son iguales (C), y Bogotá tiene muchos más edificios que Pueblo Rico (D).',
    competencia: 'pensamiento-social',
    componente: 'conocimientos-sociales',
  },

  // 15. Multiperspectividad + interpretacion
  {
    id: 'soc-p-s3-15',
    enunciado: 'La bisabuela de Juan le cuenta que cuando ella era niña, las mujeres no podían votar en Colombia. Hoy en día, las mujeres tienen exactamente los mismos derechos políticos que los hombres. ¿Qué cambio histórico muestra esta historia?',
    opciones: [
      { letra: 'A', texto: 'Que en el pasado Colombia era un país más justo que hoy.' },
      { letra: 'B', texto: 'Que los derechos de las personas pueden cambiar con el tiempo como resultado de luchas sociales.' },
      { letra: 'C', texto: 'Que las mujeres nunca han tenido derechos en Colombia.' },
      { letra: 'D', texto: 'Que el derecho al voto no es importante para la democracia.' },
    ],
    clave: 'B',
    justificacion: 'La historia del derecho al voto femenino en Colombia (reconocido en 1954) muestra que los derechos políticos pueden conquistarse y ampliarse con el tiempo gracias a las luchas de los movimientos sociales. El pasado era menos justo en cuanto a igualdad de género (elimina A), las mujeres sí han logrado derechos a lo largo de la historia (elimina C), y el voto es un derecho fundamental en una democracia (elimina D).',
    competencia: 'interpretacion',
    componente: 'multiperspectividad',
  },

  // 16. Argumentacion + pensamiento-social
  {
    id: 'soc-p-s3-16',
    enunciado: 'En el barrio de Lucía, hay una norma que prohíbe botar basura en la calle. Algunos vecinos no la cumplen y el barrio está sucio. ¿Por qué es importante que todos cumplan las normas de convivencia?',
    opciones: [
      { letra: 'A', texto: 'Porque las normas existen solo para beneficiar a los más ricos del barrio.' },
      { letra: 'B', texto: 'Porque cuando todos cumplen las normas, el barrio es más limpio, seguro y agradable para todos.' },
      { letra: 'C', texto: 'Porque solo la policía debe preocuparse por el cumplimiento de las normas.' },
      { letra: 'D', texto: 'Porque las normas son imposibles de cumplir y no sirven para nada.' },
    ],
    clave: 'B',
    justificacion: 'Las normas de convivencia funcionan cuando todos los miembros de la comunidad las cumplen. Si todos respetan la norma de no botar basura, el barrio se mantiene limpio y agradable para vivir. El bien común depende de la responsabilidad colectiva. Las normas no benefician solo a algunos (A), todos somos responsables de cumplirlas, no solo la policía (C), y las normas son posibles de cumplir y necesarias (D).',
    competencia: 'pensamiento-social',
    componente: 'argumentacion',
  },

  // 17. Conocimientos sociales + pensamiento-social
  {
    id: 'soc-p-s3-17',
    enunciado: 'El abuelo de Mariana usa fotos, cartas antiguas y objetos de su infancia para contarle cómo era la vida hace 60 años. ¿Cómo se llaman estos objetos y documentos del pasado que sirven para conocer la historia?',
    opciones: [
      { letra: 'A', texto: 'Fuentes primarias, porque son documentos y objetos originales del tiempo estudiado.' },
      { letra: 'B', texto: 'Enciclopedias, porque contienen toda la información del pasado.' },
      { letra: 'C', texto: 'Noticias del periódico, porque informan lo que pasa en el presente.' },
      { letra: 'D', texto: 'Mapas, porque muestran los lugares donde ocurrieron los hechos históricos.' },
    ],
    clave: 'A',
    justificacion: 'Las fotos, cartas, objetos y testimonios de personas que vivieron en el pasado se llaman fuentes primarias porque son evidencias directas del período histórico que se estudia. Son originales y no han sido interpretadas por otros. Las enciclopedias son fuentes secundarias (B), las noticias son del presente (C), y los mapas son herramientas geográficas, aunque también pueden ser fuentes históricas (D).',
    competencia: 'pensamiento-social',
    componente: 'conocimientos-sociales',
  },

  // 18. Multiperspectividad + pensamiento-sistemico
  {
    id: 'soc-p-s3-18',
    enunciado: 'En el colegio de Santiago se va a elegir al gobierno escolar. Hay dos candidatos: Pedro, que promete mejorar la biblioteca, y Sofía, que promete organizar más actividades deportivas. ¿Cuál es la forma correcta de elegir al mejor candidato?',
    opciones: [
      { letra: 'A', texto: 'Elegir al candidato que sea el más popular o el mejor amigo de uno.' },
      { letra: 'B', texto: 'Elegir al candidato cuyos proyectos beneficien más a toda la comunidad estudiantil.' },
      { letra: 'C', texto: 'No votar porque los dos candidatos son igualmente buenos.' },
      { letra: 'D', texto: 'Votar por el candidato que le dé más regalos a los estudiantes.' },
    ],
    clave: 'B',
    justificacion: 'En una democracia, la elección de representantes debe basarse en las propuestas y en cómo estas benefician al conjunto de la comunidad, no en la amistad personal (A), la abstención (C) ni en regalos que buscan comprar el voto (D, que es una práctica de corrupción). Evaluar los proyectos y elegir el que más beneficie a todos es la forma correcta de participar en democracia.',
    competencia: 'pensamiento-sistemico',
    componente: 'multiperspectividad',
  },

  // 19. Conocimientos sociales + pensamiento-social
  {
    id: 'soc-p-s3-19',
    enunciado: 'Los Juegos Florales son una tradición de algunos municipios colombianos en la que se celebra la cultura local con música, poesía y danzas típicas. ¿Qué propósito tienen estas celebraciones culturales?',
    opciones: [
      { letra: 'A', texto: 'Demostrar que una cultura es superior a las demás culturas del mundo.' },
      { letra: 'B', texto: 'Preservar y transmitir las tradiciones culturales de una comunidad de generación en generación.' },
      { letra: 'C', texto: 'Ganar dinero para el municipio a través del turismo cultural.' },
      { letra: 'D', texto: 'Entretener a los turistas extranjeros que visitan Colombia.' },
    ],
    clave: 'B',
    justificacion: 'Las celebraciones culturales como los Juegos Florales tienen como propósito principal preservar y transmitir las tradiciones, la música, la poesía y las costumbres de una comunidad. Son una forma de fortalecer la identidad cultural y asegurar que las tradiciones pasen de una generación a la siguiente. El turismo puede ser un beneficio secundario, pero no es el propósito principal.',
    competencia: 'pensamiento-social',
    componente: 'conocimientos-sociales',
  },

  // 20. Multiperspectividad + interpretacion
  {
    id: 'soc-p-s3-20',
    enunciado: 'En Colombia, los niños y niñas tienen derecho a recibir educación, salud y protección. Cuando estos derechos no se cumplen, ¿qué pueden hacer las familias para exigir su cumplimiento?',
    opciones: [
      { letra: 'A', texto: 'No hacer nada, porque los derechos son solo palabras escritas en un papel.' },
      { letra: 'B', texto: 'Acudir a instituciones como el ICBF, la Defensoría del Pueblo o la Personería municipal para exigir sus derechos.' },
      { letra: 'C', texto: 'Resolver el problema con violencia porque es la única manera efectiva.' },
      { letra: 'D', texto: 'Emigrar a otro país donde sí se respeten los derechos.' },
    ],
    clave: 'B',
    justificacion: 'Cuando los derechos de los niños son vulnerados, las familias pueden acudir a instituciones como el ICBF (protección familiar), la Defensoría del Pueblo (derechos humanos) o la Personería municipal (control ciudadano) para denunciar y exigir el cumplimiento de los derechos. Los derechos son vinculantes, no solo palabras (A), la violencia no es una solución legítima (C), y emigrar no es una solución sostenible para todos (D).',
    competencia: 'interpretacion',
    componente: 'multiperspectividad',
  },

];

// =====================================================
// CIENCIAS SOCIALES — Saber 5°
// =====================================================
PREGUNTAS_ICFES['ciencias-sociales']['saber-5'] = [

  // 1. Conocimientos sociales + pensamiento-social
  {
    id: 'soc-p-s5-01',
    enunciado: 'Colombia está organizada en municipios, departamentos y una nación. ¿Cuál es la función principal del alcalde en un municipio colombiano?',
    opciones: [
      { letra: 'A', texto: 'Dirigir al ejército nacional y tomar decisiones de política exterior.' },
      { letra: 'B', texto: 'Gobernar el municipio, ejecutar el presupuesto local y garantizar los servicios públicos a los habitantes.' },
      { letra: 'C', texto: 'Crear las leyes nacionales que rigen a todos los colombianos.' },
      { letra: 'D', texto: 'Juzgar a las personas que cometen delitos en el municipio.' },
    ],
    clave: 'B',
    justificacion: 'El alcalde es el jefe de gobierno del municipio. Su función es administrar el municipio, ejecutar el plan de desarrollo local, garantizar los servicios públicos (agua, educación, salud) y representar al municipio. Las leyes nacionales las crea el Congreso (C), la justicia corresponde a los jueces (D), y el ejército y la política exterior son asuntos del gobierno nacional (A).',
    competencia: 'pensamiento-social',
    componente: 'conocimientos-sociales',
  },

  // 2. Conocimientos sociales + pensamiento-social
  {
    id: 'soc-p-s5-02',
    enunciado: 'Simón Bolívar, Francisco de Paula Santander y Antonio Nariño fueron figuras clave en la independencia de Colombia. ¿Qué objetivo principal tenían estos líderes?',
    opciones: [
      { letra: 'A', texto: 'Mantener el dominio español sobre el territorio colombiano.' },
      { letra: 'B', texto: 'Lograr la independencia de España y construir repúblicas gobernadas por los propios americanos.' },
      { letra: 'C', texto: 'Crear un imperio americano gobernado por un rey americano.' },
      { letra: 'D', texto: 'Conquistar el territorio de España para vengar el dominio colonial.' },
    ],
    clave: 'B',
    justificacion: 'Bolívar, Santander y Nariño lucharon por la independencia de España para que los pueblos americanos pudieran gobernarse a sí mismos mediante repúblicas. No querían mantener el dominio español (A), ni imponer un nuevo rey (C), ni conquistar España (D), sino liberarse del colonialismo y establecer gobiernos propios basados en principios republicanos.',
    competencia: 'pensamiento-social',
    componente: 'conocimientos-sociales',
  },

  // 3. Conocimientos sociales + pensamiento-sistemico
  {
    id: 'soc-p-s5-03',
    enunciado: 'La región Amazónica de Colombia tiene una de las mayores biodiversidades del mundo. Su clima es caliente y húmedo, con grandes ríos y selva tropical. ¿Qué actividad económica es propia de esta región?',
    opciones: [
      { letra: 'A', texto: 'La pesca de camarones y la producción de sal marina.' },
      { letra: 'B', texto: 'El cultivo de café en las laderas de los volcanes.' },
      { letra: 'C', texto: 'La extracción de caucho, la pesca fluvial y el ecoturismo.' },
      { letra: 'D', texto: 'La ganadería extensiva de bovinos en llanuras abiertas.' },
    ],
    clave: 'C',
    justificacion: 'La región Amazónica colombiana, con sus grandes ríos y selva tropical, tiene como actividades económicas características la extracción de recursos forestales como el caucho, la pesca en sus ríos, y el ecoturismo. La pesca de camarones y la sal son del Caribe (A), el café es de los Andes (B), y la ganadería extensiva corresponde a la Orinoquía (D).',
    competencia: 'pensamiento-sistemico',
    componente: 'conocimientos-sociales',
  },

  // 4. Argumentacion + pensamiento-social
  {
    id: 'soc-p-s5-04',
    enunciado: 'El referendo es un mecanismo de participación ciudadana en Colombia. ¿En qué consiste el referendo?',
    opciones: [
      { letra: 'A', texto: 'Es una reunión donde el alcalde informa a los ciudadanos sobre las decisiones del gobierno.' },
      { letra: 'B', texto: 'Es una votación en la que los ciudadanos aprueban o rechazan una norma o decisión de importancia nacional.' },
      { letra: 'C', texto: 'Es un proceso en el que los ciudadanos eligen al presidente de la república.' },
      { letra: 'D', texto: 'Es una reunión del congreso para debatir nuevas leyes.' },
    ],
    clave: 'B',
    justificacion: 'El referendo es un mecanismo de participación ciudadana directa mediante el cual los ciudadanos votan para aprobar o rechazar una norma jurídica o una decisión de importancia nacional o regional. Es diferente de una reunión informativa (A), de la elección presidencial que ocurre cada 4 años (C), y de las sesiones del Congreso (D).',
    competencia: 'pensamiento-social',
    componente: 'argumentacion',
  },

  // 5. Multiperspectividad + interpretacion
  {
    id: 'soc-p-s5-05',
    enunciado: 'En el barrio Los Pinos hay un conflicto entre vecinos porque algunos quieren construir un parque y otros quieren construir un parqueadero en el lote vacío. ¿Cuál es la mejor estrategia para resolver este conflicto pacíficamente?',
    opciones: [
      { letra: 'A', texto: 'Que el grupo más grande imponga su decisión sin escuchar a los demás.' },
      { letra: 'B', texto: 'Que todos los vecinos se reúnan a dialogar, escuchen todas las propuestas y busquen un acuerdo que beneficie a la comunidad.' },
      { letra: 'C', texto: 'Que nadie use el lote para que el conflicto se resuelva solo.' },
      { letra: 'D', texto: 'Que el alcalde decida sin consultar a los vecinos.' },
    ],
    clave: 'B',
    justificacion: 'La mediación y el diálogo son los mecanismos más efectivos para resolver conflictos de manera pacífica. Reunir a todos los vecinos para que expresen sus perspectivas y buscar una solución consensuada respeta la diversidad de intereses y fortalece la convivencia. Imponer la decisión de la mayoría sin diálogo (A), dejar el conflicto sin resolver (C), o decidir sin consultar (D) no son soluciones que promuevan la participación y el acuerdo.',
    competencia: 'interpretacion',
    componente: 'multiperspectividad',
  },

  // 6. Conocimientos sociales + pensamiento-social
  {
    id: 'soc-p-s5-06',
    enunciado: 'En un mapa de Colombia se indica que la ciudad de Bogotá está ubicada a 4°36´ latitud norte y 74°5´ longitud oeste. ¿Para qué sirven estas coordenadas geográficas?',
    opciones: [
      { letra: 'A', texto: 'Para saber cuántas personas viven en Bogotá.' },
      { letra: 'B', texto: 'Para ubicar con precisión a Bogotá en cualquier mapa del mundo.' },
      { letra: 'C', texto: 'Para conocer el clima de Bogotá en diferentes épocas del año.' },
      { letra: 'D', texto: 'Para calcular la distancia entre Bogotá y otras ciudades de Colombia.' },
    ],
    clave: 'B',
    justificacion: 'Las coordenadas geográficas (latitud y longitud) son un sistema de referencia que permite ubicar con precisión cualquier punto en la superficie terrestre. Con las coordenadas de Bogotá (4°36´N, 74°5´O) se puede localizar exactamente esta ciudad en cualquier mapa del mundo. Las coordenadas no informan sobre población (A), clima (C) ni distancias directamente (D).',
    competencia: 'pensamiento-social',
    componente: 'conocimientos-sociales',
  },

  // 7. Multiperspectividad + interpretacion
  {
    id: 'soc-p-s5-07',
    enunciado: 'La Declaración Universal de los Derechos Humanos establece que todas las personas tienen derecho a la vida, la libertad y la seguridad. En Colombia, ¿qué situación representa una violación a estos derechos?',
    opciones: [
      { letra: 'A', texto: 'Que un juez dicte una sentencia después de un juicio justo.' },
      { letra: 'B', texto: 'Que una persona sea detenida arbitrariamente sin ninguna razón legal.' },
      { letra: 'C', texto: 'Que la policía intervenga para proteger a las personas en peligro.' },
      { letra: 'D', texto: 'Que el Estado proporcione educación gratuita a todos los niños.' },
    ],
    clave: 'B',
    justificacion: 'La detención arbitraria, es decir, privar a alguien de su libertad sin razón legal ni proceso judicial, viola el derecho a la libertad y la seguridad consagrado en la Declaración Universal de los Derechos Humanos. Los juicios justos (A), la protección policial (C) y la educación gratuita (D) son acciones que garantizan derechos, no que los violan.',
    competencia: 'interpretacion',
    componente: 'multiperspectividad',
  },

  // 8. Multiperspectividad + pensamiento-sistemico
  {
    id: 'soc-p-s5-08',
    enunciado: 'Miles de venezolanos han migrado a Colombia en los últimos años buscando mejores condiciones de vida. ¿Cuál de las siguientes es una consecuencia POSITIVA de esta migración para Colombia?',
    opciones: [
      { letra: 'A', texto: 'Que hay más personas y por eso hay menos empleo para los colombianos.' },
      { letra: 'B', texto: 'Que los migrantes aportan nuevas habilidades, conocimientos y diversidad cultural que enriquecen al país.' },
      { letra: 'C', texto: 'Que los migrantes gastan todos los recursos naturales de Colombia.' },
      { letra: 'D', texto: 'Que la migración no tiene ningún impacto en la sociedad colombiana.' },
    ],
    clave: 'B',
    justificacion: 'La migración tiene consecuencias tanto positivas como negativas. Una consecuencia positiva es que los migrantes aportan habilidades laborales, saberes culturales y diversidad que enriquecen al país receptor. Si bien puede haber tensiones en el mercado laboral (A), los migrantes también consumen y producen bienes y servicios. Los migrantes no "gastan todos los recursos" (C), y la migración sí tiene impactos visibles en la sociedad (D).',
    competencia: 'pensamiento-sistemico',
    componente: 'multiperspectividad',
  },

  // 9. Conocimientos sociales + pensamiento-social
  {
    id: 'soc-p-s5-09',
    enunciado: 'La región Andina colombiana comprende los departamentos de Antioquia, Cundinamarca, Boyacá, Nariño, entre otros. ¿Qué característica geográfica define a la región Andina?',
    opciones: [
      { letra: 'A', texto: 'Grandes llanuras planas con ríos caudalosos y poca vegetación.' },
      { letra: 'B', texto: 'Costas marinas con playas, manglares y clima tropical.' },
      { letra: 'C', texto: 'Tres cordilleras montañosas que atraviesan el territorio de sur a norte.' },
      { letra: 'D', texto: 'Selva tropical densa con el río Amazonas como principal fuente de agua.' },
    ],
    clave: 'C',
    justificacion: 'La región Andina de Colombia se caracteriza por la presencia de las tres ramificaciones de los Andes: la Cordillera Occidental, la Central y la Oriental, que atraviesan el país de sur a norte. Las llanuras planas corresponden a la Orinoquía (A), las costas al Caribe y Pacífico (B), y la selva amazónica a la región Amazónica (D).',
    competencia: 'pensamiento-social',
    componente: 'conocimientos-sociales',
  },

  // 10. Argumentacion + pensamiento-social
  {
    id: 'soc-p-s5-10',
    enunciado: 'El 7 de agosto es la fecha en que Colombia conmemora la Batalla de Boyacá de 1819, en la que las fuerzas independentistas comandadas por Simón Bolívar derrotaron al ejército español. ¿Por qué es importante recordar esta fecha?',
    opciones: [
      { letra: 'A', texto: 'Porque es un día festivo en que las personas descansan y no trabajan.' },
      { letra: 'B', texto: 'Porque la batalla no tuvo ninguna importancia histórica para Colombia.' },
      { letra: 'C', texto: 'Porque fue un hecho decisivo que permitió consolidar la independencia de Colombia.' },
      { letra: 'D', texto: 'Porque Simón Bolívar nació ese día en Boyacá.' },
    ],
    clave: 'C',
    justificacion: 'La Batalla de Boyacá del 7 de agosto de 1819 fue un hecho histórico decisivo que permitió consolidar la independencia de Colombia del dominio español. Aunque es también un día festivo (A), su importancia radica en su significado histórico. Fue una batalla fundamental (elimina B), y Simón Bolívar nació en Caracas, Venezuela, no en Boyacá el 7 de agosto (elimina D).',
    competencia: 'pensamiento-social',
    componente: 'argumentacion',
  },

  // 11. Conocimientos sociales + pensamiento-social
  {
    id: 'soc-p-s5-11',
    enunciado: 'El cabildo abierto es un mecanismo de participación ciudadana en Colombia. ¿En qué consiste?',
    opciones: [
      { letra: 'A', texto: 'Es una reunión secreta de los gobernantes para tomar decisiones sin consultar a los ciudadanos.' },
      { letra: 'B', texto: 'Es una sesión pública del concejo municipal o asamblea en la que los ciudadanos pueden participar directamente en la discusión de temas de interés local.' },
      { letra: 'C', texto: 'Es una fiesta popular organizada por el alcalde para celebrar fechas especiales.' },
      { letra: 'D', texto: 'Es el proceso de elección del alcalde y los concejales de un municipio.' },
    ],
    clave: 'B',
    justificacion: 'El cabildo abierto es una sesión pública de los órganos de gobierno local (concejo municipal o asamblea departamental) en la que los ciudadanos pueden participar directamente, expresar sus opiniones y deliberar sobre asuntos de interés comunitario. No es una reunión secreta (A), una fiesta (C), ni el proceso electoral (D).',
    competencia: 'pensamiento-social',
    componente: 'conocimientos-sociales',
  },

  // 12. Conocimientos sociales + pensamiento-sistemico
  {
    id: 'soc-p-s5-12',
    enunciado: 'La región Caribe colombiana incluye los departamentos de Bolívar, Córdoba, Sucre, Atlántico, Magdalena, Cesar y La Guajira. ¿Cuál es una actividad económica típica de la región Caribe?',
    opciones: [
      { letra: 'A', texto: 'La minería del carbón, la agricultura de banano y el turismo en sus playas.' },
      { letra: 'B', texto: 'La ganadería de altura, el cultivo de papa y la producción de esmeraldas.' },
      { letra: 'C', texto: 'La extracción de petróleo en el Pacífico y el cultivo de café.' },
      { letra: 'D', texto: 'La cría de llamas para obtener lana y el cultivo de quinua.' },
    ],
    clave: 'A',
    justificacion: 'La región Caribe colombiana tiene como actividades económicas características la minería del carbón (en el departamento de Cesar y La Guajira), la agricultura de banano y palma africana (en Magdalena y Urabá), y el turismo en ciudades como Cartagena y Santa Marta. La papa y las esmeraldas son del interior andino (B), el café es de los Andes y el Pacífico es petrolífero en parte (C), y las llamas son de los Andes del sur (D).',
    competencia: 'pensamiento-sistemico',
    componente: 'conocimientos-sociales',
  },

  // 13. Multiperspectividad + interpretacion
  {
    id: 'soc-p-s5-13',
    enunciado: 'Durante la conquista española (siglo XVI), los pueblos indígenas de América fueron sometidos, sus tierras fueron tomadas y muchos murieron. ¿Desde qué perspectiva es más correcta analizar la conquista?',
    opciones: [
      { letra: 'A', texto: 'Solo desde la perspectiva española, porque ellos trajeron la civilización a América.' },
      { letra: 'B', texto: 'Solo desde la perspectiva indígena, porque ellos fueron las únicas víctimas del proceso.' },
      { letra: 'C', texto: 'Desde múltiples perspectivas: la española, la indígena y la africana, reconociendo los intereses y sufrimientos de cada grupo.' },
      { letra: 'D', texto: 'No es necesario analizarla porque ocurrió hace mucho tiempo y no tiene relación con el presente.' },
    ],
    clave: 'C',
    justificacion: 'El análisis histórico riguroso requiere considerar múltiples perspectivas. La conquista afectó de manera diferente a los pueblos indígenas (despojo de tierras, sometimiento), a los africanos esclavizados y a los propios españoles. Analizar solo una perspectiva da una visión parcial y sesgada. Además, los procesos históricos sí tienen relación con el presente (D).',
    competencia: 'interpretacion',
    componente: 'multiperspectividad',
  },

  // 14. Conocimientos sociales + pensamiento-social
  {
    id: 'soc-p-s5-14',
    enunciado: 'Un mapa temático muestra con colores más oscuros los departamentos de Colombia con mayor densidad de población y con colores más claros los de menor densidad. ¿Qué nos indica un departamento pintado con el color más oscuro?',
    opciones: [
      { letra: 'A', texto: 'Que ese departamento tiene el mayor territorio en kilómetros cuadrados.' },
      { letra: 'B', texto: 'Que ese departamento tiene la mayor cantidad de personas por kilómetro cuadrado.' },
      { letra: 'C', texto: 'Que ese departamento tiene el clima más caliente de Colombia.' },
      { letra: 'D', texto: 'Que ese departamento produce más alimentos que los demás.' },
    ],
    clave: 'B',
    justificacion: 'En un mapa temático de densidad de población, la intensidad del color representa la cantidad de personas por unidad de superficie (personas/km²). Un color más oscuro indica mayor densidad poblacional. No indica tamaño del territorio (A), clima (C), ni producción agrícola (D), sino la concentración de personas en ese espacio geográfico.',
    competencia: 'pensamiento-social',
    componente: 'conocimientos-sociales',
  },

  // 15. Multiperspectividad + interpretacion
  {
    id: 'soc-p-s5-15',
    enunciado: 'En Colombia, muchas personas de comunidades indígenas y afrocolombianas viven en condiciones de pobreza y tienen menos acceso a servicios de salud y educación que otras personas. ¿Qué concepto describe mejor esta situación?',
    opciones: [
      { letra: 'A', texto: 'Diversidad cultural, porque cada comunidad tiene sus propias tradiciones.' },
      { letra: 'B', texto: 'Desigualdad social, porque no todos tienen las mismas oportunidades y acceso a servicios.' },
      { letra: 'C', texto: 'Autonomía territorial, porque cada comunidad gobierna su propio territorio.' },
      { letra: 'D', texto: 'Globalización, porque las comunidades están conectadas con el mundo.' },
    ],
    clave: 'B',
    justificacion: 'Cuando grupos de personas tienen menos acceso a servicios básicos como salud y educación debido a su origen étnico o condición socioeconómica, hablamos de desigualdad social. Esta desigualdad implica que no todas las personas tienen las mismas oportunidades para desarrollarse. La diversidad cultural (A) reconoce diferencias, pero no implica necesariamente desigualdad. La autonomía territorial (C) es un derecho, y la globalización (D) es un proceso económico-cultural diferente.',
    competencia: 'interpretacion',
    componente: 'multiperspectividad',
  },

  // 16. Argumentacion + pensamiento-social
  {
    id: 'soc-p-s5-16',
    enunciado: 'Antonio Nariño tradujo al español los Derechos del Hombre y del Ciudadano en 1793, antes de la independencia de Colombia. ¿Por qué fue importante este acto?',
    opciones: [
      { letra: 'A', texto: 'Porque permitió que los colombianos conocieran los principios de libertad e igualdad, inspirando el movimiento independentista.' },
      { letra: 'B', texto: 'Porque Nariño quería dar a conocer la cultura francesa en Colombia.' },
      { letra: 'C', texto: 'Porque la traducción ayudó a que los españoles gobernaran mejor a los americanos.' },
      { letra: 'D', texto: 'Porque fue la primera vez que se escribió algo en español en América.' },
    ],
    clave: 'A',
    justificacion: 'La traducción y difusión de los Derechos del Hombre y del Ciudadano por parte de Nariño fue un acto político importante porque permitió que los criollos colombianos conocieran los principios ilustrados de libertad, igualdad y soberanía popular, ideas que inspiraron y fundamentaron el pensamiento independentista. No era solo un interés cultural (B), no ayudaba al dominio español (C), y el español se escribe en América desde el siglo XV (D).',
    competencia: 'pensamiento-social',
    componente: 'argumentacion',
  },

  // 17. Conocimientos sociales + pensamiento-social
  {
    id: 'soc-p-s5-17',
    enunciado: 'Colombia tiene 32 departamentos y un Distrito Capital (Bogotá). El gobernador es el jefe del ejecutivo departamental. ¿Cuál es la diferencia entre las funciones del gobernador y las del alcalde?',
    opciones: [
      { letra: 'A', texto: 'El gobernador gobierna todo el país y el alcalde gobierna una región.' },
      { letra: 'B', texto: 'El gobernador administra el departamento y el alcalde administra el municipio.' },
      { letra: 'C', texto: 'El gobernador crea las leyes nacionales y el alcalde las ejecuta en el municipio.' },
      { letra: 'D', texto: 'No hay diferencia, los dos tienen exactamente las mismas funciones y poderes.' },
    ],
    clave: 'B',
    justificacion: 'Colombia tiene una organización territorial en niveles: el gobernador es la máxima autoridad ejecutiva del departamento, responsable de administrar ese nivel territorial; el alcalde es la máxima autoridad ejecutiva del municipio. Sus funciones son similares pero en territorios de diferente escala. El presidente gobierna el país (elimina A), el Congreso crea las leyes (elimina C), y sí hay diferencias claras de jurisdicción (elimina D).',
    competencia: 'pensamiento-social',
    componente: 'conocimientos-sociales',
  },

  // 18. Multiperspectividad + pensamiento-sistemico
  {
    id: 'soc-p-s5-18',
    enunciado: 'Los raizales son una comunidad étnica colombiana que vive en el archipiélago de San Andrés y Providencia. Su cultura mezcla influencias africanas, inglesas y protestantes. ¿Qué proceso histórico explica esta mezcla cultural?',
    opciones: [
      { letra: 'A', texto: 'La llegada de migrantes chinos al archipiélago en el siglo XX.' },
      { letra: 'B', texto: 'La influencia de colonizadores ingleses y la presencia de esclavizados africanos durante la época colonial.' },
      { letra: 'C', texto: 'La conquista española que impuso su cultura en el archipiélago.' },
      { letra: 'D', texto: 'La llegada de turistas colombianos que cambiaron la cultura local.' },
    ],
    clave: 'B',
    justificacion: 'La cultura raizal es el resultado de la mezcla de la herencia africana de los esclavizados llevados al archipiélago durante la colonia, con la influencia de los colonizadores ingleses que dominaron el territorio antes de que pasara a manos colombianas en el siglo XIX. Esta historia explica su lengua criolla (inglés-criollo), su religión protestante y sus tradiciones afroasiáticas. No son de origen chino (A), ni solo español (C), ni turístico (D).',
    competencia: 'pensamiento-sistemico',
    componente: 'multiperspectividad',
  },

  // 19. Argumentacion + pensamiento-social
  {
    id: 'soc-p-s5-19',
    enunciado: 'La tutela es un mecanismo legal en Colombia que permite a cualquier persona exigir el respeto de sus derechos fundamentales de manera rápida. ¿Cuándo es correcto interponer una tutela?',
    opciones: [
      { letra: 'A', texto: 'Cuando alguien quiere quejarse de que un producto del mercado está en mal estado.' },
      { letra: 'B', texto: 'Cuando los derechos fundamentales de una persona son vulnerados o amenazados por una acción u omisión de una autoridad pública o un particular.' },
      { letra: 'C', texto: 'Cuando alguien quiere cambiar una ley que no le gusta.' },
      { letra: 'D', texto: 'Cuando alguien quiere que el gobierno le construya una casa gratis.' },
    ],
    clave: 'B',
    justificacion: 'La tutela (acción de tutela) es un mecanismo constitucional colombiano que protege los derechos fundamentales de las personas cuando son vulnerados o amenazados por una autoridad pública o un particular. No es para reclamar por productos defectuosos (A, que corresponde a la SIC), para cambiar leyes (C, que requiere otros mecanismos legislativos) ni para exigir bienes materiales genéricos (D).',
    competencia: 'pensamiento-social',
    componente: 'argumentacion',
  },

  // 20. Conocimientos sociales + pensamiento-sistemico
  {
    id: 'soc-p-s5-20',
    enunciado: 'La región de la Orinoquía colombiana (Llanos Orientales) se caracteriza por sus grandes llanuras, ríos como el Meta y el Orinoco, y una cultura llanera. ¿Qué actividad económica es la más característica de esta región?',
    opciones: [
      { letra: 'A', texto: 'La pesca de tiburones y la producción de sal en el mar.' },
      { letra: 'B', texto: 'El cultivo de café en las montañas y la minería del carbón.' },
      { letra: 'C', texto: 'La ganadería extensiva, la producción de petróleo y el cultivo de arroz.' },
      { letra: 'D', texto: 'La recolección de frutos amazónicos y el ecoturismo en la selva.' },
    ],
    clave: 'C',
    justificacion: 'La Orinoquía o Llanos Orientales de Colombia se caracteriza por la ganadería extensiva de bovinos (que aprovecha las amplias praderas), la producción de petróleo en departamentos como Casanare y Meta, y el cultivo de arroz y palma africana. La pesca de tiburones es del mar (A), el café y el carbón son de otras regiones (B), y los frutos amazónicos y el ecoturismo corresponden a la Amazonia (D).',
    competencia: 'pensamiento-sistemico',
    componente: 'conocimientos-sociales',
  },

];
