/* eslint-disable no-unused-vars */
/* eslint-disable no-magic-numbers */

function findPalindrome(num, steps = 0) {
    const reversedNum = +num.toString().split('').reverse().join('');
    let currentStep = steps;

    if (num === reversedNum) {
        return {
            result: num,
            steps: currentStep,
        };
    }

    try {
        return findPalindrome(num + reversedNum, ++currentStep);
    } catch (e) {
        throw new Error(`${num} - is Lycher number.`);
    }
}
