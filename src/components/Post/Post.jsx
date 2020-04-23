import React from "react";
import "./Post.css";
const Post = ({ post: { title, author, img, body }, i }) => {
  return (
    <div className="post-container">
      <h1 className="heading">{title}</h1>
      <img className="image" src={img} alt="post" />
      <p>{body}</p>
      <div className="info">
        <h5>Number:{i + 1} </h5>
        <h4>Written By: {author}</h4>
      </div>
    </div>
  );
};
export default Post;
