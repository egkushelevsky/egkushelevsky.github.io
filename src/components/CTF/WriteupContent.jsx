import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { resolveImage } from "@/lib/writeups";

// Split markdown into sections, each starting at a Markdown heading and running
// until the next heading. Headings inside fenced code blocks are ignored so a
// `#` comment or a `# title` inside a code sample never starts a new box.
function splitSections(md) {
  const lines = md.split("\n");
  const sections = [];
  let current = [];
  let inFence = false;

  for (const line of lines) {
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence;
    const isHeading = !inFence && /^#{1,6}\s/.test(line);
    if (isHeading && current.length) {
      sections.push(current.join("\n"));
      current = [];
    }
    current.push(line);
  }
  if (current.length) sections.push(current.join("\n"));

  // Drop sections that are only whitespace.
  return sections.filter((s) => s.trim().length);
}

// The course-card box style (Courses.jsx) without the hover effect.
const SECTION_BOX =
  "bg-primary/20 p-6 outline-1 outline-primary rounded-lg shadow-xs text-left";
// Nested box for fenced code blocks.
const CODE_BOX =
  "my-4 bg-primary/30 outline-1 outline-primary rounded-lg p-4 overflow-x-auto shadow-xs";

const components = (baseDir) => ({
  h1: ({ children }) => (
    <h1 className="text-2xl md:text-3xl font-bold mb-2">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl md:text-2xl font-bold mb-2">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg font-semibold mb-2">{children}</h3>
  ),
  h4: ({ children }) => <h4 className="text-base font-semibold mb-2">{children}</h4>,
  p: ({ children }) => <p className="my-3 leading-relaxed">{children}</p>,
  ul: ({ children }) => (
    <ul className="list-disc list-inside my-3 space-y-1">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside my-3 space-y-1">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="underline hover:italic"
    >
      {children}
    </a>
  ),
  img: ({ src, alt }) => (
    <img
      src={resolveImage(baseDir, src)}
      alt={alt}
      className="my-4 max-w-full rounded-lg outline-1 outline-primary mx-auto"
    />
  ),
  table: ({ children }) => (
    <div className="my-4 overflow-x-auto">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border border-primary px-3 py-2 text-left font-semibold">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-primary px-3 py-2 align-top">{children}</td>
  ),
  pre: ({ children }) => (
    <div className={CODE_BOX}>
      <pre className="text-left text-sm">{children}</pre>
    </div>
  ),
  code: ({ node, children, ...props }) => {
    // A fenced/block code spans more than one source line (the ``` fences are on
    // their own lines); inline code starts and ends on the same line.
    const pos = node?.position;
    const isBlock = pos && pos.start.line !== pos.end.line;
    if (isBlock) {
      return (
        <code className="font-mono whitespace-pre text-foreground/90" {...props}>
          {children}
        </code>
      );
    }
    return (
      <code
        className="font-mono text-sm bg-primary/40 px-1.5 py-0.5 rounded text-foreground"
        {...props}
      >
        {children}
      </code>
    );
  },
});

export const WriteupContent = ({ writeup }) => {
  const sections = splitSections(writeup.content);
  const md = components(writeup.dir);

  return (
    <article className="flex flex-col gap-6">
      {sections.map((section, i) => (
        <div key={i} className={SECTION_BOX}>
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={md}>
            {section}
          </ReactMarkdown>
        </div>
      ))}
    </article>
  );
};
