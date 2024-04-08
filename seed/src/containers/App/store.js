import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  themeReducer,
  rtlReducer,
  customizerReducer,
  sidebarReducer,
  authReducer,
  roundBordersReducer,
  blocksShadowsReducer,
} from '@/redux/reducers/index';
import appConfigReducer from '@/redux/reducers/appConfigReducer';

const reducer = combineReducers({
  theme: themeReducer,
  rtl: rtlReducer,
  customizer: customizerReducer,
  sidebar: sidebarReducer,
  user: authReducer,
  border: roundBordersReducer,
  shadow: blocksShadowsReducer,
  appConfig: appConfigReducer,
});
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
