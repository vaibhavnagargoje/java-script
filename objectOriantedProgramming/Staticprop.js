class User {
    constructor(username){
        this.username=username;

    }
     logMe(){

        console.log(`UserName is :${this.username}`)
    }
    static createID(){
        return `User Id is : ${Math.floor(Math.random()*10)}`
    }
}


const vaibhav = new User("Vaibhavnagargoje")

console.log(vaibhav.createID())


class Teacher extends User{
    constructor(username,email){
        super(username);
        this.mail=email
    }
}

const iphone = new Teacher("iphone",'i@phone.com')
iphone.logMe()
console.log(iphone.createID())