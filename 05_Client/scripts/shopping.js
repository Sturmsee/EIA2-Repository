"use strict";
var itemList;
(function (itemList) {
    window.addEventListener("load", handleLoad);
    let formData = new FormData();
    let jsonUrl = "./scripts/data.json";
    let data;
    let list = document.getElementById("shoppingList");
    let submitButton = document.getElementById("addItemSubmit");
    let editIcon = "https://img.icons8.com/cotton/64/000000/edit--v1.png";
    let deleteIcon = "https://img.icons8.com/color/48/000000/delete.png";
    //let deleteIcons: NodeListOf<HTMLElement> = document.querySelectorAll(".deleteIcon");
    //let editIcons: NodeListOf<HTMLElement> = document.querySelectorAll(".editIcon");
    function handleLoad(_event) {
        submitButton.addEventListener("click", addItem);
        requestData();
        console.log("got data");
        // generateList();
    }
    async function requestData() {
        let _url = jsonUrl;
        //_url += "/request";
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
                for (let icon of imgLink) {
                    let createImg = document.createElement("img");
                    createImg.src = icon;
                    createItem.appendChild(createImg);
                }
                list.appendChild(createItem);
            }
        }
    }
    /* function decideButton(_event: Event): void {
         let _url: string = url;
         
 
     } */
    function addItem(_event) {
        let url = jsonUrl;
        formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        query.append("date", setDate());
        url += "/add" + "?" + query.toString();
        //communicate(_url);
        alert("Item added!");
    }
    /* function deleteItem(): void {
         
     }
 
     function editItem(): void {
 
     } */
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
})(itemList || (itemList = {}));
//# sourceMappingURL=shopping.js.map