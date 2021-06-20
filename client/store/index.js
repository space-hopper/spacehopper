import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import auth from './auth';
import singleProductReducer from '../redux/reducers/singleProductReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productReducer } from '../redux/reducers/productReducer';
import { cartReducer } from '../redux/reducers/cartReducer';

const reducer = combineReducers({
  auth,
  productReducer,
  cart: cartReducer,
  product: singleProductReducer,
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true })),
);
const store = createStore(reducer, middleware);

export default store;
export * from './auth';
