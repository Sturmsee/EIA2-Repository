let v: number = 1;
let v_string: string = '1';
let v_boolean: boolean = true;
const x: number = 1;

let doppelInference: number|string = 10;

v += 1;
console.log("Variable: " + v);
console.log("String: " + v_string);
console.log("Boolean: " + v_boolean);

// x += 1;
console.log("Konstante: "+ x);

if(v_boolean) {
    v_boolean = false;
    doppelInference = "42";
    console.log("Boolean: " + v_boolean);
}

doppelInference += " ist der Sinn des Lebens";
console.log(doppelInference);


