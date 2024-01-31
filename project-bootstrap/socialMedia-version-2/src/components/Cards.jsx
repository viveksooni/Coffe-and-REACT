import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import NoPost from "./NoPost";
import { PostListContext } from "../store/post-list-store";
import Loading from "./Loading";

function Cards() {
  const { postList: posts, selected,loading } = useContext(PostListContext);


  return (
    (loading && <Loading></Loading>) ||
    (!loading && posts.length == 0 && <NoPost></NoPost>) ||
    (!loading && (
      <div>
        {posts.map((post) => (
          <Card post={post} key={post.title + Math.random()}></Card>
        ))}
      </div>
    ))
  );
}

export default Cards;
