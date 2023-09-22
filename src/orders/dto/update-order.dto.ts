import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';

// Esta classe representa um DTO (objeto de transferência de dados) para atualizar um pedido.
export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
