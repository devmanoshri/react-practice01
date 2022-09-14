import React, { useState, useEffect } from "react";
import axios from "axios";
export default function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  const [idFormButtonClick, setIdFormButtonClick] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFormButtonClick}`)
      .then((res) => setPost(res.data))
      .catch((error) => console.log(error));
  }, [idFormButtonClick]);

  const handelClick = () => {
    setIdFormButtonClick(id);
  };

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handelClick}>
        Fetch Post
      </button>
      <div>{post.title}</div>
    </div>
  );
}
