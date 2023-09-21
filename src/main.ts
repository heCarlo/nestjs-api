import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  // Cria uma instância da aplicação Nest.js
  const app = await NestFactory.create(AppModule);

  // Aplica um pipe global de validação para tratar erros de validação com status 422 Unprocessable Entity
  app.useGlobalPipes(new ValidationPipe({ errorHttpStatusCode: 422 }));

  // Configura o Swagger para documentar a API
  const config = new DocumentBuilder()
    .setTitle('Enquenta Imenrsão 7.0 API REST')
    .setDescription('Uma API linda demais da conta')
    .setVersion('7.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Define a rota '/api' para acessar a documentação Swagger
  SwaggerModule.setup('api', app, document);

  // Inicializa o servidor Nest.js na porta 3000
  await app.listen(3000);
}

bootstrap();
