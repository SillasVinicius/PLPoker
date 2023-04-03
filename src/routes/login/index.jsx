import React from 'react';
import Botao from '../../components/botao/index.jsx';
import Input from '../../components/input/index.jsx';
import logo from './../../assets/images/logo.svg';
import './styles.css';

export default function Login() {
  return (
    <div className='container'>
      <div className='main-content'>
        <div className='img-container'>
          <img src={logo} alt='Logo' className='img-logo' />
        </div>
        <Input name='nomeUsuario' id='nomeUsuario' placeholder='Nome'/>
        <div class="custom-select">
          <select name='perfilUsuario' id='perfilUsuario' className='select-input'>
            <option value='' disabled selected hidden>Perfil</option>
            <option value='1'>PLAYER</option>
            <option value='2'>MODERADOR</option>
          </select>
        </div>
        <Input name='salaUsuario' id='salaUsuario' placeholder='Sala'/>
        <div className='flex-center'>
          <Botao to='/PLPoker' title='Voltar'/>
          <Botao to='/PLPoker/Login' title='Entrar'/>
          {/* <Botao className='button-entry' to='/PLPoker/Login'>Criar Sala</Botao> */}
        </div>
      </div>
    </div>
  )
}
