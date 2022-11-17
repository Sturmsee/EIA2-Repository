"use strict";
var itemList06;
(function (itemList06) {
    window.addEventListener("load", handleLoad);
    let formData = new FormData();
    let databaseUrl = "https://webuser.hs-furtwangen.de/~schiffma/Database/?command=";
    let collection = "&collection=Items";
    let data;
    let list = document.getElementById("shoppingList");
    let submitButton = document.getElementById("addItemSubmit");
    let editIcon = "https://img.icons8.com/cotton/64/000000/edit--v1.png";
    let deleteIcon = "https://img.icons8.com/color/48/000000/delete.png";
    function handleLoad(_event) {
        submitButton.addEventListener("click", addItem);
        requestData();
        console.log("data received");
    }
    async function requestData() {
        let _url = databaseUrl;
        _url += "find" + collection;
        await communicate(_url);
        generateList();
    }
    function generateList() {
        let imgLink = [editIcon, deleteIcon];
        console.log(data);
        for (let type in data) {
            let items = data[type];
            console.log(items);
            for (let item of items) {
                let createItem = document.createElement("span");
                console.log(item);
                createItem.innerHTML = item.amount + "x " + item.name + ", Notes: " + item.notes;
                //createItem.addEventListener("click", decideButton);
                createItem.id = item.id;
                for (let icon of imgLink) {
                    let createImg = document.createElement("img");
                    if (icon == editIcon) {
                        createImg.addEventListener("click", editItem);
                    }
                    else if (icon == deleteIcon) {
                        createImg.addEventListener("click", deleteItem);
                    }
                    createImg.src = icon;
                    createItem.appendChild(createImg);
                }
                list.appendChild(createItem);
            }
        }
    }
    /*function decideButton(_event: Event): void {
        let targetSrc: string;
        targetSrc = (_event.target as HTMLImageElement).src;

        if (targetSrc == editIcon) {
            editItem();
        }
        else if (targetSrc == deleteIcon) {

        }
        else {
            console.log("No Button was clicked!");
        }
    }*/
    async function addItem() {
        let url = databaseUrl;
        formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        query.append("date", setDate());
        url += "insert" + collection + "&data=" + query.toString();
        await communicate(url);
        alert("Item added!");
    }
    async function deleteItem(_event) {
        let url = databaseUrl;
        let targetParent = _event.target.parentElement;
        let _id = targetParent.id;
        formData = new FormData(document.forms[0]);
        let _query = new URLSearchParams(formData);
        _query.append("id", _id);
        url += "drop" + collection + "&data=" + _query.toString();
        await communicate(url);
        alert("Item deleted!");
    }
    async function editItem(_event) {
        let url = databaseUrl;
        let targetParent = _event.target.parentElement;
        let _id = targetParent.id;
        formData = new FormData(document.forms[0]);
        let _query = new URLSearchParams(formData);
        _query.append("id", _id);
        url += "update" + collection + "&data=" + _query.toString();
        await communicate(url);
        alert("Item updated!");
    }
    function setDate() {
        let date = new Date();
        date.getUTCDate;
        return date.toString();
    }
    async function communicate(_url) {
        let response = await fetch(_url);
        let responseServer = await response.text();
        data = JSON.parse(responseServer);
        console.log("Response", response);
        console.log(responseServer);
    }
})(itemList06 || (itemList06 = {}));
//# sourceMappingURL=shopping.js.map