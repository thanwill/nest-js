import { Model, Table, PrimaryKey, Column } from "sequelize-typescript";
/**
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    empresa VARCHAR(255) NOT NULL,
    descricao TEXT,
    quantidade INT NOT NULL,
    marca VARCHAR(255) NOT NULL,
    valor DECIMAL(10, 2) NOT NULL

 */

@Table 
export class Company extends Model<Company> {
    @PrimaryKey
    @Column
    id: string;

    @Column
    nome: string;

    @Column
    empresa: string;

    @Column
    descricao: string;

    @Column
    quantidade: number;

    @Column
    marca: string;

    @Column
    valor: number;
}