import { PersonFactory } from './personFactory.js';

export class School {
    constructor() {
        this.teachers = [];
        this.students = [];
        this.personFactory = new PersonFactory();
    }
    add(type, params) {
        if (type == "student") {
            let student = this.personFactory.create("student", params);
            this.students.push(student);
            return student;
        }
        if (type == "teacher") {
            let teacher = this.personFactory.create("teacher", params);
            this.teachers.push(teacher);
            return teacher;
        }
    }
    removePerson(name, type) {
        if (type == "student") {
            this.students.filter(student => student.fullName !== name);
        }
        if (type == "teacher") {
            this.teachers.filter(student => student.fullName !== name);
        }
    }
    getStudentByName(name) {
        return this.students.find(student => student.fullName == name);
    }
    appendToDom(parentNode) {
        this.teachers.forEach((p) => {
            p.appendToDom(parentNode);
        });
        this.students.forEach((p) => {
            p.appendToDom(parentNode);
        });
    }
}
