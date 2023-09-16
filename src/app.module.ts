import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';
import { Order } from './orders/entities/order.entity';

// ES7 Decorators - Ecmascript 7 Descorators

@Module({
  imports: [
    SequelizeModule.forRoot( {
      dialect: 'sqlite',
      host: join(__dirname, 'database.sqlite'),
      autoLoadModels: true,
      models: [Order]
    }),
    OrdersModule], // Registrar outros módulos
  controllers: [AppController], // Registra controllers
  providers: [AppService],
})

// Inicia minha aplicação 
export class AppModule {}
