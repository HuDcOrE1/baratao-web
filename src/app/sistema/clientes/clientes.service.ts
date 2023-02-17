import { ClienteDto } from './dto/cliente';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private httpClient: HttpClient) { }

    // consultarCliente(): void {
    //   this.httpClient.get('/api/cliente').subscribe(
    //   data => console.log(data),
    //   error => console.log(error)
    //   );
    // }

    // consultarCliente(): Array<ClienteDto> {
    //   let clientes = new Array<ClienteDto>();
    //   this.httpClient.get<any>('/api/cliente').subscribe({
    //     next: (resposta) => {
    //       console.log(resposta)
    //       clientes = resposta;
    //     },
    //     error:(erro) => {
    //       console.log(erro)
    //       return erro;
    //     }
    //   }
    //   );
    //   return clientes;
    // }

    // consultarCliente(): Observable<ClienteDto[]> {
    //   return this.httpClient.get<ClienteDto[]>('/api/cliente');
    // }

    async consultarCliente() {
      const result = await this.httpClient.get<ClienteDto[]>('/api/cliente').toPromise();
      console.log('Result', result);
      return result;
    }

  //   consultarCliente(): Observable<ClienteDto> {
  //   const obs = new Observable<ClienteDto>((observer) => {
  //     this.httpClient.get<ClienteDto>('/api/cliente').subscribe({
  //       next: (resposta: ClienteDto) =>{
  //         observer.next(resposta);
  //         observer.complete();
  //       }
  //     })
  //   });
  //   return obs;
  // }
}
