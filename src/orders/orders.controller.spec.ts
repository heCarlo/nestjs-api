import { Test, TestingModule } from '@nestjs/testing';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

// Descreve um conjunto de testes para o controlador "OrdersController".
describe('OrdersController', () => {
  let controller: OrdersController;

  // Antes de cada teste assíncrono, configura o módulo de teste.
  beforeEach(async () => {
    // Cria um módulo de teste usando "Test.createTestingModule" que inclui o "OrdersController" como controlador e o "OrdersService" como provedor.
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersController], // Inclui o controlador "OrdersController".
      providers: [OrdersService], // Inclui o provedor "OrdersService".
    }).compile();

    // Obtém uma instância do "OrdersController" do módulo de teste.
    controller = module.get<OrdersController>(OrdersController);
  });

  // Testa se o controlador "OrdersController" está definido.
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
