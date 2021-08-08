var startButtonEl = $('#start-btn');
var scoreButtonEl = $('#score-btn');
var rulesButtonEl = $('#rules-btn');
var rulesNumberEl = $('#rules-number');
var refreshButtonEl = $('#refresh-btn');
//var questionsEl = = $("#question")

var isDark = true; // light theme state

const section = document.getElementById('container');
const nextButton = document.getElementById('next-btn');
const endButton = document.getElementById('next-btn');
const questionElement = document.getElementById('question');
const questionCont = document.getElementById('question-container');
const answerbtnsElement = document.getElementById('answer-btns');
let shuffled, currentQuestion;
const rules = document.getElementById('right');

// Click event causes quiz to start
// Vanilla JS equivalent: `addEventListener`
startButtonEl.on('click', function () {
  alert('No Take Backsies!');
  $('main').hide();
  section.classList.remove('hide');
  questionCont.classList.remove('hide');

  //makes questions random
  shuffled = question.sort(() => Math.random() - 0.5);
  currentQuestion = 0;

  //calls function next question to show the next question
  setNextQuestion();
});

function setNextQuestion() {
  //resets state and helps clear out "Answer" with the
  //actual answers for the quiz
  resetState();

  //populates questions into the question area
  showQuestion(shuffled[currentQuestion]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerbtnsElement.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add('hide');
  while (answerbtnsElement.firstChild) {
    answerbtnsElement.removeChild(answerbtnsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;

  //calls function that shows correct or incorrect
  setStatusClass(document.body, correct);
  Array.from(answerbtnsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });

  if (shuffled.length > currentQuestion + 1) {
    nextButton.classList.remove('hide');
  } else {
    endButton.classList.remove('hide');
  }

  nextButton.addEventListener('click', () => {
    currentQuestion++;
    setNextQuestion();
  });
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

//function showQuestion(question) {
//  questionElement.innerText = question.question;
//
//}

const question = [
  {
    question: ['Hal open the pod bay door.'],
    answers: [
      { text: 'Im sorry Dave', correct: false },
      { text: 'Im afraid', correct: false },
      { text: 'I cant do that.', correct: false },
      { text: 'All of the above', correct: true },
    ],
  },
  {
    question: ['What is true of Sea Urchins?'],
    answers: [
      { text: 'They wear things on their heads.', correct: true },
      { text: 'They are afraid of things on their heads', correct: false },
      { text: 'They wear things on their tiny bums.', correct: false },
    ],
  },
];
//need to add timer mechs in here (I think)
//also needs a call to function for cycling through questions

// Click event causes a scoreboard of players to open
scoreButtonEl.on('click', function () {
  if (isDark) {
    $('body').css({ 'background-color': '#d9e9e8', color: '#1a1a1a' });
    isDark = !isDark;
    $('#left').show();
  } else {
    $('body').css({ 'background-color': '#1a1a1a', color: '#d9e9e8' });
    isDark = !isDark;
    $('#left').hide();
  }
});

// Click event causes a rules section to open
rulesButtonEl.on('click', function () {
  rules.classList.remove('hide');
  $('#right').show();
});

// Click event causes refresh
refreshButtonEl.on('click', function () {
  location.reload();
});
