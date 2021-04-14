function camelize(str) {
    return str.map(e => e.split('-').map((e, i) => i > 0 ? e[0].toUpperCase() + e.slice(1) : e).join(''));
}

function map(arr, callback) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i], i, arr));
    }

    return newArr;
}

function filter(arr, callback) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

const mappedArr = map([1,2,3,4], function(i) {
    return i + 2;
});

const filtredrArr = filter([1,2,3,4], function(i) {
    return i > 2;
});
