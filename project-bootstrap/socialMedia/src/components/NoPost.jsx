import React, { useContext } from "react";
import { PostListContext } from "../store/post-list-store";

function NoPost() {
  const { getData } = useContext(PostListContext);
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
