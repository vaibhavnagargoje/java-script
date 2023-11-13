const RandomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        let num = parseInt(Math.random() * 16);
        color += hex[num];
    }
    // console.log(color);
    return color;

}


let interval;
const startChangeBg = function () {
   interval= setInterval(changeBg,1000);
    
    function changeBg(){
    document.body.style.backgroundColor = RandomColor();
        
    }
};


const stopChangeBg = function ()  {
 clearInterval(interval) 
   interval=null;
}


document.querySelector('#start').addEventListener('click', startChangeBg)

document.querySelector('#stop').addEventListener('click', stopChangeBg)

