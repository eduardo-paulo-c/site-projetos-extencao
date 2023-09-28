/* eslint-disable prettier/prettier */

import { DataSource } from 'typeorm';
import { Projeto } from '../domain/projeto.entity';

export const repositoryProviders = [
  {
    provide: 'PROJETO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Projeto),
    inject: ['DATA_SOURCE'],
  },
];