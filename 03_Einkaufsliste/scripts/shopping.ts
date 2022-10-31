namespace shoppingList {

    //let editIconString: string = "https://img.icons8.com/cotton/64/000000/edit--v1.png";
    //let deleteIconString: string = "https://img.icons8.com/color/48/000000/delete.png";

    window.addEventListener("load", handleLoad);

    let submitButton: HTMLElement = <HTMLInputElement>document.getElementById("addItemSubmit");
    //let createImg: HTMLImageElement = document.createElement("img");
    //let createItem: HTMLElement = document.createElement("li");

    let deleteIcons: NodeListOf<HTMLElement> = document.querySelectorAll(".deleteIcon"); 
    let editIcons: NodeListOf<HTMLElement> = document.querySelectorAll(".editIcon");

    function handleLoad(_event: Event): void {
        submitButton.addEventListener("submit", addItem);

        for(const icon of deleteIcons) {
            icon.addEventListener("click", deleteItem);
        }

        for(const icon of editIcons) {
            icon.addEventListener("click", editItem);
        }

    }

    function addItem(_event: Event): void {
        console.log("Item was added.");

    }

    function deleteItem(_event: Event): void {
        console.log("Item will be deleted.");
    }

    function editItem(_event: Event): void {
        console.log("Item can now be edited.");

    }


}