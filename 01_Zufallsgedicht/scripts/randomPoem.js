"use strict";
let subjectArray = ["Sandra", "Nicole", "Laura", "Siegbert", "Helmut"];
let praedikatArray = ["malt", "zeigt", "reimt", "schreit", "kocht"];
let objectArray = ["Obst", "Ersti-Tickets", "HFU-Karte", "Bücher", "Kuchen"];
let placeHolderArray = new Array(3);
function createPoem() {
    let poemLine = "";
    let arrayPosition;
    for (let j = 0; j < 3; j++) {
        let emptyTestNumber = randomNumberTo3();
        while (j == 0 && testIfEmpty(emptyTestNumber) && isEven(emptyTestNumber)) {
            arrayPosition = randomNumberTo5();
            if (subjectArray[arrayPosition] == "0") {
                continue;
            }
            else {
                placeHolderArray[emptyTestNumber] = subjectArray[arrayPosition];
                subjectArray[arrayPosition] = "0";
            }
        }
        while (j == 1 && testIfEmpty(emptyTestNumber)) {
            arrayPosition = randomNumberTo5();
            if (praedikatArray[arrayPosition] == "0") {
                continue;
            }
            else {
                placeHolderArray[1] = praedikatArray[arrayPosition];
                praedikatArray[arrayPosition] = "0";
            }
        }
        while (j == 2 && testIfEmpty(emptyTestNumber) && isEven(emptyTestNumber)) {
            arrayPosition = randomNumberTo5();
            if (objectArray[arrayPosition] == "0") {
                continue;
            }
            else {
                placeHolderArray[emptyTestNumber] = objectArray[arrayPosition];
                objectArray[arrayPosition] = "0";
            }
        }
    }
    poemLine = placeHolderArray[0] + " " + placeHolderArray[1] + " " + placeHolderArray[2];
    return poemLine;
}
;
consolePrint;
//Hilfsfunktionen
function isEven(position) {
    if (position % 2 == 0 || position == 0) {
        return true;
    }
    else {
        return false;
    }
}
function testIfEmpty(position) {
    if (placeHolderArray[position] == "") {
        return true;
    }
    else {
        return false;
    }
}
function randomNumberTo5() {
    return Math.floor(Math.random() * 6);
}
function randomNumberTo3() {
    return Math.floor(Math.random() * 3);
}
function consolePrint() {
    console.log(createPoem());
}
;
//# sourceMappingURL=randomPoem.js.map