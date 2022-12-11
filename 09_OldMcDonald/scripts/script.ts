namespace oldMcDonald {

    let h: HTMLElement;
    let p: HTMLElement;

    let animals: Animal[] = [];


    window.addEventListener("load", handleLoad);


    function handleLoad(_event: Event): void {

        console.log("loading Old McDonald...");
        let animalCow = new Animal(verseCow, "Cow");
        let animalChick = new Animal(verseChicks, "Chicken");
        let animalPig = new Animal(versePig, "Pig");
        let animalDog = new Animal(verseDogs, "Dog");
        console.log("finished loading");

        animals.push(animalCow, animalChick, animalPig, animalDog);
        console.log(animals);

        h = <HTMLElement>document.getElementById("song");
        p = <HTMLElement>document.getElementById("singing")

       singingAnimal();
        //singSong();
        //counter = 0;
        //setTimeout(singSong, 4000);
    }

    //Making a delay in the loop
    const delay = async (milliseconds: number = 5000) => {new Promise((resolve) => setTimeout(resolve, milliseconds))};

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

    async function singingAnimal(): Promise<void> {
        for(let i = 0; i < animals.length; i++) {
            h.innerText = animals[i].animal;
            for (let j = 0; j < verseCow.length; j++) {
                p.innerText = animals[i].verse[j];
                await delay(5000);
            }
            
        }
    }

}