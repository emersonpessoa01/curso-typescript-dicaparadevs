"use strict";
let age = 5;
const firstName = "Emerson";
const isValid = true;
let idk = 5;
idk = true;
idk = "12";
const ids = [1, 2, 3, 4, 5];
const boolean = [true, false, true, false];
const names = ["Emerson", "Luciene", "Fernanda"];
//Tupla
const person = [1, "Emerson"];
//Lista de tuplas
const people = [
    [1, "Emerson"],
    [2, "Luciene"],
    [3, "Fernanda"],
];
//Intersections
const productId = false;
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
//Para assinalar
const direction = Direction.Down;
console.log(direction);
//Type Assertions
const productName = "Boné";
let itemId;
itemId = productName;
//Type Casting  
const productPrice = 19.99;
let price;
price = productPrice;
price = productPrice;
