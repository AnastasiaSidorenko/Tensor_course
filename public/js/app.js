import { Student, Teacher, PersonFactory } from './personLib.js';
import { School } from './school.js';

// проинициализируем фабрику
const factory = new PersonFactory();

// создадим школу (если есть для нее фабрика, то тоже через фабрику) 
let school = new School();

// добавим в список школы студентов используйте те данные, которые у вас есть
// Vasia и пр. тут скорее для примера
// если методы называются по другому, поменяйте
// по желанию можно добавить больше
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

const teacherArr = [
    {
        fullName: 'Евгений Васильевич',
        university: 'НГУ',
        experience: 15,
        birthDate: new Date(1970, 1, 6),
        photoUrl: 'img/ava01.jpg'
    },
    {
        fullName: 'Анастасия Луц',
        university: 'НГУ',
        experience: 7,
        birthDate: new Date(1990, 2, 2),
        photoUrl: 'img/ava02.jpg'
    },
    {
        fullName: 'Инна Александрова',
        university: 'ТюмГУ',
        experience: 3,
        birthDate: new Date(1992, 10, 20),
        photoUrl: 'img/ava03.jpg'
    },

];

studentArr.forEach((item) => {
    school.add('student', item);
});
teacherArr.forEach((item) => {
    school.add('teacher', item);
});
// school.add( factory.createStudent({ name: 'Vasia' }) );
// school.add( factory.createStudent({ name: 'Petia' }) );
// school.add( factory.createTeacher({ name: 'Misha' }) );

// отрисуем всех студентов в dom 
// если методы называются по другому, поменяйте
// точка монтирования document.body может быть изменена на любой другой элемент DOM
let personsNode = document.querySelector(".persons");
school.appendToDom(personsNode);

// в итоге в на странице должны получить список студентов и учителей
// папка js будет содержать несколько файлов, минимум 3, а лучше больше