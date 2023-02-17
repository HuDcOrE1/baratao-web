import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.component.html',
  styleUrls: ['./sistema.component.scss']
})
export class SistemaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  logout(): void {
    window.localStorage.clear();
    console.log('logout...');
    this.goTo('login');
  }

  goTo(rota: string): void {
    this.router.navigate([rota]);
  }

}
