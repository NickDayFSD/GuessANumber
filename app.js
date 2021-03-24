// import functions and grab DOM elements
import { isNumber } from './utils.js';

const userGuess = document.getElementById(user-guess);
const results = document.getElementById(results);

// initialize state
let randomNumber = Math.ceil(Math.random() * 20);
let guessesLeft = 4;

// set event listeners to update state and DOM
