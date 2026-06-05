/* Loads every CTF writeup (and its images) from the `src/writeups` git submodule
   at build time via Vite's import.meta.glob, and exposes helpers for the /ctf page.
   Writeups are organized in ctf repo as: <ctf>/<category>/<challenge>/<name>_writeup.md
   (some challenges use a plain `writeup.md` instead).
*/

const PREFIX = "../writeups/";

// Raw markdown text for each writeup
const rawFiles = import.meta.glob("../writeups/**/*writeup.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

/* Bundled URLs for every image inside the writeups tree, so relative image
   references resolve to a real built asset */
const imageFiles = import.meta.glob(
  "../writeups/**/*.{png,jpg,jpeg,gif,webp,avif,svg}",
  { query: "?url", import: "default", eager: true }
);

// Map of normalized image path ("ctf/category/challenge/img.png") -> built URL
const imagesByPath = {};
for (const [key, url] of Object.entries(imageFiles)) {
  imagesByPath[key.slice(PREFIX.length)] = url;
}

const prettify = (slug) =>
  slug
    .replace(/\s+/g, " ")
    .trim();

// Flat, sorted list of all writeups
export const writeups = Object.entries(rawFiles)
  .map(([key, content]) => {
    const path = key.slice(PREFIX.length); // ctf/category/challenge/writeup.md
    const parts = path.split("/");
    const [ctf, category, challenge] = parts;
    const dir = parts.slice(0, 3).join("/"); // ctf/category/challenge
    return {
      id: dir,
      dir,
      ctf,
      category,
      challenge,
      title: prettify(challenge),
      content,
    };
  })
  .sort(
    (a, b) =>
      a.ctf.localeCompare(b.ctf) ||
      a.category.localeCompare(b.category) ||
      a.challenge.localeCompare(b.challenge)
  );

export const writeupsById = Object.fromEntries(writeups.map((w) => [w.id, w]));

// Nested tree for the sidebar
export const writeupTree = writeups.reduce((tree, w) => {
  (tree[w.ctf] ??= {});
  (tree[w.ctf][w.category] ??= []).push(w);
  return tree;
}, {});

// Resolve a relative path against a writeup's directory.
function resolveRelative(baseDir, rel) {
  const stack = baseDir.split("/");
  for (const part of rel.split("/")) {
    if (part === "" || part === ".") continue;
    if (part === "..") stack.pop();
    else stack.push(part);
  }
  return stack.join("/");
}

/* Given a writeup's dir and an <img src>, return a usable URL. Absolute URLs
   pass through unchanged; relative ones are mapped to the bundled asset */
export function resolveImage(baseDir, src) {
  if (!src) return src;
  if (/^(https?:)?\/\//.test(src) || src.startsWith("data:")) return src;
  const resolved = resolveRelative(baseDir, src.replace(/^\.?\//, ""));
  return imagesByPath[resolved] ?? src;
}

export { prettify };