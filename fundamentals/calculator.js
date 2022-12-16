//create calculator class with built-in methods (add, subtract, sum, multiply, power, factorial)

class Calculator {

    // sum(2,2) = 2 + 2 = 4

    constructor() {}

    //sum(2,2) == 4
    add(a,b) {
        return (a + b);
    }

    //subtract(10, 2) = 8

    subtract(a,b) {
        return (a - b)
    }

    // sum([1, 2, 3, 4 ,5]) = 1 + 2 + 3 + 4 + 5 = 15

    sum(args) {
        let totalSum = 0;
        args.forEach(item => {
            if (Array.isArray(item)) {
                let currSum = Calculator.sum(item)
                totalSum += currSum;
            } else {
                totalSum += item;
            }
    
        })
        
        return totalSum;
    }

    //multiply([2,3,4,5]) = 2 * 3 * 4 * 5 = 120
    multiply(args) {
        let total = 1;

        args.forEach(arg => {
            if (Array.isArray(arg)) {
                let curr = Calculator.multiply(arg);
                total = total * curr;
            } else {
                total *= arg;
            }
        })

    return total;
    
    }

    //power(2,4) = 2 * 2 * 2 * 2 = 16
    power(a,b) {
        let total = 1;
        for (let i=0;i<b;i++) {
            total*=a;
        }

        return total;
    }

    //factorial(5) = 5 * 4 * 3 * 2 * 1      fac(100) == 100 * 99 * 98 * 97 * 96 * 95 ......
    factorial(n) {
        let total = 1;
        for (let i=1;i<=n;i++) {
            total *= i;
        }
        return total;
    }
}


calc = new Calculator();



console.log(calc.factorial(0));
console.log(calc.factorial(1));
console.log(calc.factorial(2));
console.log(calc.factorial(5));
console.log(calc.factorial(10));
