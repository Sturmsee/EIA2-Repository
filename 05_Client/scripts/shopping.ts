namespace itemList {

    window.addEventListener("load", handleLoad);

    let formData = new FormData();

    let jsonUrl: string = "./scripts/data.json";
    let data: Items;

    let list: HTMLDivElement = <HTMLDivElement>document.getElementById("shoppingList");
    let submitButton: HTMLElement = <HTMLInputElement>document.getElementById("addItemSubmit");

    let editIcon: string = "https://img.icons8.com/cotton/64/000000/edit--v1.png";
    let deleteIcon: string = "https://img.icons8.com/color/48/000000/delete.png";

    //let deleteIcons: NodeListOf<HTMLElement> = document.querySelectorAll(".deleteIcon");
    //let editIcons: NodeListOf<HTMLElement> = document.querySelectorAll(".editIcon");


    function handleLoad(_event: Event): void {

        submitButton.addEventListener("click", addItem);
        requestData();
        console.log("got data");

        // generateList();

    }

    async function requestData(): Promise<void> {
        let _url: string = jsonUrl;
        //_url += "/request";
        await communicate(_url);
        generateList();
    }

    function generateList(): void {
        let imgLink: string[] = [editIcon, deleteIcon];
        console.log(data);

        for (let type in data) {

            let items: Item[] = data[type];
            console.log(items);

            for (let item of items) {
                let createItem: HTMLElement = document.createElement("span");
                console.log(item);
                
                createItem.innerHTML = item.amount + "x " + item.name + ", Notes: " + item.notes;
                for (let icon of imgLink) {
                    let createImg: HTMLImageElement = document.createElement("img");
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

    function addItem(_event: Event): void {
        let url: string = jsonUrl;
        formData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        query.append("date", setDate());
        url += "/add" + "?" + query.toString();
        //communicate(_url);
        alert("Item added!");
    }

    /* function deleteItem(): void {
         
     }
 
     function editItem(): void {
 
     } */


    function setDate(): string {
        let date = new Date();
        date.getUTCDate;
        return date.toString();
    }

    async function communicate(_url: RequestInfo): Promise<void> {

        let response: Response = await fetch(_url);
        let responseServer = await response.text();
        data = JSON.parse(responseServer);
        console.log("Response", response);
        console.log(responseServer);


    }


}