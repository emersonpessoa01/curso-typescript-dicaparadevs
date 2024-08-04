const sum = (x: number, y: number): number | string => {
  return (x + y).toString();
};
const value = sum(2, 3);
const log = (message: string): void => {
  console.log(message);
};

//Usar função com interface
interface MathFunc {
  (x: number, y: number): number;
}

const sumFunc: MathFunc = (x: number, y: number): number => {
  return x + y;
};
//Assinalando a interface em outra variável
const subFunc: MathFunc = (x: number, y: number): number => {
  return x - y;
};

const multFunc: MathFunc = (x: number, y: number) => {
  return x * y;
};
const divFunc: MathFunc = (x: number, y: number) => {
  if (y === 0) {
    throw new Error("Divisão por zero não é permitida");
  }
  return x / y;
};
