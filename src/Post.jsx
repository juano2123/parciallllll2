import React, { useState, useEffect } from "react";
import { ReadPost } from "./components/ReadPost";

export const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  console.log(posts);
  return (
    <div>
      {posts.map((post, index) => {
        return <ReadPost key={index} post={post} />;
      })}
    </div>
  );
};
