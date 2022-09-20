const numbers = [30, 45, 64, 12, 32, 66, 87, 99, 10];
const bigNumbers = numbers.filter(number => number > 20);
// console.log(bigNumbers);
const smallNumbers = numbers.filter(number => number < 20);
// console.log(smallNumbers);
const even = numbers.filter(number => number % 2 === 1);
// console.log(even);

const products = [
    {id: 1, name: 'watch', price: 3000},
    {id: 2, name: 'Smart Phone', price: 30000},
    {id: 3, name: 'Laptop', price: 80000},
    {id: 4, name: 'Tablet', price: 33000},
    {id: 5, name: 'TV', price: 20000}
]
const expensiveProduct = products.filter(product => product.price > 50000);
console.log(expensiveProduct);