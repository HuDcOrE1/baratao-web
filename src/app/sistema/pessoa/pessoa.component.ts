import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PessoaDto } from './dto/pessoaDto';
import { createTextMaskInputElement } from 'text-mask-core/dist/textMaskCore';
@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent {

  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
  pessoaDto = new PessoaDto;

  formPessoa = new FormGroup({
    nome: new FormControl('Fulano', [Validators.required]),
    email: new FormControl('fulano@fulano.com', [Validators.required, this.validateEmail]),
    cpf: new FormControl('xxx.xxx.xxx-xx', [Validators.required]),
    telefone: new FormControl('61-9.9999-9999', [Validators.required]),
    endereco: new FormControl('Rua do fulano', [Validators.required]),
    perfil: new FormControl('1', [Validators.required]),
    senha: new FormControl('123456', [Validators.required, this.validatePassword])
 });

 formulario: FormGroup;

 constructor(public activeModal: NgbActiveModal) {
  this.formulario = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefone: new FormControl(''),
    cpf: new FormControl('', Validators.pattern('[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}')),
    perfil: new FormControl(''),
    endereco: new FormGroup({
      rua: new FormControl(''),
      numero: new FormControl(''),
      complemento: new FormControl(''),
      cidade: new FormControl(''),
      estado: new FormControl('')
    })
  });
  }

//  onSubmit(): void {
//   this.pessoaDto.nome = this.formPessoa.get('nome')?.value;
//   this.pessoaDto.email = this.formPessoa.get('email')?.value;
//   this.pessoaDto.cpf = this.formPessoa.get('cpf')?.value;
//   this.pessoaDto.telefone = this.formPessoa.get('telefone')?.value;
//   this.pessoaDto.endereco = this.formPessoa.get('endereco')?.value;
//   this.pessoaDto.senha = this.formPessoa.get('senha')?.value;
//   this.onClose.emit(this.pessoaDto);
// }

onSubmit() {
  console.log(this.formulario.value);
}


  fecharModal():void {
    this.activeModal.close();
  }


  validateEmail(c: FormControl) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(c.value) ? null : { invalidEmail: true };
  }

  validatePassword(c: FormControl) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
    return passwordRegex.test(c.value) ? null : { invalidPassword: true };
  }

  cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];


}
