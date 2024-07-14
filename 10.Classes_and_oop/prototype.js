// let myName = "Tanay     "

// console.log(myName.truelength);



let myHeros = ["Thor", "SpiderMan"]

let heroPower = {
    Thor: "Hammer",
    SpiderMan: "Sling",

    getSpiderPower: function(){
        console.log(`Spidy Power is ${this.SpiderMan}`);
    }
}

Object.prototype.tanay = function(){
    console.log("Tanay is Present in all Objects");
}

// heroPower.tanay()
// myHeros.tanay()


Array.prototype.heyTanay = function(){
    console.log("Tanay Says Hello");
}


myHeros.heyTanay()
// heroPower.heyTanay()


//                              inheritance

const user = {
    name: "Tanay",
    email: "tanay@gmail.com"
}
const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Js Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user



// Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)