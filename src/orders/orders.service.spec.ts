import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from './orders.service'; // Importa o serviço que será testado.

describe('OrdersService', () => {
  let service: OrdersService; // Declara uma variável para armazenar uma instância do serviço.

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdersService], // Define os provedores que serão testados, neste caso, o OrdersService.
    }).compile();

    service = module.get<OrdersService>(OrdersService); // Obtém uma instância do OrdersService do módulo de teste.
  });

  it('should be defined', () => {
    expect(service).toBeDefined(); // Testa se o serviço foi definido (ou seja, se a instância foi criada com sucesso).
  });
});
