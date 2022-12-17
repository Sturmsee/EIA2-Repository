namespace animation {

    export class Bird {
        positionX: number;
        positionY: number;
        color: string;
        flying: boolean;

        constructor(_posX: number, _posY: number, _color: string, _flying: boolean) {
            this.set(_posX, _posY, _color, _flying);
        }

        set(_posX: number, _posY: number, _color: string, _flying: boolean) {
            this.positionX = _posX;
            this.positionY = _posY;
            this.color = _color;
            this.flying = _flying;
        }

        draw(): void {
            if (this.flying) {
                c2d.strokeStyle = this.color;
                c2d.beginPath();

                c2d.closePath();
                c2d.stroke();
            }
            else {
                c2d.fillStyle = this.color;
                c2d.beginPath();
                c2d.arc(this.positionX, this.positionY, 10, 0, Math.PI * 2);
                c2d.arc(this.positionX, this.positionY + 10, 10, 0, Math.PI * 2);
                c2d.closePath();
                c2d.fill();

                c2d.strokeStyle = "yellow";
            }
        }
    }

}