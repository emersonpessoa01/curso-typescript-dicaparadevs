"use strict";
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    //tipa métodos
    sayMyName() {
        return `My name is ${this.name}`;
    }
}
//Assinalar
const john = new Person(1, "John Doe", 30);
console.log(john.sayMyName()); // Output: My name is John Doe
