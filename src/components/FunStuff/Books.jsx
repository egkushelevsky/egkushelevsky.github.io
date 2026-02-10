import booksData from '../../data/books.json';
import { StarRating } from "./StarRating";
import { useState } from "react";
import { X } from "lucide-react";

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
    const [selectedBook, setSelectedBook] = useState(null);

    const sortedBooks = [...books].sort((a, b) => {
      const dateA = new Date(a.completion_year, a.completion_month - 1, a.completion_day);
      const dateB = new Date(b.completion_year, b.completion_month - 1, b.completion_day);
      return dateB - dateA;
    });
  
    return (
      <section id="books" className="py-24 px-10 relative mt-[30px]">
        <div className="min-h-screen flex flex-col items-center w-full overflow-x-hidden">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center hover:italic">
            Recent Reads
          </h2>
  
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            An attempt to stick to my 2026 New Year's resolution of one non-academic book a month.
          </p>
  
          <div className="relative">
          <div className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            {sortedBooks.map((book, key) => (
              <div
                key={key}
                onClick={() => setSelectedBook(book)}
                className="w-40 flex-shrink-0 snap-start group cursor-pointer"
              >
                <div className="bg-primary/20 rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full">
                  <div className="aspect-[2/3] overflow-hidden">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
  
                  <div className="p-3 flex flex-col flex-grow">
                    <p className="text-sm font-semibold leading-tight hover:italic">
                      {book.title}
                    </p>
                    <p className="text-xs text-muted-foreground mb-2">
                      {book.author !== ""
                      ? `by ${book.author}`
                      : `ed. ${book.editor}`}
                    </p>
                    
                    <div className="mt-auto">
                      <div className="flex justify-center mt-1">
                        <StarRating rating={book.rating} />
                      </div>
    
                      <p className="text-xs text-muted-foreground mt-2">
                        Completed {book.completion_month}/{book.completion_day}/{book.completion_year}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>

        {selectedBook && (
          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            onClick={() => setSelectedBook(null)}
          >
            <div
              className="bg-background max-w-2xl w-full mx-4 rounded-xl overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedBook(null)}
                className="absolute top-4 right-4"
              >
                <X />
              </button>

              <div className="flex flex-col md:flex-row h-[60vh]">
                <div className='h-full bg-primary/10 flex items-center justify-center md:w-auto'>
                  <img
                    src={selectedBook.image}
                    alt={selectedBook.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className='flex-1 px-10 py-12 overflow-y-auto'>
                  <div>
                    <h3 className="text-xl font-bold text-center mb-1">
                      {selectedBook.title}
                    </h3>
                    <p className="text-left text-muted-foreground mb-1">
                    {selectedBook.author !== ""
                      ? `Author: ${selectedBook.author}`
                      : ''}
                    </p>

                    <p className="text-left text-muted-foreground mb-1">
                    {selectedBook.editor !== ""
                      ? `Editor: ${selectedBook.editor}`
                      : ''}
                    </p>

                    <p className="text-left text-muted-foreground mb-1">
                    {selectedBook.translator !== ""
                      ? `Author: ${selectedBook.translator}`
                      : ''}
                    </p>

                    <p className="text-left text-muted-foreground mb-1">
                      Published: {selectedBook.published}
                    </p>

                    <p className="text-left text-muted-foreground mb-1">
                      Completed: {selectedBook.completion_month}/{selectedBook.completion_day}/{selectedBook.completion_year}
                    </p>

                    <div className='text-left flex mb-1'>
                      Genre: {selectedBook.genre}
                    </div>

                    <div className="text-left flex mb-1">
                      Rating:   <div className='px-2 py-0.5'><StarRating rating={selectedBook.rating} /></div>
                    </div>

                    <p className="text-left leading-relaxed">
                      Notes: {selectedBook.description}
                    </p>
                  </div>
                </div>

              </div>
            </div>
            </div>
        )}
      </section>
    );
  };