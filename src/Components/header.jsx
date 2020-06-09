import React from 'react';

export function Header({ title, description, img_src }) {
    return (
        <div className="header-container">
            <header className="header">
                <img className="header__logo" src={img_src} alt={title} />
                <h1 className="header__title">{title}</h1>
            </header>
            <div className="page-info">
                <p>{description}</p>
            </div>
        </div>
    );
}