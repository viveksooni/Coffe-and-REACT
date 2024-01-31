import React, { useContext, useRef } from "react";
import { Form, redirect, useNavigate } from "react-router-dom";
import { PostListContext } from "../store/post-list-store";

function CreatePost() {
  
  const navigation = useNavigate();

  return (
    <Form method="POST">
      <div className="mb-3 post">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          name="title"
          type="text"
          className="form-control"
          id="title"
          placeholder="what's on your mind"
        />
      </div>
      <div className="mb-3 post">
        <label htmlFor="description" className="form-label">
          Caption
        </label>
        <textarea
          name="caption"
          placeholder="explain it..."
          className="form-control"
          id="description"
          rows="3"
        ></textarea>

        <div className="mb-3 post">
          <label htmlFor="hashtags" className="form-label">
            Enter Hashtags
          </label>
          <input
            name="hashtags"
            type="text"
            className="form-control"
            id="hashtags"
            placeholder="related HashTags"
          />
          <button className="btn btn-primary my-4">Submit</button>
        </div>
      </div>
    </Form>
  );
}
export async function createPostAction(data) {
  
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  console.log(postData);
  postData.hashtags = postData.hashtags.split(" ");
  //send post request to backend
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then(console.log);
  return redirect("/")
}
export default CreatePost;
