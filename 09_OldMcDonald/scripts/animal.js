"use strict";
var oldMcDonald;
(function (oldMcDonald) {
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
    }
    oldMcDonald.Animal = Animal;
})(oldMcDonald || (oldMcDonald = {}));
//# sourceMappingURL=animal.js.map