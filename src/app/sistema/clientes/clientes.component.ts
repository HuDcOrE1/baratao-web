import { ClientesService } from './clientes.service';
import { Component, OnInit } from '@angular/core';
import { ClienteDto } from './dto/cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  constructor(private clienteService: ClientesService) { }
  clientes: ClienteDto[] | undefined;
  ngOnInit(): void {
    this.clienteService.consultarCliente().then((resp) =>{
      this.clientes = resp;

      console.log('No compoenet', this.clientes)

    });
  }

}
