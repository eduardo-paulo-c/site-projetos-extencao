/* eslint-disable prettier/prettier */

import { DataSource } from 'typeorm';
import { Projeto } from '../domain/projeto.entity';
import { Professor } from '../domain/professor.entity';

export const repositoryProviders = [
  {
    provide: 'PROJETO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Projeto),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'PROFESSOR_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Professor),
    inject: ['DATA_SOURCE'],
  },
];