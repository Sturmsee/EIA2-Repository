"use strict";
let v = 1;
let v_string = '1';
let v_boolean = true;
const x = 1;
let doppelInference = 10;
v += 1;
console.log("Variable: " + v);
console.log("String: " + v_string);
console.log("Boolean: " + v_boolean);
// x += 1;
console.log("Konstante: " + x);
if (v_boolean) {
    v_boolean = false;
    doppelInference = "42";
    console.log("Boolean: " + v_boolean);
}
doppelInference += " ist der Sinn des Lebens";
console.log(doppelInference);
//# sourceMappingURL=recap.js.map