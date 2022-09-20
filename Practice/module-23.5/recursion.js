//recursion function
function sum(i) {
    // stoping condition 
    if (i == 1) {
        return 1;
    }
    // recursion
    return i + sum(i - 1);
}
const result = sum(5);
console.log(result);