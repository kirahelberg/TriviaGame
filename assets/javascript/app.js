var gameQuestions = [
  {
    question:
      "Question 1: What is the largest living organism visible from Earth's orbit?",
    answers: [
      "Great Barrier Reef",
      "Rocky Mountains",
      "Giant sequoias in California",
      "Honey fungus colony in Oregon"
    ],
    correctAnswer: "Great Barrier Reef off Australia"
  },

  {
    question: "Question 2: What is the hottest planet in the solar system?",
    answers: ["Jupiter", "Venus", "Mars", "Mercury"],
    correctAnswer: "Venus"
  },

  {
    question: "Question 3: What planet has no moons?",
    answers: ["Earth", "Saturn", "Mercury", "Uranus"],
    correctAnswer: "Mercury"
  },

  {
    question: "Question 4: What galaxy do we live in?",
    answers: [
      "Sombrero Galaxy",
      "Whirlpool Galaxy",
      "Andromeda Galaxy",
      "Milky Way Galaxy"
    ],
    correctAnswer: "Milky Way Galaxy"
  },

  {
    question: "Question 5: Who was the first man to walk on the moon?",
    answers: [
      "Lance Armstrong",
      "Buzz Lightyear",
      "Neil Armstrong",
      "James Irwin"
    ],
    correctAnswer: "Neil Armstrong"
  }
];

//Set up game variables
let correctAnswers = 0;
let incorrectAnswers = 0;
let unansweredQuestions = 0;

//Display the number of correct + incorrect answers and unanswered questions
$("correct-answers").text(correctAnswers);
$("incorrect-answers").text(incorrectAnswers);
$("unanswered-questions").text(unansweredQuestions);

//Hide game questions if the game has not started
$(document).ready(function() {
  $("#game-container").hide();
  $("#score-container").hide();

  //Click button to start game
  $("#startButton").on("click", function() {
    $("#start-container").hide();
    $("#game-container").show();
    displayQuestions();
    startTimer();
  });

  //Display game questions
  function displayQuestions() {
    for (var i = 0; i < gameQuestions.length; i++) {
      $("#game-question").append(
        "<h4 id='question'>" +
          gameQuestions[i].question +
          "</h4>" +
          "<input type='radio' id='answerChoices'>" +
          gameQuestions[i].answers[0] +
          "<input type='radio' id='answerChoices'>" +
          gameQuestions[i].answers[1] +
          "<input type='radio' id='answerChoices'>" +
          gameQuestions[i].answers[2] +
          "<input type='radio' id='answerChoices'>" +
          gameQuestions[i].answers[3]
      );
    }
  }

  //When game starts, timer counts down from 30 sec
  function startTimer() {
    var timeLeft = 30;
    var intervalId = setInterval(countdown, 1000);
    function countdown() {
      if (timeLeft === 0) {
        $("#game-container").hide();
        $("#score-container").show();
      } else if (timeLeft >= 10) {
        timeLeft--;
        $("#countdownTimer").text("00:" + timeLeft);
      } else if (timeLeft <= 9) {
        timeLeft--;
        $("#countdownTimer").text("00:0" + timeLeft);
      }
    }
  }

  //Answers are counted as "correct", "incorrect", or "unanswered"
  //When the timer ends, game over and the results are displayed
});
