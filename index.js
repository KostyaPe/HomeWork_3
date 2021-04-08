function cloneObj(obj) {
    const clonedObj = {};

    for (const key in obj) {
        clonedObj[key] = obj[key];
    }

    return clonedObj;
}

function getValues(obj, separator) {
    var objectValues = '';

    for (const key in obj) {
        objectValues += `${obj[key]}${separator}`;
    }

    return objectValues;
}

function getKeys(obj, separator) {
    var objectKeys = '';

    for (const key in obj) {
        objectKeys += `${key}${separator}`;
    }

    return objectKeys;
}

function getEntries(obj) {
    var objectEntries = '';

    for (const key in obj) {
        objectEntries += `${key}:${obj[key]}\n`;
    }

    return objectEntries;
}
