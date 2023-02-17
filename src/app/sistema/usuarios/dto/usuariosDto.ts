export class UsuarioDto {
  id: number | undefined;
  nome: string | undefined;
  endereco: string | undefined;
  telefone: string | undefined;
  email: string | undefined;
  cpf: number | undefined;
  perfis: [PerfilDto] | undefined;
}

export class PerfilDto {
  nome: string | undefined;
}
