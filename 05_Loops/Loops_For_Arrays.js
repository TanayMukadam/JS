const myObject = {
    js: 'javascript', 
    cpp: 'C++',
    rb: 'ruby',
    swift: "swift by apple"
}


for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}



// for in for Arrays

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}





//                              For each Loop


const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// } )


// coding.forEach( (item) => {
//     console.log(item);
// }  )


function printMe(item) {
    console.log(item);
}


// coding.forEach(printMe)


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// } )



const myCodding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    } 
]



myCodding.forEach( (item) => {
    console.log(item.languageName);
} )