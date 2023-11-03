let myNums =[1,2,4,5,6,8,7,55,34,8,0]

const modified_nums= myNums.map( (num)=> num+10 )           // automatic return   
console.log(modified_nums);


  // chaining example   => we can use multiple map() filter function after one another like below  
//   note => all map result or resulted array is pass to next map or filter array 

 newNums =myNums.map( (num)=>num*10).map( (num)=> num+2)     // map is a working with all numbers 
 console.log(newNums);
 newNums =myNums.map( (num)=>num*10).map( (num)=> num+2).filter( (num)=> num<50)     // filter is a game of true or false 

console.log(newNums);
