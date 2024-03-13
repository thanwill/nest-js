import { InjectModel } from '@nestjs/sequelize';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import Book from 'interface/Book';
import BooksController from 'controller/BooksController';
import { Booking } from 'model/BookModel';

@Controller()
export class AppController {
  constructor(
    @InjectModel(Booking)
    private booking: typeof Booking,
    private readonly appService: AppService,
  ) {}


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Post('/cadastrar')
  async insertBook(@Body() book: Book) {
    const booksController = new BooksController();
    return booksController.insertBook(book);
  }

}
