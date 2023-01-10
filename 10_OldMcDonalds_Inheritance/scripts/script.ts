namespace oldMcDonald_02 {

    let h: HTMLElement;
    let p: HTMLElement;
    export let picture: HTMLImageElement = document.createElement('img');

    let animals: Animal[] = [];


    window.addEventListener("load", handleLoad);


    function handleLoad(_event: Event): void {

        console.log("loading Old McDonald...");
        let animalCow = new Cow(verseCow, "Cow", "#");
        let animalChick = new Chicken(verseChicks, "Chicken", "#");
        let animalPig = new Pig(versePig, "Pig", "#");
        let animalDog = new Dog(verseDogs, "Dog" , "#");
        console.log("finished loading");

        animals.push(animalCow, animalChick, animalPig, animalDog);
        console.log(animals);

        h = <HTMLElement>document.getElementById("song");
        p = <HTMLElement>document.getElementById("singing")

       singingAnimal();

    }

    //Making a delay in the loop
    // let delay = async (milliseconds: number = 5000) => {new Promise((resolve) => setTimeout(resolve, milliseconds))};
    function delay (milliseconds: number = 5000){
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
    }

   

    async function singingAnimal(): Promise<void> {
        for(let i = 0; i < animals.length; i++) {
            h.innerText = animals[i].animal;
            for (let j = 0; j < verseCow.length; j++) {
                p.innerText = animals[i].verse[j];
                //console.log(p.innerText);
                await delay(2000);
            }
            animals[i].uniqueAction(animals[i].img);
        }
    }
        	
}