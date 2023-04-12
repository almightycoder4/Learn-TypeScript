export {};
////// Implicit & Explict Types in TypeScript
let name: string = "pawan"; // Explict Type
//console.log(name);

let name2 = "Singh"; // Implict Type
//console.log(name2);

let data; // Here is nothing type define so it can be change to any type.

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
