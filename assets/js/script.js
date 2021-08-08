var startButtonEl = $('#start-btn');
var scoreButtonEl = $('#score-btn');
var rulesButtonEl = $('#rules-btn');
var rulesNumberEl = $('#rules-number');
var refreshButtonEl = $('#refresh-btn');
const section = document.getElementById('container');

var isDark = true; // light theme state

const question = document.getElementById('question');
const questionCont = document.getElementById('question-container');

//makes an array for a space for each answer space
const choices = Array.from(document.getElementsByClassName('choices'));

let currentQuestion = {};
let acceptingAnwers = false; //set initially to fals so user can't answer before load
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

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
    return window.location.assign('/end.html');
  }

  questionCounter++;

  //makes a random number that wiill be used to pull the next question
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];

  //.questions pulls the question from the arry in currentQuesion
  question.innerText = currentQuestion.question;

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
