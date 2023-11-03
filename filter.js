// const coding =['js', 'python','java','c','cpp']

//  const values= coding.forEach( (item)=> 
//  {console.log(item)          // item is a argument they defalut visit each coding vaule 
// })  

//  console.log(values);



// const myNums =[1,2,3,4,5,6,7,8,9,10]

// const val =myNums.filter( (num)=> (num>5))          // take one function as a parameter and return value based on condition // callback functin 
// console.log(val)





// const myNums =[1,2,3,4,5,6,7,8,9,10]

// // const val =myNums.filter( (num)=>{      //explecit return 
    
// //     return num>4
// // })
// // console.log(val)


// const nuwNums=[]
// myNums.forEach((num)=>{
//    if(num>7) {
//     nuwNums.push(num)
//    }
// })
// console.log(nuwNums);





books = [
    { title:"python", subject:"coding", publish:1990},
    { title:"javascript",subject:"Frontend",publish:2000},
    {title: "java",subject:" backend",publish:1999},
    {title:"c programming", subject:"system software",publish:1970},
    {title:"html",subject:"frontend",publish:1996}

];

// const userbook= books.filter( (bk) => (bk.publish>1999) )    // first way    // implicet return 
// console.log(userbook);

const userbook = books.filter( (bk)=> {
    if(bk.title==="python" || bk.publish>1995){               // explicit return , because we open scope 
        return bk
    }

})

console.log(userbook);