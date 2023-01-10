namespace oldMcDonald_02 {

    export class Chicken extends Animal{

        img: string;

        constructor( _verse: string[], _animal: string, _img: string) {
            super(_verse, _animal);
            this.setImg(_img);
        }

        setImg( _img: string): void {
            this.img = _img;
        }

    }
}