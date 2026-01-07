import booksData from '../../data/books.json';
import { StarRating } from "./StarRating";


// Import all images in the folder
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

  export const Books = () => {
    const sortedBooks = [...books].sort((a, b) => {
      const dateA = new Date(a.completion_year, a.completion_month - 1, a.completion_day);
      const dateB = new Date(b.completion_year, b.completion_month - 1, b.completion_day);
      return dateB - dateA;
    });
  
    return (
      <section id="books" className="py-24 px-10 relative">
        <div className="container mx-auto max-w-10xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center hover:italic">
            Recent Reads
          </h2>
  
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            An attempt to stick to my 2026 New Year's resolution of one non-academic book a month.
          </p>
  
          <div className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory">
            {sortedBooks.map((book, key) => (
              <div
                key={key}
                className="w-40 flex-shrink-0 snap-start group"
              >
                <div className="bg-primary/20 rounded-lg overflow-hidden shadow-xs card-hover">
                  <div className="aspect-[2/3] overflow-hidden">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
  
                  <div className="p-3">
                    <p className="text-sm font-semibold leading-tight hover:italic">
                      {book.title}
                    </p>
                    <p className="text-xs text-muted-foreground mb-2">
                      by {book.author}
                    </p>
  
                    <div className="flex justify-center mt-1">
                      <StarRating rating={book.rating} />
                    </div>
  
                    <p className="text-xs text-muted-foreground mt-2">
                      Completed {book.completion_month}/{book.completion_day}/{book.completion_year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };