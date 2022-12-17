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
                c2d.moveTo(this.positionX, this.positionY);
                c2d.arcTo(this.positionX, this.positionY, this.positionX + 3, this.positionY, 3);
                c2d.arcTo(this.positionX + 3, this.positionY, this.positionX + 6, this.positionY, 3);
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

        drawHead(_movement: number): void {
            c2d.beginPath();
            c2d.fillStyle = this.color;
            c2d.arc(this.positionX - (5 + (_movement / 2)), this.positionY - 4 + _movement, 5, 0, 2 * Math.PI);
            c2d.closePath();
            c2d.fill();

            c2d.fillStyle = "yellow";
            if(_movement != 0) {
                c2d.beginPath();
                c2d.moveTo(this.positionX - 5, this.positionY - 2);
                c2d.lineTo(this.positionX - 8, this.positionY - 3);
                c2d.lineTo(this.positionX - 5, this.positionY - 4);
                c2d.closePath();
                c2d.fill();
            }
            else {
                c2d.beginPath();
                c2d.moveTo(this.positionX - 6, this.positionY + _movement);
                c2d.lineTo(this.positionX - 5, this.positionY + _movement + 3);
                c2d.lineTo(this.positionX - 4, this.positionY + _movement);
                c2d.closePath();
                c2d.fill();
            }
        }
    }

}