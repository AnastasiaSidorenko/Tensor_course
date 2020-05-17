export class Person {
    constructor(params) {
        this.fullName = params.fullName;
        this.university = params.university;
        this.birthDate = params.birthDate;
        this.photoUrl = params.photoUrl;
        this.type = "person";
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
    render() {
        let clone = person_tmpl.content.cloneNode(true);
        let img = clone.querySelector(".person__photo");
        img.src = this.photoUrl;
        let p = clone.querySelectorAll("p");
        p[0].textContent = this.fullName;
        p[0].title = this.fullName;

        if (this.type == "student") {
            p[1].textContent = this.university + " " + this.course + " курс";
            p[1].title = this.university + " " + this.course + " курс";
        }
        else if (this.type == "teacher") {
            p[1].textContent = this.university + " преподаватель";
            p[1].title = this.university + " преподаватель";
        }

        let person__sample = document.createElement('div');//Иначе возвращает #fragment-element и
        person__sample.className = "person__sample";//не удается как раньше повесить listener для открытия карточки
        person__sample.appendChild(clone);
        return person__sample;
    }
    appendToDom(parentNode) {
        const personBlock = this.render();
        parentNode.appendChild(personBlock);
        personBlock.addEventListener('click', (event) => {
            this.openCard(event.currentTarget);
        });
    }
    removeOpenCard(closeSign) {
        let Card = closeSign.parentNode;
        Card.parentNode.removeChild(Card);
        closeSign.removeEventListener('click', (event) => {
            this.removeOpenCard(event.currentTarget);
        });
    }

    openCard(currentTarget) {

        if (document.getElementsByClassName("openCard")[0]) {
            document.getElementsByClassName("openCard")[0].remove();
        }

        let openCard = document.createElement('div');
        openCard.className = "openCard";

        let clone = openCard_tmpl.content.cloneNode(true);
        openCard.append(clone);

        let LFN = openCard.querySelector(".openCard__LFname");
        LFN.title = this.fullName;
        LFN.textContent = this.fullName;

        let occupation = openCard.querySelector(".studying_working_status");
        if (this.type == "student") {
            occupation.textContent = "Учится";
        }
        else if (this.type == "teacher") {
            occupation.textContent = "Работает";
        }

        let age = openCard.querySelector(".age");
        age.textContent = this.birthDateStr + ", " + this.age + " лет";
        let place = openCard.querySelector(".place");

        if (this.type == "student") {
            place.textContent = this.university + ", " + this.course + " курс";
        }
        else if (this.type == "teacher") {
            place.textContent = this.university;
        }

        let img = openCard.querySelector(".openCard__photo");
        img.src = this.photoUrl;

        let openCard__close = openCard.querySelector(".openCard__close");
        openCard__close.addEventListener('click', (event) => {
            this.removeOpenCard(event.currentTarget);
        });

        document.body.append(openCard);

        openCard.style.left = currentTarget.offsetLeft + "px";
        openCard.style.top = currentTarget.offsetTop + "px";
    }
}

