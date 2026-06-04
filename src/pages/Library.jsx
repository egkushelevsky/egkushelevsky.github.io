import { Navbar } from "../components/Navbar";
import { Library as LibrarySection } from "../components/FunStuff/Library";
import { Footer } from "../components/Footer";
import { Contact } from "../components/Contact";

export const Library = () => {
    return (
        <div
        className= "min-h-screen flex flex-col items-center ">

        <Navbar />

        <main>
            <LibrarySection />
            <Contact />
            <Footer />
        </main>
        </div>
    );
};
