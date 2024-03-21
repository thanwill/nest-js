import { Controller, Get, Post, Put, Delete, Param, Body } from "@nestjs/common";
import { BooksService } from './books.service';
import { Book } from './book.model';

@Controller('livros')
export class LivrosController {x
    constructor(private booksService: BooksService) {}

    @Get()
    getLivros() {
        return this.booksService.findAll();
    }
    
    @Get(':id')
    getLivro(@Param('id') id: string) {
        return this.booksService.findOne(id);
    }
    
    @Post()
    createLivro(@Body() book: Book) {
        return this.booksService.create(book);
    }
    
    @Put(':id')
    updateLivro(@Param('id') id: string, @Body() book: Book) {
        return this.booksService.update(id, book);
    }
    
    @Delete(':id')
    deleteLivro(@Param('id') id: string) {
        return this.booksService.delete(id);
    }
}