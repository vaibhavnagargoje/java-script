
function Use(name,salary,isActive){
    

    this.name=name;
    this.salary=salary;
    this.isActive=isActive;

    this.greeting=()=>{
        console.log(`hellow Mr.${this.name} your salary is ${this.salary}`);
    }
   

}



let user1 = new Use('vaibhav',2000,true);
let user2 = Use('mauli',10000 , false)
// console.log(user1.greeting());
console.log(user2 instanceof Use);
