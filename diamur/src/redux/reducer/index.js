import {combineReducers} from 'redux';
import authReducers from './authReducer';
import productReducer from './productReducer';
import newsReducer from './newsReducer';
import calculatorReducer from './calculatorReducer';
import masterReducer from './masterReducer';
import orderReducer from './orderReducer';
import cartReducer from './cartReducer'
const rootReducer = combineReducers({
  authState: authReducers,
  productState: productReducer,
  newsState: newsReducer,
  calculatorState: calculatorReducer,
  masterState: masterReducer,
  orderState: orderReducer,
  cartState: cartReducer,
});

export default rootReducer;
