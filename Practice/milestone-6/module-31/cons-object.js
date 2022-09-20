// to create a constructor object
class Vehicle {
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }
    getName() {
        return this.make + ' ' + this.model;
    }
}
let car = new Vehicle('toyota', 'corola', 'black');
console.log(car);

//syntactis suger
class Developer {
    name;
    designation = 'Web Developer';
    team = 'Uradhura Agency';
    location;

    // Crete the constructor (similar as function) for passing the undefined values
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    developWebsite(website, deadline) {
        console.log(`develop a brand new website with the domain ${website} within ${deadline} days`);
    }
}
const zaman = new Developer('zaman', 'dinajpur');
console.log(zaman);
zaman.developWebsite('Uradhura.com', 7);


/**
 * more details in the module no.31-8
 */