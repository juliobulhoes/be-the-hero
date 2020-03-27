import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { toast } from 'react-toastify';

import api from '../../services/api';

import { Container, FormContainer } from './styles';

import heroesImage from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('/sessions', { id });

      toast.success(`Bem vinda ONG ${response.data.name}`, { autoClose: 3000 });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (err) {
      toast.error(`Falha no login, tente novamente`, {
        autoClose: 3000,
      });
    }
  }

  return (
    <Container>
      <FormContainer>
        <img src={logoImg} alt="Be the Heroe" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </FormContainer>

      <img src={heroesImage} alt="Heroes" />
    </Container>
  );
}
