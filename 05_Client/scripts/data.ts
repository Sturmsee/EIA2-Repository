namespace itemList {

    export let deleteIconString: string = "https://img.icons8.com/color/48/000000/delete.png";
    export let editIconString: string = "https://img.icons8.com/cotton/64/000000/edit--v1.png";

    export interface Item {
        name: string;
        amount: number;
        notes: string;
        date: string;
        id?: string;
    }

    export interface Items {
        [type: string]: Item[];
        }
}