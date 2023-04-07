import * as authActions from './authActions';
import * as productActions from './productActions';
import * as newsAction from './newsActions';
import * as calculatorActions from './calculatorActions';
import * as masterActions from './masterActions';
import * as orderActions from './orderActions';
import * as cartActions from './cartActions'
import * as paymentAction from './paymentAction'
export const ActionCreators = Object.assign(
  {},
  authActions,
  productActions,
  newsAction,
  calculatorActions,
  masterActions,
  orderActions,
  cartActions,
  paymentAction,
);
