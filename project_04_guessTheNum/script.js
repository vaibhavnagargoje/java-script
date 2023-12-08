let Random =  Math.random()*100+1
Random=Math.floor(Random)


const submit = document.querySelector('#submit')
const userInput = document.getElementById('input')
const guessSlot=document.querySelector('.guess')
const remaining=document.querySelector(".lastResult")
const lororhigh=document.querySelector(".message")
const starover= document.querySelector(".result")


const p = document.createElement('p')

let prevGuess=[]
let numGuess=1

let playGame =true;

if(playGame){
    submit.addEventListener('click',(evnt)=>{
        evnt.preventDefault();
       const guess =  parseInt(userInput.value)
       console.log(guess);
       validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("please enter a valid number ")
    }
    else if(guess<1 || guess>100){
        alert("plese enter valid number")
    }
    else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`game Over ! random number was ${random}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess===Random){
        displayMessage("you gussed it right ")
        endGame()
    }
    else if( guess< Random){
        displayMessage("you gessed lower number")
    }
    else if(guess>Random){
        displayMessage("you gessed higher number")
    }

}

function displayMessage(message){
    lororhigh.innerHTML=`<h2>${message}</h2>`

}

function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML+=`${guess} `
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`


}

function newGame(){

}

function endGame(){

}