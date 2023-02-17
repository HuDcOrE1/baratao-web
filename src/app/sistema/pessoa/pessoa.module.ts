import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { PessoaComponent } from './pessoa.component';

@NgModule({
  declarations: [PessoaComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TextMaskModule],
  exports: [PessoaComponent]
})
export class PessoaModule {}
