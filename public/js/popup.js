import { Component } from './component.js';

export class Popup extends Component {
    render({ content }) {
        return `${content}`
    }
    afterMount() {
        this.container.querySelector('.openCard__close').addEventListener('click', () => this.unmount());
        this.setPopupPosition();
    }
    setPopupPosition() {
        const container = this.getContainer();
        const offset = this.options.offset;
        // выставляем значения по умолчанию для получения реальных размеров в доме
        container.style.left = offset.left + 'px';
        container.style.top = offset.top + 'px';

        // получаем реальные размеры элементов окна и таргета и вычисляем куда позиционировать popup
        let position = this.countPopupPosition(this.options.target.getBoundingClientRect(), container.getBoundingClientRect());
        container.style.left = position.left + 'px';
        container.style.top = position.top + 'px';
    }
    /**
    * Вычисление положения popup
    * @param {Object} target - объект размеров и положения относительного элемента
    * @param {Object} offset - объект размеров и положения popup
    * @returns {left, top} - смещение окна
    */
    countPopupPosition(target, offset) {
        let { width = 0, height = 0, left = 0, top = 0 } = offset || {};
        let { left: tleft = 0, top: ttop = 0 } = target || {};

        // получаем размер окна браузера
        const innerWidth = window.innerWidth;
        const innerHeight = window.innerHeight;
        const defOffset = 8; // смещение чтоб не липло к краям

        if (left + width === innerWidth) {
            tleft = 0;
        }

        // берем левый верхний угол таргета и смещение для popup если надо
        left = tleft + left;
        top = ttop - top;

        // проверяем влезает ли в окно браузера, если нет, корректируем смещение
        if (tleft + width > innerWidth) {
            left = left + (innerWidth - (width + tleft)) - defOffset;
        }

        if (ttop + height >= innerHeight) {
            top = top + (innerHeight - (ttop + height)) - defOffset;
        }

        return { left, top };
    }

}