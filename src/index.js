/* eslint-disable no-unused-vars */
/* eslint-disable no-magic-numbers */


function customBind(func, context, ...args) {
    return function () {
        return func.call(context, ...args);
    };
}
const obj = {
    name: 'Kostya',
    a: 5,
    b: 4,
};

function foo (c, d) {
    return (this.a + this.b + c + d);
}

const boundedFoo = customBind(foo, obj, 1, 2);