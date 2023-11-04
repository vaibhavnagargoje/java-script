const button=document.querySelectorAll(".button")
// console.log(button)

const body = document.querySelector("body")
// body.style.backgroundColor="green"// testing 

button.forEach( (btn)=> {
    // console.log(btn);
    btn.addEventListener('click',(e)=>{   // e is a event object we can use any name as a opject argument
        console.log(e);
        console.log(e.target) // targeted id 

    if(e.target.id==='grey'){
        body.style.backgroundColor="grey"
        // andother way
        // body.style.backgroundColor= e.target.id;

    }
    
    else if(e.target.id==='white'){
    body.style.backgroundColor=e.target.id
    // btn.style.backgroundColor="black"
    
    }

    else if(e.target.id==='green'){
        body.style.backgroundColor="green"
    }
    else if(e.target.id === 'yellow'){
        body.style.backgroundColor=e.target.id
    }
    else if(e.target.id === 'purple'){
        body.style.backgroundColor=e.target.id
    }
    });
} )