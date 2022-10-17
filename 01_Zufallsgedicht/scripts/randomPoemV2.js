"use strict";
let subjectArray = ["Sandra", "Nicole", "Laura", "Siegbert", "Helmut"];
let predicateArray = ["malt", "zeigt", "reimt", "schreit", "kocht"];
let objectArray = ["Obst", "Ersti-Tickets", "HFU-Karte", "Bücher", "Kuchen"];
let poem = [["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""]];
//generating the a random poem without using dublicates
function generatePoem() {
    for (let i = 0; i < 5; i++) {
        let arrayLength = objectArray.length;
        let wordPositionInArray;
        for (let j = 0; j < 3; j++) {
            switch (j) {
                //Subjects
                case 0:
                    wordPositionInArray = randomNumber(arrayLength);
                    addStringToArray(coinFlip(), i, subjectArray, wordPositionInArray);
                    subjectArray.splice(wordPositionInArray, 1);
                    break;
                //Pradicates
                case 1:
                    wordPositionInArray = randomNumber(arrayLength);
                    addStringToArray(j, i, predicateArray, wordPositionInArray);
                    predicateArray.splice(wordPositionInArray, 1);
                    break;
                //Objects
                case 2:
                    wordPositionInArray = randomNumber(arrayLength);
                    addStringToArray(coinFlip(), i, objectArray, wordPositionInArray);
                    objectArray.splice(wordPositionInArray, 1);
                    break;
            }
        }
    }
}
//transcribing the poem from a string array to a string
function writePoem() {
    let finalPoem = ["", "", "", "", ""];
    generatePoem();
    for (let u = 0; u < 5; u++) {
        for (let v = 0; v < 3; v++) {
            finalPoem[u] += " " + poem[u][v];
        }
        finalPoem[u] += ".";
        console.log(finalPoem[u]);
    }
}
//generating a random number in accordance to the array length
function randomNumber(number_) {
    return Math.floor(Math.random() * (number_));
}
//generating a number between 0 and 2
function coinFlip() {
    if (randomNumber(99) % 2 == 0) {
        return 2;
    }
    else {
        return 0;
    }
}
//Adding the words to the poem array
function addStringToArray(arrayPos, index, wordArray, wordPositionInArray_) {
    if (poem[index][arrayPos] == "") {
        poem[index][arrayPos] = wordArray[wordPositionInArray_];
    }
    else {
        addStringToArray(coinFlip(), index, wordArray, wordPositionInArray_);
    }
}
function consoleLogs() {
    console.log(objectArray.length);
    console.log(objectArray);
    console.log(objectArray.length);
    console.log(objectArray);
}
//consoleLogs();
writePoem();
//# sourceMappingURL=randomPoemV2.js.map