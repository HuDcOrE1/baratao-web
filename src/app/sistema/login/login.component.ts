import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { RespostaLoginDTO } from './dto/respostaLoginDTO';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validateEmail(c: FormControl) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(c.value) ? null : { invalidEmail: true };
  }

  validatePassword(c: FormControl) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
    return passwordRegex.test(c.value) ? null : { invalidPassword: true };
  }

   formLogin = new FormGroup({
     email: new FormControl('teste', [Validators.required, this.validateEmail]),
     senha: new FormControl('123456', [Validators.required, this.validatePassword])
  });

 constructor(private service: LoginService, private router: Router) { }



  ngOnInit(): void {
    console.log();
  }

  onSubmit(): void {
    // console.log(this.formLogin.get('email')?.value);
    // console.log(this.formLogin.get('senha')?.value);
    this.service.login(this.formLogin.get('email')?.value, this.formLogin.get('senha')?.value)
    .subscribe((resposta: RespostaLoginDTO) =>{
      if(resposta.tipo && resposta.token){
        void this.router.navigate(['']);
        console.log(resposta);
      }
    })
  }

}
