"use strict";
var animation;
(function (animation) {
    let bgImage;
    let birds;
    let posX = [125, 240, 350, 444, 666, 190, 200, 210, 180, 170];
    let posY = [450, 500, 465, 410, 424, 200, 190, 180, 190, 180];
    let colours = ["red", "green", "orange", "blue", "purple", "lime", "salmon", "darkgoldenrod", "deeppink", "black"];
    let birdsFly = false;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        animation.canvas = document.querySelector("canvas");
        animation.c2d = animation.canvas.getContext("2d");
        createBackground();
        paintTrees();
        paintSnowman();
        bgImage = animation.c2d.getImageData(0, 0, 800, 600);
        for (let i = 0; i < 10; i++) {
            if (i > 4) {
                birdsFly = true;
            }
            let bird = new animation.Bird(posX[i], posY[i], colours[i], birdsFly);
            birds.push(bird);
        }
        animate();
    }
    async function animate() {
        while (true) {
            animation.c2d.putImageData(bgImage, 0, 0);
            for (let i = 0; i < birds.length; i++) {
                if (i % 2 == 0) {
                    if (birds[i].flying) {
                        birds[i].positionX = +5;
                        birds[i].positionY = +5;
                        birds[i].draw();
                    }
                    else {
                        birds[i].drawHead(5);
                    }
                }
                else {
                    if (birds[i].flying) {
                        birds[i].positionX = posX[i];
                        birds[i].positionY = posY[i];
                        birds[i].draw();
                    }
                    else {
                        birds[i].drawHead(0);
                    }
                }
            }
            delay(2000);
        }
    }
    function delay(milliseconds = 5000) {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
    }
    function createBackground() {
        //skybox
        let gradient = animation.c2d.createLinearGradient(0, 0, 0, 600);
        gradient.addColorStop(0, "#ff6600");
        gradient.addColorStop(0.3, "#ffcc66");
        gradient.addColorStop(0.6, "#ffff99");
        gradient.addColorStop(1, "#66ccff");
        animation.c2d.fillStyle = gradient;
        animation.c2d.fillRect(0, 0, 800, 600);
        //Sun
        animation.c2d.fillStyle = "yellow";
        animation.c2d.arc(790, 0, 50, 0, Math.PI);
        animation.c2d.fill();
        //Mountains
        animation.c2d.fillStyle = "grey";
        animation.c2d.beginPath();
        animation.c2d.moveTo(0, 250);
        animation.c2d.lineTo(50, 100);
        animation.c2d.lineTo(75, 280);
        animation.c2d.lineTo(100, 150);
        animation.c2d.lineTo(200, 250);
        animation.c2d.lineTo(250, 300);
        animation.c2d.lineTo(350, 150);
        animation.c2d.lineTo(370, 100);
        animation.c2d.lineTo(400, 200);
        animation.c2d.lineTo(450, 300);
        animation.c2d.lineTo(550, 250);
        animation.c2d.lineTo(600, 150);
        animation.c2d.lineTo(700, 600);
        animation.c2d.lineTo(0, 600);
        animation.c2d.closePath();
        animation.c2d.fill();
        animation.c2d.fillStyle = "lightgray";
        animation.c2d.beginPath();
        animation.c2d.moveTo(0, 350);
        animation.c2d.lineTo(100, 200);
        animation.c2d.lineTo(150, 300);
        animation.c2d.lineTo(275, 250);
        animation.c2d.lineTo(300, 250);
        animation.c2d.lineTo(350, 200);
        animation.c2d.lineTo(400, 270);
        animation.c2d.lineTo(500, 200);
        animation.c2d.lineTo(520, 170);
        animation.c2d.lineTo(550, 250);
        animation.c2d.lineTo(600, 300);
        animation.c2d.lineTo(700, 255);
        animation.c2d.lineTo(750, 200);
        animation.c2d.lineTo(800, 250);
        animation.c2d.lineTo(800, 600);
        animation.c2d.lineTo(0, 600);
        animation.c2d.closePath();
        animation.c2d.fill();
        //Clouds
        animation.c2d.fillStyle = "snow";
        animation.c2d.beginPath();
        animation.c2d.arc(100, 50, 15, 0, 2 * Math.PI);
        animation.c2d.arc(110, 60, 15, 0, 2 * Math.PI);
        animation.c2d.arc(100, 70, 15, 0, 2 * Math.PI);
        animation.c2d.arc(82, 70, 15, 0, 2 * Math.PI);
        animation.c2d.arc(62, 70, 15, 0, 2 * Math.PI);
        animation.c2d.arc(50, 60, 15, 0, 2 * Math.PI);
        animation.c2d.arc(60, 50, 15, 0, 2 * Math.PI);
        animation.c2d.arc(80, 50, 15, 0, 2 * Math.PI);
        animation.c2d.closePath();
        animation.c2d.fill();
        animation.c2d.beginPath();
        animation.c2d.arc(390, 135, 15, 0, 2 * Math.PI);
        animation.c2d.arc(400, 145, 15, 0, 2 * Math.PI);
        animation.c2d.arc(390, 155, 15, 0, 2 * Math.PI);
        animation.c2d.arc(372, 155, 15, 0, 2 * Math.PI);
        animation.c2d.arc(352, 155, 15, 0, 2 * Math.PI);
        animation.c2d.arc(340, 145, 15, 0, 2 * Math.PI);
        animation.c2d.arc(350, 135, 15, 0, 2 * Math.PI);
        animation.c2d.arc(370, 135, 15, 0, 2 * Math.PI);
        animation.c2d.closePath();
        animation.c2d.fill();
        animation.c2d.beginPath();
        animation.c2d.arc(750, 35, 15, 0, 2 * Math.PI);
        animation.c2d.arc(760, 45, 15, 0, 2 * Math.PI);
        animation.c2d.arc(750, 55, 15, 0, 2 * Math.PI);
        animation.c2d.arc(732, 55, 15, 0, 2 * Math.PI);
        animation.c2d.arc(712, 55, 15, 0, 2 * Math.PI);
        animation.c2d.arc(710, 45, 15, 0, 2 * Math.PI);
        animation.c2d.arc(730, 35, 15, 0, 2 * Math.PI);
        animation.c2d.arc(750, 35, 15, 0, 2 * Math.PI);
        animation.c2d.closePath();
        animation.c2d.fill();
        //Snow
        animation.c2d.fillStyle = "snow";
        animation.c2d.beginPath();
        animation.c2d.moveTo(0, 425);
        animation.c2d.bezierCurveTo(0, 450, 100, 500, 800, 400);
        animation.c2d.lineTo(800, 600);
        animation.c2d.lineTo(0, 600);
        animation.c2d.closePath();
        animation.c2d.fill();
    }
    function paintTrees() {
        let xPosition = [20, 50, 100, 400, 650];
        let yPosition = [450, 400, 550, 430, 570];
        let treeWidth = [10, 5, 15, 20, 50];
        let treeHeight = [30, 20, 14, 25, 100];
        animation.c2d.fillStyle = "brown";
        for (let i = 0; i < xPosition.length; i++) {
            animation.c2d.beginPath();
            animation.c2d.fillRect(xPosition[i], yPosition[i], treeWidth[i], treeHeight[i]);
            animation.c2d.closePath();
            animation.c2d.fill();
        }
        animation.c2d.fillStyle = "green";
        //Width 10, Height 30
        animation.c2d.beginPath();
        animation.c2d.moveTo(20, 430);
        animation.c2d.lineTo(10, 430);
        animation.c2d.lineTo(20, 410);
        animation.c2d.lineTo(10, 410);
        animation.c2d.lineTo(20, 400);
        animation.c2d.lineTo(40, 410);
        animation.c2d.lineTo(30, 410);
        animation.c2d.lineTo(40, 430);
        animation.c2d.lineTo(30, 430);
        animation.c2d.closePath();
        animation.c2d.fill();
        //Width 5, Height 20
        animation.c2d.beginPath();
        animation.c2d.moveTo(50, 390);
        animation.c2d.lineTo(40, 390);
        animation.c2d.lineTo(50, 385);
        animation.c2d.lineTo(40, 385);
        animation.c2d.lineTo(50, 380);
        animation.c2d.lineTo(60, 385);
        animation.c2d.lineTo(50, 385);
        animation.c2d.lineTo(60, 390);
        animation.c2d.lineTo(50, 390);
        animation.c2d.closePath();
        animation.c2d.fill();
        //Width 15, Height 14
        animation.c2d.beginPath();
        animation.c2d.moveTo(100, 540);
        animation.c2d.lineTo(90, 540);
        animation.c2d.lineTo(100, 535);
        animation.c2d.lineTo(90, 535);
        animation.c2d.lineTo(100, 530);
        animation.c2d.lineTo(125, 535);
        animation.c2d.lineTo(115, 535);
        animation.c2d.lineTo(125, 540);
        animation.c2d.lineTo(100, 540);
        animation.c2d.closePath();
        animation.c2d.fill();
        //Width 20, Height 25
        animation.c2d.beginPath();
        animation.c2d.moveTo(400, 415);
        animation.c2d.lineTo(380, 415);
        animation.c2d.lineTo(400, 405);
        animation.c2d.lineTo(380, 405);
        animation.c2d.lineTo(400, 390);
        animation.c2d.lineTo(440, 405);
        animation.c2d.lineTo(420, 405);
        animation.c2d.lineTo(440, 415);
        animation.c2d.lineTo(400, 415);
        animation.c2d.closePath();
        animation.c2d.fill();
        //Width 50, Height 100
        animation.c2d.beginPath();
        animation.c2d.fillStyle = "marone";
        animation.c2d.moveTo(630, 520);
        animation.c2d.fillRect(630, 520, 20, 30);
        animation.c2d.closePath();
        animation.c2d.fill();
    }
    function paintSnowman() {
        animation.c2d.fillStyle = "snow";
        animation.c2d.strokeStyle = "grey";
        animation.c2d.beginPath();
        animation.c2d.arc(570, 580, 30, 0, 2 * Math.PI);
        animation.c2d.arc(570, 550, 20, 0, 2 * Math.PI);
        animation.c2d.arc(570, 530, 10, 0, 2 * Math.PI);
        animation.c2d.closePath();
        animation.c2d.stroke();
        animation.c2d.fill();
        animation.c2d.fillStyle = "black";
        animation.c2d.beginPath();
        animation.c2d.arc(570, 560, 3, 0, 2 * Math.PI);
        animation.c2d.arc(570, 570, 3, 0, 2 * Math.PI);
        animation.c2d.closePath();
        animation.c2d.fill();
        animation.c2d.beginPath();
        animation.c2d.fillRect(560, 520, 7, 12);
        animation.c2d.fillRect(555, 530, 15, 3);
        animation.c2d.closePath();
        animation.c2d.fill();
    }
})(animation || (animation = {}));
//# sourceMappingURL=canvas.js.map