import { useState } from "react";
import { BookCard } from "./BookCard";
import { BookModal } from "./BookModal";
import { sortedBooks } from "./booksWithImages";

export const Library = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <section id="top" className="py-24 px-10 relative mt-[30px]">
      <div className="min-h-screen flex flex-col items-center w-full max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center hover:italic">
          Library
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {sortedBooks.map((book, key) => (
            <BookCard
              key={key}
              book={book}
              onClick={() => setSelectedBook(book)}
            />
          ))}
        </div>
      </div>

      <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
    </section>
  );
};
