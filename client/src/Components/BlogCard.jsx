import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BlogCard = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://my-blog-backend-btuh.onrender.com/get")
      .then((result) => setPosts(result.data))
      .catch((err) => console.log(err));
  }, []);
  const handlefullPost = (postId) => {
    navigate(`fullView/${postId}`);
  };
  return (
    <>
      <div className="blog">
        {posts.length === 0 ? (
          <p>No Posts</p>
        ) : (
          posts.map((post) => (
            <div
              className="blogCard"
              key={post._id}
              onClick={() => handlefullPost(post._id)}
            >
              <img
                src={
                  post.image.startsWith("data:")
                    ? post.image
                    : `data:image/png;base64,${post.image.split(",")[0]}`
                }
                alt={post.title}
                className="blogImage"
              />
              <h2 className="blogTitle">{post.title}</h2>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default BlogCard;
