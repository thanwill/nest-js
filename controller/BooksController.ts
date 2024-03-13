import Book from 'interface/Book';
import { BookDTO } from '../dto/BookDTO';
import { Booking } from 'model/BookModel';
import { InjectModel } from '@nestjs/sequelize';
import { AppService } from 'src/app.service';

class BooksController {

  constructor(
    @InjectModel(Booking)
    private booking: typeof Booking,
    private readonly appService: AppService,
  ) {}

  
  async insertBook(book: BookDTO) {
    const booking = await Booking.create({
      title: book.title,
      content: book.content,
      authorEmail: book.authorEmail,
    });

    return booking;
  }

}

export default BooksController;
