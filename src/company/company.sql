CREATE DATABASE loja_eletronicos;
USE loja_eletronicos;

CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    empresa VARCHAR(255) NOT NULL,
    descricao TEXT,
    quantidade INT NOT NULL,
    marca VARCHAR(255) NOT NULL,
    valor DECIMAL(10, 2) NOT NULL
);