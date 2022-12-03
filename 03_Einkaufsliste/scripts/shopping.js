"use strict";
var shoppingList;
(function (shoppingList) {
    //let editIconString: string = "https://img.icons8.com/cotton/64/000000/edit--v1.png";
    //let deleteIconString: string = "https://img.icons8.com/color/48/000000/delete.png";
    window.addEventListener("load", handleLoad);
    let submitButton = document.getElementById("addItemSubmit");
    //let createImg: HTMLImageElement = document.createElement("img");
    //let createItem: HTMLElement = document.createElement("li");
    let deleteIcons = document.querySelectorAll(".deleteIcon");
    let editIcons = document.querySelectorAll(".editIcon");
    function handleLoad(_event) {
        submitButton.addEventListener("submit", addItem);
        for (const icon of deleteIcons) {
            icon.addEventListener("click", deleteItem);
        }
        for (const icon of editIcons) {
            icon.addEventListener("click", editItem);
        }
    }
    function addItem(_event) {
        let AddItem = { name: "", amount: 0, notes: "", date: "" };
        AddItem.name = "";
        AddItem.amount = 0;
        AddItem.notes = "";
        AddItem.date = "";
        console.log("Item was added.");
    }
    function deleteItem(_event) {
        console.log("Item will be deleted.");
    }
    function editItem(_event) {
        console.log("Item can now be edited.");
    }
    function dateToString() { }
})(shoppingList || (shoppingList = {}));
//# sourceMappingURL=shopping.js.map