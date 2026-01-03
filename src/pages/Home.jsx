import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/Home/HeroSection";
import { About } from "../components/Home/About";
import { Courses } from "../components/Home/Courses";
import { Projects } from "../components/Home/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export const Home = () => {
    return (
        <div
        className= "min-h-screen flex flex-col items-center ">

        <Navbar />

        <main>
            <HeroSection />
            <About />
            <Projects />
            <Courses />
            <Contact />
            <Footer />
        </main>
        </div>
    );
};