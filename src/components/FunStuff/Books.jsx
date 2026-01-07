import dreyersenglish from '../../assets/images/dreyersenglish.jpg';

const books = [
    { title: "Dreyer's English", author: "Benjamin Dreyer", image: dreyersenglish, completion_year: 2025, completion_month: 12, completion_day: 28, rating: 4.5 }
];

export const Books = () => {
    return <section id="books" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-bold text-center hover:italic">Recent Reads</h2>

            <p className="text-center text-muted-foreground-center mb-12 max-w-2xl mx-auto">
                An attempt to stick to my 2026 New Year's resolution of one non-academic book a month.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {books.map((book, key) => (
                    <div key={key} className="group bg-primary/20 outline-1 outline-primary rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={book.image} alt={book.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <div className="p-6 flex flex-col h-full">
                            <h3 className="text-xl font-semibold mb-1 hover:italic">
                                {book.title} by {book.author}
                            </h3>

                            <p className="test-muted-foreground text-sm mb-4">
                                Completed {book.completion_month}/{book.completion_day}/{book.completion_year}
                            </p>
                            <div className="flex justify-between items-center">
                                /* add stars here! */
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>;
}