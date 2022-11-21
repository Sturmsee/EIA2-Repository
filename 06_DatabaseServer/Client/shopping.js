"use strict";
var itemList06;
(function (itemList06) {
    window.addEventListener("load", handleLoad);
    let formData = new FormData();
    let form;
    let databaseUrl = "https://webuser.hs-furtwangen.de/~schiffma/Database/?";
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
        //console.log(setDate());
    }
    async function requestData() {
        let _url = databaseUrl;
        _url += "command=find" + collection;
        await communicate(_url);
        generateList();
        form = document.getElementById("addItem");
    }
    function generateList() {
        let imgLink = [editIcon, deleteIcon];
        console.log(data);
        for (let type in data) {
            let item = data[type];
            let createItem = document.createElement("span");
            //console.log(item);
            createItem.innerHTML = item.amount + "x " + item.name + ", Notes: " + item.notes;
            createItem.id = type.toString();
            console.log(createItem.id);
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
    async function addItem() {
        let url = databaseUrl;
        formData = new FormData(form);
        let json = {};
        formData.append("date", setDate());
        console.log(formData);
        for (let key in formData.keys()) {
            if (!json[key]) {
                let values = formData.getAll(key);
                json[key] = values.length > 0 ? values : values[0];
            }
            //console.log(json[key]);
        }
        let query = new URLSearchParams();
        console.log(json);
        query.set("command", "insert");
        query.set("collection", "Items");
        query.set("data", JSON.stringify(json));
        url += query.toString();
        console.log(url);
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
        let _query = new URLSearchParams();
        url += "update" + collection + "&id=" + _id + _query.toString();
        await communicate(url);
        alert("Item updated!");
    }
    function setDate() {
        let date = new Date();
        let _date = date.toISOString();
        for (let i = 0; i < _date.length; i++) {
            if (_date.charAt(i) === 'T') {
                _date = _date.substring(0, i);
            }
            else {
                continue;
            }
        }
        return _date;
    }
    async function communicate(_url) {
        let response = await fetch(_url);
        let responseServer = await response.text();
        let responseJSON = JSON.parse(responseServer);
        data = responseJSON.data;
        console.log("Response", response);
        console.log(responseServer);
    }
})(itemList06 || (itemList06 = {}));
//# sourceMappingURL=shopping.js.map