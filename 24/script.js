var startButton = document.getElementById('startButton');
var restartButton = document.getElementById('restartButton');
var timerInput = document.getElementById("timerInput");
var timerDisplay = document.getElementById("timerDisplay");
var counterElement = document.getElementById("score");
var counter = 0;
var timerInterval;



startButton.onclick = function() {
  document.body.addEventListener("click", function(event) {
    if (event.button === 0) {
      counter++;
      counterElement.innerText = "Clicks: " + counter;
    }
  });

  startButton.onclick = function() {
	var timerDuration = timerInput.value * 60; // convert to seconds
	var startTime = new Date().getTime();
	var endTime = startTime + timerDuration * 1000;
  
	timerInterval = setInterval(function() {
	  var currentTime = new Date().getTime();
	  var remainingTime = endTime - currentTime;
	  var minutes = Math.floor(remainingTime / 60000);
	  var seconds = Math.floor((remainingTime % 60000) / 1000);
	  timerDisplay.textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  
	  if (remainingTime <= 0) {
		clearInterval(timerInterval);
		timerDisplay.textContent = "Time's up!";
	  }
	}, 1000);
  };
};
resetButton.onclick = function() {
	clearInterval(timerInterval);
	timerDisplay.textContent = "00:00";
  };
 
  
  
  
  
  






		