import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import { Container } from './styles';

import logoImg from '../../assets/logo.svg';

export default function Header() {
  const history = useHistory();

  const ongName = localStorage.getItem('ongName');

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <Container>
      <header>
        <img src={logoImg} alt="Be the Hero" />
        <span>Bem vinda {ongName} </span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>
    </Container>
  );
}
