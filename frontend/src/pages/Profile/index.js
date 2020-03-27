import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import { Container, IncidentList, Incident } from './styles';

import Header from '../../components/Header';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const ongId = localStorage.getItem('ongId');

  useEffect(() => {
    api
      .get('/profile', {
        headers: {
          Authorization: ongId,
        },
      })
      .then(response => {
        setIncidents(response.data);
      });
  }, []);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (err) {
      toast.error('Erro ao deletar caso, tente novamente', { autoClose: 3000 });
    }
  }

  return (
    <Container>
      <Header />

      <h1>Casos cadastrados</h1>

      <IncidentList>
        {incidents.map(incident => (
          <Incident key={incident.id}>
            <strong>CASO: </strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO: </strong>
            <p>{incident.description}</p>

            <strong>VALOR: </strong>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </p>

            <button
              type="button"
              onClick={() => handleDeleteIncident(incident.id)}
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </Incident>
        ))}
      </IncidentList>
    </Container>
  );
}
