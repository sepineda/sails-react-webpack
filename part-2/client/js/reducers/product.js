import { createReducer } from './utils';

const initialState = {
  products: []
};

const products = {
  ['default']: (state, action) => initialState
};

export default createReducer(initialState, products);
