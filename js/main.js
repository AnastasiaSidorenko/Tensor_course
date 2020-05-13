
/*- Помимо класса Student, создать класс Teacher и наследование их от базового Person 
- Создать шаблонный (базовый) класс Person где будут общие поля и методы для классов Student и Teacher
- Создать фабрику для создания этих объектов
*/
window.onload = function () {

    class Person {
        constructor(params) {
            this.fullName = params.fullName;
            this.university = params.university;
            this.birthDate = params.birthDate;
            this.photoUrl = params.photoUrl;
        }
        get birthDateStr() {
            return this.birthDate.toLocaleString('ru-RU', {
                day: 'numeric',
                month: 'long'
            });
        }
        get age() {
            let difference = new Date() - this.birthDate;
            let diffdays = difference / 1000 / (60 * 60 * 24);
            return Math.floor(diffdays / 365.25);
        }
    }

    class Student extends Person {
        constructor(params) {
            super(params);
            this.course = params.course;
        }
        render() {
            let student__sample = document.createElement('div');
            student__sample.className = "student__sample";

            let student__photo = document.createElement('img');
            student__photo.className = "student__photo";
            student__photo.alt = "Фото ученика";
            student__photo.src = this.photoUrl;

            let student__LFname = document.createElement('p');
            student__LFname.className = "student__LFname";
            student__LFname.title = this.fullName;

            let LFname = document.createTextNode(this.fullName);
            student__LFname.appendChild(LFname);

            let student__uni = document.createElement('p');
            student__uni.className = "student__uni";
            student__uni.title = this.university + " " + this.course + " курс";

            let textNode_student__uni = document.createTextNode(this.university + " " + this.course + " курс");
            student__uni.appendChild(textNode_student__uni);

            student__sample.appendChild(student__photo);
            student__sample.appendChild(student__LFname);
            student__sample.appendChild(student__uni);
            return student__sample;
        }
        appendToDom(parentNode) {
            const studentBlock = this.render();
            parentNode.appendChild(studentBlock);
            studentBlock.addEventListener('click', (event) => {
                openCard(this, event.currentTarget);
                this.console.log("clicked");
            });
        }
    }

    class Teacher extends Person {
        constructor(params) {
            super(params);
        }
    }

    class PersonFactory {
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

    /*Создать класс School которая будет хранить всех студентов и учителей, реализовать там методы 
    добавления (через фабрику), удаления студентов, а также их получение по какому-то признаку, например по имени.*/
    class School {
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
                this.teachers.push(this.personFactory.create("teacher", params));
                this.teachers.push(student);
                return this.teachers;
            }
        }
        removeStudent(name) {
            this.students = this.students.filter(student => student.fullName !== name);
        }
        getStudentByName(name) {
            return this.students.find(student => student.fullName == name);
        }
    }

    const studentArr = [{
        fullName: 'Владислав Егоров',
        university: 'МГУ',
        course: 3,
        birthDate: new Date(1998, 2, 7),
        photoUrl: 'img/ava01.jpg'
    }, {
        fullName: 'Светлана Александрова',
        university: 'УГАТУ',
        course: 3,
        birthDate: new Date(1998, 4, 1),
        photoUrl: 'img/ava02.jpg'
    },
    {
        fullName: 'Маша Иванова',
        university: 'СевГУ',
        course: 2,
        birthDate: new Date(2000, 0, 1),
        photoUrl: 'img/ava03.jpg'
    },
    {
        fullName: 'Михаил Сергеев',
        university: 'СевГУ',
        course: 1,
        birthDate: new Date(2001, 11, 30),
        photoUrl: 'img/ava04.jpg'
    },
    {
        fullName: 'Наталия Ван',
        university: 'КубГУ',
        course: 3,
        birthDate: new Date(2000, 1, 23),
        photoUrl: 'img/ava05.jpg'
    },
    {
        fullName: 'Сергей Николаев',
        university: 'УГАТУ',
        course: 4,
        birthDate: new Date(1996, 5, 20),
        photoUrl: 'img/ava06.jpg'
    },
    ];
    let studentsNode = document.querySelector(".students");

    const ourSchool = new School();

    studentArr.forEach((item) => {
        const student = ourSchool.add("student", item);
        student.appendToDom(studentsNode);
    });

    ourSchool.removeStudent("Владислав Егоров");
    ourSchool.getStudentByName("Маша Иванова");
}

function removeOpenCard(closeSign) {
    let Card = closeSign.parentNode;
    console.log(Card);
    Card.parentNode.removeChild(Card);
    closeSign.removeEventListener('click', (event) => {
        removeOpenCard(event.currentTarget);
    });
}

function openCard(student, currentTarget) {

    if (document.getElementsByClassName("openCard")[0]) {
        document.getElementsByClassName("openCard")[0].remove();
    }

    let openCard = document.createElement('div');
    openCard.className = "openCard";

    let openCard__info = document.createElement('div');
    openCard__info.className = "openCard__info";

    let openCard__LFname = document.createElement('p');
    openCard__LFname.className = "openCard__LFname";
    openCard__LFname.title = student.fullName;

    let LFname = document.createTextNode(student.fullName);
    openCard__LFname.appendChild(LFname);

    let openCard__params_values = document.createElement('div');
    openCard__params_values.className = "openCard__params_values";

    let openCard__params = document.createElement('div');
    openCard__params.className = "openCard__params";

    let openCard__paramBD = document.createElement('p');
    let TN_openCard__paramBD = document.createTextNode("День Рождения");
    openCard__paramBD.appendChild(TN_openCard__paramBD);

    let openCard__paramStudyingAt = document.createElement('p');
    let TN_openCard__paramStudyingAt = document.createTextNode("Учится");
    openCard__paramStudyingAt.appendChild(TN_openCard__paramStudyingAt);

    openCard__params.appendChild(openCard__paramBD);
    openCard__params.appendChild(openCard__paramStudyingAt);

    let openCard__values = document.createElement('div');
    openCard__values.className = "openCard___values";

    let openCard__valueBD = document.createElement('p');
    let TN_openCard__valueBD = document.createTextNode(student.birthDateStr + ", " + student.age + " лет");
    openCard__valueBD.appendChild(TN_openCard__valueBD);

    let openCard__valueStudyingAt = document.createElement('p');
    let TN_openCard__valueStudyingAt = document.createTextNode(student.university + ", " + student.course + " курс");
    openCard__valueStudyingAt.appendChild(TN_openCard__valueStudyingAt);

    openCard__values.appendChild(openCard__valueBD);
    openCard__values.appendChild(openCard__valueStudyingAt);

    openCard__params_values.appendChild(openCard__params);
    openCard__params_values.appendChild(openCard__values);

    openCard__info.appendChild(openCard__LFname);
    openCard__info.appendChild(openCard__params_values);

    let openCard__photo = document.createElement('img');
    openCard__photo.className = "openCard__photo";
    openCard__photo.alt = "Фото ученика";
    openCard__photo.src = student.photoUrl;

    let openCard__close = document.createElement('span');
    openCard__close.className = "openCard__close";

    openCard__close.addEventListener('click', (event) => {
        removeOpenCard(event.currentTarget);
        console.log("close clicked");
    });

    openCard.appendChild(openCard__close);
    openCard.appendChild(openCard__info);
    openCard.appendChild(openCard__photo);

    document.body.append(openCard);
    openCard.style.left = currentTarget.offsetLeft + "px";
    openCard.style.top = currentTarget.offsetTop + "px";
}