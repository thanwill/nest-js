create database jonathan;
use jonathan;
CREATE TABLE Books (
    id INT AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    authorEmail VARCHAR(255) NOT NULL,
    createdAt DATETIME,
	updatedAt DATETIME,
    PRIMARY KEY (id)
);

INSERT INTO Books (title, content, authorEmail)
VALUES ('O Senhor dos Anéis', 'Um anel para a todos governar', 'tolkien@example.com'),
       ('1984', 'Grande Irmão está te observando', 'orwell@example.com'),
       ('Moby Dick', 'Chamem-me Ismael', 'melville@example.com'),
       ('O Alquimista', 'Quando você quer alguma coisa, todo o universo conspira para que você realize seu desejo.', 'coelho@example.com'),
       ('O Código Da Vinci', 'Um mistério que se desenrola na arte, história e símbolos.', 'brown@example.com'),
       ('Orgulho e Preconceito', 'É uma verdade universalmente reconhecida que um homem solteiro, possuidor de uma boa fortuna, deve estar em busca de uma esposa.', 'austen@example.com'),
       ('O Grande Gatsby', 'A história do milionário Jay Gatsby e seu amor por Daisy Buchanan.', 'fitzgerald@example.com'),
       ('Guerra e Paz', 'Um panorama da sociedade russa durante a invasão napoleônica.', 'tolstoy@example.com');
       
select * from	Books;
delete from Books where id = 3;