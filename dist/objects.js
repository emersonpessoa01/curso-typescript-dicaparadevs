"use strict";
//Criar objeto desse usuário
const user = {
    firstName: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    //   password: "password123",
    //Criar objetos que serão listas de user
    orders: [
        { productId: "1", price: 1 },
        { productId: "2", price: 2 },
    ],
    register() {
        return "User registered";
    },
};
const printLog = (message) => { };
printLog(user.password); //exclamação retira o undefinided e reconhece que existe
const author = {
    age: 2,
    books: ["book1", "book2"],
    firstName: "John Doe",
    email: "john.doe@example.com",
    orders: [
        { productId: "1", price: 1 },
        { productId: "2", price: 2 },
    ], //também pode ser uma lista de string vazia
    register() {
        return "User registered";
    },
};
const userInterface = {
    firstName: "John Doe",
    email: "john.doe@example.com",
    login() {
        return "User logged in";
    },
};
const newAuthor = {
    firstName: "John Doe",
    email: "john.doe@example.com",
    books: ["book1", "book2"],
};
const grade = 1;
