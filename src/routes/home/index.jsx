import React from 'react';
import Botao from '../../components/botao';
import logo from './../../assets/images/logo.svg';
import './styles.css';

export default function Home() {
  return (
    <div className='container'>
      <div className='main-content'>
        <div className='img-container'>
          <img src={logo} alt="Logo" className='img-logo' />
        </div>
        <Botao to='/PLPoker/Login' title='Iniciar'/>
      </div>
    </div>
  )
}
