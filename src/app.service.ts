//  app.service processa regras de negócio e outras coisas úteis
// É usado em controllers e pode ser usado em outros serviços

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}