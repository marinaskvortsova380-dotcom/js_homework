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
