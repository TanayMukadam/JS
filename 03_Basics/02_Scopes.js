
let a = 300
if (true) {
    let a = 10
    const b = 20
    c = 30
    // console.log("INNER ", c);

}

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(a);


////////////////// Nested Scope //////////


function one(){
    const username = "tanay"

    function two () {
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);

    two()
}
// one()


if (true) {
    const username = "tanay"
    if (username === "tanay") {
        const website = "youtube"
        // console.log(username + website);
    }

    // console.log(website);
}

// console.log(username);



///////// +++++++++++ Example ++++++++++//////////

console.log(addone(5))

function addone(num) {
    return num + 1
}


console.log(addTwo(4));
const addTwo = function(num) {
    return num + 2
}


