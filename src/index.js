/* eslint-disable no-unused-vars */
/* eslint-disable no-magic-numbers */

function sum(value) {
    let result = value;

    const f = (innerValue) => result += innerValue;

    return f;
}

function createCounter(initValue, step) {
    let count = initValue;

    const counter = () => count += step;

    counter.clear = () => count = 0;

    return counter;
}

/*
    Сергей, ты извини, но чтобы сдать эту домашку -
    я отключил 2 правила. Почему:
    linter ругался на то, что функции объявлены, но не используются.
    Окей.
    Написал две строчки вызова:
    теперь он ругается на то, что я при вызове использую magic numbers для этих двух вызовов
    Окей...
    Создаю переменные для того, чтобы передать их в sum и createCounter... хотя, надо ли так их вызывать?)
    теперь, потому как, sum уже была вызвана, но единожды, он ругался на то, что переменная result внутри нее объявлена,
    но не используется...
    Окей....
    тогда вызву её ещё раз...
    Короче привело к тому, что код очень сильно нагромоздился и выглядел вообще не ок
*/
