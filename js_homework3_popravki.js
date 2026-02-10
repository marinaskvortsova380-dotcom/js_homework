
function pow(x, y) {
 let result = 1;

 for (let i = 0; i < y; i++) {
    let temporary = 0;

    for (let j =0; j < x; j++) {
        temporary += result;
    }
    result = temporary;
 }
return result;
}
//console.log(pow(3, 3));
console.log(pow(5, 5));

Поправки

function multiply(x, y) {
 let result = 0;
 let positive = y >= 0;
 
 if (y < 0)y = -y

 for (let i=0; i < y; i++) {
    result += x; 
 }
 return positive ? result: -result;
}

function pow(x, y) {
    if (x ===0 && y ===0)
        return 1;
    if (x ===0 && y < 0)
        return Infinity;
    if (y ===0)
        return 1;

    let result = 1;
    let positiveY = y < 0 ? -y : y;

    for (let i=0; i < positiveY; i++){
        result = multiply(result, x);
    }
    if (y < 0) return 1 / result;
    return result;
}
console.log (pow(3, 3));
