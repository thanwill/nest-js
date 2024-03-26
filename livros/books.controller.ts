import { Controller, Get, Post, Put, Delete, Param, Body } from "@nestjs/common";
import { LivroService } from './books.service';
import { Livro } from './book.model';

@Controller('livros')
export class LivroController {x
    constructor(private booksService: LivroService) {}

    @Get()
    getLivros() {
        return this.booksService.findAll();
    }
    
    @Get(':id')
    getLivro(@Param('id') id: string) {
        return this.booksService.findOne(id);
    }
    
    @Post()
    createLivro(@Body() book: Livro) {

        book.id = Math.random().toString(36).substr(2, 9);
        return this.booksService.create(book);
    }
    
    @Put(':id')
    updateLivro(@Param('id') id: string, @Body() book: Livro) {
        return this.booksService.update(id, book);
    }
    
    @Delete(':id')
    deleteLivro(@Param('id') id: string) {
        return this.booksService.delete(id);
    }
}