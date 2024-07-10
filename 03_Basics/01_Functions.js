

function sayMyName() {
    console.log("T");
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("Y");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 +  number2);
// }

function addTwoNumbers(number1, number2) {
    
    // let result = number1 + number2
    // console.log("Tanay");
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 8)

// console.log("Result", result);




function loginUserMessage (username = "user") {
    if (!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("tanay"));
// console.log(loginUserMessage('tanay'));




function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(100, 200, 400, 600, 900))



const user = {
    username: "tanay",
    prices: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}

// handleObject(user)


handleObject({
    username: "sam",

    prices: 399
})



const myNewArr = [200, 400, 100, 600]


function returnSecondValue (getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArr));

console.log(returnSecondValue([1000,2000,3000,4000]));