import { StarRating } from "./StarRating";

export const BookCard = ({ book, onClick }) => (
  <div
    onClick={onClick}
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
);
