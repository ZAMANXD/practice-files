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