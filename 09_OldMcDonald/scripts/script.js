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
        //singSong();
        //counter = 0;
        //setTimeout(singSong, 4000);
    }
    //Making a delay in the loop
    const delay = async (milliseconds = 5000) => { new Promise((resolve) => setTimeout(resolve, milliseconds)); };
    /*async function singSong(): Promise<void>{
        for (let animal of animals) {
            h.innerText = animal.animal;
            for (let i = 0; i < verseCow.length; i++) {
                p.innerText = animal.verse[i];
                console.log(i);
                console.log(animal.verse[i]);
                console.log(p.innerText);
                await delay(5000);
            }
        }
    }*/
    async function singingAnimal() {
        for (let i = 0; i < animals.length; i++) {
            h.innerText = animals[i].animal;
            for (let j = 0; j < oldMcDonald.verseCow.length; j++) {
                p.innerText = animals[i].verse[j];
                await delay(5000);
            }
        }
    }
})(oldMcDonald || (oldMcDonald = {}));
//# sourceMappingURL=script.js.map