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
guessNow.classList.remove('hidden');

console.log(randomNumber);
// set event listeners to update state and DOM
guessNow.addEventListener('click', () => {
    if (guessesLeft <= 0){
        alert('You ran out of guesses!');
        return;
    }
    //reduce guess count
    guessesLeft--;

    const guessResults = isNumber(userNumber.valueAsNumber, randomNumber);

    //check if user wins
    if (userNumber.valueAsNumber === randomNumber || guessesLeft === 0) {
        results.textContent = guessResults;
        guessNow.classList.add('hidden');
        tryAgain.classList.remove('hidden');
    };
    //if user wins hide guess button and reveal reset button
    //if user doesn't win, check results
    results.textContent = `${guessResults} You have ${guessesLeft} guesses remaining.`;
    //if user is out of guesses, hide guess button and reveal reset button
    userNumber.value = '';
});

tryAgain.addEventListener('click', () => {
    randomNumber = Math.ceil(Math.random() * 20);
    guessesLeft = 4;
    console.log(randomNumber, 'random number reset');
    console.log(guessesLeft, 'guesses reset');
    userNumber.value = '';
    results.textContent = '';
    guessNow.classList.toggle('hidden');
    tryAgain.classList.toggle('hidden');
});