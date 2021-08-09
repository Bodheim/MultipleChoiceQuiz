var startButtonEl = $('#start-btn');
var scoreButtonEl = $('#score-btn');
var rulesButtonEl = $('#rules-btn');
var rulesNumberEl = $('#rules-number');
const rules = document.getElementById('right');
const scoreboard = document.getElementById('left');
const section = document.getElementById('container');

var isDark = true; // light theme state

const question = document.getElementById('question');
const questionCont = document.getElementById('question-container');
const endCont = document.getElementById('end-container');

//makes an array for a space for each answer space
const choices = Array.from(document.getElementsByClassName('choices'));

let currentQuestion = {};
let acceptingAnwers = false; //set initially to fals so user can't answer before load
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const timer = document.getElementById('timer');
const scoreCount = document.getElementById('scorecount');

//const timer = questionCounterText
//const scoreCount = scoreText

//sets a key for questions and answers and which are correct/incorrect
let questions = [
  {
    question: 'Hal open the pod bay door.',
    choice1: 'Im sorry Dave',
    choice2: 'Im afraid',
    choice3: 'I cant do that.',
    choice4: 'All of the above',
    answer: 4,
  },
  {
    question: 'What is true of Sea Urchins?',
    choice1: 'They wear things on their heads.',
    choice2: 'They are afraid of things on their heads',
    choice3: 'They wear things on their tiny bums.',
    choice4: 'All of the above',
    answer: 1,
  },
  {
    question: 'How do you know shes a witch?',
    choice1: 'If she weighs the same as a duck.',
    choice2: 'She looks like one!',
    choice3: 'She turned me into a newt.',
    choice4: 'You are dressed like one.',
    answer: 1,
  },
];

const correctBonus = 10;
const maxQuestions = questions.length;
//.length pulls length property of questions array

//Makes it so hitting "Begin!" on first page moves to the quiz page
startButtonEl.on('click', function () {
  alert('No Take Backsies!');
  $('main').hide();
  section.classList.remove('hide');
  questionCont.classList.remove('hide');
  startQuiz();
});

function startQuiz() {
  questionCounter = 0;
  score = 0; //sets your start score to 0 points
  availableQuestions = [...questions]; //sets full coppy of all questions
  getNewQuestion();
}

function getNewQuestion() {
  if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
    //for getting sent to page to end the game and show result
    questionCont.classList.add('hide');
    endCont.classList.remove('hide');

    localStorage.setItem('mostRecentScore', score);
  }

  questionCounter++;
  //const timer = questionCounterText
  //const scoreCount = scoreText
  //insert timer here

  //makes a random number that wiill be used to pull the next question
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];

  //.questions pulls the question from the arry in currentQuesion
  question.innerText = currentQuestion.questions;

  choices.forEach((choice) => {
    //check const choice (which is from id = choice) for the data type 'number' attribute
    //which in the html is data-number and then takes the assigned info so "1", "2", etc
    const number = choice.dataset['number'];

    //then we need to grabe that number from the questions array for the related answer
    //in the questions array the choices are labeled choice1, choice2, etc
    //so need a 'choice'+number to pull this
    choice.innerText = currentQuestion['choice' + number];
  });

  //get rid of question we just answered so it won't be used again
  availableQuestions.splice(questionIndex, 1);

  //allow user to answer now
  acceptingAnwers = true;
}

choices.forEach((choice) => {
  choice.addEventListener('click', (e) => {
    //delay the answer selection before load
    if (!acceptingAnwers) return;
    acceptingAnwers = false;

    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset['number'];

    //applying class to start process of incorrect/correct colors and
    //changing score count
    const applyClass =
      selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

    if (applyClass === 'correct') {
      incrementScore(correctBonus);
    }

    //adding this incorrect/correct as a class element
    selectedChoice.parentElement.classList.add(applyClass);

    //give a second to show incorrect or correct colors before removing
    setTimeout(() => {
      //remove the class bc you just wanted it to be there long enough
      //to show the color
      selectedChoice.parentElement.classList.remove(applyClass);

      //set timer
    }, 500);

    getNewQuestion();
  });
});

//Score counting
incrementScore = (num) => {
  score += num;
  scoreCount.innerText = score;
};

const username = document.getElementById('username');
const saveBtn = document.getElementById('save-btn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
  console.log(username.value);
  if (username.value) {
    //shows save button after a value in username is entered
    saveBtn.classList.remove('hide');
  }
});

//end quiz and save score here
saveScore = (e) => {
  console.log('click the save Button!');
  e.preventDefault();
};

// Click event causes a scoreboard of players to open
scoreButtonEl.on('click', function () {
  scoreboard.classList.remove('hide');
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
  if (isDark) {
    isDark = !isDark;
    $('#right').show();
  } else {
    isDark = !isDark;
    $('#right').hide();
  }
});
