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

/* Bundled URLs for every image/audio asset inside the writeups tree, so relative
   references resolve to a real built asset */
const assetFiles = import.meta.glob(
  "../writeups/**/*.{png,jpg,jpeg,gif,webp,avif,svg,wav,mp3,ogg,m4a,flac}",
  { query: "?url", import: "default", eager: true }
);

// Map of normalized asset paths to built URLs
const assetsByPath = {};
for (const [key, url] of Object.entries(assetFiles)) {
  assetsByPath[key.slice(PREFIX.length)] = url;
}

/* Given a writeup's dir and a relative src/href, return a usable URL. Absolute
   URLs pass through unchanged; relative ones are mapped to the bundled asset */
export function resolveAsset(baseDir, src) {
  if (!src) return src;
  if (/^(https?:)?\/\//.test(src) || src.startsWith("data:")) return src;
  const resolved = resolveRelative(baseDir, src.replace(/^\.?\//, ""));
  return assetsByPath[resolved] ?? src;
}

export const resolveImage = resolveAsset;

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

export { prettify };