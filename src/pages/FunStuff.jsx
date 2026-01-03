import { Navbar } from "../components/Navbar";
import { Books } from "../components/FunStuff/Books";

export const FunStuff = () => {
    return (
        <div
        className= "min-h-screen flex flex-col items-center ">

        <Navbar />

        <main>
            <Books />
        </main>
        </div>
    );
};