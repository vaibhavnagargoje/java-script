class User{
    constructor(username)
    {
        this.username=username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{

    constructor(username,email,password){
        super(username)  // goes to User class and refer extended class 
        this.email=email
        this.password=password

    }

    addCourse()
    {
        console.log(`A new course was added by ${this.username}`)
    }
}

const vaibhav = new Teacher('Vaibhav', 'Vaibhav@gmail.com',"12345")
vaibhav.logMe()

const mauli = new User("MauliRao")
mauli.logMe()


console.log(vaibhav==mauli);
console.log(vaibhav instanceof User);
