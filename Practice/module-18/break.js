// to break the loop oparation
/* var numbers = ["hello", "world", "cup", "football", 2022, "quatar"];

for (i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    // console.log(number);
    if (number == "cup") {
        break;
    }
} */

// practice
var numbers = [22, 32, 52, 56, 45, 85, 95, 785];
for (i = 0; i < numbers.length; i++) {
    var num = numbers[i];
    if (num < 50) {
        break;
    };
    console.log(num);

}
var numberss = [25, 65, 69, 86, 78, 26, 35, 66, 12, 26, 78];
for (var i = 0; i < numberss.length; i++) {
    var nammm = numberss[i];
    if (nammm < 50) {
        continue;
    }
    console.log(nammm);
}