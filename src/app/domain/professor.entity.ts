/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Projeto } from './projeto.entity';
@Entity()
export class Professor {
  @PrimaryGeneratedColumn()
  idprofessor: number;

  @Column({ length: 15 })
  cpf: string;

  @Column({ length: 150 })
  nome: string;

  @Column({ length: 150 })
  email: string;

  @Column({ length: 150 })
  senha: string;

  @OneToMany(() => Projeto, (projeto) => projeto.professor)
  projetos: Projeto;
}