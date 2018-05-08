import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import root from './reducers/root';

export default compose(applyMiddleware(thunk))(createStore)(root);
