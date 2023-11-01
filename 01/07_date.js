// let myDate =new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());


// let MyCreatedDate = new Date(2023,0,23)  // in javascript month start form 0   Date (Year, Month, Date)
// console.log(MyCreatedDate.toDateString());

// let MyCreatedDate1 = new Date(2023,0,23,4,2,55); // Date (year,month,day,hour, minute,second)
// console.log(MyCreatedDate1.toString());


// Time Stamp +++++++++++++++++++++++++++++++++++++++++++++
// let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(MyCreatedDate1.getTime());
// console.log(Math.floor(Date.now()/1000));    // convert into second 



 let newDate = new Date()
 console.log(newDate.toLocaleString('default', {weekday:'long'}));
 console.log(newDate.getMonth());
 console.log(newDate.getDay());
