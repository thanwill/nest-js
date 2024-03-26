import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Livro } from '../livros/book.model';
import { LivroController } from '../livros/books.controller';
import { LivroService } from 'livros/books.service';
import { DesignController } from 'designpatterns/design.controller';
import { DesignService } from 'designpatterns/design.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'atzmkl712',
      database: 'bookservices',
      models: [Livro],
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Livro]),
  ],
  controllers: [AppController, LivroController, DesignController], 
  providers: [AppService, LivroService, DesignService],
})
export class AppModule {}
