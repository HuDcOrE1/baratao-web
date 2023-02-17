import { Observable, throwError } from 'rxjs';
import { LoginService } from './../sistema/login/login.service';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, finalize, tap } from 'rxjs/operators';
import { SpinnerService } from '../sistema/spinner/spinner.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private loginService: LoginService,
    private spinnerService: SpinnerService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.show();
      const token = this.loginService.getToken();
      console.log('GetToken: ', token);
      let request: HttpRequest<any> = req;

      if (token){
        console.log('Tem token: ', token);
        request = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${token}`)
        });
      }
      // console.log(' aqui -> ',next.handle(request))
      return this.handler(next, request);
      // return next.handle(request).pipe(
      //   catchError((erro: HttpErrorResponse) => {
      //     console.log(erro);
      //     if(erro.error instanceof ErrorEvent){
      //       console.error("Ocorreu o erro: ", erro.error.message);
      //     } else {
      //       console.error(`Código do erro: ${erro.error},
      //       Erro: ${JSON.stringify(erro.error)}`);
      //     }
      //     return throwError('Ocorreu um erro, tente novamente');
      //   }),

      //   tap(event => {
      //     console.log(event);
      //     this.spinnerService.requestEnded();
      //   }, error => {
      //     console.log(error);
      //     this.spinnerService.requestEnded();
      //   })
      // );
  }

  handler(next: HttpHandler, request: HttpRequest<any>) {
    return next.handle(request).pipe(
      tap(
        (event) => {
          if(event instanceof HttpResponse){
            // this.spinnerService.hide();
          }
        },
        (error: HttpErrorResponse) => {
          // this.spinnerService.hide();
          throw error;
        }
      ),
      finalize(() => this.spinnerService.hide())
    );
  }
}
