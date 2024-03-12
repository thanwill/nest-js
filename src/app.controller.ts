import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Post('/cadastrar')
  insertObject(
    @Body() postData : {
      title: string,
      content: string,
      authorEmail: string
    }
  ){

    const { title, content, authorEmail } = postData;

    console.log(postData);
    
    return {
      message: 'Objeto criado com sucesso!',
      data: {
        title,
        content,
        authorEmail
      }
    }
  }


}
