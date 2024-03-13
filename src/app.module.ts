import env from 'dotenv';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Booking } from '../model/BookModel';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: 3306, // 3306 para o banco rodando local, mas 3307 para o banco rodando no docker
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || 'positivo', // tem que ser a senha definida para o seu banco de dados
      database: process.env.DB_NAME || 'bookstore',
      models: [Booking],
    }),
    SequelizeModule.forFeature([Booking]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
