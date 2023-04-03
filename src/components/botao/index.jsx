import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Botao(props){
    return(
        <div>
            <Link className='botao' to={props.to}>
                {props.title}
            </Link>
        </div>
    );
}