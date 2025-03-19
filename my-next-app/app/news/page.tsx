import { FC } from "react";

export const revalidate = 5;

type NewsItem = {
  id: number;
  title: string;
};

const NewsPage: FC = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=3"
  );
  const news: NewsItem[] = await response.json();

  return (
    <>
      <h1>Latest News</h1>
      <ul>
        {news.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
};

export default NewsPage;
