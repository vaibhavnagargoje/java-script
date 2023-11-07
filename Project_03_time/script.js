const clock = document.getElementById('time')
// const clock = document.querySelector('.time')



clock.inner

setInterval(()=>{ let currentTime = new Date()

    // console.log(currentTime.toLocaleTimeString());

    clock.innerText = currentTime.toLocaleTimeString()

}, 1000)