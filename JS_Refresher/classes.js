//CLASSES & Objects/methods

// Has properties & methods

/*
class Person {
    name = 'Max'
    call = () => {...}
}

const myPerson = New Person()
    myPerson.call()
    console.log(myPerson.name)

    class Person extends Master?

EXAMPLES OF CLASSES:

## Example 1:
class Person {
    constructor() {
        this.name = 'Max';
    }
    printMyName(){
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();

## Example 2 with inherit:

class Human {
    constructor() {
        this.gender = 'male';
    }
    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor() {
        super();
        this.name = 'Max';
    }
    printMyName(){
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();

*/

//CLASSES & Objects/methods w ES7

class Human {
    gender = 'male';
    printGender = () => {
    console.log(this.gender);
    }
}

class Person extends Human {
        name = 'Max';
        gender = 'female';
    
        printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();