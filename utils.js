//functions here
export function isNumber(guessedNumber, myNumber){
    const greaterNumber = `Your number ${guessedNumber} is greater than my number.`;
    const lesserNumber = `Your number ${guessedNumber} is less than my number.`
    const correctNumber = 'Your number is the same as mine!';
    //return true if numbers are equal
    if (guessedNumber < myNumber) return lesserNumber;

    if (guessedNumber > myNumber) return greaterNumber;

    if (guessedNumber = myNumber) return correctNumber;

    return 'Error';
}