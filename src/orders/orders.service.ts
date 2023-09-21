import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto'; // Importa o DTO para criar um pedido.
import { UpdateOrderDto } from './dto/update-order.dto'; // Importa o DTO para atualizar um pedido.
import { Order } from './entities/order.entity'; // Importa a entidade de pedido.
import { InjectModel } from '@nestjs/sequelize'; // Importa o decorator para injetar o modelo Sequelize.

@Injectable()
export class OrdersService {

  constructor(
    @InjectModel(Order) // Injeta o modelo Sequelize da entidade 'Order'.
    private orderModel: typeof Order // Declara uma variável para armazenar o modelo do pedido.
  ) { }

  create(createOrderDto: CreateOrderDto) {
    return this.orderModel.create({
      amount: createOrderDto.amount // Cria um novo pedido no banco de dados com base nos dados fornecidos no DTO de criação.
    });
  }

  findAll() {
    return this.orderModel.findAll(); // Retorna uma lista de todos os pedidos no banco de dados.
  }

  findOne(id: string) {
    return this.orderModel.findByPk(id, { rejectOnEmpty: true }); // Retorna um pedido específico com base no ID fornecido.
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    const order = await this.orderModel.findByPk(id, { rejectOnEmpty: true }); // Encontra o pedido a ser atualizado.
    order.update({ amount: updateOrderDto.amount }); // Atualiza os dados do pedido com base no DTO de atualização.
    return order; // Retorna o pedido atualizado.
  }

  async remove(id: string) {
    const order = await this.orderModel.findByPk(id, { rejectOnEmpty: true }); // Encontra o pedido a ser excluído.
    order.destroy(); // Remove o pedido do banco de dados.
  }
}
