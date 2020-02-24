const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const UPDATE_BOOK = 'UPDATE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';
const SELECT_BOOK = 'SELECT_BOOK';
const SELECT_CONTENT = 'SELECT_CONTENT';

export const createBook = book => ({
  type: CREATE_BOOK,
  payload: book,
});

export const removeBook = book => ({
  type: REMOVE_BOOK,
  payload: book.id,
});

export const updateBook = book => ({
  type: UPDATE_BOOK,
  payload: book,
});

export const changeFilter = category => ({
  type: CHANGE_FILTER,
  payload: category,
});

export const selectBook = book => ({
  type: SELECT_BOOK,
  payload: book.id,
})

export const selectContent = content => ({
  type: SELECT_CONTENT,
  payload: content
})
