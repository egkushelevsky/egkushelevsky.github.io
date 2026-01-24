import { Navbar } from "../components/Navbar";
import { Books } from "../components/FunStuff/Books";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export const FunStuff = () => {
    return (
        <div
        className= "min-h-screen flex flex-col items-center ">

        <Navbar />

        <main>
            <Books />
            <Contact />
            <Footer />
        </main>
        </div>
    );
};