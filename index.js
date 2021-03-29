function padString(target, char, length, fromStart) {
    if (target.length >= length) return;
    if (fromStart) return (char.repeat(length - target.length) + target);

    return target + char.repeat(length - target.length);
}


console.log(padString('Не бей за встроенный метод', '*', 100, true));
console.log(padString('Я честно сначала написал просто с циклом', '*', 100));
console.log(padString('^', '^', 10));