import { PedidosDto } from "../../pedidos/dto/pedidosDto";

export class ClienteDto {
  nome: string | undefined;
  endereco: string | undefined;
  email: string | undefined;
  id: number | undefined;
  cpf: number | undefined;
  pedido: [PedidosDto] | undefined;
}
