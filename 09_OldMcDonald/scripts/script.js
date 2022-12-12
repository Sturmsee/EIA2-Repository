"use strict";
var oldMcDonald;
(function (oldMcDonald) {
    let h;
    let p;
    let animals = [];
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("loading Old McDonald...");
        let animalCow = new oldMcDonald.Animal(oldMcDonald.verseCow, "Cow");
        let animalChick = new oldMcDonald.Animal(oldMcDonald.verseChicks, "Chicken");
        let animalPig = new oldMcDonald.Animal(oldMcDonald.versePig, "Pig");
        let animalDog = new oldMcDonald.Animal(oldMcDonald.verseDogs, "Dog");
        console.log("finished loading");
        animals.push(animalCow, animalChick, animalPig, animalDog);
        console.log(animals);
        h = document.getElementById("song");
        p = document.getElementById("singing");
        singingAnimal();
    }
    //Making a delay in the loop
    // let delay = async (milliseconds: number = 5000) => {new Promise((resolve) => setTimeout(resolve, milliseconds))};
    function delay(milliseconds = 5000) {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
    }
    async function singingAnimal() {
        for (let i = 0; i < animals.length; i++) {
            h.innerText = animals[i].animal;
            for (let j = 0; j < oldMcDonald.verseCow.length; j++) {
                p.innerText = animals[i].verse[j];
                //console.log(p.innerText);
                await delay(2000);
            }
        }
    }
})(oldMcDonald || (oldMcDonald = {}));
//# sourceMappingURL=script.js.map