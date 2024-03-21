import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Livro } from './book.model';

@Injectable()
export class LivroService  {

    constructor(
        @InjectModel(Livro)
        private bookModel: typeof Livro,
    ){} 

    async findAll(): Promise<Livro[]> {
        return this.bookModel.findAll();
    }

    async findOne(id: string): Promise<Livro> {
        return this.bookModel.findOne({ where: { id } });
    }

    async create(book: Livro): Promise<Livro> {
        return this.bookModel.create(book);
    }

    async delete(id: string): Promise<void> {
        await this.bookModel.destroy({ where: { id } });
    }

    async update(id: string, book: Livro): Promise<[number, Livro[]]> {
        const [numberOfAffectedRows, [updatedBook]] = await this.bookModel.update(book, { where: { id }, returning: true });
        return [numberOfAffectedRows, [updatedBook]];
    }

}