export class PedidosDto {
  id: number | undefined;
  formaPagamento: string | undefined;
  observacao: string | undefined;
  dataCriacao: Date | undefined;
  itens: [Itens] | undefined;
}

export class Itens {
  id: number | undefined;
  idPeca: number | undefined;
  quantidade: number | undefined;
}
