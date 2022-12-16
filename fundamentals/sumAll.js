function sumAll(a,b) {
let sum = 0;
let display = '';
if (isNaN(a) || isNaN(b)) {
    console.log(`Both arguments must be numbers\nA == ${a}\nB == ${b}\n\n\n`);
    return
}

if (a == b) {
    sum = +a;
} else if (a < b) {
    for (let i = a; i <=b; i++) {
        sum+=i;
        display += `+${i}`;
    }
} else if (b < a) {
    for (let i = b; i <=a; i++) {
        sum += i;
        display += `+${i}`;
    }
}
console.log(`a = ${a}\nb = ${b}`)
console.log(display.slice(1));
console.log(`TotalSum == ${sum}\n\n`);
}


sumAll(1, 4);
sumAll(10, 13);
sumAll('a', 20);
sumAll(9, 3);
sumAll(20, 20);
sumAll('lala', 'lele');

