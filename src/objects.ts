//Type
type Order = {
  productId: string;
  price: number;
};

type User = {
  firstName: string;
  age: number;
  email: string;
  password?: string;
  //   orders?: string[];
  orders?: Order[];
  register():string
};

//Criar objeto desse usuário
const user: User = {
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
const printLog = (message: string) => {};
printLog(user.password!); //exclamação retira o undefinided e reconhece que existe

//Unions de type: União de objetos
type Author = {
  books: string[];
};
const author: Author & User = {
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

//Interfaces
interface UserInterface {
  readonly firstName: string;
  email: string;
  login():string;
}

interface AuthorInterface {
  books: string[];
}

const userInterface: UserInterface = {
  firstName: "John Doe",
  email: "john.doe@example.com",
  login() {
      return "User logged in";
    },
};

//Unions de interface
interface AuthorInterface {
  books: string[];
}
const newAuthor: UserInterface & AuthorInterface = {
  firstName: "John Doe",
  email: "john.doe@example.com",
  books: ["book1", "book2"],
};

//Intersections dem type. Isso não consegue em interface
// const grade: number | string = 1;
type Grade = number | string;
const grade: Grade = 1;
