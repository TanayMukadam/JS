// Singleton

// Object Literals

// Object.create

const mySum = Symbol("key1")

const JsUser = {
    name: "Tanay",
    "full name": "Tanay Mukadam",
    [mySum]: "myKey1",
    age: 18,
    location: "Thane", 
    email: "tanaymukadam@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.name);
// console.log(JsUser["name", "email"]);
// console.log(JsUser[mySum]);



JsUser.email = "tanaymukadam@yahoo.in"
// Object.freeze(JsUser)
// JsUser.email = "tanaymukadam@windows.in"

// console.log(JsUser);


JsUser.greeting = function() {
    console.log("Hello Js User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());