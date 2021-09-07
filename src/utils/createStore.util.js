/* eslint-disable no-param-reassign */
// Core
import {
  createStore as baseCreateStore, compose,
} from 'redux';

const createStore = (reducer, preloadedState, enhancer) => {
  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (!preloadedState) {
    // eslint-disable-next-line no-underscore-dangle
    preloadedState = global.__INITIAL_STATE__;
  }

  if (typeof enhancer !== 'undefined') {
    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  let composeEnhancers = compose;

  if (typeof global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }

  return baseCreateStore(reducer, preloadedState, composeEnhancers());
};

export default createStore;
