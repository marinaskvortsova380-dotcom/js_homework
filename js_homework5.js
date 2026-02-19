var services = {
"стрижка": "60 грн",
"гоління": "80 грн",
"Миття голови": "100 грн"
};

services['Розбити скло'] = "200 грн";
services ['Кава з цукерками'] = "150 грн";

services.price = function () {
    let sum = 0;
    for (let key in this) {
        if (typeof this[key] === "string") {
            sum += parseFloat(this[key]);
        }
    }
    return sum;
};
console.log("sum:", services.price().toFixed(2));
// изменила тут

services.minPrice = function () {
    let prices = [];

    for (let key in this) {
        if (typeof this[key] === "string") {
            prices.push(parseFloat (this[key]));
        }
    }
    return Math.min(...prices);
}
console.log("min:", services.minPrice.toFixed(2));

services.maxPrice = function () {
    let prices = [];

    for (let key in this) {
        if (typeof this[key] ==="string") {
            prices.push(parseFloat (this[key]));
        }
    }
    return Math.max(...prices);
}
console.log("max:", services.maxPrice.toFixed(2));
// изменила на parseFloat