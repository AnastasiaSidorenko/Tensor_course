import React from 'react';

export function OpenCard(props) {
    return (
        <div className="openCard">
            <span className="openCard__close" onClick={props.onClose}></span>
            <div className="openCard__info" >
                <p className="openCard__LFname" title={props.item.fullName}>{props.item.fullName}</p>
                <div className="openCard__params_values">
                    <div className="openCard__params">
                        <p>День Рождения</p>
                        <p className="studying_working_status">
                            {props.type === "student" ? "Учится" : "Работает"}</p>
                    </div>
                    <div className="openCard__values">
                        <p className="age">{props.birthDate} , {props.age} лет</p>
                        <p className="place">{props.item.university}
                            {props.type === "student" ? ` ${props.item.course} курс` : " преподаватель"}</p>
                    </div>
                </div>
            </div>
            <img className="openCard__photo" alt={`Фото ${props.item.fullName}`} src={`${props.item.photoUrl}`} />
        </div>
    )
}