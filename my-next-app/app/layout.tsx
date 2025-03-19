import Link from "next/link";
import { FC, ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const RootLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <html>
      <head>
        <title>My Next.js App</title>
      </head>
      <body>
        <nav>
          <Link href="/">Home</Link> | <Link href="/about">About</Link> |{" "}
          <Link href="/posts/123">Post 123</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/dashboard/users">Dashboard-Users</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;