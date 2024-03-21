import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';

@Table
export class Livro extends Model<Livro> {
    @PrimaryKey
    @Column
    id: string;

    @Column
    title: string;

    @Column
    description: string;
}