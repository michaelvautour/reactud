// primititive types (i.e. integer, float, boolean, string) in a variable will be 'copied' when assigning to a new variable
// if using an array or object it doesn't copy it creates a pointer. So updating a value in original will carry over as it's stored in memory to new object

// Object Example:
const person = {
    name: 'Sheridan'
};

const secondPerson = person;

person.name = 'Gkar';

console.log(secondPerson); //Output will be Gkar because it's a reference pointer to original and not a copy

//However if you use a spread operator this won't occur:

const person2 = {
    name: 'Londo'
};

const anotherPerson = {
    ...person2
};

person2.name = 'Veer';

console.log(anotherPerson);


