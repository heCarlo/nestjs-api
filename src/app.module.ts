import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';
import { Order } from './orders/entities/order.entity';

@Module({
  imports: [
    SequelizeModule.forRoot( {
      dialect: 'sqlite',
      host: join(__dirname, 'database.sqlite'),
      autoLoadModels: true,
      models: [Order]
    }),
    OrdersModule
  ], // Importa outros módulos externos para este módulo.
  controllers: [AppController], // Registra controladores que pertencem a este módulo.
  providers: [AppService], // Registra provedores de serviços que pertencem a este módulo.
})
export class AppModule {} // Define o módulo principal da aplicação.
