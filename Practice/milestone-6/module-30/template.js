// multiline in js, oldschool method 
const multiline = 'First line of text \n' +
    'Second line of text \n' +
    'Third line of text';

// console.log(multiline);

// multiline in js, ES6 method
const newMultiline = `first line of text
second line of text
third line of text`;
// console.log(newMultiline);

// more ES6 feature
const a = 20;
const b = 30;
const sum = `sum of the ${a} and ${b} is: ${a + b}`
// console.log(sum);

const y = x => x * x;
const z = y(5);
// console.log(z);

const numbers = [10, 20, 30, 40, 50, 60, 70];
// console.log(Math.max(...numbers))
const cars = ['toyota', 'honda', 'mercedes']; const newCars = [...cars, 'ferrari'];
console.log(newCars);