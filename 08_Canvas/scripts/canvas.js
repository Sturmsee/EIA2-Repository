"use strict";
window.addEventListener("load", handleLoad);
let canvas;
let context2D;
let inputText = "";
let colors = ["blue", "green", "yellow", "orange", "black", "white", "red", "purple", "brown", "salmon", "cyan", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "violet"];
function handleLoad(_event) {
    canvas = document.getElementById("myCanvas");
    context2D = canvas.getContext("2d");
    console.log("finished loading");
    //console.log(canvas.id);
    context2D.fillStyle = "rgba(220, 160, 190, 0.4)";
    context2D.fillRect(0, 0, canvas.width, canvas.height);
    enterWord();
    bigRectangle();
    console.log(inputText);
    drawCircles();
    createAbomination();
    drawText(inputText);
}
function bigRectangle() {
    let gradient = context2D.createLinearGradient(0, 0, 0, 100);
    gradient.addColorStop(0, randomColor());
    gradient.addColorStop(0.2, randomColor());
    gradient.addColorStop(0.4, randomColor());
    gradient.addColorStop(0.6, randomColor());
    gradient.addColorStop(0.8, randomColor()),
        gradient.addColorStop(1, randomColor());
    context2D.fillStyle = gradient;
    //context2D.fillRect(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), Math.floor(Math.random() * 400), Math.floor(Math.random()* 300));
    context2D.fillRect(268, 34, 99, 353);
}
function drawCircles() {
    for (let i = 0; i < 50; i++) {
        context2D.beginPath();
        context2D.strokeStyle = randomColor();
        context2D.arc(Math.random() * canvas.width, Math.random() * canvas.height, 4 * Math.PI, 0, 4 * Math.PI);
        context2D.closePath();
        context2D.stroke();
    }
}
function enterWord() {
    let promptText = prompt("Please enter a word: ");
    if (!promptText) {
        alert("no word entered");
        enterWord();
    }
    else {
        inputText = promptText;
    }
}
function drawText(text) {
    let gradient = context2D.createLinearGradient(0, 0, 100, 0);
    gradient.addColorStop(0, randomColor());
    gradient.addColorStop(0.2, randomColor());
    gradient.addColorStop(0.4, randomColor());
    gradient.addColorStop(0.6, randomColor());
    gradient.addColorStop(0.8, randomColor()),
        gradient.addColorStop(1, randomColor());
    context2D.fillStyle = gradient;
    context2D.fillText(text, canvas.width / 2, canvas.height / 2);
}
function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}
function createAbomination() {
    let startPosX = Math.floor(Math.random() * canvas.width / 2) + canvas.width / 4;
    let startPosY = Math.floor(Math.random() * canvas.width / 4) + 10;
    let arcRadius = (Math.random() * 100) * Math.PI;
    let rectWidth = Math.floor(Math.random() * 100);
    let rectHeight = Math.floor(Math.random() * 70);
    let ellipseRadX = Math.floor(Math.random() * 50);
    let ellipseRadY = Math.floor(Math.random() * 40);
    context2D.beginPath();
    context2D.fillStyle = randomColor();
    context2D.arc(startPosX, startPosY, arcRadius, 0, Math.PI);
    context2D.closePath();
    context2D.fill();
    context2D.fillStyle = randomColor();
    context2D.fillRect(startPosX - rectWidth, startPosY + arcRadius, rectWidth, rectHeight);
    context2D.fillStyle = randomColor();
    context2D.ellipse(startPosX - rectWidth - ellipseRadX, startPosY + arcRadius, ellipseRadX, ellipseRadY, 0, 0, Math.PI);
    context2D.ellipse(startPosX + rectWidth, startPosY + arcRadius, ellipseRadX, ellipseRadY, 0, 0, Math.PI);
    context2D.fill();
    context2D.fillStyle = randomColor();
    context2D.fillRect(startPosX - rectWidth, startPosY + arcRadius + rectHeight, rectWidth, rectHeight);
    context2D.fillStyle = "rgba(220, 160, 190, 0.4)";
    context2D.fillRect(startPosX - rectWidth / 3, startPosY + arcRadius + rectHeight / 1.5, rectWidth / 2, rectHeight / 2);
}
//# sourceMappingURL=canvas.js.map