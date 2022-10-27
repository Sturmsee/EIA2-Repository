namespace shoppingList{

    let editIconString: string = "https://img.icons8.com/cotton/64/000000/edit--v1.png";
    let deleteIconString: string = "https://img.icons8.com/color/48/000000/delete.png";

    window.addEventListener("load", handleLoad);

    let submitButton: HTMLElement = <HTMLInputElement> document.getElementById("addItemSubmit");
    let allDeleteIcons[]: HTMLElement = document.querySelectorAll(".deleteicon");
    let allEditIcons[]: HTMLElement = document.querySelectorAll(".editicon");

    function handleLoad(event: Event): void {
        submitButton.addEventListener("click", addItem);

        for (let i = 0; i < allDeleteIcons.length; i++) {
            
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