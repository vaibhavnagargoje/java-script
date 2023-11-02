let Arr=[2,3,65,2,4,6,78]

// Arr.push(45)
// console.log(Arr);
// Arr.pop()
// console.log(Arr);

// Arr.unshift(9)
// console.log(Arr);

// Arr.shift()
// console.log(Arr);


// console.log(Arr.includes(6));
// const newArr = Arr.join()

// console.log(Arr)
// console.log( typeof(newArr), newArr);


// // slice or splice
// console.log("A ",Arr)

// const myArr=Arr.slice(1,4)
// console.log(myArr);
// console.log("B", Arr);


// const myArr2=Arr.splice(1,4)
// console.log(myArr2);
// console.log("B", Arr);

// const arr2=[44,66,77,88]
// let RealArr=[...Arr,...arr2]
// console.log(RealArr);
// another method 
ArrFlat = [2,3,5,[44,55,66,['vaibhav',5.3],44,23,['vaibhav',"nagargoje",["mauli","nagar"]]]]
let Very_realArray=ArrFlat.flat(Infinity)
console.log(Very_realArray);

console.log(Array.isArray(ArrFlat));
