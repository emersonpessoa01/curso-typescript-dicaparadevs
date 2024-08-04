let age: number = 5;
const firstName: string = "Emerson";
const isValid: boolean = true;
let idk: any = 5;

idk = true;
idk = "12";

const ids: number[] = [1, 2, 3, 4, 5];
const boolean: boolean[] = [true, false, true, false];
const names: string[] = ["Emerson", "Luciene", "Fernanda"];

//Tupla
const person: [number, string] = [1, "Emerson"];

//Lista de tuplas
const people: [number, string][] = [
  [1, "Emerson"],
  [2, "Luciene"],
  [3, "Fernanda"],
];

//Intersections
const productId: string | number | boolean = false;

//Enum
enum Direction {
  Up = 1,
  Down = 2,
}

//Para assinalar
const direction: Direction = Direction.Down;

console.log(direction);

//Type Assertions
const productName: any = "Boné";
let itemId: string;
itemId = productName as string;

//Type Casting  
    const productPrice: any = 19.99;
    let price: number;
    price = <number>productPrice;
    price = productPrice as number;