import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  public isloading$ = new Subject<boolean>();

  show(): void {
    this.isloading$.next(true);
  }

  hide(): void {
    this.isloading$.next(false);
  }
}
