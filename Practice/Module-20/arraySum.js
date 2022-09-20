// Calculate Sum of all numbers of an array
function getSumOfAnArray(numbers) {
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
    return sum;
}
const theNumbers = [12, 65, 45, 78, 32, 45, 91];
getSumOfAnArray(theNumbers);