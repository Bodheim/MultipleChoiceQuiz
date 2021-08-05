var startButtonEl = $("#start-btn");
var scoreButtonEl = $("#score-btn");
var rulesButtonEl = $("#rules-btn");
var rulesNumberEl = $("#rules-number");
var refreshButtonEl = $("#refresh-btn");
//var questionsEl = = $("#question")

var isDark = true; // light theme state
const questionElement = document.getElementById("question");
const answerbtnsElement = document.getElementById("answer-btns");
let shuffled, currentQuestion;

// Click event causes quiz to start
// Vanilla JS equivalent: `addEventListener`
startButtonEl.on("click", function () {
  alert("No Take Backsies!");
  $("main").hide();
  $("section").show();

  //makes questions random
  shuffled = question.sort(() => Math.random() - 0.5); 
  currentQuestion = 0;
  //calls function next question to show the next question
  setNextQuestion();
});


//
function setNextQuestion() {
  //populates questions into the question area
  showQuestion(shuffled[currentQuestion]);
  question.answer.forEach(answer => {
    const button = documaent.createElement('button')
    button.innerText = answer.textbutton.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
  }
}

function showQuestion(question) {
  questionElement.innerText = question.question; 

}

const question = [
  {
    question: ["Hal open the pod bay door."],
    answer: [
      { text: "Im sorry Dave", correct: false },
      { text: "Im afraid", correct: false },
      { text: "I cant do that.", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question: ["What is true of Sea Urchins?"],
    answer: [
      { text: "They wear things on their heads.", correct: true },
      { text: "They are afraid of things on their heads", correct: false },
      { text: "They wear things on their tiny bums.", correct: false },
    ],
  },
];
//need to add timer mechs in here (I think)
//also needs a call to function for cycling through questions

// Click event causes a scoreboard of players to open
scoreButtonEl.on("click", function () {
  if (isDark) {
    $("body").css({ "background-color": "#d9e9e8", color: "#1a1a1a" });
    isDark = !isDark;
    $("#left").show();
  } else {
    $("body").css({ "background-color": "#1a1a1a", color: "#d9e9e8" });
    isDark = !isDark;
    $("#left").hide();
  }
});

// Click event causes a rules section to open
rulesButtonEl.on("click", function () {
  var random = Math.floor(Math.random() * 100000000) + 10000000;
  console.log(random);
  rulesNumberEl.text(random);
  $("#right").show();
});

// Click event causes refresh
refreshButtonEl.on("click", function () {
  location.reload();
});


