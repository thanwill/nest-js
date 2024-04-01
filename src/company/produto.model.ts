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
export class Produtos extends Model<Produtos> {

    @PrimaryKey
    @Column({ allowNull: false })
    id: number;

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

    @Column
    createdAt: Date;

    @Column
    updatedAt: Date;
}