import { UsuarioDto } from './dto/usuariosDto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpClient: HttpClient) { }

  consultarUsuario():  Observable<UsuarioDto[]>{
    const obs = new Observable<UsuarioDto[]>((observer) => {
      this.httpClient.get<UsuarioDto[]>('/api/usuario').subscribe({
        next: (resposta: UsuarioDto[]) =>{
          observer.next(resposta);
          observer.complete();
        }
      })
    });
    return obs;
  }




}
