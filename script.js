// Base de datos de preguntas por asignatura (10 preguntas cada una)
const quizData = {
  historia: [
    { question: "¿En qué año llegó Cristóbal Colón a América?", options: ["1492", "1488", "1502", "1498"], answer: 0 },
    { question: "¿Quién fue el primer presidente de los Estados Unidos?", options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], answer: 1 },
    { question: "¿En qué país comenzó la Revolución Industrial?", options: ["Francia", "Alemania", "Reino Unido", "Estados Unidos"], answer: 2 },
    { question: "¿Qué civilización construyó las pirámides de Guiza?", options: ["Mayas", "Incas", "Egipcia", "Griega"], answer: 2 },
    { question: "¿En qué año finalizó la Segunda Guerra Mundial?", options: ["1918", "1939", "1945", "1950"], answer: 2 },
    { question: "¿Quién lideró la independencia de la India mediante la no violencia?", options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Indira Gandhi", "Subhas Chandra Bose"], answer: 0 },
    { question: "¿En qué año cayó el Muro de Berlín?", options: ["1975", "1989", "1991", "1983"], answer: 1 },
    { question: "¿Qué imperio fue gobernado por Julio César?", options: ["Imperio Griego", "Imperio Otomano", "Imperio Romano", "Imperio Bizantino"], answer: 2 },
    { question: "¿Cuál fue el primer metal que utilizó el ser humano?", options: ["Hierro", "Cobre", "Bronce", "Oro"], answer: 1 },
    { question: "¿Qué evento desencadenó la Primera Guerra Mundial?", options: ["Invasión de Polonia", "El bombardeo de Pearl Harbor", "El asesinato del archiduque Francisco Fernando", "La Revolución Rusa"], answer: 2 }
  ],
  ciencia: [
    { question: "¿Cuál es el símbolo químico del oro?", options: ["Ag", "Fe", "Au", "Cu"], answer: 2 },
    { question: "¿Cuál es el planeta más grande del sistema solar?", options: ["Tierra", "Saturno", "Júpiter", "Marte"], answer: 2 },
    { question: "¿Qué partícula subatómica tiene carga negativa?", options: ["Protón", "Electrón", "Neutrón", "Fotón"], answer: 1 },
    { question: "¿A qué velocidad viaja la luz en el vacío aproximadamente?", options: ["300.000 km/s", "150.000 km/s", "1.000.000 km/s", "30.000 km/s"], answer: 0 },
    { question: "¿Cuál es el elemento más abundante en la corteza terrestre?", options: ["Oxígeno", "Silicio", "Aluminio", "Hierro"], answer: 0 },
    { question: "¿Qué gas absorben las plantas para realizar la fotosíntesis?", options: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Hidrógeno"], answer: 2 },
    { question: "¿Cuál es el ph neutro en una escala de 0 a 14?", options: ["0", "5", "7", "10"], answer: 2 },
    { question: "¿Quién propuso la teoría de la relatividad?", options: ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Galileo Galilei"], answer: 1 },
    { question: "¿Cuál es el estado de la materia con volumen y forma fijos?", options: ["Líquido", "Gaseoso", "Sólido", "Plasma"], answer: 2 },
    { question: "¿Qué fuerza nos mantiene pegados a la superficie terrestre?", options: ["Magnetismo", "Fuerza centrífuga", "Gravedad", "Fricción"], answer: 2 }
  ],
  geografia: [
    { question: "¿Cuál es el río más largo del mundo?", options: ["Nilo", "Amazonas", "Misisipi", "Yangtsé"], answer: 1 },
    { question: "¿Cuál es la capital de Australia?", options: ["Sídney", "Melbourne", "Canberra", "Brisbane"], answer: 2 },
    { question: "¿En qué continente se encuentra Egipto?", options: ["Asia", "África", "Europa", "Oceanía"], answer: 1 },
    { question: "¿Cuál es el país más grande del mundo por superficie?", options: ["Canadá", "China", "Rusia", "Estados Unidos"], answer: 2 },
    { question: "¿Qué cordillera alberga la montaña Everest?", options: ["Los Andes", "Los Alpes", "El Himilaya", "Las Rocosas"], answer: 2 },
    { question: "¿Cuál es el océano más grande de la Tierra?", options: ["Atlántico", "Índico", "Pacífico", "Ártico"], answer: 2 },
    { question: "¿Cuál es la capital de Japón?", options: ["Kioto", "Osaka", "Tokio", "Hiroshima"], answer: 2 },
    { question: "¿Qué país tiene forma de bota en Europa?", options: ["España", "Grecia", "Portugal", "Italia"], answer: 3 },
    { question: "¿En qué océano se encuentra la isla de Madagascar?", options: ["Pacífico", "Atlántico", "Índico", "Antártico"], answer: 2 },
    { question: "¿Cuál es el desierto cálido más grande del mundo?", options: ["Gobi", "Atacama", "Sahara", "Kalahari"], answer: 2 }
  ],
  matematicas: [
    { question: "¿Cuál es el resultado de 8 x 7?", options: ["54", "56", "64", "49"], answer: 1 },
    { question: "¿Cuál es la raíz cuadrada de 144?", options: ["10", "11", "12", "14"], answer: 2 },
    { question: "¿Cuántos grados suman los ángulos internos de un triángulo?", options: ["90°", "180°", "360°", "270°"], answer: 1 },
    { question: "¿Cuál es el valor aproximado de Pi (π)?", options: ["3.1416", "2.7182", "1.6180", "3.4116"], answer: 0 },
    { question: "¿Cómo se llama un polígono de 8 lados?", options: ["Hexágono", "Heptágono", "Octágono", "Decágono"], answer: 2 },
    { question: "¿Cuál es el resultado de 2 elevado a la potencia de 5?", options: ["10", "16", "32", "64"], answer: 2 },
    { question: "¿Qué tipo de número es el 7?", options: ["Número par", "Número primo", "Número compuesto", "Número negativo"], answer: 1 },
    { question: "En un triángulo rectángulo, ¿cómo se llama el lado opuesto al ángulo recto?", options: ["Cateto adyacente", "Cateto opuesto", "Hipotenusa", "Base"], answer: 2 },
    { question: "¿A cuánto equivale el 25% de 200?", options: ["25", "50", "75", "100"], answer: 1 },
    { question: "¿Cuál es la fórmula para calcular el área de un círculo?", options: ["π × r²", "2 × π × r", "base × altura", "lado × lado"], answer: 0 }
  ],
  literatura: [
    { question: "¿Quién escribió 'Don Quijote de la Mancha'?", options: ["Gabriel García Márquez", "Miguel de Cervantes", "William Shakespeare", "Jorge Luis Borges"], answer: 1 },
    { question: "¿Cuál es la famosa obra trágica de Shakespeare sobre dos amantes en Verona?", options: ["Hamlet", "Macbeth", "Romeo y Julieta", "Otelo"], answer: 2 },
    { question: "¿Quién es el autor de 'Cien años de soledad'?", options: ["Mario Vargas Llosa", "Julio Cortázar", "Gabriel García Márquez", "Pablo Neruda"], answer: 2 },
    { question: "¿Qué poema épico griego narra la travesía de Odiseo de regreso a su patria?", options: ["La Ilíada", "La Odisea", "La Eneida", "La Divina Comedia"], answer: 1 },
    { question: "¿Quién escribió el poema 'Veinte poemas de amor y una canción desesperada'?", options: ["Octavio Paz", "Federico García Lorca", "Pablo Neruda", "César Vallejo"], answer: 2 },
    { question: "¿Cuál de estas obras fue escrita por Dante Alighieri?", options: ["El Decamerón", "La Divina Comedia", "Cantar de mio Cid", "La Celestina"], answer: 1 },
    { question: "¿Quién es el creador del detective Sherlock Holmes?", options: ["Agatha Christie", "Arthur Conan Doyle", "Edgar Allan Poe", "Jules Verne"], answer: 1 },
    { question: "¿A qué género pertenece una obra escrita para ser representada en un teatro?", options: ["Narrativo", "Lírico", "Dramático", "Didáctico"], answer: 2 },
    { question: "¿Quién escribió 'Frankenstein'?", options: ["Bram Stoker", "Mary Shelley", "Jane Austen", "Virginia Woolf"], answer: 1 },
    { question: "¿Cuál es el libro más traducido de la historia después de la Biblia?", options: ["El Principito", "Don Quijote", "Odisea", "Harry Potter"], answer: 0 }
  ],
  arte: [
    { question: "¿Quién pintó la 'Mona Lisa'?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"], answer: 2 },
    { question: "¿A qué estilo o movimiento artístico pertenece la pintura 'La noche estrellada'?", options: ["Cubismo", "Impresionismo", "Postimpresionismo", "Surrealismo"], answer: 2 },
    { question: "¿Quién esculpió el 'David' y pintó la Capilla Sixtina?", options: ["Donatello", "Rafael", "Michelangelo", "Bernini"], answer: 2 },
    { question: "¿Qué artista es famoso por cofundar el movimiento del Cubismo?", options: ["Salvador Dalí", "Pablo Picasso", "Claude Monet", "Frida Kahlo"], answer: 1 },
    { question: "¿Qué pintora mexicana es célebre por sus autorretratos y su estética folclórica?", options: ["Frida Kahlo", "Remedios Varo", "Leonora Carrington", "Isabel Allende"], answer: 0 },
    { question: "¿Cuáles son los tres colores primarios en la síntesis aditiva del color tradicional?", options: ["Rojo, Verde, Azul", "Rojo, Amarillo, Azul", "Naranja, Verde, Violeta", "Blanco, Negro, Gris"], answer: 1 },
    { question: "¿Quién pintó 'El grito'?", options: ["Edvard Munch", "Gustav Klimt", "Paul Cézanne", "René Magritte"], answer: 0 },
    { question: "¿Qué movimiento artístico se caracteriza por representar el mundo de los sueños y el subconsciente?", options: ["Realismo", "Surrealismo", "Futurismo", "Barroco"], answer: 1 },
    { question: "¿En qué museo se encuentra expuesta la 'Mona Lisa'?", options: ["Museo del Prado", "Museo del Louvre", "National Gallery", "MoMA"], answer: 1 },
    { question: "¿Qué pintor surrealista español es famoso por sus relojes blandos en 'La persistencia de la memoria'?", options: ["Joan Miró", "Salvador Dalí", "Diego Velázquez", "Francisco de Goya"], answer: 1 }
  ],
  lengua: [
    { question: "¿Cuál es el núcleo del sujeto en una oración?", options: ["Un adjetivo", "Un sustantivo o pronombre", "Un verbo", "Un adverbio"], answer: 1 },
    { question: "¿Qué tipo de palabra es 'rápidamente'?", options: ["Sustantivo", "Adjetivo", "Adverbio", "Verbo"], answer: 2 },
    { question: "Las palabras agudas llevan tilde cuando terminan en...", options: ["Cualquier consonante", "Vocal, N o S", "Cualquier letra excepto N o S", "Vocal únicamente"], answer: 1 },
    { question: "¿Cuál es el antónimo de la palabra 'efímero'?", options: ["Breve", "Pasajero", "Duradero", "Luminoso"], answer: 2 },
    { question: "¿Qué figura retórica consiste en la exageración de la realidad?", options: ["Metáfora", "Hipérbole", "Personificación", "Símil"], answer: 1 },
    { question: "¿Cómo se llaman las palabras que tienen significados similares?", options: ["Antónimos", "Sinónimos", "Homófonos", "Parónimos"], answer: 1 },
    { question: "En la oración 'Juan come manzanas', ¿qué función cumple 'manzanas'?", options: ["Sujeto", "Objeto Directo", "Objeto Indirecto", "Atributo"], answer: 1 },
    { question: "¿Qué es un hiato en gramática?", options: ["Unión de dos vocales en la misma sílaba", "Separación de dos vocales en sílabas distintas", "Una sílaba sin consonante", "Una palabra de una sola sílaba"], answer: 1 },
    { question: "¿Cuál es el plural de la palabra 'pez'?", options: ["Pezes", "Peces", "Pezs", "Pecis"], answer: 1 },
    { question: "¿Qué tipo de oración formula una pregunta?", options: ["Exclamativa", "Imperativa", "Interrogativa", "Declarativa"], answer: 2 }
  ],
  biologia: [
    { question: "¿Cuál es la unidad básica y funcional de la vida?", options: ["Tejido", "Órgano", "Célula", "Átomo"], answer: 2 },
    { question: "¿Qué molécula contiene la información genética de los seres vivos?", options: ["ARN", "ADN", "Proteína", "Lípido"], answer: 1 },
    { question: "¿Cuál es el órgano más grande del cuerpo humano?", options: ["Hígado", "Cerebro", "Piel", "Pulmones"], answer: 2 },
    { question: "¿Qué tipo de organismo produce su propio alimento?", options: ["Heterótrofo", "Autótrofo", "Descomponedor", "Parásito"], answer: 1 },
    { question: "¿Cuántos huesos tiene el cuerpo humano adulto?", options: ["180", "206", "250", "300"], answer: 1 },
    { question: "El proceso por el cual la célula se divide para formar dos células hijas idénticas se llama...", options: ["Meiosis", "Mitosis", "Metamorfosis", "Fagocitosis"], answer: 1 },
    { question: "¿Qué vaso sanguíneo lleva la sangre desde el corazón hacia el resto del cuerpo?", options: ["Venas", "Capilares", "Arterias", "Linfáticos"], answer: 2 },
    { question: "¿A qué reino pertenecen los hongos?", options: ["Plantae", "Animalia", "Fungi", "Protista"], answer: 2 },
    { question: "¿Qué pigmento le da el color verde a las plantas?", options: ["Caroteno", "Clorofila", "Melanina", "Hemoglobina"], answer: 1 },
    { question: "¿Qué sistema del cuerpo humano se encarga de defenderlo contra enfermedades?", options: ["Sistema Endocrino", "Sistema Inmunológico", "Sistema Nervioso", "Sistema Digestivo"], answer: 1 }
  ],
  tecnologia: [
    { question: "¿Qué significan las siglas 'HTML'?", options: ["HyperText Markup Language", "HighText Machine Language", "Hyperlink Text Management Logic", "Home Tool Markup Language"], answer: 0 },
    { question: "¿Quién es considerado el fundador de Microsoft?", options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Jeff Bezos"], answer: 1 },
    { question: "¿Qué componente se considera el 'cerebro' de una computadora?", options: ["Memoria RAM", "Disco Duro", "Procesador (CPU)", "Tarjeta Madre"], answer: 2 },
    { question: "¿Qué protocolo de transferencia se usa para navegar de forma segura en la web?", options: ["HTTP", "HTTPS", "FTP", "SMTP"], answer: 1 },
    { question: "¿Cuál de los siguientes es un sistema operativo de código abierto?", options: ["Windows", "macOS", "Linux", "iOS"], answer: 2 },
    { question: "¿Qué lenguaje de programación es famoso por ejecutarse del lado del cliente en los navegadores web?", options: ["Python", "Java", "C++", "JavaScript"], answer: 3 },
    { question: "¿Qué tipo de almacenamiento pierde su información cuando se apaga la computadora?", options: ["Disco SSD", "Memoria RAM", "Memoria USB", "Disco Duro HDD"], answer: 1 },
    { question: "¿En qué año se lanzó el primer iPhone?", options: ["2005", "2007", "2010", "2003"], answer: 1 },
    { question: "¿Qué significa 'URL' en el contexto de internet?", options: ["Uniform Resource Locator", "Universal Reference Link", "Unified User Logic", "User Response Location"], answer: 0 },
    { question: "¿Qué tecnología se utiliza para conectar dispositivos inalámbricos a corta distancia?", options: ["Wi-Fi", "Bluetooth", "Ethernet", "Fibra Óptica"], answer: 1 }
  ],
  ingles: [
    { question: "What is the past tense of the verb 'to go'?", options: ["Goed", "Gone", "Went", "Going"], answer: 2 },
    { question: "Which word is a synonym of 'happy'?", options: ["Sad", "Joyful", "Angry", "Tired"], answer: 1 },
    { question: "Complete the sentence: 'She ___ to school every day.'", options: ["go", "goes", "going", "gone"], answer: 1 },
    { question: "What is the opposite of 'heavy'?", options: ["Big", "Hard", "Light", "Dark"], answer: 2 },
    { question: "Which of the following is a pronoun?", options: ["Quickly", "They", "Table", "Beautiful"], answer: 1 },
    { question: "What is the plural of 'child'?", options: ["Childs", "Children", "Childrens", "Childes"], answer: 1 },
    { question: "Choose the correct article: 'I saw ___ elephant at the zoo.'", options: ["a", "an", "the", "no article"], answer: 1 },
    { question: "What does 'sunset' mean in Spanish?", options: ["Amanecer", "Mediodía", "Puesta de sol", "Noche"], answer: 2 },
    { question: "Which word is an adjective?", options: ["Run", "Fastly", "Beautiful", "Happiness"], answer: 2 },
    { question: "Complete: 'If it rains, I ___ stay at home.'", options: ["would", "will", "did", "am"], answer: 1 }
  ]
};

// Variables de estado
let currentCategory = [];
let currentSubjectName = "";
let currentQuestionIndex = 0;
let score = 0;
let timer = null;
let timeLeft = 10;

// Elementos del DOM
const categoryScreen = document.getElementById("category-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const subjectTag = document.getElementById("subject-tag");
const timeLeftEl = document.getElementById("time-left");
const progressBar = document.getElementById("progress");
const finalScoreEl = document.getElementById("final-score");

// Event Listeners
document.querySelectorAll(".cat-btn").forEach(button => {
  button.addEventListener("click", (e) => {
    const category = e.target.dataset.category;
    startQuiz(category, e.target.innerText);
  });
});

document.getElementById("restart-btn").addEventListener("click", resetQuiz);

// Funciones del Juego
function startQuiz(categoryKey, subjectName) {
  currentCategory = quizData[categoryKey];
  currentSubjectName = subjectName;
  currentQuestionIndex = 0;
  score = 0;

  subjectTag.innerText = currentSubjectName;
  categoryScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQ = currentCategory[currentQuestionIndex];
  
  // Actualizar la pregunta e indicador de progreso
  questionEl.innerText = currentQ.question;
  const progressPercent = ((currentQuestionIndex + 1) / currentCategory.length) * 100;
  progressBar.style.width = `${progressPercent}%`;

  // Renderizar las opciones
  currentQ.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () => selectOption(index, button));
    optionsEl.appendChild(button);
  });

  startTimer();
}

function resetState() {
  clearInterval(timer);
  timeLeft = 10;
  timeLeftEl.innerText = timeLeft;
  optionsEl.innerHTML = "";
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timeLeftEl.innerText = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      handleTimeOut();
    }
  }, 1000);
}

function handleTimeOut() {
  disableOptions();
  showCorrectAnswer();
  setTimeout(nextQuestion, 1500);
}

function selectOption(selectedIndex, selectedButton) {
  clearInterval(timer);
  const correctIndex = currentCategory[currentQuestionIndex].answer;

  disableOptions();

  if (selectedIndex === correctIndex) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("incorrect");
    showCorrectAnswer();
  }

  setTimeout(nextQuestion, 1500);
}

function showCorrectAnswer() {
  const correctIndex = currentCategory[currentQuestionIndex].answer;
  const buttons = optionsEl.children;
  if (buttons[correctIndex]) {
    buttons[correctIndex].classList.add("correct");
  }
}

function disableOptions() {
  const buttons = optionsEl.children;
  for (let btn of buttons) {
    btn.disabled = true;
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < currentCategory.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");
  finalScoreEl.innerText = `Obtuviste ${score} de ${currentCategory.length} respuestas correctas.`;
}

function resetQuiz() {
  resultScreen.classList.remove("active");
  categoryScreen.classList.add("active");
}