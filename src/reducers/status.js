const initialStatus = {
  currentBookID: '',
  currentContent: '',
}

const statusReducer = (state = initialStatus, action) => {
  switch (action.type) {
    case 'SELECT_BOOK':
      return { ...state, currentBookID: action.payload };
    case 'SELECT_CONTENT':
      return { ...state, currentContent: action.payload };
    default:
      return state;
  }

}

export default statusReducer;