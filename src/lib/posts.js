/* Loads every blog post from `src/posts` at build time via Vite's import.meta.glob.
   Posts are flat Markdown files (src/posts/<slug>.md) that open with a
   frontmatter block holding `title` and `date` (mm/dd/yyyy).
*/

const PREFIX = "../posts/";

const rawFiles = import.meta.glob("../posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

// Split the leading block into key-value pairs and the body
function parsePost(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return { meta: {}, content: raw };
  const meta = {};
  for (const line of match[1].split(/\r?\n/)) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    meta[line.slice(0, i).trim()] = line
      .slice(i + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
  }
  return { meta, content: raw.slice(match[0].length) };
}

// mm/dd/yyyy -> timestamp, for sorting
const toTime = (date) => {
  const [m, d, y] = (date ?? "").split("/").map(Number);
  return y ? new Date(y, m - 1, d).getTime() : 0;
};

// Flat list of all posts, newest first
export const posts = Object.entries(rawFiles)
  .map(([key, raw]) => {
    const slug = key.slice(PREFIX.length).replace(/\.md$/, "");
    const { meta, content } = parsePost(raw);
    return { slug, title: meta.title ?? slug, date: meta.date ?? "", content };
  })
  .sort((a, b) => toTime(b.date) - toTime(a.date));

export const postsBySlug = Object.fromEntries(posts.map((p) => [p.slug, p]));