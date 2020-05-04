import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './currency.actions';

export const initialState = 0;

const _currencyReducer = createReducer(initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0),
);

export function currencyReducer(state, action) {
  return _currencyReducer(state, action);
}