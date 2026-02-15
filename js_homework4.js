function checkProbabilityTheory(count) {
    const min = 100;
    const max = 1000;

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min +1)) + min;
    }
    let even = 0; 
    let odd = 0;

    for (let i = 0; i < count; i++) {
        const num = randomInt(min, max);
        if (num % 2 === 0) even ++;
        else odd++;
    }
    const evenPercent = (even / count) * 100;
    const oddPercent = (odd / count) * 100;

    console.log ("Кількість згенерованих чисел:", count);
    console.log ("Парних чисел:", even);
    console.log ("Процент Парних чисел:", evenPercent.toFixed(2));
    console.log ("Непарних чисел:", odd);
    console.log ("Процент Непарних чисел:", oddPercent.toFixed(2));
    console.log
    (`Процент парних/непарних:", ${evenPercent.toFixed(2)}% / ${oddPercent.toFixed(2)}%`);
}
checkProbabilityTheory(400);