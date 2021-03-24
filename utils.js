//functions here
export function isNumber(guessedNumber, randomNumber){
    //return true if numbers are equal
    if (guessedNumber < randomNumber) return 'Your number is less than my number';

    if (guessedNumber > randomNumber) return 'Your number is greater than my number';

    return 'Your number is the same as mine!';
}