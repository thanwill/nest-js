import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from './book.model';

@Injectable()
export class BooksService  {

    constructor(
        @InjectModel(Book)
        private bookModel: typeof Book,
    ){} 

    async findAll(): Promise<Book[]> {
        return this.bookModel.findAll();
    }

    async findOne(id: string): Promise<Book> {
        return this.bookModel.findOne({ where: { id } });
    }

    async create(book: Book): Promise<Book> {
        return this.bookModel.create(book);
    }

    async delete(id: string): Promise<void> {
        await this.bookModel.destroy({ where: { id } });
    }

    async update(id: string, book: Book): Promise<[number, Book[]]> {
        const [numberOfAffectedRows, [updatedBook]] = await this.bookModel.update(book, { where: { id }, returning: true });
        return [numberOfAffectedRows, [updatedBook]];
    }

}