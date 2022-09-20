/* // normal
function reverseString(text) {
    for (let i = 0; i < text.length; i++) {
        const element = text[i];
        console.log(element);
    }
}
const myString = 'I am a lazy boy';
const reversed = reverseString(myString); */

//reversed
/* function reverseString(text) {
    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        console.log(element);
    }
}
const myString = 'I am a lazy boy';
const reversed = reverseString(myString); */

// incrimental reversed method
/* function reverseString(text) {
    let reversed = '';
    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        reversed = reversed + element;
        console.log(element, reversed);
    }
    return reversed;
}
const myString = 'I am a good boy';
const reversed = reverseString(myString);
console.log(reversed); */

// word reverse
/* function reverseWord(str) {
    const words = str.split(' ');
    const result = [];
    for (let i = words.length - 1; i >= 0; i--) {
        const element = words[i];
        result.push(element);
    }
    const reversed = result.join(' ');
    return reversed;
}
const myString = 'lobsters are delicious';
reverseWord(myString);
console.log(reverseWord); */

function add(a, b) {
    return a + b;
}
console.log(add);