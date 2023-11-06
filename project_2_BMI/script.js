

const form = document.querySelector('form');

form.addEventListener('submit',(evnt)=> {
    evnt.preventDefault();
  
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    
    console.log(height );
    if( height === '' ||height<0 || isNaN(height)){
        result.innerHTML=`please give a valid height. ${height}`;
    }

    else if( weight === '' || weight<0 || isNaN(weight)){
        result.innerHTML= `please give a valid Weight. ${weight}`;
    }

    else{
        const BMI = weight/((height*height)/10000).toFixed(2)
        if(BMI>=18.6 && BMI<=24.9){
            // result.innerHTML+
            result.innerHTML=` wow you are Normal or Fit and you BMI is ${BMI}`
        }
        if(BMI>24.9){
            // result.innerHTML+
            result.innerHTML=` You Are OverWeight and  your BMI is ${BMI}`
        }
        else{
            result.innerHTML=` You are UnderWeight and you Need to Eat a lot and your BMI is ${BMI}`
        }
    }
   
 })