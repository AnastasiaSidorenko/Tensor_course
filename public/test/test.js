import { Component } from "../js/component.js"

describe("Test block", function () {
    'use strict';
    it('Test name and description', function () {
        // arrange
        let variable = 1;

        // act
        variable += 1;

        //assert
        assert.equal(variable, 2);
    })
});

describe('components/Person', function () {

    class Person extends Component {
        constructor(birthDate) {
            super();
            this.birthDate = birthDate;
        }
        get birthDateStr() {
            return (new Date(this.birthDate)).toLocaleString('ru-RU', {
                day: 'numeric',
                month: 'long'
            });
        }
        get age() {
            let difference = new Date() - new Date(this.birthDate);
            let diffdays = difference / 1000 / (60 * 60 * 24);
            return Math.floor(diffdays / 365.25);
        }
    }

    it('birthDateStr возвращает строку формата "день месяц"', function () {
        // Arrange
        let person = new Person("1997-05-26");
        // Act
        let result = person.birthDateStr;
        // Assert
        assert.equal(result, '26 мая');
    });

    it('age возвращает строку формата "N"', function () {
        // Arrange
        let person = new Person("1998-11-13");
        // Act
        let result = person.age;
        // Assert
        assert.equal(result, '21');
    });
});


describe('components/Component', function () {
    it('render возвращает <div></div>', function () {
        // Arrange
        let comp = new Component();
        // Act
        let result = comp.render();
        // Assert
        assert.equal(result, '<div></div>');
    });
});

mocha.run();
