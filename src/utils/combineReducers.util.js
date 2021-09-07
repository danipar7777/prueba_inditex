export default (reducerMap) => (
  reducerMap && Object.keys(reducerMap).length > 0
    ? (state, action) => Object.keys(reducerMap).reduce((prevState, reducerKey) => ({
      ...prevState,
      [reducerKey]: reducerMap[reducerKey](state ? state[reducerKey] : undefined, action),
    }), state)
    : ((noop) => noop)
);
