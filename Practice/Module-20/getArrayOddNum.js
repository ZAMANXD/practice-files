
// Calculate Sum of all numbers of an array
function getSumOfAnArray(numbers) {
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index, element, sum);
    }
    return sum;
}


function getOddNumbersOffAnArray(numbers) {
    let oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {

        /*  // to take the index of the array as 1,2,3... 
         const index = i;
 
         // to take the element of the index 
         const element = numbers[index];
 
         //to get the odd numbers in the blank array
         if (element % 2 !== 0) {
             odds.push(element);
             console.log(index, element);
         } */
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            console.log(index, element);
            oddNumbers.push(element);
        }

    }
    return oddNumbers;
}

const myNumbers = [12, 65, 45, 78, 32, 47, 91, 31, 95];
const oddNumbers = getOddNumbersOffAnArray(myNumbers);
console.log(oddNumbers);
const oddNumberSum = getSumOfAnArray(oddNumbers);
console.log('Odd Number Sum', oddNumberSum);

