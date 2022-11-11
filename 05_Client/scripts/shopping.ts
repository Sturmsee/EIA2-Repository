namespace itemList {

    window.addEventListener("load", handleLoad);

    let formData = new FormData();

    let url: string = "data.json";
    let data: Items;

    let list: HTMLDivElement = <HTMLDivElement>document.getElementById("shoppingList");
    let submitButton: HTMLElement = <HTMLInputElement>document.getElementById("addItemSubmit");

    let createImg: HTMLImageElement = document.createElement("img");
    let createItem: HTMLElement = document.createElement("span");

    let editIcon: string = "https://img.icons8.com/cotton/64/000000/edit--v1.png";
    let deleteIcon: string = "https://img.icons8.com/color/48/000000/delete.png";

    //let deleteIcons: NodeListOf<HTMLElement> = document.querySelectorAll(".deleteIcon");
    //let editIcons: NodeListOf<HTMLElement> = document.querySelectorAll(".editIcon");


    function handleLoad(_event: Event): void {

        submitButton.addEventListener("click", addItem);
        requestData();

        generateList();
    
    }

    function requestData(): void {
        let _url: string = url;
        _url += "/request";
        communicate(_url);
    }

    function generateList(): void {
        let imgLink: string[] = [editIcon, deleteIcon];

        for(let type in data) {
            let items: Item[] = data[type];

            for(let item of items) {
                createItem.innerHTML = item.amount + "x " + item.name + ", Notes: " + item.notes; 
                for(let icon of imgLink) {
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
        let _url: string = url;
        formData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        query.append("date", setDate());
        _url += "/add" + "?" + query.toString();
        communicate(_url);
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