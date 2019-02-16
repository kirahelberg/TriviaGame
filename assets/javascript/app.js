var gameQuestions = [
  {
    question:
      "Question 1: What is the largest living organism visible from Earth's orbit?",
    answers: {
      A: "Great Barrier Reef",
      B: "Rocky Mountains",
      C: "Giant sequoias in California",
      D: "Honey fungus colony in Oregon"
    },
    correctAnswer: "Great Barrier Reef off Australia"
  },

  {
    question: "Question 2: What is the hottest planet in the solar system?",
    answers: {
      A: "Jupiter",
      B: "Venus",
      C: "Mars",
      D: "Mercury"
    },
    correctAnswer: "Venus"
  },

  {
    question: "Question 3: What planet has no moons?",
    answers: {
      A: "Earth",
      B: "Saturn",
      C: "Mercury",
      D: "Uranus"
    },
    correctAnswer: "Mercury"
  },

  {
    question: "Question 4: What galaxy do we live in?",
    answers: {
      A: "Sombrero Galaxy",
      B: "Whirlpool Galaxy",
      C: "Andromeda Galaxy",
      D: "Milky Way Galaxy"
    },
    correctAnswer: "Milky Way Galaxy"
  },

  {
    question: "Question 5: Who was the first man to walk on the moon?",
    answers: {
      A: "Lance Armstrong",
      B: "Buzz Lightyear",
      C: "Neil Armstrong",
      D: "James Irwin"
    },
    correctAnswer: "Neil Armstrong"
  }
];

//Set up game variables
let correctAnswers = 0;
let incorrectAnswers = 0;
let unansweredQuestions = 0;

//Set up timer variables
var clockRunning = false;
var time = 0;
$("#countdownTimer").text("00:30");

//Display the number of correct + incorrect answers and unanswered questions
$("correct-answers").text(correctAnswers);
$("incorrect-answers").text(incorrectAnswers);
$("unanswered-questions").text(unansweredQuestions);

//Hide game questions if the game has not started
$(document).ready(function() {
  $("#game-container").hide();
  $("#score-container").hide();
  console.log("ready");

  //Click button to start game
  $("#startButton").on("click", function() {
    $("#start-container").hide();
    console.log("start");
    $("#game-container").show();
    displayQuestions();
  });

  //Display game questions
  function displayQuestions() {
    for (var i = 0; i < gameQuestions.length; i++) {
      $("#game-question").append(
        "<h4 id='question'>" +
          gameQuestions[i].question +
          "</h4>" +
          "<input type='radio' id='answerChoices'>" +
          gameQuestions[i].answers.A +
          "<input type='radio' id='answerChoices'>" +
          gameQuestions[i].answers.B +
          "<input type='radio' id='answerChoices'>" +
          gameQuestions[i].answers.C +
          "<input type='radio' id='answerChoices'>" +
          gameQuestions[i].answers.D
      );
    }
  }

  //When game starts, timer counts down from 30 sec
  function startTimer() {}

  //Answers are counted as "correct", "incorrect", or "unanswered"
  //When the timer ends, game over and the results are displayed
});
