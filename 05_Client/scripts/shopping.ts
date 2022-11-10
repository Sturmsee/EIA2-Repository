namespace itemList {

    window.addEventListener("load", handleLoad);

    let formData = new FormData();
    let submitButton: HTMLElement = <HTMLInputElement>document.getElementById("addItemSubmit");
    let url: string = "";
    //let createImg: HTMLImageElement = document.createElement("img");
    //let createItem: HTMLElement = document.createElement("li");

    let deleteIcons: NodeListOf<HTMLElement> = document.querySelectorAll(".deleteIcon"); 
    let editIcons: NodeListOf<HTMLElement> = document.querySelectorAll(".editIcon");

    function handleLoad(_event: Event): void {

        submitButton.addEventListener("click", addItem);

       
    }

    function decideButton(_event: Event): void {
        let _url: string = url;
        

    }

    function addItem(_event: Event): void {
        let _url: string = url;
        formData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url += "?" + query.toString() + setDate(); 

    }

    function deleteItem(_event: Event): void {
        
    }

    function editItem(_event: Event): void {

    }


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

        serverAnswer(responseServer);
    }

    function serverAnswer(_answer: string): void {
        let span: HTMLSpanElement = document.createElement("span");
        let p: HTMLElement = document.createElement("p");
        let div: HTMLElement = <HTMLElement> document.getElementById("shoppingList");

        span.id = "popUp";
        p.innerHTML = _answer;
        span.appendChild(p);
        div.appendChild(span);
    }
}