

function repeatString(string, n) {
let res = ''
for (i=0;i<n;i++) {
res += String(string);
}

return res;
}

s = repeatString('la', 5);
console.log(`resultString = ${s}`);
if (s == 'lalalalala') {
console.log(true);
}


