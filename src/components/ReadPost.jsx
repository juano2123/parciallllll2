import React, { useContext } from "react";
import { UserContext } from "../contex/UserContext";

export const ReadPost = (props) => {
  const { post } = useContext(UserContext);
  return (
    <div>
      {/* <h1>{props.post.title}</h1> 
      <p>{props.post.body}</p>*/}

      <p>{post.body}</p>
    </div>
  );
};
