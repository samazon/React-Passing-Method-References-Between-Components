import React from 'react';
import './Preson.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I am <strong>{props.name}</strong> and I'm <strong>{props.age}</strong> years old</p>
            <p>{props.children}</p>
            <input onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default  person;