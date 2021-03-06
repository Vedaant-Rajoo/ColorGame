function generateRandomColor(num) {
    //make an array
    var arr = [];
    //repeat num times
    for (var i = 0; i < num; i++) {
        //get random color and push into array
        arr.push(randomColor());
    }
    //add num random colors to array
    //return that array
    return arr;
}

function randomColor() {
    //pick a red from 0-255
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";


}



var colors = generateRandomColor(6);

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
var colorDisplay = document.getElementById("colorDisplay");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listners to squares
    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!! ";
            changeColors(clickedColor);
            h1.style.backgroundColor = pickedColor;

        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again!! "
        }
    });
}

function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    //change all colors to match the given color
}