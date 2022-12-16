//fib sequence generator--   fib(Number n) : nth number of fib sequence (fib[n-1])

function fib(n) {
    let seq = [1,1,2];
    let curr; let prev; let temp;
    n = +n;
    if ( n <= 0) {
        console.log('OOOps');
        return -1;
    } else if (n <= 3) {
        return seq[n-1];
    }
    prev = seq[1];
    curr = seq[2]
    
    let i = 3
    while (i != n - 1) {
        let temp = curr + prev;
        prev = curr;
        curr = temp;
        i++;
    }

    return curr + prev;
}


let x = [4,6,10,15,25,-25,'1','2','8'];

x.forEach(item => {
    let res = fib(item);
    console.log(`fib(${item}) == ${res}`);
})

