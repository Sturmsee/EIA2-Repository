"use strict";
var birds;
(function (birds) {
    window.addEventListener("load", handleLoad);
    let canvas;
    let c2d;
    function handleLoad(_event) {
        canvas = document.getElementById("myCanvas");
        c2d = canvas.getContext("2d");
        createBackground();
        paintTrees();
        paintSnowman();
        paintBirds();
    }
    function createBackground() {
        //skybox
        let gradient = c2d.createLinearGradient(0, 0, 0, 600);
        gradient.addColorStop(0, "#ff6600");
        gradient.addColorStop(0.3, "#ffcc66");
        gradient.addColorStop(0.6, "#ffff99");
        gradient.addColorStop(1, "#66ccff");
        c2d.fillStyle = gradient;
        c2d.fillRect(0, 0, 800, 600);
        //Sun
        c2d.fillStyle = "yellow";
        c2d.arc(790, 0, 50, 0, Math.PI);
        c2d.fill();
        //Mountains
        c2d.fillStyle = "grey";
        c2d.beginPath();
        c2d.moveTo(0, 250);
        c2d.lineTo(50, 100);
        c2d.lineTo(75, 280);
        c2d.lineTo(100, 150);
        c2d.lineTo(200, 250);
        c2d.lineTo(250, 300);
        c2d.lineTo(350, 150);
        c2d.lineTo(370, 100);
        c2d.lineTo(400, 200);
        c2d.lineTo(450, 300);
        c2d.lineTo(550, 250);
        c2d.lineTo(600, 150);
        c2d.lineTo(700, 600);
        c2d.lineTo(0, 600);
        c2d.closePath();
        c2d.fill();
        c2d.fillStyle = "lightgray";
        c2d.beginPath();
        c2d.moveTo(0, 350);
        c2d.lineTo(100, 200);
        c2d.lineTo(150, 300);
        c2d.lineTo(275, 250);
        c2d.lineTo(300, 250);
        c2d.lineTo(350, 200);
        c2d.lineTo(400, 270);
        c2d.lineTo(500, 200);
        c2d.lineTo(520, 170);
        c2d.lineTo(550, 250);
        c2d.lineTo(600, 300);
        c2d.lineTo(700, 255);
        c2d.lineTo(750, 200);
        c2d.lineTo(800, 250);
        c2d.lineTo(800, 600);
        c2d.lineTo(0, 600);
        c2d.closePath();
        c2d.fill();
        //Clouds
        c2d.fillStyle = "snow";
        c2d.beginPath();
        c2d.arc(100, 50, 15, 0, 2 * Math.PI);
        c2d.arc(110, 60, 15, 0, 2 * Math.PI);
        c2d.arc(100, 70, 15, 0, 2 * Math.PI);
        c2d.arc(82, 70, 15, 0, 2 * Math.PI);
        c2d.arc(62, 70, 15, 0, 2 * Math.PI);
        c2d.arc(50, 60, 15, 0, 2 * Math.PI);
        c2d.arc(60, 50, 15, 0, 2 * Math.PI);
        c2d.arc(80, 50, 15, 0, 2 * Math.PI);
        c2d.closePath();
        c2d.fill();
        c2d.beginPath();
        c2d.arc(390, 135, 15, 0, 2 * Math.PI);
        c2d.arc(400, 145, 15, 0, 2 * Math.PI);
        c2d.arc(390, 155, 15, 0, 2 * Math.PI);
        c2d.arc(372, 155, 15, 0, 2 * Math.PI);
        c2d.arc(352, 155, 15, 0, 2 * Math.PI);
        c2d.arc(340, 145, 15, 0, 2 * Math.PI);
        c2d.arc(350, 135, 15, 0, 2 * Math.PI);
        c2d.arc(370, 135, 15, 0, 2 * Math.PI);
        c2d.closePath();
        c2d.fill();
        c2d.beginPath();
        c2d.arc(750, 35, 15, 0, 2 * Math.PI);
        c2d.arc(760, 45, 15, 0, 2 * Math.PI);
        c2d.arc(750, 55, 15, 0, 2 * Math.PI);
        c2d.arc(732, 55, 15, 0, 2 * Math.PI);
        c2d.arc(712, 55, 15, 0, 2 * Math.PI);
        c2d.arc(710, 45, 15, 0, 2 * Math.PI);
        c2d.arc(730, 35, 15, 0, 2 * Math.PI);
        c2d.arc(750, 35, 15, 0, 2 * Math.PI);
        c2d.closePath();
        c2d.fill();
        //Snow
        c2d.fillStyle = "snow";
        c2d.beginPath();
        c2d.moveTo(0, 425);
        c2d.bezierCurveTo(0, 450, 100, 500, 800, 400);
        c2d.lineTo(800, 600);
        c2d.lineTo(0, 600);
        c2d.closePath();
        c2d.fill();
    }
    function paintTrees() {
    }
    function paintSnowman() {
    }
    function paintBirds() {
    }
})(birds || (birds = {}));
//# sourceMappingURL=canvas.js.map