const numbers = [30, 45, 64, 12, 32, 66, 87, 99, 10];
const find = numbers.find(number => number % 3 === 0);
const filter = numbers.filter(number => number % 3 === 0);
console.log(find);
console.log(filter);

/**
 * (find only return the 1st matching element )
 * to find the cheapest product in an object
 */

const products = [
    {id: 1, name: 'watch', price: 3000},
    {id: 2, name: 'Smart Phone', price: 30000},
    {id: 3, name: 'Laptop', price: 80000},
    {id: 4, name: 'Tablet', price: 33000},
    {id: 5, name: 'TV', price: 20000}
]
const cheapProduct = products.find(product => product.price <5000);
console.log(cheapProduct);