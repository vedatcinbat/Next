import { FC } from "react";

const BlogPage: FC = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const posts = await response.json();

  return (
    <>
      <div>Blog (SSG)</div>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default BlogPage;
