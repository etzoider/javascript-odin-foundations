// fahrenheit to celsius(2 funcs vice-versa)     function(Number temperature) : return (Number convertedTemperature);

// celsius == 0 --- 100
// fahr  32 -- 212

function roundNumber(number) {
    let res;
    res = Math.round(number * 10) / 10;
    return res
}

function toFahr(celsius) {
    let res =  roundNumber(+32 + (1.8 * celsius));
    console.log(res);
    return roundNumber(res);
}

function toCelsius(f) {
    let res =  roundNumber((f-32)/(1.8));
    console.log(res);
    return roundNumber(res);
}

