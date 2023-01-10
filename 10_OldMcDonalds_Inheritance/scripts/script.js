"use strict";
var oldMcDonald_02;
(function (oldMcDonald_02) {
    let h;
    let p;
    oldMcDonald_02.picture = document.createElement('img');
    let animals = [];
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("loading Old McDonald...");
        let animalCow = new oldMcDonald_02.Cow(oldMcDonald_02.verseCow, "Cow", "#");
        let animalChick = new oldMcDonald_02.Chicken(oldMcDonald_02.verseChicks, "Chicken", "#");
        let animalPig = new oldMcDonald_02.Pig(oldMcDonald_02.versePig, "Pig", "#");
        let animalDog = new oldMcDonald_02.Dog(oldMcDonald_02.verseDogs, "Dog", "#");
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
            for (let j = 0; j < oldMcDonald_02.verseCow.length; j++) {
                p.innerText = animals[i].verse[j];
                //console.log(p.innerText);
                await delay(2000);
            }
            animals[i].uniqueAction(animals[i].img);
        }
    }
})(oldMcDonald_02 || (oldMcDonald_02 = {}));
//# sourceMappingURL=script.js.map