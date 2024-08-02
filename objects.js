// Learning objects
// Example of object literal syntax
const person = {
  name: 'Augustine Aneke',
  age: 30,
  hobbies: ['reading', 'painting'],
  job: 'Developer',
  greet: function () {
    console.log(`Hello my name is ${this.name}`);
  }
};
// Accessing properties
console.log(person.hobbies);
console.log(person.age);
// Calling a method
person.greet();
// Modifying properties
person.age = '79';
console.log(person);
// Adding new properties
person.newProperty = 'Him';
console.log(person);
// Deleting properties
delete person.newProperty;
console.log(person);


// Example of `new objects()` syntax
const car = new Object();
car.make = 'Toyota';
car.model = 'Corolla';
car.year = 2020;
car.start = function() {
  console.log(`${this.make} ${this.model} has started.`);
};

// Accessing properties
console.log(car.make);
console.log(car.year);
// Calling a method
car.start();


// Nested objects
const student = {
  name: 'Augustine Aneke',
  age: 24,
  grades: {
    math: 95,
    science: 85,
    english: 90
  },
  printGrades: function() {
    console.log(`Grades for ${this.name}:`);
    console.log(`Math: ${this.grades.math}`);
    console.log(`Science: ${this.grades.science}`);
    console.log(`English: ${this.grades.english}`);
  }
}
// Accessing properties
console.log(student.grades.math);
console.log(student.grades.english);
// Calling a method
student.printGrades();

const person1 = {
  name: 'Wisdom Micheal',
  age: 35,
  hobbies: ['reading', 'cooking'],
  job: {
    title: 'Teacher',
    department: 'Science',
    location: 'Suleja'
  },
  greetPerson1: function() {
    console.log(`Hello my name is ${this.name}`);
    console.log(`I am a ${this.age} years old teacher in the ${this.job.department} department at ${this.job.location}`);
    console.log(`My hobbies are ${this.hobbies[0]} and ${this.hobbies[1]}`);
  }
};

// Accessing nested objects
console.log(person1.job.title);      // Output: Teacher
console.log(person1.job.department); // Output: Science
console.log(person1.job.location);   // Output: Suleja

// Calling nested objects' methods
person1.greetPerson1(); // Output: Hello my name is Wisdom Micheal
                        //         I am a 35 years old teacher in the Science department at Suleja
                        //         My hobbies are reading and cooking

// Modifying objects
delete person1.hobbies;
// Accessing properties after modification
console.log(person1.hobbies); // Output: undefined
// updating properties
person1.hobbies = ['dating', 'painting'];
console.log(person1.hobbies);
// Adding new properties
person1.nationality = 'Nigerian';

// Assignment operator

var a = 3;  // Initialize variable a with the value 3

a += 2;     // a = a + 2 -> a = 3 + 2 -> a = 5
a -= 1;     // a = a - 1 -> a = 5 - 1 -> a = 4
a **= 2;    // a = a ** 2 -> a = 4 ** 2 -> a = 16 (exponentiation, equivalent to 4^2)
a /= 4;     // a = a / 4 -> a = 16 / 4 -> a = 4
a %= 3;     // a = a % 3 -> a = 4 % 3 -> a = 1 (remainder of 4 divided by 3)
var result = a;  // Assign the final value of a to the variable result

console.log(result);  // Output the value of result




const product2 = {
  name: 'shirt',
  'delivery-time': '1 day',
  rating: {     // Nested objects
    stars: 4.5,
    count: 87
  },
  fun: function function1() {
    console.log('This is a function in the product object'); // when we save functions inside an object, this is called a Method.
  }
};
 console.log(product2);
 // Accessing the value using Dot Notation
 console.log(product2.name);
 console.log(product2.rating.count)
 product2.fun();


 // Accessing the value using Bracket Notation
 console.log(product2['name']);
 console.log(product2['delivery-time']);

 // Modifying the value using Dot Notation
 product2.name = 'T-shirt';
 console.log(product2);

 // Modifying the value using Bracket Notation
 product2['name'] = 'Sweater';
 console.log(product2);

 // Deleting a property using Dot Notation
 delete product2.name;
 console.log(product2);

 // Deleting a property using Bracket Notation
 delete product2['name'];
 console.log(product2);

 // Creating a new property using Dot Notation
 product2.color = 'Red';
 console.log(product2);

 // Creating a new property using Bracket Notation
 product2['size'] = 'Large';
 console.log(product2);

 //Built-in objects JSON and localstorage
 // JSON.stringify() method converts a JavaScript object or value to a JSON string
/* var person = {name: 'John Doe', age: 30, city: 'New York'};
 var jsonString = JSON.stringify(person);
 console.log(jsonString);

 // JSON.parse() method parses a JSON string and converts it to a JavaScript object
 var jsonObject = JSON.parse(jsonString);
 console.log(jsonObject);

 // localStorage.setItem() method stores data with the specified key and value
 localStorage.setItem('name', 'John Doe');
 localStorage.setItem('age', '30');
 localStorage.setItem('city', 'New York');

 // localStorage.getItem() method retrieves data with the specified key
 var name = localStorage.getItem('name');
 var age = localStorage.getItem('age');
 var city = localStorage.getItem('city');
 console.log(name, age, city); */

console.log(JSON.stringify(product2));

const jsonString = JSON.stringify(product2);
console.log(JSON.parse(jsonString));

// Destructuring
//Array destructuring allows you to extract values from an array and assign them to variables in a single statement.
// Without destructuring
let arr = [1, 2, 3];
let a = arr[0];
let b = arr[1];
let c = arr[2];
console.log(a, b, c); // 1 2 3

// With destructuring
let [x, y, z] = arr;
console.log(x, y, z); // 1 2 3

// Object destructuring allows you to extract properties from an object and assign them to variables with matching names.
// Without destructuring
/*let obj = { name: 'John Doe', age: 30 };
let name1 = obj.name;
let age1 = obj.age;
console.log(name1, age1); // John Doe 30
// With destructuring
let { name: newName, age: newAge } = obj;
console.log(newName, newAge); // John Doe 30*/

// Without destructuring
let person = { name: "Alice", age: 25, job: "Developer" };
let name = person.name;
let age = person.age;
let job = person.job;

console.log(name, age, job); // Alice 25 Developer

// With destructuring
let { name, age, job } = person;
console.log(name, age, job); // Alice 25 Developer
 // Nested Destructuring
 let user = {
  id: 1,
  info: {
    name: "John",
    address: {
      city: "New York",
      country: "USA"
    }
  }
};

let {
  info: {
    name,
    address: { city, country }
  }
} = user;

console.log(name); // John
console.log(city); // New York
console.log(country); // USA
 
//function parameters
 function greet({ name, age }) {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

greet({ name: "Alice", age: 25 }); // Hello, my name is Alice and I am 25 years old.