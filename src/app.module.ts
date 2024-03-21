import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Livro } from '../controller/book.model';
import { LivroController } from '../controller/books.controller';
import { LivroService } from 'controller/books.service';

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
  controllers: [AppController, LivroController], 
  providers: [AppService, LivroService],
})
export class AppModule {}
