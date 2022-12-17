namespace animation {

    export let canvas: HTMLCanvasElement;
    export let c2d: CanvasRenderingContext2D;

    let bgImage: ImageData;
    let birds: Bird[];

    let posX: number[] = [];
    let posY: number[] = [];
    let colours: string[] = ["red", "green", "orange", "blue", "purple", "lime", "salmon", "darkgoldenrod", "deeppink", "black"];
    let birdsFly: boolean = false;

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {

        canvas = <HTMLCanvasElement> document.querySelector("canvas");
        c2d = <CanvasRenderingContext2D> canvas.getContext("2d");

        createBackground();
        paintTrees();
        paintSnowman();

        bgImage = c2d.getImageData(0, 0, 800, 600);

        for (let i = 0; i < 10; i++) {
            if(i > 4) {
                birdsFly = true;
            }
            let bird = new Bird(posX[i], posY[i], colours[i], birdsFly);
            birds.push(bird);
        }

    }

    async function animate(): Promise<void> {
        while (true) {
            for (let i = 0; i < birds.length; i++) {
                if (birds[i].flying) {

                }
                else {

                }
            }
            delay(2000);
        }
        
    }

    function delay (milliseconds: number = 5000){
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
    }

    function createBackground(): void {

        //skybox
        let gradient = c2d.createLinearGradient(0, 0, 0, 600);
        gradient.addColorStop(0, "#ff6600")
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

    function paintTrees(): void {

        let xPosition: number[] = [20, 50, 100, 400, 650];
        let yPosition: number[] = [450, 400, 550, 430, 570];
        let treeWidth: number[] = [10, 5, 15, 20, 50];
        let treeHeight: number[] = [30, 20, 14, 25, 100];
        c2d.fillStyle = "brown";
        
        for (let i = 0; i < xPosition.length; i++){
            c2d.beginPath();
            c2d.fillRect(xPosition[i], yPosition[i], treeWidth[i], treeHeight[i]);
            c2d.closePath();
            c2d.fill();
        }

        c2d.fillStyle = "green";
        //Width 10, Height 30
        c2d.beginPath();
        c2d.moveTo(20, 430);
        c2d.lineTo(10, 430);
        c2d.lineTo(20, 410);
        c2d.lineTo(10, 410);
        c2d.lineTo(20, 400);
        c2d.lineTo(40, 410);
        c2d.lineTo(30, 410);
        c2d.lineTo(40, 430);
        c2d.lineTo(30, 430);
        c2d.closePath();
        c2d.fill();

        //Width 5, Height 20
        c2d.beginPath();
        c2d.moveTo(50, 390);
        c2d.lineTo(40, 390);
        c2d.lineTo(50, 385);
        c2d.lineTo(40, 385);
        c2d.lineTo(50, 380);
        c2d.lineTo(60, 385);
        c2d.lineTo(50, 385);
        c2d.lineTo(60, 390);
        c2d.lineTo(50, 390);
        c2d.closePath();
        c2d.fill();

        //Width 15, Height 14
        c2d.beginPath();
        c2d.moveTo(100, 540);
        c2d.lineTo(90, 540);
        c2d.lineTo(100, 535);
        c2d.lineTo(90, 535);
        c2d.lineTo(100, 530);
        c2d.lineTo(125, 535);
        c2d.lineTo(115, 535);
        c2d.lineTo(125, 540);
        c2d.lineTo(100, 540);
        c2d.closePath();
        c2d.fill();

        //Width 20, Height 25
        c2d.beginPath();
        c2d.moveTo(400, 415);
        c2d.lineTo(380, 415);
        c2d.lineTo(400, 405);
        c2d.lineTo(380, 405);
        c2d.lineTo(400, 390);
        c2d.lineTo(440, 405);
        c2d.lineTo(420, 405);
        c2d.lineTo(440, 415);
        c2d.lineTo(400, 415);
        c2d.closePath();
        c2d.fill();

        //Width 50, Height 100
        c2d.beginPath();
        c2d.fillStyle ="marone";
        c2d.moveTo(630, 520);
        c2d.fillRect(630, 520, 20, 30);
        c2d.closePath();
        c2d.fill();
    }

    function paintSnowman(): void {

        c2d.fillStyle = "snow";
        c2d.strokeStyle = "grey";
        c2d.beginPath();
        c2d.arc(570, 580, 30, 0, 2 * Math.PI);
        c2d.arc(570, 550, 20, 0, 2 * Math.PI);
        c2d.arc(570, 530, 10, 0, 2 * Math.PI);
        c2d.closePath();
        c2d.stroke();
        c2d.fill();

        c2d.fillStyle = "black";
        c2d.beginPath();
        c2d.arc(570, 560, 3, 0, 2 * Math.PI);
        c2d.arc(570, 570, 3, 0, 2 * Math.PI);
        c2d.closePath();
        c2d.fill();

        c2d.beginPath();
        c2d.fillRect(560, 520, 7, 12);
        c2d.fillRect(555, 530, 15, 3);
        c2d.closePath();
        c2d.fill();
    }
}