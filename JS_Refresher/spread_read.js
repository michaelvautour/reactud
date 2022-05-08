const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
const evenNewerNumbers = [numbers, 4, 5];

console.log(newNumbers); //Output is [1,2,3,4,5]

console.log(evenNewerNumbers); //Output is [[1,2,3], 4, 5];


// pull a specific index out of an array
console.log(newNumbers[1]);
