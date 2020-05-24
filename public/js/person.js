import { Component } from './component.js';

export class Person extends Component {
    constructor({ item }) {
        super();
        this.state.item = item;
    }

    get fullName() {
        return `${this.state.item.fullName}`;
    }
    get birthDateStr() {
        return this.state.item.birthDate.toLocaleString('ru-RU', {
            day: 'numeric',
            month: 'long'
        });
    }
    get age() {
        let difference = new Date() - this.state.item.birthDate;
        let diffdays = difference / 1000 / (60 * 60 * 24);
        return Math.floor(diffdays / 365.25);
    }

    render(options, { item }) {
        return `<div class="person__sample">
            <img class="person__photo" alt="Аватар ${ item.fullName}" src="${item.itemphotoUrl || 'img/ui/default_pix.jpg'}">
            <p class="person__LFname" title="${item.fullName || ''}">${item.itemfullName || ''}</p>
            <p class="person__uni" title="${item.university || ''}">${item.itemuniversity || ''}</p>
        </div>`;
    }

    afterMount() {
        this.container.addEventListener('click', (event) => this.onClick(event));
    }

    onClick(event) {
        /*if (!this.popup) {
            this.popup = new PopupList();
            this.popup.mount(document.body);
        }
        this.popup.open('person', {
            content: `<div div class="openCard__info" >
           <p class="openCard__LFname" title="${this.state.item.fullName}">${this.state.item.fullName}</p>
           <div class="openCard__params_values">
               <div class="openCard__params">
                   <p>День Рождения</p>
                   <p class="studying_working_status">Учится</p>
               </div>
               <div class="openCard__values">
                   <p class="age">${this.state.item.birthDateStr} + ", " + ${this.state.item.age} + " лет"</p>
                   <p class="place">Университет</p>
               </div>
           </div>
           </div>
           <img class="openCard__photo" alt="Фото ${this.state.item.fullName}" src="${this.state.item.photoUrl || 'img/ui/default_pix.jpg'}">`
        });*/
    }
}