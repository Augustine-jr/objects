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
console.log(person1.nationality); // Output: Nigerian
