"use strict";
var animation;
(function (animation) {
    class Bird {
        positionX;
        positionY;
        color;
        flying;
        constructor(_posX, _posY, _color, _flying) {
            this.set(_posX, _posY, _color, _flying);
        }
        set(_posX, _posY, _color, _flying) {
            this.positionX = _posX;
            this.positionY = _posY;
            this.color = _color;
            this.flying = _flying;
        }
        draw() {
            if (this.flying) {
                animation.c2d.strokeStyle = this.color;
                animation.c2d.beginPath();
                animation.c2d.moveTo(this.positionX, this.positionY);
                animation.c2d.arcTo(this.positionX, this.positionY, this.positionX + 3, this.positionY, 3);
                animation.c2d.arcTo(this.positionX + 3, this.positionY, this.positionX + 6, this.positionY, 3);
                animation.c2d.closePath();
                animation.c2d.stroke();
            }
            else {
                animation.c2d.fillStyle = this.color;
                animation.c2d.beginPath();
                animation.c2d.arc(this.positionX, this.positionY, 10, 0, Math.PI * 2);
                animation.c2d.arc(this.positionX, this.positionY + 10, 10, 0, Math.PI * 2);
                animation.c2d.closePath();
                animation.c2d.fill();
                animation.c2d.strokeStyle = "yellow";
            }
        }
        drawHead(_movement) {
            animation.c2d.beginPath();
            animation.c2d.fillStyle = this.color;
            animation.c2d.arc(this.positionX - (5 + (_movement / 2)), this.positionY - 4 + _movement, 5, 0, 2 * Math.PI);
            animation.c2d.closePath();
            animation.c2d.fill();
            animation.c2d.fillStyle = "yellow";
            if (_movement != 0) {
                animation.c2d.beginPath();
                animation.c2d.moveTo(this.positionX - 5, this.positionY - 2);
                animation.c2d.lineTo(this.positionX - 8, this.positionY - 3);
                animation.c2d.lineTo(this.positionX - 5, this.positionY - 4);
                animation.c2d.closePath();
                animation.c2d.fill();
            }
            else {
                animation.c2d.beginPath();
                animation.c2d.moveTo(this.positionX - 6, this.positionY + _movement);
                animation.c2d.lineTo(this.positionX - 5, this.positionY + _movement + 3);
                animation.c2d.lineTo(this.positionX - 4, this.positionY + _movement);
                animation.c2d.closePath();
                animation.c2d.fill();
            }
        }
    }
    animation.Bird = Bird;
})(animation || (animation = {}));
//# sourceMappingURL=birds.js.map