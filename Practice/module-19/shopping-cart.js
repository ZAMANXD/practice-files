var shoppingCart = {
    pen: 3,
    mouse: 1,
    keyboard: 2,
    book: 5,
    sunglass: 1
}
// console.log(shoppingCart);

/*When the property keys are known */
var sCart = {
    pen: 53,
    mouse: 1,
    keyboard: 2,
    book: 5,
    sunglass: 1
}
var penCount = sCart['pen'];
// console.log(penCount);

console.log(penCount);

// to display all the keys/properties of an object in an array 
var properties = Object.keys(sCart);
console.log(properties);

// to display all the values of an object in an Array
var propertiesValues = Object.values(sCart);
console.log(propertiesValues);

// all together
console.log(properties, propertiesValues);

// To set property values
sCart.mouse = 55;
// console.log(sCart);
sCart['mouse'] = 34;
console.log(sCart);