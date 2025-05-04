import Link from "next/link";

const blogsData = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    author: "Jane Doe",
    date: "2025-05-01",
    excerpt: "A quick guide to kickstart your first project with Next.js.",
    content:
      "Next.js is a React framework for production. It provides features like file-based routing, server-side rendering, and API routes. This blog will walk you through the basics of setting up a project...",
  },
  {
    id: 2,
    title: "Understanding Static Site Generation (SSG)",
    slug: "understanding-ssg",
    author: "John Smith",
    date: "2025-04-28",
    excerpt:
      "Learn how Static Site Generation works in Next.js and when to use it.",
    content:
      "Static Site Generation (SSG) allows you to pre-render pages at build time. This approach offers excellent performance and SEO benefits. In this post, we’ll explore how to use SSG in your Next.js project...",
  },
  {
    id: 3,
    title: "Deploying Next.js Apps on Vercel",
    slug: "deploying-on-vercel",
    author: "Emily Davis",
    date: "2025-04-25",
    excerpt:
      "Learn how to deploy your Next.js application with ease using Vercel.",
    content:
      "Vercel is the company behind Next.js and offers a seamless deployment experience. This guide will show you how to connect your GitHub repo and deploy in a few clicks...",
  },
];

const blogs = () => {
  return (
    <div>
      <h1>All Blogs</h1>
      <div>
        {blogsData.map((blog) => (
          <div key={blog.id} className="border py-2 my-2">
            <h1>{blog.title}</h1>
            <p>
              <span className="text-blue-500">Author:</span> {blog.author}
            </p>
            <p>
              <span className="text-blue-500">Date:</span> {blog.date}
            </p>
            <p>
              <span className="text-blue-500">Excerpt:</span> {blog.excerpt}
            </p>

            <button>
              <Link
                href={`blogs/${blog.id}`}
                className="bg-emerald-100 text-black"
              >
                View Details
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default blogs;
