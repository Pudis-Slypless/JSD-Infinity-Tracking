import React, { useState } from "react";

import "./main.css";

import Navbar from "../../Component/NavBar/Nav";
// import Button from "../../Component/buttons/button";
import Input from "../../Component/Input_field/input";
import Post from "../../Component/Posts/Post";

let id = 1;

function Main(props) {
  const [posts, setPosts] = useState([]);

  function addPost({ Activity, Distance, duration, location, timeStamp }) {
    const newPost = { id, Activity, Distance, duration, location, timeStamp };
    console.log(newPost);
    setPosts([newPost, ...posts]);
    id += 1;
  }

  function deletePost(id) {
    const updatePosts = posts.filter((post) => post.id !== id);
    setPosts(updatePosts);
  }

  return (
    <div className="App">
      <Navbar />
      <Input addPost={addPost} />
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          Activity={post.Activity}
          Distance={post.Distance}
          duration={post.duration}
          location={post.location}
          timeStamp={post.timeStamp}
          deletePost={deletePost}
        />
      ))}
    </div>
  );
}
export default Main;
