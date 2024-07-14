// const user = {
//     username: "Tanay",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got User Details from DataBase");
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
//     }
// }


// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);




/// Constructor Function


function user(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    // return this
}

const userOne = new user("tanay", 12, true)
const userTwo = new user("Hiya", 8, false)
console.log(userOne.constructor);
// console.log(userTwo);
