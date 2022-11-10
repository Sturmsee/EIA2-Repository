namespace itemList {

    window.addEventListener("load", handleLoad);

    let formData = new FormData();
    let submitButton: HTMLElement = <HTMLInputElement>document.getElementById("addItemSubmit");
    let url: string = "";
    let data: string;
    //let createImg: HTMLImageElement = document.createElement("img");
    //let createItem: HTMLElement = document.createElement("li");

    let deleteIcons: NodeListOf<HTMLElement> = document.querySelectorAll(".deleteIcon");
    let editIcons: NodeListOf<HTMLElement> = document.querySelectorAll(".editIcon");
    //let allItems: Items = [];

    function handleLoad(_event: Event): void {

        submitButton.addEventListener("click", addItem);
        requestData();

    }

    function requestData(): void {
        let _url: string = url;
        _url += "/request";
        communicate(_url);
    }

    function generateList(): void {
        
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
        console.log("Response", response);
        console.log(responseServer);


    }


}