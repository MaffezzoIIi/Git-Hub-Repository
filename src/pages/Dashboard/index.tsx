import React, { useState, FormEvent } from 'react';
import api from '../../services/api';

import { Title, Repositories, Form } from './style';

interface Repository {
  fullName: string;
  description: string;
  owner: {
    login: string;
    avatarUrl: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');

  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get<Repository>(`repos/${newRepo}`);
    const repository = response.data;

    setRepositories([...repositories, repository]);
  }

  return (
    <>
      <Title>Explore repositórios no GitHub</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        {repositories.map(repository => (
          <>
            <img
              src={repository.owner.avatarUrl}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.fullName}</strong>
              <p>{repository.description}</p>
            </div>
          </>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
