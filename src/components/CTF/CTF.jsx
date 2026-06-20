import { useState } from "react";
import { useParams } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sidebar } from "./Sidebar";
import { WriteupContent } from "./WriteupContent";
import { writeupsById } from "@/lib/writeups";

export const CTF = () => {
  const { ctf, category, challenge } = useParams();
  const activeId = ctf ? [ctf, category, challenge].join("/") : null;
  const writeup = activeId ? writeupsById[activeId] : null;
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <section id="top" className="w-full pt-28 pb-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Mobile sidebar toggle */}
          <button
            onClick={() => setMobileOpen((p) => !p)}
            className={cn(
              "md:hidden flex items-center gap-2 self-start px-5 py-3 rounded-full transition-colors duration-300 hover:italic",
              mobileOpen
                ? "bg-primary/20 text-primary-foreground hover:border hover:border-1 hover:border-primary"
                : "bg-secondary/10 text-foreground border border-1 border-primary"
            )}
          >
            All Writeups
          </button>

          {/* Sidebar */}
          <aside
            className={cn(
              "w-full md:w-72 md:shrink-0 md:sticky md:top-28 md:max-h-[calc(100vh-8rem)] md:overflow-y-auto",
              mobileOpen ? "block" : "hidden md:block"
            )}
          >
            <Sidebar activeId={activeId} onNavigate={() => setMobileOpen(false)} />
          </aside>

          {/* Content */}
          <div className="flex-1 min-w-0 w-full">
            {writeup ? (
              <WriteupContent writeup={writeup} />
            ) : (
              <div className="text-center text-foreground/80 py-24">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 hover:italic">
                  CTF Writeups
                </h1>
                <p>Select a challenge from the index.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
