var treeFloors = +prompt('Height of your tree is...');
var treePicture = '';
var newLine = '\n';
var starsOnLine = 1;

for (var i = 1; i <= treeFloors; i++) {

    for (var k = 1; k <= treeFloors - i; k++) {
        treePicture += ' ';
    }

    for (var j = 1; j <= starsOnLine; j++) {
        treePicture += '*';
    }

    treePicture += newLine;
    starsOnLine += 2;
}

console.log(treePicture);