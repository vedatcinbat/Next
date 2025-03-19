import { FC } from "react";

const UsersPage: FC = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        cache: 'no-cache',
    });

    const users = await response.json();

    return (
        <div>
            <h1>Users (SSR)</h1>
            <ul>
                {users.map((user: any) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default UsersPage;