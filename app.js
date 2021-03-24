// import functions and grab DOM elements
import { isNumber } from './utils.js';

const userNumber = document.getElementById('user-guess');
const results = document.getElementById('results');
const guessNow = document.getElementById('guess-now');
const tryAgain = document.getElementById('try-again');

// initialize state
let randomNumber = Math.ceil(Math.random() * 20);
let guessesLeft = 4;
//console.log(userNumber.value, 'value of my input');

console.log(randomNumber);
// set event listeners to update state and DOM
guessNow.addEventListener('click', () => {
    if (guessesLeft <= 0){
        alert('You ran out of guesses!');
        return;
    }
    //reduce guess count
    guessesLeft--;

    console.log(guessesLeft);
    //console.log(userNumber.value, 'value of input');

    const guessResults = isNumber(userNumber.value, randomNumber);
    console.log(guessResults, 'guesses left');
    results.textContent = `${guessResults} You have ${guessesLeft} guesses remaining.`;
    userNumber.value = '';
    return `You have ${guessesLeft} guesses remaining.`;
});

tryAgain.addEventListener('click', () => {
    randomNumber = Math.ceil(Math.random() * 20);
    guessesLeft = 4;
    console.log(randomNumber, 'random number reset');
    console.log(guessesLeft, 'guesses reset');
    userNumber.value = '';
});