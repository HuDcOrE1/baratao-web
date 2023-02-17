import { PessoaComponent } from './../pessoa/pessoa.component';
import { UsuarioDto } from './dto/usuariosDto';
import { UsuariosService } from './usuarios.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  constructor(private usuariosService: UsuariosService, private modalService: NgbModal) { }
  usuarios!: UsuarioDto[];
  public objetoRetornado: any;

  ngOnInit(): void {
    this.usuariosService.consultarUsuario().subscribe((resposta) =>{
      this.usuarios = resposta;
      console.log('Resposta dentro do cpt',resposta)
    })
  }

  abrirModalManterPessoa(): void {
    const modalConfig = {
      size: 'xl', // Define o tamanho da modal, 'sm' significa 'small'
      centered: true, // Centraliza a modal verticalmente
      // backdrop: 'static', // Impede o fechamento da modal quando o fundo é clicado
      // windowClass: 'custom-modal', // Define uma classe personalizada para a modal
      // Define as dimensões da modal
      // O valor pode ser uma string no formato '300px' ou um número
      // Os valores de altura e largura devem ser definidos juntos
      // A propriedade "max-height" é usada para controlar a altura da modal
      // A propriedade "max-width" é usada para controlar a largura da modal
      // A propriedade "overflow-y" é usada para controlar a rolagem vertical
      // A propriedade "overflow-x" é usada para controlar a rolagem horizontal
      // windowClass: 'my-custom-modal',
      beforeDismiss: () => confirm('Are you sure you want to close this modal?')
    };
    const modalRef = this.modalService.open(PessoaComponent, modalConfig);
    modalRef.componentInstance.onClose.subscribe((objeto: any) => {
      this.onModalClose(objeto);
    });
  }

  private onModalClose(objeto: any): void {
    console.log(objeto);
    this.objetoRetornado = objeto;
  }

}
