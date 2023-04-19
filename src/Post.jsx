import React, { useState, useEffect, useContext } from "react";
import { ReadPost } from "./components/ReadPost";
import { UserContext } from "./contex/UserContext";
import "./style/Post.css";
export const Post = () => {
  const [posts, setPosts] = useState([]);
  const { SetPost } = useContext(UserContext);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        SetPost(data);
      });
  }, [SetPost]);

  console.log(posts);
  return (
    <div>
      {posts.map((post, index) => {
        return <ReadPost key={index} post={post} />;
      })}
    </div>
  );
};
