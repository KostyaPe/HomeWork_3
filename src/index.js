'use strict';
/* eslint-disable no-magic-numbers */

function generateList(array, base = document.body) {
    const $ul = document.createElement('ul');

    for (let i = 0; i < array.length; i++) {
        const $li = document.createElement('li');

        if (Array.isArray(array[i])) {
            generateList(array[i], $li);
        }

        if (!$li.children.length) {
            $li.textContent = array[i];
        }

        $ul.append($li);
    }

    base.append($ul);

    return;
}

generateList([1,2,3,4,[1, 2, [5,4,3, [1,2,3,[10,11,12]]]], 5, 6, [1,2,3]]);

function printTable() {
    const $table = document.createElement('table');

    for (let i = 1; i <= 10; i++) {
        const $row = document.createElement('tr');
        const base = i * 10;
        const start = base - 9;

        for (let j = start; j <= base; j++) {
            const $data = document.createElement('td');
            $data.textContent = j;

            $row.append($data);
        }

        $table.append($row);
    }

    document.body.append($table);
}

printTable();
