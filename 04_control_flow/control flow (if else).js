// if statement
/* Comparison Operators

< , > , <=, <=, ==, !=, === , == , !==

*/

const isUserLoggedIn = true
const temperature = 41
// if (temperature < 50) {
//     console.log("less than 50");
// } else {
// console.log("temperature is greater than 50");

const score = 200

if (score > 100){
    const power = "fly"
    // console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`);


// +++++++++    Nested If else  ++++++++++++++++//
const balance = 850

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    // console.log("Allowed to buy courses");
};


if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("Welcome to the mail");
}
