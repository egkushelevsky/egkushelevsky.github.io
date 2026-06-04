import { StarRating } from "./StarRating";
import { X } from "lucide-react";

export const BookModal = ({ book, onClose }) => {
  if (!book) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-background max-w-2xl w-full mx-4 rounded-xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4"
        >
          <X />
        </button>

        <div className="flex flex-col md:flex-row h-[60vh]">
          <div className='h-full bg-primary/10 flex items-center justify-center md:w-auto'>
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-full object-contain"
            />
          </div>

          <div className='flex-1 px-10 py-12 overflow-y-auto'>
            <div>
              <h3 className="text-xl font-bold text-center mb-1">
                {book.title}
              </h3>
              <p className="text-left text-muted-foreground mb-1">
                {book.author !== ""
                  ? `Author: ${book.author}`
                  : ''}
              </p>

              <p className="text-left text-muted-foreground mb-1">
                {book.editor !== ""
                  ? `Editor: ${book.editor}`
                  : ''}
              </p>

              <p className="text-left text-muted-foreground mb-1">
                {book.translator !== ""
                  ? `Translator: ${book.translator}`
                  : ''}
              </p>

              <p className="text-left text-muted-foreground mb-1">
                Published: {book.published}
              </p>

              <p className="text-left text-muted-foreground mb-1">
                Completed: {book.completion_month}/{book.completion_day}/{book.completion_year}
              </p>

              <div className='text-left flex mb-1'>
                Genre: {book.genre}
              </div>

              <div className="text-left flex mb-1">
                Rating:   <div className='px-2 py-0.5'><StarRating rating={book.rating} /></div>
              </div>

              <p className="text-left leading-relaxed">
                Notes: {book.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
