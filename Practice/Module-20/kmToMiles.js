function kmToMile(km) {
    const miles = km / 1.609;
    return miles;
}
const givenKm = 120;
const mile = kmToMile(givenKm);
console.log(mile);