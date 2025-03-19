// app/client-side-react-query/page.tsx
"use client";

import { FC } from "react";
import { useQuery } from "@tanstack/react-query";

type User = {
  id: number;
  name: string;
};

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};

const ClientSideReactQueryPage: FC = () => {
  const { data, error, isLoading } = useQuery({ queryKey: ["users"], queryFn: fetchUsers });

  if (error) return <div>Error loading users.</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Client-Side Data Fetching with React Query</h1>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClientSideReactQueryPage;
