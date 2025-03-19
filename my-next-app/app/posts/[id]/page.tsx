"use client"

import { FC } from "react";
import { useParams } from "next/navigation"; 

const PostPage: FC = () => {
    const { id } = useParams() as { id: string };

    return (
        <>
            <h1>Post: {id}</h1>
            <p>This page is dynamically rendered based on the post ID</p>
        </>
    )
}

export default PostPage;