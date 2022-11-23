window.addEventListener("load", handleLoad);

let canvas: HTMLCanvasElement;
let context2D: CanvasRenderingContext2D;

let inputText: string = "";
let colors: string[] = ["blue", "green", "yellow", "orange", "black", "white", "red", "purple", "brown", "salmon", "cyan", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "violet"];

function handleLoad(_event: Event): void {

    canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
    context2D = <CanvasRenderingContext2D>canvas.getContext("2d");

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

function bigRectangle(): void {
    let gradient: CanvasGradient = context2D.createLinearGradient(0, 0, 0, 100);

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

function drawCircles(): void {
    for (let i = 0; i < 50; i++) {
        context2D.beginPath();
        context2D.strokeStyle = randomColor();
        context2D.arc(Math.random() * canvas.width, Math.random() * canvas.height, 4 * Math.PI, 0, 4 * Math.PI);
        context2D.closePath();
        context2D.stroke();
    }
}

function enterWord(): void {
    let promptText = prompt("Please enter a word: ");
    if (!promptText) {
        alert("no word entered");
        enterWord();
    }
    else {
        inputText = promptText;
    }

}

function drawText(text: string): void {

    let gradient: CanvasGradient = context2D.createLinearGradient(0, 0, 100, 0);

    gradient.addColorStop(0, randomColor());
    gradient.addColorStop(0.2, randomColor());
    gradient.addColorStop(0.4, randomColor());
    gradient.addColorStop(0.6, randomColor());
    gradient.addColorStop(0.8, randomColor()),
        gradient.addColorStop(1, randomColor());

    context2D.fillStyle = gradient;
    context2D.fillText(text, canvas.width / 2, canvas.height / 2);
}

function randomColor(): string {
    return colors[Math.floor(Math.random() * colors.length)];
}

function createAbomination(): void {

    let startPosX: number = Math.floor(Math.random() * canvas.width / 2) + canvas.width / 4;
    let startPosY: number = Math.floor(Math.random() * canvas.width / 4) + 10;
    let arcRadius: number = (Math.random() * 100) * Math.PI;
    let rectWidth: number = Math.floor(Math.random() * 100);
    let rectHeight: number = Math.floor(Math.random() * 70);
    let ellipseRadX: number = Math.floor(Math.random() * 50);
    let ellipseRadY: number = Math.floor(Math.random() * 40);

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
    context2D.fill()

    context2D.fillStyle = randomColor();
    context2D.fillRect(startPosX - rectWidth, startPosY + arcRadius + rectHeight, rectWidth, rectHeight);

    context2D.fillStyle = "rgba(220, 160, 190, 0.4)";
    context2D.fillRect(startPosX - rectWidth / 3, startPosY + arcRadius + rectHeight / 1.5, rectWidth / 2, rectHeight / 2);
}