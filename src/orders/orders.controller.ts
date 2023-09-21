import { 
  Controller,
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete, 
  HttpCode, 
  ValidationPipe
} from '@nestjs/common';
import { OrdersService } from './orders.service'; // Importa o serviço que lida com operações de pedidos.
import { CreateOrderDto } from './dto/create-order.dto'; // Importa o DTO (Data Transfer Object) para criar um pedido.
import { UpdateOrderDto } from './dto/update-order.dto'; // Importa o DTO para atualizar um pedido.

@Controller('orders') // Define o prefixo '/orders' para todos os endpoints deste controlador.
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {} // Injeta o serviço de pedidos no controlador.

  // Endpoint para criar um novo pedido
  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto); // Chama o método 'create' do serviço para criar um pedido.
  }

  // Endpoint para listar todos os pedidos
  @Get()
  findAll() {
    return this.ordersService.findAll(); // Chama o método 'findAll' do serviço para listar todos os pedidos.
  }

  // Endpoint para obter um pedido por ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(id); // Chama o método 'findOne' do serviço para obter um pedido por ID.
  }

  // Endpoint para atualizar um pedido por ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(id, updateOrderDto); // Chama o método 'update' do serviço para atualizar um pedido por ID.
  }

  // Endpoint para excluir um pedido por ID (com código de status HTTP personalizado 204 - No Content)
  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(id); // Chama o método 'remove' do serviço para excluir um pedido por ID.
  }
}
