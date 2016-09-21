


var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var squaresHard = document.querySelectorAll(".square.hard");

var messageDisplay = document.querySelector("#message");
var h1display = document.querySelector("h1");
var winningColor = pickWinningColor();
var winningColorDisplay = document.querySelector("#winningColor");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll('.mode')

init();

function init(){
	setupModeButtons();
	setupSquareListeners();
	reset();
}

function setupModeButtons() {
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
	//Set numSquares using the "ternary operator":
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6; 			
		});
	}
}

function setupSquareListeners() {
	for(var j = 0; j < squares.length; j++) {
		squares[j].addEventListener("click", function() {
			var clickedColor = this.style.background;
			if(clickedColor !== winningColorDisplay.textContent) {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try again";
			}
			else {
				messageDisplay.textContent = "Correct!";
				assignColors(clickedColor);
				resetButton.textContent = "Play again?";
			}
		});
	}
}

function reset() {
	//Create new color array
	colors = generateRandomColors(numSquares);
	//Pick a new random color from array
	winningColor = pickWinningColor();
	//Reset display (RGB code, background color, button text, etc)
	winningColorDisplay.textContent = winningColor;
	messageDisplay.textContent = "";
	h1display.style.background = "steelblue";
	resetButton.textContent = "New Colors";
	//Reset numSquares visualization
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	};
}


resetButton.addEventListener("click", function() {
	reset();
})



function assignColors(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
		h1display.style.background = color;
	}
}


function pickWinningColor() {
	var randomNumber = Math.floor(Math.random() * colors.length);
	return colors[randomNumber];
}



function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++) {
		arr.push(randomColor());
		//i++
		//  Why don't we need this counter (i++) in here?
	}
	return arr;
}


function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

