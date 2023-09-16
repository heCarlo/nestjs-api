// Um controller deve abrigar o próprio contexto

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // Especifica para o Nest.js que o AppController é um controller
// A classe controller abriga o roteamento, o acesso à API pelas rotas 
export class AppController {
  constructor(private readonly appService: AppService) {}

// Criamos rotas também utilizando decorators
  @Get('teste')
  getHello(): string {
    return this.appService.getHello();
  }
}
