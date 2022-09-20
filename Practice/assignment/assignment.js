// problem 1: function of radian to degree conversion
function radianToDegree(radian) {
    // input validation
    if (typeof radian != 'number') {
        return "Please Enter a valid Number"
    }
    else {
        const pi = Math.PI;
        let result = radian * (180 / pi);
        return result.toFixed();
    }
}

console.log(radianToDegree(25));
//expexted result: 1432;

// -------------------------------------



// problem 2: function for checking js file
function isJavaScriptFile(fileName) {

    // file validation
    if (fileName.indexOf('.') === -1) {
        return "Please Enter a valid file name"
    }
    else {
        let result = fileName.endsWith('.js');
        return result;
    }
}

/* console.log(isJavaScriptFile("app.js"))
// expected result: true
console.log(isJavaScriptFile("js.png"))
// expected result: false */



// -------------------------------------


// problem 3: Oil Price calculation
function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    // input number validation
    if (typeof dieselQuantity != 'number' || typeof petrolQuantity != 'number' || typeof octaneQuantity != 'number') {
        return "please enter a valid number";
    }
    else {
        const dieselPrice = 114;
        const petrolPrice = 130;
        const octanePrice = 135;

        let result = (dieselQuantity * dieselPrice) + (petrolQuantity * petrolPrice) + (octaneQuantity * octanePrice);
        return result;
    }
}

/* console.log(oilPrice(1, 1, 1));
//Expected result: 379
 */

// -------------------------------------


// problem 4: Bus Fare cost calculation
function publicBusFare(passengers) {

    // input validation
    if (typeof passengers != 'number') {
        return "Please Enter a valid Number";
    }
    else {
        let microBus = passengers % 50;
        let publicBus = microBus % 11;
        const publicBusFare = 250;
        let totalFare = publicBus * publicBusFare;
        return totalFare;
    }
}

/* console.log(publicBusFare(67));
//expected result: 1500
console.log(publicBusFare(120));
//expected result: 2250 */



// -------------------------------------


// problem 5: check if 2 peoples are friend or not

function isBestFriend(person1, person2) {
    // check the input if valid object or not
    if (typeof person1 != 'object' || typeof person2 != 'object') {
        return "Please Enter a valid Object";
    }
    else {
        if (person1.name === person2.friend && person2.name === person1.friend) {
            return true;
        } else {
            return false;
        }
    }
}

/* let person1 = { name: 'John', friend: 'Doe' };
let person2 = { name: 'Doe', friend: 'John' };
//expected result: true */


/* let person1 = { name: 'hero', friend: 'alom' };
let person2 = { name: 'alom', friend: 'zero' };
//expected result: false */

// console.log(isBestFriend(person1, person2));