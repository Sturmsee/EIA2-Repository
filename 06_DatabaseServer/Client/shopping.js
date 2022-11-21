"use strict";
var itemList06;
(function (itemList06) {
    window.addEventListener("load", handleLoad);
    let formData = new FormData();
    let form;
    let databaseUrl = "https://webuser.hs-furtwangen.de/~schiffma/Database/?";
    //let collection: string = "&collection=Items";
    let data;
    let list = document.getElementById("shoppingList");
    let submitButton = document.getElementById("addItemSubmit");
    let editIcon = "https://img.icons8.com/cotton/64/000000/edit--v1.png";
    let deleteIcon = "https://img.icons8.com/color/48/000000/delete.png";
    function handleLoad(_event) {
        submitButton.addEventListener("click", addItem);
        requestData();
        // console.log("data received");
        //console.log(setDate());
    }
    async function requestData() {
        let _url = databaseUrl;
        //_url += "command=find" + collection;
        let query = new URLSearchParams();
        query.set("command", "find");
        query.set("collection", "Items");
        _url += query.toString();
        await communicate(_url);
        generateList();
        form = document.getElementById("addItem");
    }
    function generateList() {
        let imgLink = [editIcon, deleteIcon];
        // console.log(data);
        for (let type in data) {
            let items = data[type];
            console.log(items);
            let createItem = document.createElement("span");
            createItem.innerHTML = items.amount + "x " + items.name + ", Notes: " + items.notes;
            createItem.id = type.toString();
            //console.log(createItem.id);
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
        console.log(formData);
        formData.append("date", setDate());
        // json = JSON.stringify(formData);
        /* for (const pair of formData.entries()) {
            console.log(typeof pair[1]);
            const key: string = pair[0].toString();
            const value: string = pair[1].toString();
            json[key] = value;
        } */
        formData.forEach(function (value, key) {
            json[key] = value;
        });
        // for (let key in formData.keys()) {
        //     if (!json[key]) {
        //         let values: FormDataEntryValue[] = formData.getAll(key);
        //         json[key] = values.length > 0 ? values : values[0];
        //     }
        //     //console.log(json[key]);
        // }
        let query = new URLSearchParams();
        console.log(json);
        query.set("command", "insert");
        query.set("collection", "Items");
        query.set("data", JSON.stringify(json));
        url += query.toString();
        // console.log(url);
        await communicate(url);
        alert("Item added!");
        window.location.reload();
    }
    async function deleteItem(_event) {
        let url = databaseUrl;
        let targetParent = _event.target.parentElement;
        let _id = targetParent.id;
        formData = new FormData(document.forms[0]);
        let _query = new URLSearchParams(formData);
        console.log(_id);
        _query.set("command", "delete");
        _query.set("collection", "Items");
        _query.set("id", _id);
        url += _query.toString();
        await communicate(url);
        alert("Item deleted!");
        window.location.reload();
    }
    async function editItem(_event) {
        let url = databaseUrl;
        let targetParent = _event.target.parentElement;
        let _id = targetParent.id;
        formData = new FormData(document.forms[0]);
        let _query = new URLSearchParams();
        let json = {};
        formData.forEach(function (value, key) {
            json[key] = value;
        });
        _query.set("command", "update");
        _query.set("collection", "Items");
        _query.set("id", _id);
        _query.set("data", JSON.stringify(json));
        console.log(formData);
        console.log(_query);
        url += _query.toString();
        console.log(url);
        await communicate(url);
        alert("Item updated!");
        //window.location.reload();
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
        // console.log("Response", response);
        // console.log(responseServer);
        console.log(data);
    }
})(itemList06 || (itemList06 = {}));
//# sourceMappingURL=shopping.js.map