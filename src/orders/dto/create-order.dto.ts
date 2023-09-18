import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export class CreateOrderDto {
    //Validação
    @IsPositive()
    @IsNumber()
    @IsNotEmpty()
    amount: number;
}


