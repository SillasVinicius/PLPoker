import React from 'react';
import './styles.css';

export default function Input(props){
    return(
        <div>
            <input 
                type='text'
                className='text-input'
                name={props.name}
                id={props.id}
                placeholder={props.placeholder}
            />
        </div>
    );
}