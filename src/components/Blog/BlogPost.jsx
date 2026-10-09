import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { components } from "../CTF/WriteupContent";

const md = components("");

export const BlogPost = ({ post }) => {
  return (
    <article className="text-left">
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 mb-8 text-foreground/80 hover:italic"
      >
        <ArrowLeft size={16} /> All posts
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-foreground/60 mb-8">{post.date}</p>

      <ReactMarkdown remarkPlugins={[remarkGfm]} components={md}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
};