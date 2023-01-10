"use strict";
var oldMcDonald_02;
(function (oldMcDonald_02) {
    class Animal {
        verse;
        animal;
        constructor(_verse, _animal) {
            this.set(_verse, _animal);
        }
        set(_verse, _animal) {
            this.verse = _verse;
            this.animal = _animal;
        }
        uniqueAction(_img) {
            oldMcDonald_02.picture.src = _img;
        }
    }
    oldMcDonald_02.Animal = Animal;
})(oldMcDonald_02 || (oldMcDonald_02 = {}));
//# sourceMappingURL=animal.js.map