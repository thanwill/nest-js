import Book from '../interface/Book';

export class BookDTO implements Book {
  id: number;
  title: string;
  content: string;
  authorEmail: string;
}