//Generics é uma forma de reutilizar código, tornando-o mais flexível e Generics
//permite que você defina tipos de dados para as variáveis, métodos e classes.
//Isso é útil quando você precisa trabalhar com diferentes tipos de dados em um mesmo código

//O <T> é um tipo genérico, que pode ser substituido por qualquer tipo desejado

//Meio de uma forma de passar tipos como parâmetro

// const returnValue = (value: any) => value;
// const message = returnValue("Hello World");
// const count = returnValue(5);
//recebendo generics como parâmetros

const returnValue = <T>(value: T): T => value;
const message = returnValue<string>("Hello World");
const count = returnValue<number>(5);

function getFirstvalueFromArray<Type>(array: Type[]) {
  return array[0];
}

const firstvalueFromStringArray = getFirstvalueFromArray<string>([
  "Emerson",
  "Luciene",
  "Fernanda",
]);
const firstvalueFromNumberArray = getFirstvalueFromArray<number>([1, 2]);

//Polimorfismo com Generics

interface Animal {
  makeSound(): void;
}

class Cat implements Animal {
  makeSound(): void {
    console.log("Miau!");
  }
}

class Dog implements Animal {
  makeSound(): void {
    console.log("Woof!");
  }
}

function makeSound<T extends Animal>(animal: T): void {
  animal.makeSound();
}

const cat = new Cat();

makeSound(cat); // Miau!

const dog = new Dog();

makeSound(dog); // Woof!

//Promises
const returnPromise = async (): Promise<number> => {
  return 5;
};

//Generics com classes

class genericNumber<T> {
  zeroValue: T;
  sum: (x: T, y: T) => T;

  constructor(zeroValue: T, sum: (x: T, y: T) => T) {
    this.zeroValue = zeroValue;
    this.sum = sum;
  }
}

const myGenericNumber = new genericNumber<number>(0, (x: number, y: number) => {
  return x + y;
});
