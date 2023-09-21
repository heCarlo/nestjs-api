import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service'; // Importa o serviço de pedidos.
import { OrdersController } from './orders.controller'; // Importa o controlador de pedidos.
import { SequelizeModule } from '@nestjs/sequelize'; // Importa o módulo do Sequelize para integração com o banco de dados.
import { Order } from './entities/order.entity'; // Importa a entidade de pedido.

@Module({
  imports: [SequelizeModule.forFeature([Order])], // Configura o SequelizeModule para incluir a entidade 'Order'.
  controllers: [OrdersController], // Declara o controlador 'OrdersController' como parte deste módulo.
  providers: [OrdersService], // Declara o serviço 'OrdersService' como parte deste módulo.
})
export class OrdersModule {} // Define e exporta o módulo 'OrdersModule'.
