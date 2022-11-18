namespace itemList06 {

    window.addEventListener("load", handleLoad);

    let formData = new FormData();

    let databaseUrl: string = "https://webuser.hs-furtwangen.de/~schiffma/Database/?command=";
    let collection: string = "&collection=Items";
    let data: Items[];

    let list: HTMLDivElement = <HTMLDivElement>document.getElementById("shoppingList");
    let submitButton: HTMLElement = <HTMLInputElement>document.getElementById("addItemSubmit");

    let editIcon: string = "https://img.icons8.com/cotton/64/000000/edit--v1.png";
    let deleteIcon: string = "https://img.icons8.com/color/48/000000/delete.png";

    function handleLoad(_event: Event): void {

        submitButton.addEventListener("click", addItem);
        requestData();
        console.log("data received");
        //console.log(setDate());

    }

    async function requestData(): Promise<void> {

        let _url: string = databaseUrl;
        _url += "find" + collection;
        await communicate(_url);
        generateList();
    }

    function generateList(): void {

        let imgLink: string[] = [editIcon, deleteIcon];
        console.log(data);

        for (let type in data) {

            //console.log(data[type]);

            let item: Items = data[type];
            //console.log(item);

            //let items: Item[] = data[type];
            //console.log(items);

            //for (let element in item) {
            let createItem: HTMLElement = document.createElement("span");
            //console.log(item);
            createItem.innerHTML = item.amount + "x " + item.name + ", Notes: " + item.notes;
            //createItem.addEventListener("click", decideButton);
            createItem.id = type.toString();
            console.log(createItem.id);
            for (let icon of imgLink) {
                let createImg: HTMLImageElement = document.createElement("img");
                if (icon == editIcon) {
                    createImg.addEventListener("click", editItem);
                } else if (icon == deleteIcon) {
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

    async function addItem(): Promise<void> {

        let url: string = databaseUrl;
        formData = new FormData(document.forms[0]);
        let _json: formDataJSON = conversionToJson(formData);
        let query: URLSearchParams = new URLSearchParams();
        query.set('command', 'insert');
        query.set('collection', 'Items');
        query.set('data', JSON.stringify(_json));
        query.append("date", setDate());
        url += query.toString();
        console.log(url);
        await communicate(url);
        alert("Item added!");
    }

    async function deleteItem(_event: Event): Promise<void> {

        let url: string = databaseUrl;
        let targetParent: HTMLElement = <HTMLElement>(_event.target as HTMLElement).parentElement;
        let _id: string = targetParent.id;
        formData = new FormData(document.forms[0]);
        let _query: URLSearchParams = new URLSearchParams(<any>formData);
        _query.append("id", _id);

        url += "drop" + collection + "&data=" + _query.toString();
        await communicate(url);
        alert("Item deleted!");
    }

    async function editItem(_event: Event,): Promise<void> {

        let url: string = databaseUrl;
        let targetParent: HTMLElement = <HTMLElement>(_event.target as HTMLElement).parentElement;
        let _id: string = targetParent.id;
        formData = new FormData(document.forms[0]);
        let _query: URLSearchParams = new URLSearchParams();
        _query.append("id", _id);

        url += "update" + collection + "&data=" + _query.toString();
        await communicate(url);
        alert("Item updated!");
    }


    function setDate(): string {
        let date = new Date();
        let _date = date.toISOString();
        for (let i = 0; i < _date.length; i++) {
            if (_date.charAt(i) === 'T') {
                _date = _date.substring(0, i);
            } else {
                continue;
            }
        }
        return _date;
    }

    async function communicate(_url: RequestInfo): Promise<void> {

        let response: Response = await fetch(_url);
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

    function conversionToJson(_formData: FormData): formDataJSON {

        let json: formDataJSON = {};
        for (let key in _formData.keys()) {
            if (!json[key]) {
                let values: FormDataEntryValue[] = _formData.getAll(key);
                json[key] = values.length > 1 ? values : values[0];
            }
        }
        //console.log(json);
        return json;
    }

}