import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';

@Table
export class Book extends Model<Book> {
    @PrimaryKey
    @Column
    id: string;

    @Column
    title: string;

    @Column
    description: string;
}