import { Navbar } from "../components/Navbar";
import { CTF as CTFSection } from "../components/CTF/CTF";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export const CTF = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Navbar />

      <main className="w-full flex-1">
        <CTFSection />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};
