import { useState, useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { sortedBooks } from "./booksWithImages";
import { BookCard } from "./BookCard";
import { BookModal } from "./BookModal";

// Card geometry, must stay in sync with the classes below:
// w-40 = 160px card, gap-8 = 32px gutter.
const CARD_WIDTH = 160;
const GAP = 32;

export const Books = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [cardsThatFit, setCardsThatFit] = useState(1);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const measure = () => {
      const width = containerRef.current?.clientWidth ?? 0;
      const fit = Math.max(1, Math.floor((width + GAP) / (CARD_WIDTH + GAP)));
      setCardsThatFit(fit);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Leave the last visible slot for the "Library" link card.
  const booksToShow = sortedBooks.slice(0, Math.max(0, cardsThatFit - 1));

  return (
    <section id="home" className="py-24 px-10 relative mt-[30px]">
      <div className="min-h-screen flex flex-col items-center w-full overflow-x-hidden">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center hover:italic">
          Recent Reads
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          An attempt to stick to my 2026 New Year's resolution of one non-academic book a month.
        </p>

        <div className="relative w-full">
          <div
            ref={containerRef}
            className="flex gap-8 pb-6 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
          >
            {booksToShow.map((book, key) => (
              <BookCard
                key={key}
                book={book}
                onClick={() => setSelectedBook(book)}
              />
            ))}

            <Link
              to="/funstuff/library"
              className="w-40 flex-shrink-0 group"
            >
              <div className="bg-primary/20 rounded-lg overflow-hidden shadow-xs card-hover flex flex-col items-center justify-center h-full p-3 text-center">
                <ArrowRight className="mb-3 transition-transform duration-300 group-hover:translate-x-1" />
                <p className="text-sm font-semibold leading-tight group-hover:italic">
                  More
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {sortedBooks.length} total books
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
    </section>
  );
};
