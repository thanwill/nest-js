# Avaliação de Loja de Produtos Eletrônicos

Este projeto é uma loja que vende produtos eletrônicos. Os produtos são organizados em uma tabela com as seguintes propriedades: nome, empresa, descrição, quantidade, marca e valor.

```sql
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    empresa VARCHAR(255) NOT NULL,
    descricao TEXT,
    quantidade INT NOT NULL,
    marca VARCHAR(255) NOT NULL,
    valor DECIMAL(10, 2) NOT NULL
);
```

## Rotas da API

A API fornece as seguintes rotas:

- `GET /produtos`: Exibe todos os produtos.
- `GET /produtos?nome={nome}`: Exibe os produtos especificados pelo nome.
- `POST /produtos`: Insere novos produtos.
- `PUT /produtos/{id}`: Atualiza um produto existente.
- `DELETE /produtos/{id}`: Remove um produto.

## Critérios de Avaliação

A avaliação será baseada nos seguintes critérios:

1. Funcionamento das rotas `GET /produtos`, `GET /produtos?nome={nome}`, `POST /produtos`, `PUT /produtos/{id}`, e `DELETE /produtos/{id}`.
2. Defesa correta do funcionamento das rotas.
3. Todos os integrantes do grupo devem apresentar.
4. O tempo da apresentação deve ser respeitado.

Cada critério vale 0,31 pontos.