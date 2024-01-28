import React, { useContext, useId } from "react";
import { PostListContext } from "../store/post-list-store";
import { MdDelete } from "react-icons/md";
function Card({ post }) {
  const { deletePost } = useContext(PostListContext);


  return (
    <>
      <div className="card myCss">
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(post.title)}
            >
              <MdDelete />
            </span>
          </h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">caption</h6>
          <p className="card-text">{post.caption}</p>
          {post.hashTag.map((tags) => 
            <span key={tags} className="badge text-bg-info">
              {tags}
            </span>
          )}
        </div>
      </div>
    </>
  );
}
export default Card;
