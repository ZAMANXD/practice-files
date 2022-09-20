function inchToFeet(inches) {
    const feet = inches / 12;
    return feet;
}
const givenInches = 120;
const height = inchToFeet(givenInches);
console.log(height);