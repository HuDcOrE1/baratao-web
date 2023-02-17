import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UsuariosComponent } from './usuarios.component';

@NgModule({
  declarations: [UsuariosComponent],
  imports: [CommonModule, NgbModule],
})
export class UsuariosModule {}
