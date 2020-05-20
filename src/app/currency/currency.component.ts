import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as CurrencyActions from '../store/currency/currency.actions'

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent {

  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch(CurrencyActions.increment());
  }

  decrement() {
    this.store.dispatch(CurrencyActions.decrement());
  }

  reset() {
    this.store.dispatch(CurrencyActions.reset());
  }

  addClickPower() {
    this.store.dispatch(CurrencyActions.addClickPower());
  }
}

