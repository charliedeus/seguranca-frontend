import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';
// import logo from '~/assets/agerba.png';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'No mínimo, 6 caracteres')
    .required('A senha é obrigatória'),
  cpf: Yup.string()
    .min(11)
    .required('O CPF é obrigatório'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password, cpf }) {
    dispatch(signUpRequest(name, email, password, cpf));
  }

  return (
    <>
      <img src={logo} alt="Go Barber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="cpf" placeholder="Seu cpf" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">Criar conta</button>
        <Link to="/signin">Já tenho login</Link>
      </Form>
    </>
  );
}
