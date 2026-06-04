import booksData from '../../data/books.json';

// Import all book cover images in the folder
const images = import.meta.glob(
  '../../assets/images/books/*',
  { eager: true, import: 'default' }
);

const getImage = (filename) => {
  const path = `../../assets/images/books/${filename}`;
  return images[path];
};

const books = booksData.map(book => ({
  ...book,
  image: getImage(book.image)
}));

// Most recently completed first
export const sortedBooks = [...books].sort((a, b) => {
  const dateA = new Date(a.completion_year, a.completion_month - 1, a.completion_day);
  const dateB = new Date(b.completion_year, b.completion_month - 1, b.completion_day);
  return dateB - dateA;
});
