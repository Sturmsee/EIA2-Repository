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
        //console.log(setDate());
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
            //console.log(data[type]);
            let item = data[type];
            //console.log(item);
            //let items: Item[] = data[type];
            //console.log(items);
            //for (let element in item) {
            let createItem = document.createElement("span");
            //console.log(item);
            createItem.innerHTML = item.amount + "x " + item.name + ", Notes: " + item.notes;
            //createItem.addEventListener("click", decideButton);
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
            //}
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
        let _json = conversionToJson(formData);
        let query = new URLSearchParams();
        query.set('command', 'insert');
        query.set('collection', 'Items');
        query.set('data', JSON.stringify(_json));
        query.append("date", setDate());
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
        _query.append("id", _id);
        url += "update" + collection + "&data=" + _query.toString();
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
        //for (let element in data) {
        //    console.log(element);
        //}
        //console.log(data);
    }
    function conversionToJson(_formData) {
        let json = {};
        for (let key in _formData.keys()) {
            if (!json[key]) {
                let values = _formData.getAll(key);
                json[key] = values.length > 1 ? values : values[0];
            }
        }
        //console.log(json);
        return json;
    }
})(itemList06 || (itemList06 = {}));
//# sourceMappingURL=shopping.js.map