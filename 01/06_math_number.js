// const num= 500
// console.log(num);
// const salary= new Number(6000)
// console.log(salary)


// console.log(typeof salary.toString());
// console.log(salary.toFixed(2));  // print  decimal 2 digit 

// const otherNumber = 34.9333354

// console.log(otherNumber.toPrecision(2))  // send parameter for giving outpun in giving digit 

// const hundred = 100000000000
// console.log(hundred.toLocaleString('en-IN'))


// ++++++++++++++ Math +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-55));   //55  conver -ve into Positive
console.log(Math.round(4.3)); // convert round off value 4 if grather than half the  give next value  // 4 
console.log(Math.ceil(4.3)); // convert round off value to next number    //5
console.log(Math.floor(4.8));   // take min value => 4
console.log(Math.sqrt(64));   // finding squre root 
console.log(Math.min(3,65,2,66,8,5))   // min element => 2
console.log(Math.max(3,65,2,66,8,5))   // max element => 66
console.log(Math.random());   // always give us  value between  0 to 1 => 0.2345234
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)   // using floor function you can use Math.ceil function 
const min= 10;
const max=10;
console.log(Math.floor(Math.random()*((max - min + 1) ))+min )