const  inputForm= document.querySelector('form');


inputForm.addEventListener('submit',(evnt)=> {
    evnt.preventDefault();
    const val = String(document.querySelector("#input").value);
    console.log(val);

    const output = document.getElementById("output")
    output.innerText=`${val}`
    output.style.color='red'
    
})

