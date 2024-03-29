//containers

var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

//easyButton logic

easyBtn.addEventListener("click", function(){
hardBtn.classList.remove("selected");
easyBtn.classList.add("selected");
numSquares = 3;
colors =generateRandomColors(numSquares);
pickedColor = pickColor();
colorDisplay.textContent= pickedColor;
for(i=0;i<squares.length;i++){
	if(colors[i]){
		squares[i].style.backgroundColor =colors[i];
	}
	else{
		squares[i].style.display = "none";
	}
}
});

//hardButton logic

hardBtn.addEventListener("click", function(){
hardBtn.classList.add("selected");
easyBtn.classList.remove("selected");
numSquares = 6;
colors =generateRandomColors(numSquares);
pickedColor = pickColor();
colorDisplay.textContent= pickedColor;
for(i=0;i<squares.length;i++){
		squares[i].style.backgroundColor =colors[i];
		squares[i].style.display = "block";
	}

});

//resetButton logic

resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent= pickedColor;
	this.textContent= "new Colors";
	messageDisplay.textContent = "";
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor= colors[i];

	}
	h1.style.backgroundColor= "#006fff";
});

//color logic

var squares = document.querySelectorAll(".square");
for(var i=0;i<squares.length;i++){

	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor=== pickedColor){
			messageDisplay.textContent = "Correct";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent= "Play Again?";
		}
		else
		{
			this.style.backgroundColor= "#232323";
			messageDisplay.textContent = "Try Again!";
		}
	});
}

//change of selected color to each color

function changeColors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
};

//picking randomColors

function pickColor(){
	var random= Math.floor(Math.random() * colors.length);
	return colors[random];
}

//generating randomColors

function generateRandomColors(num){
	var arr= [];
	for(i=0;i<num;i++){
		arr.push(randomColor())
	}
	return arr
}

//generating random colors (part2)

function randomColor(){
	var r = Math.floor(Math.random() *256);
	var g = Math.floor(Math.random() *256);
	var b = Math.floor(Math.random() *256);
	return "rgb(" + r + ", " + g + ", " + b + ")" 

}
