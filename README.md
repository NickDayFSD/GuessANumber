## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
6) Think about how to validate each of your steps

## HTML
1) Need rules
 - Why? So the user knows the game
 - How? Section/div
2) Need an input
 - Why? So the user can input a number
 - How? <input id='user-guess'>
3) Need a Guess button
 - Why? So we can accept the user guess
 - How? <button id='guess-now'>
3.1) Need a Reset button
 - Why? So you can play again!
 - How? <button id='play-again'>
4) Need a result
 - Why? So the user can see if they guessed correctly or not
 - How? <div id='response'>

## Initialize State
1) Set the number
 - Why? So the user guess has something to compare to
 - How? randomNumber = Math.ceil(Math.random() * 20);
2) Set the guess
 - Why? to compare to randomNumber
 - How? userGuess = document.getEventById('user-guess');
3) Set the max guesses
 - Why? to create a challenge
 - How? idk yet

## Events
1) What happens when the guess button is clicked?
 - The guessed number is compared to the random number
 - How? if statement comparing the two numbers then determine output based on the result
2) What happens when the reset button is clicked?
 - The page and guesses count is reset
 - How? idk yet