"use strict";
let divLeft = document.getElementById("div0");
let divRight = document.getElementById("div1");
let buttonLeft = document.querySelector("button");
function createSpan(_element) {
    let span = document.createElement("span");
    span.innerHTML = _element.innerHTML;
    span.className = "mouseSpan";
    return span;
}
function hoverEvent(_event) {
    let eventTarget = _event.target;
    eventTarget.appendChild(createSpan(eventTarget));
}
function clickEvent(_event) {
    let _target = _event.target;
    eventLog(_event);
}
function eventLog(_event) {
    console.log("current target" + _event.currentTarget);
    console.log("type" + _event.type);
    console.log("target" + _event.target);
}
function showDomStructure(_event, target) {
    //Unvollständig
    let _target = target;
    if (_target.parentElement != null && _target != _event.currentTarget) {
    }
}
//# sourceMappingURL=events.js.map