const phones = [
    { name: 'Google Pixel', camera: '32MP', color: 'Black', price: 40000 },
    { name: 'Samsung', camera: '64MP', color: 'Gradient', price: 45000 },
    { name: 'Xiaomi', camera: '64MP', color: 'Sky Blue', price: 23000 },
    { name: 'Oppo', camera: '32MP', color: 'Black', price: 28000 },
    { name: 'Nothing', camera: '32MP', color: 'Black', price: 50000 },
    { name: 'iPhone', camera: '32MP', color: 'Black', price: 140000 },

];

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}
const myChoice = cheapestPhone(phones);
console.log(myChoice);