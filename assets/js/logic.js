
//Get elements from HTML
var startButton= document.getElementById('start');
var questions = document.getElementById('questions');
var questionsTitle= document.getElementById('question-title');
var choices= document.getElementById('choices');
var timer=document.getElementById('time');
var endScreen=document.getElementById('end-screen');
var endTime= document.getElementById('end-time');
var score= document.getElementById('final-score');
var score1=document.getElementById('final-score1');
var initial= document.getElementById('initials');
var initial1= document.getElementById('initials1');
var submitbutton= document.getElementById('submit');
var submitbutton1=document.getElementById('submit1');

//Function to start the quiz, when we click strart we will call the 3 following functions, start the Quiz, displays the first question, and starts the timer.
startButton.addEventListener ('click', startQuiz );

//Define variables global scope for track the index cuestion and set the timer and interval timer
var currentQuestionIndex = 0;
var removeTime= 5;
var timeLeft = 60; 
var timerInterval;
var userScore= 0;

//function startQuiz 
function startQuiz(e){
  e.preventDefault();

 // Hide the start screen and show the questions screen
 document.getElementById("start-screen").classList.add("hide");
 questions.classList.remove("hide");

 //Display the first question
 displayQuestion(currentQuestionIndex);

 //Start the countdown timer
 startTimer();
};

// Display a question based on the index
function displayQuestion(i) {
 var currentQuestion = questionsArray[i];
 questionsTitle.textContent = currentQuestion.question;

 // Clear previous choices
 choices.innerHTML = '';

 // Loop through choices and create buttons elements for each
  currentQuestion.choices.forEach(function (choice, choiceIndex) {
    var choiceButton = document.createElement('button');
    choiceButton.textContent = choice;
    choiceButton.addEventListener('click', function () {
      choiceClick(choiceIndex);
    });
    choices.appendChild(choiceButton);
  });
}

// Function to handle choice click
function choiceClick(selectedIndex) {
  var currentQuestion = questionsArray[currentQuestionIndex];

  // Check if the selected choice is correct
  if (selectedIndex === currentQuestion.correctAnswer) {
    console.log('Correct!');
    userScore ++
  } else {
    console.log('Incorrect!');
    timeLeft -= removeTime; 
  }

  // Move to the next question
  currentQuestionIndex++;

  // Check if there are more questions
  if (currentQuestionIndex < questionsArray.length) {

   // Display the next question
   displayQuestion(currentQuestionIndex);
  } else {
   // Quiz is finished, implement endQuiz function 
   endQuiz(); 
  }
}

// Function to handle the end of the quiz
function endQuiz() {
  console.log('Quiz completed!');
  questions.classList.add("hide");
  endScreen.classList.remove("hide");
  score.innerHTML= userScore;
  clearInterval(timerInterval);
}

// Function to update the timer on the screen during the quiz
function updateTimer() {
  timer.textContent =  timeLeft;
}

// Function to start the countdown timer
function startTimer() {
  // Update the timer every second
  timerInterval = setInterval(function () {
    updateTimer();

    // Check if time has run out
    if (timeLeft >0) {
      timeLeft --;
      
    }else {
      timeLeft=0;
      clearInterval(timerInterval);
      console.log("Time is up!");
      questions.classList.add("hide");
      endTime.classList.remove("hide");
      score1.innerHTML= userScore;
    }
  },
   1000);
};

//Event listener for the submit button
submitbutton.addEventListener('click', inputInitials);

// Function to handle input initials
function inputInitials() {
 
  var userInitials = initial.value;
  console.log(userInitials);
  // Save user initials and userScore in local storage
  saveHighScore(userInitials, userScore);
  userInitials= "";
}

// Event listener for the submit button 1
submitbutton1.addEventListener('click', inputInitials1);

// Function to handle input initials 1
function inputInitials1() {
  var userInitials1 = initial1.value;
  console.log(userInitials1);

  // Save user initials and userScore in local storage
  saveHighScore(userInitials1, userScore);
  userInitials1= "";
}

// Function to save high score
function saveHighScore(userInitials, userScore) {
  // Retrieve existing high scores from local storage
  var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

  // Add the new high score
  var newHighScore = { initials: userInitials, score: userScore };
  highScores.push(newHighScore);

  // Sort the high scores by score in descending order
  highScores.sort((a, b) => b.score - a.score);

  // Store the updated high scores back in local storage
  localStorage.setItem('highScores', JSON.stringify(highScores));

  // Display updated high scores
  displayHighScores(highScores);
}

// Function to display high scores
function displayHighScores(scores) {
  highscoresList.innerHTML = '';

  // Create list items for each high score and append to the list
  scores.forEach(function (score) {
    var scoreItem = document.createElement('li');
    scoreItem.textContent = score.initials + ' - ' + score.score;
    highscoresList.appendChild(scoreItem);
  });
}
