import { Student } from './student.js';
import { Teacher } from './teacher.js';
import { Person } from './person.js';

export class PersonFactory {
    createStudent(params) {
        return new Student(params);
    }
    createTeacher(params) {
        return new Teacher(params);
    }
    createPerson(params) {
        return new Person(params);
    }
    create(type, params) {
        let instance;
        switch (type) {
            case 'student':
                instance = this.createStudent(params);
                return instance;
            case 'teacher':
                instance = this.createTeacher(params);
                return instance;
            default:
                instance = this.createPerson(params);
                return instance;
        }

    }
}