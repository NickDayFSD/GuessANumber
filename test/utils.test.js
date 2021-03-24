// IMPORT MODULES under test here:
import { isNumber } from '../utils.js';

const test = QUnit.test;

test('should take in an integer and return as "high", "correct", "low"', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const actualHigh = isNumber(10, 8);
    const actualCorrect = isNumber(8, 8);
    const actualLow = isNumber(5, 8);
    
    //Act 
    // Call the function you're testing and set the result to a const

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actualLow, 'less', 'guess is low');
    expect.equal(actualCorrect, 'same', 'guess is right');
    expect.equal(actualHigh, 'greater', 'guess is high');
});
