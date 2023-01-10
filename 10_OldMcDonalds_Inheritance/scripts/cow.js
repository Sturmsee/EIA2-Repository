"use strict";
var oldMcDonald_02;
(function (oldMcDonald_02) {
    class Cow extends oldMcDonald_02.Animal {
        img;
        constructor(_verse, _animal, _img) {
            super(_verse, _animal);
            this.setImg(_img);
        }
        setImg(_img) {
            this.img = _img;
        }
    }
    oldMcDonald_02.Cow = Cow;
})(oldMcDonald_02 || (oldMcDonald_02 = {}));
//# sourceMappingURL=cow.js.map