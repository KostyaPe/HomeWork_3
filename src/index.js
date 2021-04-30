/* eslint-disable no-unused-vars */
/* eslint-disable no-magic-numbers */

function findPalindrome(num) {
    const reversedNum = +num.toString().split('').reverse().join('');
    findPalindrome.steps ??= 0;

    if (num === reversedNum) {
        return {
            num,
            steps: findPalindrome.steps || 1,
        };
    }

    findPalindrome.steps++;

    try {
        return findPalindrome(num + reversedNum);
    } catch (e) {
        throw new Error(`${num} - is Lycher number.`);
    }
}
