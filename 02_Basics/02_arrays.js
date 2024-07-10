const marvel_heros = ["Thor", "IronMan", "Spider-Man"];
const dc = ["SuperMan", "Flash", "BatMan"];

// console.log(marvel_heros);

let heros = marvel_heros.concat(dc);

// console.log(heros[3]);

// Spread Operator

const all_new_heros = [...marvel_heros, ...dc];
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7], [4, 5]];
const real_another_array = another_array.flat(Infinity);
// console.log(another_array);
// console.log(real_another_array);

console.log(Array.isArray("Tanay"));
console.log(Array.from("Tanay"));

console.log(Array.from({ name: "Tanay" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
