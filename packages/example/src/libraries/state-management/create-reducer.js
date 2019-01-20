export function createReducer(config) {
  return (state = {}, action) => {
    const reducer = (accState, [field, reducer]) => {
      return {
        ...accState,
        [field]: reducer(state[field], action)
      };
    };

    return Object.entries(config).reduce(reducer, {});
  };
}
