
const myNums = [1,2,3]

// const myTotal = myNums.reduce( (acc, currval) => {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, currval) => (acc+currval), 0)
// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5000
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const totalCart = shoppingCart.reduce( (acc, item) => (acc + item.price), 0)

console.log(totalCart);