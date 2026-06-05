import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { writeupTree, prettify } from "@/lib/writeups";

export const Sidebar = ({ activeId, onNavigate }) => {
  // Expand the CTF category containing the active writeup by default
  const [expanded, setExpanded] = useState(() => {
    const init = {};
    if (activeId) {
      const [ctf, category] = activeId.split("/");
      init[ctf] = true;
      init[`${ctf}/${category}`] = true;
    }
    return init;
  });

  const toggle = (key) =>
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

  const Caret = ({ open }) =>
    open ? <ChevronDown size={16} /> : <ChevronRight size={16} />;

  return (
    <nav className="text-left text-sm">
      <ul className="space-y-1">
        {Object.entries(writeupTree).map(([ctf, categories]) => (
          <li key={ctf}>
            <button
              onClick={() => toggle(ctf)}
              className="w-full flex items-center gap-1 px-2 py-1 rounded hover:bg-primary/20 font-semibold"
            >
              <Caret open={!!expanded[ctf]} />
              <span className="truncate">{prettify(ctf)}</span>
            </button>

            {expanded[ctf] && (
              <ul className="ml-4 mt-1 space-y-1 border-l border-primary/60 pl-2">
                {Object.entries(categories).map(([category, items]) => {
                  const catKey = `${ctf}/${category}`;
                  return (
                    <li key={catKey}>
                      <button
                        onClick={() => toggle(catKey)}
                        className="w-full flex items-center gap-1 px-2 py-1 rounded hover:bg-primary/20 tracking-wide"
                      >
                        <Caret open={!!expanded[catKey]} />
                        <span className="truncate">{category}</span>
                      </button>

                      {expanded[catKey] && (
                        <ul className="ml-4 mt-1 space-y-1">
                          {items.map((w) => (
                            <li key={w.id}>
                              <Link
                                to={`/ctf/${w.id}`}
                                onClick={onNavigate}
                                className={cn(
                                  "block px-2 py-1 rounded hover:bg-primary/20 hover:italic truncate",
                                  activeId === w.id && "bg-primary/30"
                                )}
                              >
                                {w.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
