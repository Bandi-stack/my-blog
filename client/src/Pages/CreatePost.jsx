import React, { useState } from "react";

const CreatePost = () => {
  const [image, setImage] = useState([]);
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);

  const handleAdd = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      setImage(Array.from(files));
    } else if (name === "content") {
      setContent(value);
    } else if (name === "title") {
      setTitle(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (image.length === 0) {
      alert("please add the images ");
      return;
    } else if (content === "" || title === "") {
      alert("please write the content");
      return;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    Array.from(image).forEach((img) => {
      formData.append("image", img);
    });
    try {
      const response = await fetch(
        "https://my-blog-backend-btuh.onrender.com/add",
        {
          method: "POST",
          body: formData, // Send as FormData, not JSON
        }
      );
      if (!response.ok) {
        throw new Error("Failed to add the post.");
      }

      alert("Post added successfully!");
      setImage([]);
      setTitle("");
      setContent("");
    } catch (err) {
      console.error("Error:", err);
      alert("An error occurred while adding the post.");
    }
  };
  return (
    <>
      <div className="postCreate">
        <h2>New Post</h2>
        <form onSubmit={handleSubmit}>
          <label className="postImage">
            Image:{" "}
            <input
              type="file"
              name="images"
              accept="image/*"
              multiple
              onChange={handleAdd}
            />
          </label>
          <label className="postHead">
            Titile:
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleAdd}
            />
          </label>
          <textarea
            name="content"
            value={content}
            onChange={handleAdd}
            placeholder="Write the content here"
            className="postContent"
          ></textarea>
          <button className="submitButton">Add the post</button>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
