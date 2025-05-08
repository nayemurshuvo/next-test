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
  {
    id: 4,
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    author: "Jane Doe",
    date: "2025-05-01",
    excerpt: "A quick guide to kickstart your first project with Next.js.",
    content:
      "Next.js is a React framework for production. It provides features like file-based routing, server-side rendering, and API routes. This blog will walk you through the basics of setting up a project...",
  },
  {
    id: 5,
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
    id: 6,
    title: "Deploying Next.js Apps on Vercel",
    slug: "deploying-on-vercel",
    author: "Emily Davis",
    date: "2025-04-25",
    excerpt:
      "Learn how to deploy your Next.js application with ease using Vercel.",
    content:
      "Vercel is the company behind Next.js and offers a seamless deployment experience. This guide will show you how to connect your GitHub repo and deploy in a few clicks...",
  },
  {
    id: 7,
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    author: "Jane Doe",
    date: "2025-05-01",
    excerpt: "A quick guide to kickstart your first project with Next.js.",
    content:
      "Next.js is a React framework for production. It provides features like file-based routing, server-side rendering, and API routes. This blog will walk you through the basics of setting up a project...",
  },
  {
    id: 8,
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
    id: 9,
    title: "Deploying Next.js Apps on Vercel",
    slug: "deploying-on-vercel",
    author: "Emily Davis",
    date: "2025-04-25",
    excerpt:
      "Learn how to deploy your Next.js application with ease using Vercel.",
    content:
      "Vercel is the company behind Next.js and offers a seamless deployment experience. This guide will show you how to connect your GitHub repo and deploy in a few clicks...",
  },
  {
    id: 10,
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    author: "Jane Doe",
    date: "2025-05-01",
    excerpt: "A quick guide to kickstart your first project with Next.js.",
    content:
      "Next.js is a React framework for production. It provides features like file-based routing, server-side rendering, and API routes. This blog will walk you through the basics of setting up a project...",
  },
  {
    id: 11,
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
    id: 12,
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
      <h1 className="font-bold mb-6 text-4xl">All Blogs</h1>
      <div className="grid grid-cols-3 gap-6 min-h-screen shadow-2xl p-4 rounded-2xl shadow-amber-300">
        {blogsData.map((blog) => (
          <div
            key={blog.id}
            className="card bg-base-100 image-full w-96 shadow-sm"
          >
            <figure>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D"
                alt="History"
              />
            </figure>
            <div className="card-body" key={blog.id}>
              <h2 className="card-title mx-auto my-2">✔️{blog.title}</h2>
              <p>📅{blog.date}</p>
              <p>👤{blog.author}</p>
              <p className="bg-gray-200 rounded-2xl text-black p-2 px-2">
                {blog.excerpt}
              </p>
              <div className="card-actions justify-center mt-4">
                <button className="btn btn-accent">
                  <Link href={`blogs/${blog.id}`}>View Details</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default blogs;
