function camelize(str) {
    return str.map(e => e.split('-').map((e, i) => i > 0 ? e[0].toUpperCase() + e.slice(1) : e).join(''));
}

Array.prototype.myMap = function (callback) {
    const arr = [];

    for (let i = 0; i < this.length; i++) {
        arr.push(callback(this[i], i, this));
    }

    return arr;
};

Array.prototype.myFilter = function (callback) {
    const arr = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            arr.push(this[i])
        }
    }

    return arr;
};

const mappedArr = [1,2,3,4].myMap(function (el) {
    return el + 2;
});

const filtredArr = [1,2,3,4].myFilter(function (el) {
    return el > 2;
});
