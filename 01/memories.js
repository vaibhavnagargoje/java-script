// memory in js+++++++++++++++++++++++++++++++++++++++++++++++++++++
// 1 stack memory  (primitive)  copy of  original value 
// 2 heap memory  (Non-primitive) refrence of original value

let myName = "vaibhav Nagargoje"
let anotherName =myName
anotherName = "Mauli"
console.log(myName);
console.log(anotherName)


let user= {
    email: "email@gmail.com",
    upi: "user@upi",

}

let user2 = user
user2.email="vaibhav@mail.com"
console.log(user)
