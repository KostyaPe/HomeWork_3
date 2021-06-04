'use strict';
/* eslint-disable no-magic-numbers */

function Student(name, surname, birthyear, grades) {
    this.name = name;
    this.surname = surname;
    this.birthyear = birthyear;
    this.grades = grades;
    this.attendance = Array(25).fill(null);
}

Student.prototype.present = function() {
    const i = this.attendance.indexOf(null);

    if (i !== -1) {
        this.attendance[i] = true;
    }
};

Student.prototype.absent = function() {
    const i = this.attendance.indexOf(null);

    if (i !== -1) {
        this.attendance[i] = false;
    }
};

Student.prototype.getAvarageGrade = function() {
    return this.grades
        .reduce((prev, curr) => prev + curr, 0) / this.grades.length;
};

Student.prototype.getAge = function() {
    return new Date().getFullYear() - this.birthyear;
};

Student.prototype.summary = function() {
    const avereAttend = this.attendance
        .filter(el => el === true).length / this.attendance.filter(el => el !== null).length;

    const averGrade = this.getAvarageGrade();

    if (averGrade > 90 && avereAttend > 0.9) {
        return 'Ути какой молодчинка!';
    } else if (averGrade < 90 && avereAttend > 0.9 || averGrade > 90 && avereAttend < 90) {
        return 'Норм, но можно лучше';
    }

    return 'Редиска!';
};

const student = new Student('Kostyan', 'Penyavskiy', '1998', [100, 65, 100, 100, 43.9]);

student.getAvarageGrade();
student.present();
student.absent();
student.summary();