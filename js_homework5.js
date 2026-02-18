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
            sum += parseInt(this[key]);
        }
    }
    return sum;
};
console.log(services.price());

services.minPrice = function () {
    let prices = [];

    for (let key in this) {
        if (typeof this[key] === "string") {
            prices.push(parseInt (this[key]));
        }
    }
    return Math.min(...prices);
}
console.log("min:", services.minPrice());

services.maxPrice = function () {
    let prices = [];

    for (let key in this) {
        if (typeof this[key] ==="string") {
            prices.push(parseInt (this[key]));
        }
    }
    return Math.max(...prices);
}
console.log("max:", services.maxPrice());