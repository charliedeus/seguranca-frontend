import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';
// import logo from '~/assets/agerba.png';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="Go Barber" />

      <form>
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha" />

        <button type="submit">Entrar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </form>
    </>
  );
}
