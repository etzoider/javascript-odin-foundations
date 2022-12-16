

function removeFromArray(arr, toRemove) {

let returnArray = [];
let isInArray = false;
let currElement = null

if (!Array.isArray(arr)) {

console.log('not array');
return
}
for (let i=0;i<arr.length;i++) {

	currElement = arr[i];
	console.log(currElement)

	if (currElement != toRemove) {
		returnArray.push(currElement);
	} else {
isInArray = 1;
}
}

if (isInArray === 0) {
	console.log('element not in array');
return -1}

return returnArray;


}



function removeElement(arr, elem) {
	if (!Array.isArray(arr)) {
		console.log(`${arr} is not an array`);
		return -1
	}

	let index = arr.indexOf(elem);
	console.log(`index of ${elem} in ${arr} is ${index}`);
	if (index === -1) {
		console.log(`${elem} not in ${arr}`);
		return -1
	} else {
		arr.splice(index, 1);
		return arr;
	}

}

function removeMultipleValues(arr, ...values) {
	if (!Array.isArray(arr) || values.length == 0) {
		return -1
	}
	let result = [];
	let currElement=null;
	for (let i=0; i<arr.length; i++) {
		currElement = arr[i];
		if (!values.includes(currElement)) {
			result.push(currElement);
		}
	}
	return result;
}

