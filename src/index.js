/* eslint-disable no-unused-vars */

Function.prototype.customBind = function (context) {
    const funcToBound = this;

    return function () {
        return funcToBound.call(context, ...arguments);
    };
};

const obj = {
    name: 'Kostya',
    a: 5,
    b: 4,
};

function foo (c, d) {
    return (this.a + this.b + c + d);
}

const boundedFoo = foo.customBind(obj);
