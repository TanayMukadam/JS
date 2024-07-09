let myDate = new Date();

console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toISOString());

console.log(myDate.toLocaleString());

console.log(typeof myDate);

// let myCreateDate = new Date(2024, 0, 23, 5, 3)
//let myCreateDate = new Date("2023-01-14")
let myCreateDate = new Date("01-14-2024");

// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let new_Date = new Date();
// console.log(new_Date.getMonth());
// console.log(new_Date.getDay());
// console.log(new_Date.getDate());

console.log(
  new_Date.toLocaleString("default", {
    weekday: "long",
  })
);
