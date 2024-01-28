import React, { useContext } from "react";
import Card from "./Card";
import NoPost from "./NoPost"
import { PostListContext } from "../store/post-list-store";

function Cards() {
  const { postList: posts, selected } = useContext(PostListContext);
  return (
    posts.length==0 && <NoPost></NoPost> ||
    selected === "home" && (
      <div>
        {posts.map((post) => (
          <Card post={post} key={post.title}></Card>
        ))}
      </div>
    )
  );
}

export default Cards;
