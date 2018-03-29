import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class React1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            people: [
                'Shea',
                'Eric',
                'Jin',
                'Larry'
            ]
        }
    }

    render() {
        return(
        this.state.people.map(person => {
            return <Link to={`/React2/${person}`}> {person} </Link>
        })
    )
    }
}

export default React1;