let divLeft = document.getElementById("div0");
let divRight = document.getElementById("div1");
let buttonLeft = document.querySelector("button")


function createSpan(_element: HTMLElement): HTMLSpanElement {
    let span = document.createElement("span");
    span.innerHTML = _element.innerHTML;
    span.className = "mouseSpan";
    return span;
}

function hoverEvent(_event: Event): void {
    let eventTarget: HTMLElement = <HTMLElement> _event.target;
    eventTarget.appendChild(createSpan(eventTarget));
}

function clickEvent(_event: Event): void {
    let _target: HTMLElement = <HTMLElement> _event.target;
    eventLog(_event);
}

function eventLog(_event: Event): void {

    console.log("current target" + _event.currentTarget);
    console.log("type" + _event.type);
    console.log("target" + _event.target);
    
}

function showDomStructure(_event: Event, target: HTMLElement): void {

    //Unvollständig
    let _target: HTMLElement = target;
    if (_target.parentElement != null && _target != _event.currentTarget) {
        
    }
}