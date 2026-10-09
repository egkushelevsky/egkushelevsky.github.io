import { Link, useParams } from "react-router-dom";
import { BlogPost } from "./BlogPost";
import { posts, postsBySlug } from "@/lib/posts";

export const BlogIndex = () => {
  const { slug } = useParams();
  const post = slug ? postsBySlug[slug] : null;

  return (
    <section id="top" className="w-full pt-28 pb-24 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Content */}
        {post ? (
          <BlogPost post={post} />
        ) : (
          <div className="text-foreground/80">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center hover:italic">
              Index of Blog Posts
            </h1>
            <ul className="flex flex-col">
              {posts.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/blog/${p.slug}`}
                    className="flex items-baseline gap-3 py-3 text-left hover:italic"
                  >
                    <span className="text-lg text-foreground font-semibold">{p.title}</span>
                    {/* Dotted leader joining the title to its date */}
                    <span
                      aria-hidden="true"
                      className="flex-1 min-w-4 border-b-2 border-dotted border-foreground"
                    />
                    <span className="shrink-0 text-sm text-foreground">
                      {p.date}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};
