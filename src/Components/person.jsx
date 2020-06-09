import React from 'react';
import { OpenCard } from './opencard';

export class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item,
            isCardOpened: false,
            type: this.props.type
        };
    }

    get fullName() {
        return `${this.state.item.fullName}`;
    }
    get birthDateStr() {
        return (new Date(this.state.item.birthDate)).toLocaleString('ru-RU', {
            day: 'numeric',
            month: 'long'
        });
    }
    get age() {
        let difference = new Date() - new Date(this.state.item.birthDate);
        let diffdays = difference / 1000 / (60 * 60 * 24);
        return Math.floor(diffdays / 365.25);
    }
    showCard = () => {
        if (this.state.isCardOpened === false) {
            this.setState({ isCardOpened: true })
        }
    }
    closeCard = () => {
        this.setState({ isCardOpened: false })
    }
    render() {
        let Card = this.state.isCardOpened ? <OpenCard isCardOpened={this.state.isCardOpened} onClose={this.closeCard}
            age={this.age} birthDate={this.birthDateStr} item={this.state.item} type={this.state.type} />
            : '';
        let UniP = this.state.type === "student" ? <p className="person__uni" title={`${this.state.item.university} ${this.state.item.course} курс`}>{this.state.item.university} {this.state.item.course} курс</p>
            : <p className="person__uni" title={`${this.state.item.university} преподаватель`}>{this.state.item.university} преподаватель</p>;
        return (
            <div className="person__sample" >
                <div onClick={this.showCard}>
                    <img className="person__photo" alt={`Аватар ${this.state.item.fullName}`} src={`${this.state.item.photoUrl}`} />
                    <p className="person__LFname" title={`${this.state.item.fullName || ''}`}>{this.state.item.fullName}</p>
                    {UniP}
                    {Card}
                </div>
            </div>
        )
    }
}