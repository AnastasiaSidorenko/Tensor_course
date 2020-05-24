import { Component } from './component.js';
import { Popup } from './popup.js';

export class PopupList extends Component {
    constructor(options) {
        super(options);
        this.popups = {};
    }

    render() {
        return `<div class="popup-list"></div>`;
    }

    open(key, options) {
        if (this.popups[key]) {
            this.popups[key].unmount();
        }

        const popup = new Popup(options);
        this.popups[key] = popup;

        popup.mount(this.container);

    }
}