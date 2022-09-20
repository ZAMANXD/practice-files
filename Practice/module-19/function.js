function aggrigation(a, b, c, d, e) {
    var sum = a + b + c + d + e;
    console.log(sum);
}

aggrigation(11, 11, 11, 11, 11);


// Returning something
function singara(money) {
    var singaraPrice = 12;
    var singaras = money / singaraPrice;
    return singaras;
}
var cash = 34500;
var budget = singara(cash);
console.log(budget);

// another example
function add(num1, num2) {
    const doSum = num1 + num2;
    return doSum;
}

const result1 = add(66, 34);
const result2 = add(85, 15);
const finalResult = (result1 / result2);
console.log(finalResult);

// multiple return 
function doSomething() {
    return 'one';
    return 'two';
    return 'three'
}
console.log(doSomething);