import React, { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

function CreatePost() {
  const { createPost, selected } = useContext(PostListContext);
  const title = useRef("");
  const caption = useRef("");
  const hashtags = useRef("");
  return (
    selected === "createpost" && (
      <div>
        <div className="mb-3 post">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            ref={title}
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
            ref={caption}
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
            ref={hashtags}
            type="text"
            className="form-control"
            id="hashtags"
            placeholder="related HashTags"
          />
          <button
            className="btn btn-primary my-4"
            onClick={() => {
              let title1 = title.current.value;
              let caption1 = caption.current.value;
              let hashtag = hashtags.current.value;
              console.log(hashtag.split(" "));

              createPost(title1, caption1,hashtag);
              title.current.value= "";
              caption.current.value= "";
              hashtags.current.value= "";
            }}
          >
            Submit
          </button>
        </div>
      </div>
      </div>
    )
  );
}
export default CreatePost;
