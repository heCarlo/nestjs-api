import { Test, TestingModule } from '@nestjs/testing'; // Importa módulos de teste do Nest.js
import { AppController } from './app.controller'; // Importa o controlador a ser testado
import { AppService } from './app.service'; // Importa o serviço usado pelo controlador

// Descreve um conjunto de testes para o AppController
describe('AppController', () => {
  let appController: AppController; // Declara uma variável para armazenar uma instância do AppController

  // Antes de cada teste, inicializa o módulo de teste
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController], // Registra o controlador para teste
      providers: [AppService], // Registra o serviço necessário para o controlador
    }).compile();

    appController = app.get<AppController>(AppController); // Obtém uma instância do AppController
  });

  // Descreve um conjunto de testes relacionados à rota raiz do controlador
  describe('root', () => {
    // Testa se o método getHello() do controlador retorna 'Hello World!'
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
