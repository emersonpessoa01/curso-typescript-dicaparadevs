"use strict";
const sum = (x, y) => {
    return (x + y).toString();
};
const value = sum(2, 3);
const log = (message) => {
    console.log(message);
};
const sumFunc = (x, y) => {
    return x + y;
};
//Assinalando a interface em outra variável
const subFunc = (x, y) => {
    return x - y;
};
const multFunc = (x, y) => {
    return x * y;
};
const divFunc = (x, y) => {
    if (y === 0) {
        throw new Error("Divisão por zero não é permitida");
    }
    return x / y;
};
