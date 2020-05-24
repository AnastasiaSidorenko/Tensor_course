/*Создайте базовый компонент соблюдая жизненный цикл (должен создаваться, монтироваться, удаляться)
На его основе создайте другие компоненты
Вынесите компонент в отдельный модуль и все остальные компоненты в отдельные модули и соберите страничку на 
модулях и компонентах
Страничка - это список карточке и при клике открытие карточки с подробностями.*/

import { Header } from "./header.js"
import { Student, Teacher, PersonFactory } from './personLib.js';
import { ComponentFactory, Component, Popup, PopupList } from "./componentLib.js";

const componentFactory = new ComponentFactory();

const header = componentFactory.create(Header, {
    title: 'tensor school',
    description: 'Это страница школы Тензор. Тут вы можете познакомиться с <br> нашими учениками и посмотреть темы занятий.',
    img_src: "img/logo.jpg"
});

let body = document.body;

header.mount(body);

let students = [{
    fullName: 'Владислав Егоров',
    university: 'МГУ',
    course: 3,
    birthDate: new Date(1998, 2, 7),
    photoUrl: 'img/ava01.jpg'
},
{
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
}];

let teachers = [
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

let personsDIV = document.querySelector(".persons");

students.forEach((elem) => {
    componentFactory.create(Student, { item: elem }).mount(body)
})

teachers.forEach((elem) => {
    componentFactory.create(Teacher, { item: elem }).mount(body)
})