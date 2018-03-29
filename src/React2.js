import React from 'react';

export default function React1(props){
    return(
        <div>
            <h1>{props.match.params.person}</h1>
        </div>
    )
}