function checkEvenOdd(number) {
    const reminder = number % 2;
    if (reminder === 0) {
        return true;
    } else {
        return false;
    };
}
const givenNumber = checkEvenOdd(856656);
// console.log(givenNumber);

function isEven(number) {
    const reminder = number % 2;
    if (reminder === 0) {
        return true;
    } else {
        return false;
    }
}

const theNumber = isEven(585565);
console.log(theNumber);