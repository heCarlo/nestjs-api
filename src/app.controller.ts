import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // Define que esta classe é um controlador
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Define uma rota GET chamada 'teste'
  @Get('teste')
  getHello(): string {
    return this.appService.getHello();
  }
}
