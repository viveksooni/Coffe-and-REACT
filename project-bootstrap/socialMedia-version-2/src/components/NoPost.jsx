import React, { useContext } from "react";
import { PostListContext } from "../store/post-list-store";

function NoPost() {

  const { setData } = useContext(PostListContext);
   const getData = () => {
     fetch("https://dummyjson.com/posts")
       .then((res) => res.json())
       .then((data) => {
        console.log(data);
         setData(data.posts);
       });
   };
  return (
    <>
      <h1>No Post yet, do something else....</h1>
      <button className="btn btn-primary" onClick={getData}>
        {" "}
        Get Data from Server{" "}
      </button>
    </>
  );
}

export default NoPost;
