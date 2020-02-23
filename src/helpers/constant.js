import { makeID } from './index';

export const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

export const INIT_STATE = {
  books: [
    {
      id: makeID(),
      title: 'Born to Run',
      category: 'Learning',
      author: 'Christopher McDougall',
      cover: './assets/images/born_to_run.jpg',
      progress: {
        percent: 54,
        chapter: "Chapter 3 - 'A Lesson Learned'",
      },
    },
    {
      id: makeID(),
      title: 'Einstein: His Life and Universe',
      category: 'Biography',
      author: 'Isaacson Walter',
      cover: './assets/images/einstein.jpg',
      progress: {
        percent: 12,
        chapter: 'Chapter Two: Childhood',
      },
    },
    {
      id: makeID(),
      title: 'Steve Jobs',
      category: 'Biography',
      author: 'Isaacson Walter',
      cover: './assets/images/steve_jobs.jpg',
      progress: {
        percent: 77,
        chapter: 'Chapter 29 ~ Apple Stores',
      },

    },
  ],
};
