// const guessInput = document.querySelector('#guessInput');
// const button = document.querySelector('.checkGuess');
// const previousguesses  = document.querySelector('.previous-guesses');
// const rightOrWrong = document.querySelector('.right');
// const lowOrHi = document.querySelector('.lowOrHi');
// const btn = document.createElement('button');
// let randomNum = Math.floor(Math.random() * 100) + 1;
// let guessCount = 0;
// guessInput.focus();


// button.addEventListener('click', checkGuess);

// function checkGuess(){
//     guessInput.focus();
//     let guess = Number(guessInput.value)
//     if(guess === randomNum){
//         rightOrWrong.textContent = 'Right'
//         rightOrWrong.style.backgroundColor = 'green'
//     }else{
//         guessInput.value = '';
//         previousguesses.textContent = previousguesses.textContent + guess + ' '
//         rightOrWrong.textContent = 'Wrong'
//         rightOrWrong.style.backgroundColor = 'red'
//         if(guess > randomNum){
//             lowOrHi.textContent = 'Your guess is way too high'
//             gameOver()
//         }else{
//             lowOrHi.textContent = 'Your guess is way too low'
//             gameOver()
//         }
//     }
//     ++guessCount;
// }

// function gameOver(){
//     if(guessCount === 0){
//         guessInput.disabled = true;
//         button.disabled = true;
//         btn.textContent = 'Start new game';
//         document.body.appendChild(btn)
//         btn.addEventListener('click', resetGame)
//     }
// }

// function resetGame(){
//     guessCount = 0;
//     guessInput.disabled = false;
//     button.disabled = true;
//     rightOrWrong.textContent = '';
//     lowOrHi.textContent = '';
//     previousguesses.textContent = '';
//     btn.parentNode.removeChild(btn);
//     randomNum = Math.floor(Math.random() * 100) + 1;
// }

// const ttn = document.querySelector('.ttn')

// ttn.onclick = function(){
//     let name = prompt('What is your name ?')
//     alert('Hello ' + name + ', nice to meet you')
// } 

// myAge = 9;

// var myAge;

// alert(myAge)


var a = 9;
var b = 20;
var sum = a + b;
console.log(sum);

let sumFunc =  function(){
    return 'name'
};
console.log(sumFunc())
var e = 'this';
console.log(typeof(undefined))
// Numbers
// String
// booleans
// null
// undefined
console.log(`this is ${ 0  ? 'yes' : 'no'} ${ Number('888') +9 }`)