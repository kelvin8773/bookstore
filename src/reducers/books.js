const bookReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.payload];
    case 'REMOVE_BOOK':
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1, state.length)];
    default:
      return state;
  }
};

export default bookReducer;
