//functions here
export function isNumber(guessedNumber, myNumber){
    //return true if numbers are equal
    if (guessedNumber < myNumber) return 'Your number is less than my number.';

    if (guessedNumber > myNumber) return 'Your number is greater than my number.';

    if (guessedNumber = myNumber) return 'Your number is the same as mine!';

    return 'Error';
}