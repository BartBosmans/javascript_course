// COMMENT

// console.log('success');

/* Multi
  Line
  Comment
*/

// Variables
// Are case-sensitive
// Should be meaningful and descriptive
// cannot start with a number
// cannot contain a space or hyphen (-)
// cannot be a reserved word


// var color = 'red';
// console.log('red');

// let age;

// age = 30;
// age = 40;

// let properCamelCase = true;

// let a = 1;
// let b = 2;
// let c = 3;

// console.log(age);

// Constants

// const pi = 3.14;

// console.log(pi);

let name = 'John'; // String Literal
let age = 30 //
let lovesCats = true; // Boolean Literal
let color = null; // Null
// let list; // undefined

console.log(name);

// name = 'Mary';
name =  name + ' Smith'; //concatenate

console.log(name);

let message = name + ' is ' + age;
console.log(message);

// Array Literals

const numbers = new Array(1,2,3,4,5,6);
console.log(numbers);
console.log(numbers[2]);

const colors = ['red', 'blue', 'green', 'yellow'];

colors[4] = 'black';
colors.push('white');

console.log(colors);

let lastColor = colors.pop();
console.log(lastColor);
console.log(colors);

let firstColor = colors.shift();
console.log(firstColor);
console.log(colors);

console.log(colors.indexOf('yellow'));

const myArray = ['red', 4, true, null, [1, 2, 3]];
console.log(myArray);

const person = {
  firstName:  'John',
  lastName: 'Smith',
  age: 30,
  pets: ['dogs', 'cats'],
  address: {
    street: '123 Street',
    city: 'Houston',
    state: 'Texas'
  }
}

console.log(person);

// dot notation
console.log(person.firstName);
console.log(person.age);

let key = 'firstName'

// bracket notation
console.log(person['lastName']);
console.log(person[key]);

console.log(person.pets);

console.log(person.address['state']);

person.email = 'john@email.com';

console.log(person);

delete person.age;
console.log(person);

const { firstName, lastName, address: {city} } = person;
console.log(firstName, lastName);
console.log(city);


const people = [
  {
    firstName:  'John',
    lastName: 'Smith',
    age: 30,
    pets: ['dogs', 'cats'],
    address: {
      street: '123 Street',
      city: 'Houston',
      state: 'Texas'
    }
  },
  {
    firstName:  'Mary',
    lastName: 'Smith',
    age: 30,
    pets: ['dogs', 'cats'],
    address: {
      street: '123 Street',
      city: 'Houston',
      state: 'Texas'
    }
  }
];

const peopleJSON = JSON.stringify(people);
console.log(peopleJSON);

console.log(JSON.parse(peopleJSON));

// Functions

function hello(name){
  console.log('Hello '+ name);
}

hello('Bart');

function helloName(firstName, lastName){
  console.log(`Hello ${firstName} ${lastName}`);
}

helloName('John', 'Smith');

function convertPercent(num) {
  return num / 100;
}

console.log(convertPercent(50));

const convertPercent2 = (num) => num / 100;

console.log(convertPercent2(75));

//loops

let i = 0;
while (i<10){
  console.log(i);
  i++;
}

for (let i=0; i<10; i++){
  console.log(i);
}



for (let i=0; i < people.length; i++){
  console.log(people[i].firstName);
}

for (let person of people){
  console.log(person.age);
}

people.forEach(function(person){
  console.log(person.firstName);
});

people.forEach(person => console.log(person.age));

const personName = people.map(person => person.firstName);

console.log(personName);


const personAgeUnder30 = people.filter(person => person.age < 30);
console.log(personName);

// conditionals

let colorRed = 'red';

if (colorRed == 'red'){
  console.log(true);
}

let anAge = 30;
if (anAge == 3){
  console.log(true);
}else{
  console.log(false);
}

if (anAge !== 3){
  if (anAge > 18){
    console.log(true)
  }
}

if(anAge < 35 && anAge > 18){
  console.log(true);
}

let animal = 'cat';
const likesCats = animal == 'cat' ?  true : false;
console.log(likesCats);

// DOM Document object model

// single element selectors

// events
const btn = document.getElementById('myBtn');

btn.addEventListener('click', (e) => {
    console.log(e);
});

btn.addEventListener('mouseout', (e) =>{
    btn.style.background = 'blue';
});