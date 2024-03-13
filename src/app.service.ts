import { Injectable } from '@nestjs/common';
import { Booking } from '../model/BookModel';
import { InjectModel } from '@nestjs/sequelize';
import { BookDTO } from '../dto/BookDTO';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  createBooking(postData: BookDTO) {
    this.createBooking(postData);
  }

}
