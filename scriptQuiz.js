const questions = [];
function setDifficulty(difficulty) {
  questions.length = 0; // Clear the array

  if (difficulty === "easy") {
    questions.push({
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
    });
    questions.push({
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    });
    questions.push({
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    });
    questions.push({
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    });
    questions.push({
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    });
    questions.push({
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
    });
    questions.push({
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
    });
    questions.push({
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    });
    questions.push({
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    });
    questions.push({
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    });
  } else if (difficulty === "medium") {
    questions.push({
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question:
        "All of the following programs are classified as raster graphics editors EXCEPT:",
      correct_answer: "Inkscape",
      incorrect_answers: ["Paint.NET", "GIMP", "Adobe Photoshop"],
    });
    questions.push({
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question:
        "Which one of these is not an official development name for a Ubuntu release?",
      correct_answer: "Mystic Mansion",
      incorrect_answers: ["Trusty Tahr", "Utopic Unicorn", "Wily Werewolf"],
    });
    questions.push({
      category: "Science: Computers",
      type: "boolean",
      difficulty: "medium",
      question:
        "The open source program Redis is a relational database server.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    });
    questions.push({
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question:
        "Which coding language was the #1 programming language in terms of usage on GitHub in 2015?",
      correct_answer: "JavaScript",
      incorrect_answers: ["C#", "Python", "PHP"],
    });
    questions.push({
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question:
        "In HTML, which non-standard tag used to be be used to make elements scroll across the viewport?",
      correct_answer: "&lt;marquee&gt;&lt;/marquee&gt;",
      incorrect_answers: [
        "&lt;scroll&gt;&lt;/scroll&gt;",
        "&lt;move&gt;&lt;/move&gt;",
        "&lt;slide&gt;&lt;/slide&gt;",
      ],
    });
    questions.push({
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: ".at is the top-level domain for what country?",
      correct_answer: "Austria",
      incorrect_answers: ["Argentina", "Australia", "Angola"],
    });
    questions.push({
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question:
        "When did the online streaming service &quot;Mixer&quot; launch?",
      correct_answer: "2016",
      incorrect_answers: ["2013", "2009", "2011"],
    });
    questions.push({
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question:
        "Which programming language was developed by Sun Microsystems in 1995?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "Solaris OS", "C++"],
    });
    questions.push({
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question:
        "Approximately how many Apple I personal computers were created?",
      correct_answer: "200",
      incorrect_answers: ["100", "500", "1000"],
    });
    questions.push({
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question:
        "In programming, what do you call functions with the same name but different implementations?",
      correct_answer: "Overloading",
      incorrect_answers: ["Overriding", "Abstracting", "Inheriting"],
    });
  } else if (difficulty === "hard") {
    questions.push({
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question:
        "What was the name of the security vulnerability found in Bash in 2014?",
      correct_answer: "Shellshock",
      incorrect_answers: ["Heartbleed", "Bashbug", "Stagefright"],
    });
    questions.push({
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question: "How many Hz does the video standard PAL support?",
      correct_answer: "50",
      incorrect_answers: ["59", "60", "25"],
    });
    questions.push({
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question:
        "What is the name of the process that sends one qubit of information using two bits of classical information?",
      correct_answer: "Quantum Teleportation",
      incorrect_answers: [
        "Super Dense Coding",
        "Quantum Entanglement",
        "Quantum Programming",
      ],
    });
    questions.push({
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question:
        "America Online (AOL) started out as which of these online service providers?",
      correct_answer: "Quantum Link",
      incorrect_answers: ["CompuServe", "Prodigy", "GEnie"],
    });
    questions.push({
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question: "What internet protocol was documented in RFC 1459?",
      correct_answer: "IRC",
      incorrect_answers: ["HTTP", "HTTPS", "FTP"],
    });
    questions.push({
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question:
        "Which of these is not a key value of Agile software development?",
      correct_answer: "Comprehensive documentation",
      incorrect_answers: [
        "Individuals and interactions",
        "Customer collaboration",
        "Responding to change",
      ],
    });
    questions.push({
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question: "Who invented the &quot;Spanning Tree Protocol&quot;?",
      correct_answer: "Radia Perlman",
      incorrect_answers: ["Paul Vixie", "Vint Cerf", "Michael Roberts"],
    });
    questions.push({
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question: "The acronym &quot;RIP&quot; stands for which of these?",
      correct_answer: "Routing Information Protocol",
      incorrect_answers: [
        "Runtime Instance Processes",
        "Regular Interval Processes",
        "Routine Inspection Protocol",
      ],
    });
    questions.push({
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question: "What was the name of the first Bulgarian personal computer?",
      correct_answer: "IMKO-1",
      incorrect_answers: ["Pravetz 82", "Pravetz 8D", "IZOT 1030"],
    });
    questions.push({
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question:
        "What is the codename of the eighth generation Intel Core micro-architecture launched in October 2017?",
      correct_answer: "Coffee Lake",
      incorrect_answers: ["Sandy Bridge", "Skylake", "Broadwell"],
    });
  }
  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => (button.style.display = "none"));
  startQuiz();
}

const questionSpace = document.getElementById("questionArea");
const answerButton = document.getElementById("buttonRow");
const questionCounter = document.getElementById("questionCount");

let currentQuestionIndex = 0;
let score = 0;
let time = 20;
let interval;
let countdownNumberEl = document.getElementById("countdown-number");
countdownNumberEl.textContent = 20;

function startTimer() {
  interval = setInterval(function () {
    countdownNumberEl.textContent = time - 1;
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

function resetTimer() {
  // Reset the timer to its initial value
  // For example, if the initial value is 30 seconds:
  clearInterval(interval);
  time = 20;
}

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.querySelector("#donut-segment").classList.add("animation");
  showQuestion();
}

function loadNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    resetTimer();
    showQuestion();
  } else {
    localStorage.setItem("score", JSON.stringify(score));
    goResultsPage();
  }
}

function resetAnimation() {
  let donut = document.getElementById("donut-segment");
  donut.style.animation = "none";
  requestAnimationFrame(() => {
    setTimeout(() => {
      donut.style.animation = "";
    }, 0);
  });
}

function showQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNum = currentQuestionIndex + 1;

  questionSpace.innerText = currentQuestion.question;

  questionCounter.innerHTML =
    "DOMANDA " + questionNum + "<span>/</span>" + "<span>10</span>";

  answerButton.innerHTML = ""; // Clear the answer button

  const correctButton = document.createElement("button");
  correctButton.innerText = currentQuestion.correct_answer;
  correctButton.classList.add("correctAnswer");
  correctButton.addEventListener("click", handleCorrectAns);
  correctButton.addEventListener("click", loadNextQuestion);
  correctButton.addEventListener("click", resetAnimation);
  answerButton.appendChild(correctButton);

  for (let i = 0; i < currentQuestion.incorrect_answers.length; i++) {
    const incorrectButton = document.createElement("button");
    incorrectButton.innerText = currentQuestion.incorrect_answers[i];
    incorrectButton.addEventListener("click", handleIncorrectAns);
    incorrectButton.addEventListener("click", loadNextQuestion);
    incorrectButton.addEventListener("click", resetAnimation);

    answerButton.appendChild(incorrectButton);
  }

  startTimer();
}

let handleCorrectAns = function () {
  score++;
  this.style.borderColor = "green";
  this.removeEventListener("click", handleCorrectAns);
  console.log(score);
};

let handleIncorrectAns = function () {
  this.style.borderColor = "red";
  this.removeEventListener("click", handleIncorrectAns);
};
