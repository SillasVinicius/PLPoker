import React from 'react'
import { Link } from 'react-router-dom';
import logo from './../../assets/images/logo.svg'
import './styles.css';

export default function Login() {
  return (
    <div className='container'>
      <div className='main-content'>
        <div className='img-container'>
          <h1>Login</h1>
        </div>
        <div className='img-container'>
          <img src={logo} alt="Logo" className='img-logo' />
        </div>
        <div className='button-container'>
          <Link className='button-entry' to='/PLPoker'>Voltar</Link>
          <Link className='button-entry' to='/PLPoker/Login'>Login</Link>
        </div>
      </div>
    </div>
  )
}
