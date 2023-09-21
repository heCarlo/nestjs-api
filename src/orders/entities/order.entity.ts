// Importa os Decorators e tipos necessários do Sequelize
import { Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

// Define o modelo da tabela 'orders' no banco de dados
@Table({
    tableName: 'orders', // Nome da tabela no banco de dados
})
export class Order extends Model {
    // Define o campo 'id' como chave primária da tabela
    @PrimaryKey
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })   
    id: String;

    // Define o campo 'amount' na tabela
    @Column({ allowNull: false, type: DataType.DECIMAL(10,2) })
    amount: number;
}
