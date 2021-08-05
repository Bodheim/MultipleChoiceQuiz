# 04 Web APIs: Code Quiz

## Your Task

At some point in your journey to become a full-stack web developer, you’ll likely be asked to complete a coding assessment&mdash;perhaps as part of an interview process. A typical coding assessment includes both multiple-choice questions and interactive coding challenges.

To help familiarize you with these tests and allow you to use the skills covered in this unit, this week’s homework invites you to build a timed coding quiz with multiple-choice questions. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface.

This week’s coursework will equip you with all the skills you need to succeed in this assignment.

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question

WHEN I answer a question
THEN I am presented with another question

WHEN I answer a question incorrectly
THEN time is subtracted from the clock

WHEN all questions are answered or the timer reaches 0
THEN the game is over

WHEN the game is over
THEN I can save my initials and my score
```

## Mock-Up

The following animation demonstrates the application functionality:

![A user clicks through an interactive coding quiz, then enters initials to save the high score before resetting and starting over.](./assets/04-web-apis-homework-demo.gif)

## In Class works to check

JS - 06 - Click an image to go to a new site
JS - 08 - List favorite foods
JS - 10 - Speed Reader
JS - 19
JS - 25 Local Storage
Web APIs - 07 0 Ins_Create-Append - esp if Ima raw code.
3rdpAPI - 01 - for how to use JQuery
3rdpAPI - 03 - buttons in JQuery

Fun questions
Life is like a box of chocolates: You never know what you're gonna get.
What's the average flight speed of an unladen swallow? African or European?
Holy Grail Witch hunt sceen quotes
Hal, open the pod bay door. I'm sorry, Dave. I'm afraid I can't do that.

decided to borrow jass.css from in class 3rd Party APIs part 3 for a basis to call from may remove later
use <p> for question and <q> for answers

$(".test").hide() - hides all elements with class="test".
$(".test").show() - shows all elements with class="test".

Something about an answer key???
https://stackoverflow.com/questions/10664428/jquery-multiple-choice-quiz-using-clickable-buttons
var codeArray = [notCorrect, correct];
// your functions you have defined, that are called when the answer is correct or not correct.
var answerArray = [
[1, 0, 0, 0],
[0, 1, 0, 0],

// ... etc ...

[1, 0, 0, 0],
];

$('.button').click (function (event) {
// get questionNumber and answerNumber
codeArray[answerArray[questionNumber-1][answerNumber-1]]();
// call the function, and mind the 0 indices!
}

or
var codeArray = [function () { alert("Not correct"); }, function () { alert("Correct!"); }];
