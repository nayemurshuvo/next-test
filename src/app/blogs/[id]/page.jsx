import blogs from "../page";

const singleBlog = ({ params }) => {
  console.log(params.id);
  const { id, title, content } = blogsData.find((blog) => blog.id == params.id);
  return (
    <div>
      <h1>This is Blog Details</h1>
      <h2>Id: {id}</h2>
      <h3>Title: {title}</h3>
      <p>Content: {content}</p>
    </div>
  );
};

export default singleBlog;

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
