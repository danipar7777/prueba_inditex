import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// utils
import connectRootReducer from './utils/connectRootReducer.util';
import createStore from './utils/createStore.util';
import combineReducers from './utils/combineReducers.util';
// components
import App from './components/app/app.component';
// reducers
import rootReducers from './reducers/index';
// styles
import './index.css';

const rootMiddleware = applyMiddleware(thunk);

const enhancer = compose(
  rootMiddleware,
  connectRootReducer(),
);
const appReducer = combineReducers(rootReducers);

const store = createStore(appReducer, enhancer);

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root'),
);
