namespace oldMcDonald {


    export class Animal{
        verse: string[];
        animal: string;
    
        constructor(_verse: string[], _animal: string) {
            this.set(_verse, _animal);
        }

        set(_verse: string[], _animal: string): void {
            this.verse = _verse;
            this.animal = _animal;
        }
        
    }
}
