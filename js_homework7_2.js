const text = "Wonderful Joyful Happiness Time Task Apple";
const regex = /\b[^aA\s]{6,}\b/g;
const result = text.match(regex);
console.log(result);