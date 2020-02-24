const bookReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.payload];
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.payload);
    case 'UPDATE_BOOK':
      const idx = state.findIndex(book => book.id === action.payload.id);
      const updateBook = { ...state[idx], ...action.payload };
      const updateState = [state.slice(0, idx), updateBook, state.slice(idx + 1)];
      return updateState;
    default:
      return state;
  }
};

export default bookReducer;
