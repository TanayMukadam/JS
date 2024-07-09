// Primitive Data Types

// 7 Categories : String, Number, Boolean, Null, Undefined, Symbol and BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail = undefined;

const id = Symbol("123")
const anotherId = Symbol("123")


console.log(id === anotherId);

const BigNumber =  187234892137489237489n   // Big Int add n at the back

console.log(typeof BigNumber);
// Reference (Non Premitive)

/* 1. Array
   2. Objects
   3. Functions */

// 1. Arrays []
const heros = ["IronMan", "CaptainAmerica", "Thor"];

console.log(heros);

// 2. Objects {}

let myObj = {
    name: "tanay",
    age: 23
}

console.log(myObj);


// 3. Functions 

const myFun = function() {
    console.log("Hello World")
}


console.log(typeof heros);




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) and Heap (Non Primitive) Memory in JS


let myName = "TanayMukadam"
let anotherName = myName
anotherName ="Predator"

console.log(myName);
console.log(anotherName);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "tanay@gmail.com"

console.log(userOne);
console.log(userTwo);


