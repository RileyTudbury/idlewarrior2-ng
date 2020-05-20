import { createReducer, on } from '@ngrx/store';
import * as CurrencyActions from './currency.actions';

export interface State {
  honor: number;
  clickPower: number;
}

export const initialState: State = {
  honor: 0,
  clickPower: 1
}

const _currencyReducer = createReducer(initialState,
  on(CurrencyActions.increment, state => ({ ...state, honor: state.honor + state.clickPower })),
  on(CurrencyActions.decrement, state => ({ ...state, honor: state.honor - state.clickPower })),
  on(CurrencyActions.reset, state => ({ ...initialState })),

  on(CurrencyActions.addClickPower, state => ({ ...state, clickPower: state.clickPower + 1 }))
);

export function currencyReducer(state, action) {
  return _currencyReducer(state, action);
}