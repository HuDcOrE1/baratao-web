import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';
import { FormLoginDTO } from './dto/FormLoginDTO';
import { RespostaLoginDTO } from './dto/respostaLoginDTO';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(
    email: string,
    senha: string
  ):  Observable<RespostaLoginDTO>{
    const formLoginReq = new FormLoginDTO();
    formLoginReq.email = email;
    formLoginReq.senha = senha;

    const obs = new Observable<RespostaLoginDTO>((observer) => {
      this.httpClient.post<any>('/api/auth', formLoginReq).subscribe({
        next: (resposta: RespostaLoginDTO) =>{
          console.log('Tipo -> ', resposta.tipo);
          console.log('Token -> ', resposta.token);
          if(resposta.token && resposta.tipo){
            window.localStorage.setItem('token_key', resposta.token);
            window.localStorage.setItem('token_type', resposta.tipo);
            observer.next(resposta);
            observer.complete();
          }
        }
      })
    });
    return obs;
  }

  getTokenExpirationDate(token: string): Date | null {
    const decoded: any = jwtDecode(token);
    if(decoded.exp === undefined){
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    console.log('Data de expiração: ',date)
    return date;
  }

  isTokenExpired(token: string): boolean {
    if(!token){
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if(date === undefined){
      return false;
    }
    console.log('Comparando as datas do token: ', date!.valueOf(),
    'Com data hoje' + new Date().valueOf(),
    'o Resultado é: ', date!.valueOf() > new Date().valueOf());
    return !(date!.valueOf() > new Date().valueOf());
  }

  isUserLoggedIn(): boolean {
    const token = this.getToken();
    if(!token){
      return false;
    } else if(this.isTokenExpired(token)){
      return false;
    }
    console.log('token valido')
    return true;
  }

  getToken(): string | null {
    const token = window.localStorage.getItem('token_key');
    return token;
  }
}
