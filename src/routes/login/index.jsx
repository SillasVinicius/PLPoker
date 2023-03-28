import React from 'react'
import { Link } from 'react-router-dom';
import logo from './../../assets/images/logo.svg'
import './styles.css';

export default function Login() {
  return (
    <div className='container'>
      <div className='main-content'>
        <div className='img-container'>
          <img src={logo} alt="Logo" className='img-logo' />
        </div>
        <div className='input-container'>
          <input type="text" className='text-input' name="nomeUsuario" id="nomeUsuario" placeholder="Nome"/>
        </div>
        <div className='input-container'>
          <select name="perfilUsuario" id="perfilUsuario" className='select-input'>
            <option value="" disabled selected hidden>Perfil</option>
            <option value="1">PLAYER</option>
            <option value="2">MODERADOR</option>
          </select>
        </div>
        <div className='input-container'>
          <input type="text" className='text-input' name="salaUsuario" id="salaUsuario" placeholder="Sala"/>
        </div>
        <div className='button-container'>
          <Link className='button-entry' to='/PLPoker'>Voltar</Link>
          <Link className='button-entry' to='/PLPoker/Login'>Entrar</Link>
          {/* <Link className='button-entry' to='/PLPoker/Login'>Criar Sala</Link> */}
        </div>
      </div>
    </div>
  )
}
