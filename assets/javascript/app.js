//Create array for game questions + answers
var gameQuestions = {
  questions: [
    {
      q1:
        "Question 1: What is the largest living organism visible from Earth's orbit?",
      q2: "Question 2: What is the hottest planet in the solar system?",
      q3: "Question 3: What planet has no moons?",
      q4: "Question 4: What galaxy do we live in?",
      q5: "Question 5: Who was the first man to walk on the moon?"
    }
  ],
  choices: [
    {
      c1: [
        "Great Barrier Reef off Australia",
        "Rocky Mountains",
        "Giant sequoias in California",
        "Honey fungus colony in Oregon"
      ],
      c2: ["Jupiter", "Venus", "Mars", "Mercury"],
      c3: ["Earth", "Saturn", "Mercury", "Uranus"],
      c4: [
        "Sombrero Galaxy",
        "Whirlpool Galaxy",
        "Andromeda Galaxy",
        "Milky Way Galaxy"
      ],
      c5: ["Lance Armstrong", "Buzz Lightyear", "Neil Armstrong", "James Irwin"]
    }
  ],
  answers: {
    a1: "Great Barrier Reef off Australia",
    a2: "Venus",
    a3: "Mercury",
    a4: "Milky Way Galaxy",
    a5: "Neil Armstrong"
  }
};

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
});

//Click button to start game
$("#startButton").on("click", function() {
  console.log("clicked");
  startGame();
  $("#start-container").hide();
});
//When game starts, timer counts down from 30 sec + questions are revealed
function startGame() {
  console.log("start");
  $("#game-container").show();
  displayQuestions();
}

//Display game questions
function displayQuestions() {
  for (var i = 0; i > gameQuestions.length; i++) {
    console.log(gameQuestions[i].questions[i]);
    $("#game-question").text(gameQuestions[i].questions[i]);
  }
}
//Answers are counted as "correct", "incorrect", or "unanswered"
//When the timer ends, game over and the results are displayed
