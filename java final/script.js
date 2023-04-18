var numberInput = document.getElementById("filed");
var clickableSquare = document.getElementById("clickBox");

clickableSquare.addEventListener("click", function() {
  var currentValue = parseInt(numberInput.value);
  
  if (currentValue === 0) {
    clickableSquare.classList.add("ended");
    return;
  }
  
  clickableSquare.classList.add("clicked");
  numberInput.disabled = true;
  numberInput.value = currentValue - 1;
});
resetButton.onclick = function() {
    numberInput.disabled = false;
    numberInput.style.backgroundColor = "white";
    numberInput.value = "";
    
    clickableSquare.style.backgroundColor = "";
    clickableSquare.style.borderColor = "red";
   
  };