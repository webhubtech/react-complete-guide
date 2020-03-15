import React from 'react';

const person = (props) => {
    return (
        <div className="person_C">
            <p>I am {props.name} {props.age} component</p>
            <p>{props.children}</p>
        </div>

    );
};

export default person;
