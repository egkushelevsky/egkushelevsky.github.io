import { Navbar } from "../components/Navbar";
import { BlogIndex } from "../components/Blog/BlogIndex";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Navbar />

      <main className="w-full flex-1">
        <BlogIndex />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};
