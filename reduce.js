const myNums = [1, 5, 3];

let newNums = myNums.reduce(function (acc, currval) {
  // use for shopping cart price addition or total price
  console.log(` acc:${acc} and currval: ${currval}`);
  return acc + currval;
}, 0); // start with zero

console.log(newNums);

// with arrow fuctin
newNums = myNums.reduce((acc, cval) => acc + cval, 0); // eturn additon of acc+currval // privious val + current value
console.log(newNums);

newNums = myNums
  .map((num) => num + 10)
  .reduce((prevVal, cval) => prevVal + cval, 7); ///  working on map with reduce    // strting giving value 7

console.log(newNums);

// we can do using for loop do while loop

// ex 1

const shoppingcorse = [
  {
    name: "javascript",
    price: 5000,
  },
  {
    name: "python",
    price: 8000,
  },
  {
    name: "data structure",
    price: 4000,
  },
  { name: "web devlopement", price: 2000 },
];

let totalPrice = shoppingcorse.reduce( (starting, course)=> +starting+course.price ,0)
console.log(totalPrice);


//// fibonachi serives using reduce
let arr = [1,2,3,4,5]

let fib= arr.reduce((priv,current)=>priv*current,1)
console.log(fib);