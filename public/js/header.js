import { Component } from './component.js';

export class Header extends Component {
    render({ title, description, img_src }) {
        return `
        <div class="header-container">
            <header class="header">
                <img class="header__logo" src="${img_src}" alt="${title}">
                <h1 class="header__title">${title}</h1>
            </header>
            <div class="page-info">
                <p>${description}</p>
            </div>
        </div>`
    }
}