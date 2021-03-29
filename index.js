function padString(target, char, length, fromStart) {
    if (target.length >= length) return target;
    if (fromStart) return (char.repeat(length - target.length) + target);

    return target + char.repeat(length - target.length);
}


console.log(padString('Не бей за встроенный метод', '*', 100, true));
console.log(padString('Я честно сначала написал просто с циклом', '*', 100));
console.log(padString('три', '*', 3));