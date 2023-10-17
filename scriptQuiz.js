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
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
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

window.onload = () => {
  const questionSpace = document.getElementById("questionArea");
  const answerButton = document.getElementById("buttonRow");
  const nextButton = document.getElementById("nextQuestion");
  const questionCounter = document.getElementById("questionCount");

  let currentQuestionIndex = 0;
  let score = 0;

  function startTimer() {
    let time = 5;
    let interval = setInterval(function () {
      time--;
      if (time <= 0) {
        clearInterval(interval);
        time = 5;
        loadNextQuestion();
      } else {
        console.log(time); // Log the remaining time to the console
      }
    }, 1000);
  }

  function resetTimer() {
    // Reset the timer to its initial value
    // For example, if the initial value is 30 seconds:
    time = 5;
  }

  var countdownNumberEl = document.getElementById("countdown-number");
  var countdown = 5;

  countdownNumberEl.textContent = countdown;

  setInterval(function () {
    countdown = --countdown <= 0 ? 5 : countdown;

    countdownNumberEl.textContent = countdown;
  }, 1000);

  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = "Prossima";
    showQuestion();
  }

  function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
      startTimer();
    } else {
      displayResults();
    }
  }

  function showQuestion() {
    nextButton.addEventListener("click", loadNextQuestion);
    nextButton.classList.add("invisible");

    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;

    questionSpace.innerText = currentQuestion.question;

    questionCounter.innerHTML =
      "DOMANDA " + questionNum + "/" + questions.length;

    answerButton.innerHTML = ""; // Clear the answer button

    const correctButton = document.createElement("button");
    correctButton.innerText = currentQuestion.correct_answer;
    correctButton.classList.add("correctAnswer");
    correctButton.addEventListener("click", handleCorrectAns);

    correctButton.addEventListener("click", e => {
      nextButton.classList.remove("invisible");
    });
    answerButton.appendChild(correctButton);

    for (let i = 0; i < currentQuestion.incorrect_answers.length; i++) {
      const incorrectButton = document.createElement("button");
      incorrectButton.innerText = currentQuestion.incorrect_answers[i];
      incorrectButton.addEventListener("click", handleIncorrectAns);
      answerButton.appendChild(incorrectButton);
    }
  }

  let handleCorrectAns = function (event) {
    score++;
    this.removeEventListener("click", handleCorrectAns);
    console.log(score);
  };

  let handleIncorrectAns = function (event) {
    this.removeEventListener("click", handleIncorrectAns);
  };

  nextButton.addEventListener("click", showQuestion);

  startQuiz();
  startTimer();
};
