import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProdutoController } from './company/produto.controller';
import { ProdutoService } from './company/produto.service';
import { Produtos } from './company/produto.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'atzmkl712',
      database: 'loja_eletronicos',
      models: [Produtos],
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([ Produtos]),
  ],
  controllers: [AppController, ProdutoController], 
  providers: [AppService, ProdutoService],
})
export class AppModule {}
