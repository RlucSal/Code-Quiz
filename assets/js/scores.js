var buttonClear= document.getElementById('clear');
var highscoresList = document.getElementById('highscores');

document.addEventListener('DOMContentLoaded', function () {
 
  // Retrieve high scores from local storage
  var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

  // Display high scores in the list
  displayHighScores(highScores);

  function displayHighScores(scores) {
    highscoresList.innerHTML = '';

    // Create list items for each high score and append to the list
    scores.forEach(function (score) {
      var scoreItem = document.createElement('li');
      
      // Check if score is an object with a value property
      if (typeof score.score === 'object' && 'value' in score.score) {
        scoreItem.textContent = score.initials + ' - ' + score.score.value;
      } else {
        // Assume score is a simple value (string or number)
        scoreItem.textContent = score.initials + ' - ' + score.score;
      }

      highscoresList.appendChild(scoreItem);
    });
  }
});

buttonClear.addEventListener('click',clearScores);
function clearScores() {
  // Clear the child elements of the highscoresList
  while (highscoresList.firstChild) {
    highscoresList.removeChild(highscoresList.firstChild);
  }
  localStorage.removeItem('highScores');
}
