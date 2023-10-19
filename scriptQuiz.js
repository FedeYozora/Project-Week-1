const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

const questionSpace = document.getElementById("");
const answerButton = document.getElementById("");
const nextButton = document.getElementById("");
const questionCounter = document.getElementById("");

<<<<<<< Updated upstream
let currentQuestionIndex = 0;
let score = 0;
=======
  let currentQuestionIndex = 0;
  let score = 0;
  let time = 20;
  let interval;
  let countdownNumberEl = document.getElementById("countdown-number");
  countdownNumberEl.textContent = 20;
  function startTimer() {
    interval = setInterval(function () {
      countdownNumberEl.textContent = time;
      time--;
      if (time <= 0) {
        clearInterval(interval);
        time = 20;
        loadNextQuestion();
      } else {
        console.log(time); // Log the remaining time to the console
      }
    }, 1000);
  }
>>>>>>> Stashed changes

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreCorrect = 0;
  scoreIncorrect = 0;
  nextButton.innerHTML = "Prossima";
  showQuestion();
}

function showQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNum = currentQuestionIndex + 1;
  questionSpace.innerHTML = currentQuestion.question;
  let questionLenght = "/" + questions.length;
  questionLenght.classList.add("redColor");
  questionCounter.innerHTML = "DOMANDA " + questionNum + questionLenght;

  currentQuestion.correct_answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.correct_answer;
    button.classList.add("correctAnswer");
    answerButton.appendChild(button);
  });

  currentQuestion.incorrect_answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.incorrect_answers;
    button.classList.add("incorrectAnswer");
    answerButton.appendChild(button);
  });
}

function ifCorrect() {}
