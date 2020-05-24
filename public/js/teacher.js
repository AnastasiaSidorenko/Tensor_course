import { Person } from './person.js';
import { PopupList } from './popupList.js';

export class Teacher extends Person {
    constructor({ item }) {
        super({ item });
        this.state.item = item;
    }

    render(options, { item }) {
        return `<div class="person__sample">
                <img class="person__photo" alt="Аватар ${item.fullName}" src="${item.photoUrl}">
                <p class="person__LFname" title="${item.fullName}">${item.fullName}</p>
                <p class="person__uni" title="${item.university} преподаватель">${item.university} преподаватель</p>
            </div>`;
    }

    afterMount() {
        this.container.addEventListener('click', (event) => this.onClick(event));
    }

    onClick(event) {
        if (!this.popup) {
            this.popup = new PopupList();
            this.popup.mount(document.body);
        }

        this.popup.open('student', {
            content: `<div class="openCard">
                    <span class="openCard__close"></span>
                    <div class="openCard__info" >
                    <p class="openCard__LFname" title="${this.state.item.fullName}">${this.state.item.fullName}</p>
                    <div class="openCard__params_values">
                        <div class="openCard__params">
                            <p>День Рождения</p>
                            <p class="studying_working_status">Работает</p>
                        </div>
                        <div class="openCard__values">
                            <p class="age">${this.birthDateStr} , ${this.age} лет</p>
                            <p class="place">${this.state.item.university} преподаватель</p>
                        </div>
                    </div>
                    </div>
                    <img class="openCard__photo" alt="Фото ${this.state.item.fullName}" src="${this.state.item.photoUrl}">
                    </div>`,
            target: this.getContainer(),
            offset: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        })
    }
}
