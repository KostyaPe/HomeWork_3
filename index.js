function padString(target, char, length, fromStart) {
    if (target.length >= length) return target;
    
    for (var i = target.length; i < length; i++) {
        if (fromStart) target = char + target;
        else target += char;
    }

    return target;
}


console.log(padString('welcome', '1', 100, true));
console.log(padString('to the', '1', 100));
console.log(padString('jungle', '1', 100));
console.log(padString('Axl screams', '1', 100, true));
console.log(padString('три', '1', 3));