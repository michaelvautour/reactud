// 
//LET & CONST

/*
    ## let (Variable) is used to assign variable values, replaced the previous var as the term in ES6
    ## const (Constant) is used to assign variables that do not change values. New addition to ES6
*/

// ARROW FUNCTIONS, showing old then new

/*

OLD:

function myFnc() {
    ...
}

NEW:
const myFnc = () => {
    ...    
}

If a single value you can represent arrow functions as follows:
const myFnc = name => {
    ...    
}

OR

const myFnc = (name) => {
    ...    
}

However if multiple values then you always need ()

const myFnc = (name, age) => {
    ...    
}

Also if you only have one return statement on a function you can write the arrow key on a singular line such as:
This also removes the 'return' statement piece

BEFORE:
const multiply = (number) => {
    return number * 2;
}

console.log(multiply(2));

AFTER:
const multiply = (number) => number * 2;
console.log(multiply(2));

ALSO AFTER: if you are only using a single value passed in you can remove ()
const multiply = number => number * 2;
console.log(multiply(2));


* The advantage of arrow functions is that this 'this' keyword will act the same at run-time.

*/