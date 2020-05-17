import { Person } from './person.js';

export class Teacher extends Person {
    constructor(params) {
        super(params);
        this.experience = params.experience;
        this.type = "teacher";
    }
}