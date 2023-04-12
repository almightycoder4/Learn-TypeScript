"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
////// Implicit & Explict Types in TypeScript
var name = "pawan"; // Explict Type
//console.log(name);
var name2 = "Singh"; // Implict Type
//console.log(name2);
var data; // Here is nothing type define so it can be change to any type.
data = "String"; //String
//console.log(data);
data = 20; // Number
//console.log(data);
data = true; //boolean
//console.log(data);
data = {
    name: "Pawan",
    age: 23,
};
console.log(data);
