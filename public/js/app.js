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

let personsDIV = document.querySelector(".persons");

class DataSet {
    constructor(options) {
        this.options = {
            host: "http://localhost:8080/api/",
            object: options.object
        }
    }
    read() {
        return this.query(
            `${this.options.object}`,
            { method: "GET" }
        );
    }

    query(query, options, params) {
        let url = new URL(this.options.host)
        url.pathname += query;
        return fetch(url, options).then(
            response => response.json()
        );
    }
}

let datasetStudents = new DataSet({ object: "students" });

let datasetTeachers = new DataSet({ object: "teachers" });

datasetStudents.read().then(result => result.forEach((elem) => {
    componentFactory.create(Student, { item: elem }).mount(body)
})
);

datasetTeachers.read().then(result => result.forEach((elem) => {
    componentFactory.create(Teacher, { item: elem }).mount(body)
})
);
