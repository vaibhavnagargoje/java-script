// class Test{
//     constructor(username,password,gmail){
//         this.username=username
//         this.password=password
//         this.gmail=gmail
//     }

//     encryption(){
//         return ` username is ${this.username.toUpperCase()} and Encrypted Password is ${this.password}abc`;
//     }
// }


// let user1=  new Test("Vaibahv",'Vaibhav@gamil.com',"Pass@123")

// console.log(user1.encryption())




//behind the class 
function User(username){
    this.username=username;
}

User.prototype.Upper=function(){
    return `${this.username.toUpperCase()}`
}

const vai= new User("Mauli")
console.log(vai.Upper());