import { UsuariosModule } from './usuarios/usuarios.module';
import { ClientesModule } from './clientes/clientes.module';
import { RouterModule } from '@angular/router';
import { PecasModule } from './pecas/pecas.module';
import { LoginModule } from './login/login.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SistemaComponent } from './sistema.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PessoaModule } from './pessoa/pessoa.module';

@NgModule({
  declarations: [SistemaComponent],
  imports: [
    CommonModule, RouterModule, LoginModule,
    PecasModule, ClientesModule, UsuariosModule, PessoaModule],
})
export class SistemaModule {}
