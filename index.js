function getResultAll() {
    if (!arguments.length) throw new Error('No passed parameters.');

    let result = arguments[1];

    for (let i = 2; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') continue;

        switch(arguments[0]) {
            case '+':
                result += arguments[i];
                break;
            case '-':
                result -= arguments[i];
                break;
            case '*':
                result *= arguments[i];
                break;
            case '/':
                result /= arguments[i];
                break;
            default:
                throw new Error('Invalid math operation.');
        }
    }
    
    return result || 0;
}

function reverseString(string) {
    let reversedString = '';

    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }

    return reversedString;
}

function isCharPresent(string, char) {

    for (const x of string) {
        if (x === char) return true;
    }

    return false;
}

function charIndexOf(string, char) {

    for (let i = 0; i < string.length; i++) {
        if (char === string[i]) return i;
    }

    return -1;
}
