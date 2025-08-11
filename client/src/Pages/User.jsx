import React from "react";
import BlogCard from "../Components/BlogCard";
const User = () => {
  return (
    <>
      <div className="userContent">
        <div className="authTop">
          <img src="" alt="" />
          <h2 className="authTitle">Tarak</h2>
          <h4 className="auth bio">
            I am Full Stack Developer. I am a solo travller and love to visit
            new places without any plan 😎 and love to blog✍️. Thank you😍 for
            visiting my Blog Site. If you like this page hit the like button❤️
            and share this🤩
          </h4>
        </div>
        <div className="authBottom">
          <h2 className="authPostH">Explore More</h2>
          <BlogCard />
        </div>
      </div>
    </>
  );
};

export default User;
