'use strict';
/* eslint-disable no-magic-numbers */

function createObject(props) {
    return props
        .reduce((prev, item) => {

            Object.defineProperty(prev, item[0], {
                value: item[1],
                writable: item[2],
                enumerable: item[3],
                configurable: item[4],
            });

            return prev;
        }, {});
}

const obj = createObject([
    ['name', 'kostya', true, false, true],
    ['age', 22, true, true, true],
    ['gender', 'm', false, true, true] ]
);

obj.gender = 'f';

function createStudent(firstName, lastName, birthdate) {
    return {
        firstName,
        lastName,
        birthdate,

        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        },

        set fullName(value) {
            [this.firstName, this.lastName] = value.split(' ');
        },

        get age() {
            const ms = new Date(this.birthdate);
            const diff = Date.now() - ms.getTime();
            const date = new Date(diff);

            return (date.getUTCFullYear() - 1970);
        },
    };
}

const stud = createStudent('Kostya', 'Penyavskiy', '1998.08.25');
stud.fullName = 'Uzhe NeKostya';