// displaying all the elements of an array using for loop in bangla system
// var numbers = [22, 85, 45, 65, 2022, 55, 569];

// for (i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     console.log(number);
// }

var names = [25, 65, 69, 86, 78, 66, 78];
for (var i = 0; i < names.length; i++) {
    var nam = names[i];
    // console.log(nam);
    if (nam == 86) {
        break;
    }
}

var smartphone = { brand: "iPhone", model: "13" };
console.log(smartphone.[brand]);