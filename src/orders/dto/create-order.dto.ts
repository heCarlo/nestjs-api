import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";

// Esta classe que representa um DTO (objeto de transferência de dados) para criar um pedido.
export class CreateOrderDto {
    // Propriedade "amount" representa o valor do pedido.

    // O decorator "@IsPositive()" indica que esta propriedade deve ser um número positivo.
    @IsPositive()
    
    // O decorator "@IsNumber()" indica que esta propriedade deve ser um número.
    @IsNumber()
    
    // O decorator "@IsNotEmpty()" indica que esta propriedade não pode estar vazia ou indefinida.
    @IsNotEmpty()
    amount: number; // Aqui é onde o valor do pedido será armazenado.
}
