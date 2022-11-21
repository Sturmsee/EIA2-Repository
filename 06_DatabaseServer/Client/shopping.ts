namespace itemList06 {

    window.addEventListener("load", handleLoad);

    let formData = new FormData();
    let form: HTMLFormElement;

    let databaseUrl: string = "https://webuser.hs-furtwangen.de/~schiffma/Database/?";
    //let collection: string = "&collection=Items";
    let data: Items[];

    let list: HTMLDivElement = <HTMLDivElement>document.getElementById("shoppingList");
    let submitButton: HTMLElement = <HTMLInputElement>document.getElementById("addItemSubmit");

    let editIcon: string = "https://img.icons8.com/cotton/64/000000/edit--v1.png";
    let deleteIcon: string = "https://img.icons8.com/color/48/000000/delete.png";

    function handleLoad(_event: Event): void {

        submitButton.addEventListener("click", addItem);
        requestData();
        // console.log("data received");
        //console.log(setDate());

    }

    async function requestData(): Promise<void> {

        let _url: string = databaseUrl;
        //_url += "command=find" + collection;
        let query: URLSearchParams = new URLSearchParams();
        query.set("command", "find");
        query.set("collection", "Items");
        _url += query.toString();
        await communicate(_url);
        generateList();
        form = <HTMLFormElement>document.getElementById("addItem");
    }

    function generateList(): void {

        let imgLink: string[] = [editIcon, deleteIcon];
        // console.log(data);

        for (let type in data) {

            let items: Items = data[type];
            console.log(items);

            let createItem: HTMLElement = document.createElement("span");
            
            createItem.innerHTML = items.amount + "x " + items.name + ", Notes: " + items.notes;

            createItem.id = type.toString();
            //console.log(createItem.id);
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

        }
    }



    async function addItem(): Promise<void> {

        let url: string = databaseUrl;
        formData = new FormData(form);
        let json: FormDataJSON = {};
        console.log(formData);

        formData.append("date", setDate());
        // json = JSON.stringify(formData);
        /* for (const pair of formData.entries()) {
            console.log(typeof pair[1]);
            const key: string = pair[0].toString();
            const value: string = pair[1].toString();
            json[key] = value;
        } */

        formData.forEach(function(value, key) {
            json[key] = value;
        });

        // for (let key in formData.keys()) {
        //     if (!json[key]) {
        //         let values: FormDataEntryValue[] = formData.getAll(key);
        //         json[key] = values.length > 0 ? values : values[0];
        //     }
        //     //console.log(json[key]);
        // }

        let query: URLSearchParams = new URLSearchParams();


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

    async function deleteItem(_event: Event): Promise<void> {

        let url: string = databaseUrl;
        let targetParent: HTMLElement = <HTMLElement>(_event.target as HTMLElement).parentElement;
        let _id: string = targetParent.id;
        formData = new FormData(document.forms[0]);
        let _query: URLSearchParams = new URLSearchParams(<any>formData);
        console.log(_id);

        _query.set("command", "delete");
        _query.set("collection", "Items");
        _query.set("id", _id)

        url += _query.toString();
        await communicate(url);
        alert("Item deleted!");

        window.location.reload();
    }

    async function editItem(_event: Event,): Promise<void> {

        let url: string = databaseUrl;
        let targetParent: HTMLElement = <HTMLElement>(_event.target as HTMLElement).parentElement;
        let _id: string = targetParent.id;
        formData = new FormData(document.forms[0]);
        let _query: URLSearchParams = new URLSearchParams();

        let json: FormDataJSON = {};
        
        formData.forEach(function(value, key) {
            json[key] = value;
        });

        _query.set("command", "update");
        _query.set("collection", "Items");
        _query.set("id", _id);
        _query.set("data", JSON.stringify(json));

        console.log(formData);
        console.log(_query);

        url +=  _query.toString();
        console.log(url);
        await communicate(url);
        alert("Item updated!");
        //window.location.reload();
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
        let responseServer: string = await response.text();
        let responseJSON = JSON.parse(responseServer);
        data = responseJSON.data;
        // console.log("Response", response);
        // console.log(responseServer);
        console.log(data);

    }


}