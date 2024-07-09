const name = "tanay"
const repoCount = 50


// Use `${}` for string interpolation

console.log(`My Name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('Tanay-Mukadam-com')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(0));
// console.log(gameName.indexOf('y'));
// console.log(gameName.);

const NewString = gameName.substring(0,  5)

console.log(NewString);


const anotherString = gameName.slice(-14, 4)
console.log(anotherString);


const newStringOne = "    tanay    "
console.log(newStringOne);
console.log(newStringOne.trim());



const url = "https://tanay.com/tanay%20mukadam"

console.log(url.replace('%20', '-'));

console.log(url.includes('hiya'));

console.log(gameName.split('-'));

