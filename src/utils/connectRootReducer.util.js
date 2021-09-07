export default () => (createStore) => (reducer, preloadedState) => Object.assign(
  createStore(reducer, preloadedState), { rootReducer: reducer },
);
