import { createContext, useReducer,useState,useEffect } from "react";

export const PostListContext = createContext({
  posts: [],
  setData: () => {},
  createPost: () => {},
  deletePost: () => {},
  selected: "",
  changeSelect: () => {},
  loading: false
});

function reducerFun(currPost, action) {
  if (action.type === "DEL_POST") {
    currPost = currPost.filter((post) => action.payload.title != post.title);
  } else if (action.type === "ADD_POST") {
    let title = action.payload.title;
    let caption = action.payload.caption;
    let hashTag = action.payload.hashtag.split(" ");
    currPost = [{ title, caption, hashTag }, ...currPost];
  } else if (action.type === "bulk_add") {
    let posts = action.payload.posts;
    for (let i = 0; i < posts.length; i++) {
      let curr = posts[i];
      currPost = [
        { title: curr.title, caption: curr.body, hashTag: curr.tags },
        ...currPost,
      ];
    }
  }
  return currPost;
}

function selectFun(currSelect, action) {
  currSelect = action;
  return currSelect;
}

function PostContextProvider({ children }) {
  const [postList, dispatchPostList] = useReducer(reducerFun, []);
  const [selected, dispatchSelected] = useReducer(selectFun, "home");

  const changeSelect = (option) => {
    dispatchSelected(option);
  };
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

  const setData = (posts) => {
    dispatchPostList({
      type: "bulk_add",
      payload: {
        posts,
      },
    });
  };

  const createPost = (title, caption, hashtag) => {
    let newPost = {
      type: "ADD_POST",
      payload: {
        title,
        caption,
        hashtag,
      },
    };
    dispatchPostList(newPost);
  };

  const deletePost = (title) => {
    let posts = {
      type: "DEL_POST",
      payload: {
        title,
      },
    };
    dispatchPostList(posts);
  };

  return (
    <PostListContext.Provider
      value={{
        postList,
        createPost,
        deletePost,
        setData,
        changeSelect,
        selected,
        loading,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
}

export default PostContextProvider;
