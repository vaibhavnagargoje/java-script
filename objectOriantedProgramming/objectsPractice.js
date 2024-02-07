const Descripter =  Object.getOwnPropertyDescriptor(Math,'PI')
console.log(Math.PI);
Math.PI=5
// console.log(Descripter);


const Myobject = {
    name:'Vaibhav',
    course:"msc cs",

    isAvailable :true 

}

console.log(Object.getOwnPropertyDescriptors(Myobject));  // for all property 
Object.defineProperty(Myobject,'course',{
    writable:false,
    enumerable:false,
    configurable:false,
    
})

console.log(Object.getOwnPropertyDescriptor(Myobject,'name')); // for only one property 

for (let [key,value] of Object.entries(Myobject)) {
    console.log(`${key} : ${value}`);
}