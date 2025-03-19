// app/blog/[id]/page.tsx
import { FC } from "react";

// If you want to revalidate pages, specify a revalidate interval in seconds.
// export const revalidate = 60; // re-generate this page every 60 seconds (ISR).

type Post = {
  id: number;
  title: string;
  body: string;
};

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

// 1. The main page component (server component)
const BlogPostPage: FC<BlogPostPageProps> = async ({ params }) => {
  const { id } = await params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post: Post = await response.json();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default BlogPostPage;

// 2. generateStaticParams - Tells Next.js which [id] routes to build at build time.
export async function generateStaticParams() {
  // In real scenarios, you might fetch a list of valid IDs from your database
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const posts: Post[] = await response.json();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
