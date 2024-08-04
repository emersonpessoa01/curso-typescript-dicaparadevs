//Usar classe com interface
interface PersonInterface {
  id: number;
  // protected name: string;
  // private age: number;
  //não conseguem ser declaradas na interface
  sayMyName(): string;
}

class Person implements PersonInterface {
  readonly id: number;
  protected name: string;
  private age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  //Tipar métodos
  sayMyName(): string {
    return `My name is ${this.name}`;
  }
}
//Assinalar
const john = new Person(1, "John Doe", 30);
console.log(john.sayMyName()); // Output: My name is John Doe
//Não consegue alterado o valor do id
//person.id = 32

//Não consegue acessar variável protegida fora de sua classe.
//console.log(john.name) // Erro: Property 'name' is protected and only accessible

//Subclasse Employee(herança)
class Employee extends Person {
  private salary: number;
  constructor(id: number, name: string, age: number, salary: number) {
    super(id, name, age);
    this.salary = salary;
  }
  whoIam() {
    return `I'm a Employee. My name is ${this.name} and my salary is ${this.salary}`;
  }
}

//Uma formamelhor enxugar uma classe
class Personfact {
  constructor(
    readonly id: number,
    protected name: string,
    private age: number
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}
