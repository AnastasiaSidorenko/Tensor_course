import React from 'react';
import { Person } from './person';

export class Dataset extends React.Component {
    state = { results: [] }

    read() {
        this.query(
            `${this.props.object}`,
            { method: "GET" }
        ).then(result => (this.setState({ results: [...result] })));
    };

    query(query, options) {
        let url = new URL(this.props.host)
        url.pathname += query;
        return fetch(url, options).then(
            response => response.json()
        );
    }
    componentDidMount() {
        this.read();
    }

    render() {
        let data;
        if (this.props.object === "students") {
            data = this.state.results.map((elem, index) => (<Person item={elem} key={index} type="student" />));
        }
        else {
            data = this.state.results.map((elem, index) => (<Person item={elem} key={index} type="teacher" />));
        }

        return (
            <div>
                {data}
            </div >
        )
    }
}