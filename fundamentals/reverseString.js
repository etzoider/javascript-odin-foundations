

let string = '1234567890';

function reverseString(string) {
let resultString = '';

for (let i=string.length-1;i>=0;i--) {
	resultString += string[i];
}
return resultString;
}


console.log(reverseString(string));

console.log(reverseString('abcde'));


