"use client";

import { FC, useEffect } from "react";
import useSWR from "swr";

type User = {
  id: number;
  name: string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ClientSideSWRPage: FC = () => {

  const { data, error, isLoading } = useSWR<User[]>(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error loading data</div>;

  return (
    <div>
      <h1>Client-Side Data Fetching with SWR</h1>
      <ul>
        {data?.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClientSideSWRPage;
