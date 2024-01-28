import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import NoPost from "./NoPost";
import { PostListContext } from "../store/post-list-store";
import Loading from "./Loading";

function Cards() {
  const { postList: posts, selected, setData } = useContext(PostListContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data.posts);
        setLoading(false);
      });

    return () => {
      console.log("killed useEffect you murder");
    };
  }, []);

  return (
    (loading && <Loading></Loading>) ||
    (!loading && posts.length == 0 && <NoPost></NoPost>) ||
    (!loading && selected === "home" && (
      <div>
        {posts.map((post) => (
          <Card post={post} key={post.title + Math.random()}></Card>
        ))}
      </div>
    ))
  );
}

export default Cards;
