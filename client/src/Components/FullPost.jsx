import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FullPost = () => {
  const [compPost, setCompPost] = useState(null); // Use null initially
  const { postId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3006/get/${postId}`)
      .then((result) => setCompPost(result.data))
      .catch((err) => console.log(err));
  }, [postId]);

  if (!compPost) {
    return <p>Loading...</p>;
  }

  return (
    <div className="full-post-container">
      <img
        src={
          compPost.image.startsWith("data:")
            ? compPost.image
            : `data:image/png;base64,${compPost.image.split(",")[0]}`
        }
        alt={compPost.title}
        className="post-image"
      />
      <h2 className="post-title">{compPost.title}</h2>
      <h5 className="post-content">{compPost.content}</h5>
    </div>
  );
};

export default FullPost;
