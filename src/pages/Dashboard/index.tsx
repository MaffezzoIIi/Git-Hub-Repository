import React, { useState, FormEvent } from 'react';
import api from '../../services/api';

import { Title, Repository, Form } from './style';

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const response = api.get(`repos/${newRepo}`);
  }

  return (
    <>
      <Title>Explore repositórios no GitHub</Title>

      <Form action="test">
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repository>
        <img
          src="https://avatars.githubusercontent.com/u/78097513?v=4"
          alt="Thomas"
        />
        <div>
          <strong>MaffezzoIIi/GitHubRepository</strong>
          <p>Projeto para listar repositórios do GitHub</p>
        </div>
      </Repository>

      <Repository>
        <img
          src="https://avatars.githubusercontent.com/u/78097513?v=4"
          alt="Thomas"
        />
        <div>
          <strong>MaffezzoIIi/GitHubRepository</strong>
          <p>Projeto para listar repositórios do GitHub</p>
        </div>
      </Repository>

      <Repository>
        <img
          src="https://avatars.githubusercontent.com/u/78097513?v=4"
          alt="Thomas"
        />
        <div>
          <strong>MaffezzoIIi/GitHubRepository</strong>
          <p>Projeto para listar repositórios do GitHub</p>
        </div>
      </Repository>

      <Repository>
        <img
          src="https://avatars.githubusercontent.com/u/78097513?v=4"
          alt="Thomas"
        />
        <div>
          <strong>MaffezzoIIi/GitHubRepository</strong>
          <p>Projeto para listar repositórios do GitHub</p>
        </div>
      </Repository>

      <Repository>
        <img
          src="https://avatars.githubusercontent.com/u/78097513?v=4"
          alt="Thomas"
        />
        <div>
          <strong>MaffezzoIIi/GitHubRepository</strong>
          <p>Projeto para listar repositórios do GitHub</p>
        </div>
      </Repository>
    </>
  );
};

export default Dashboard;
