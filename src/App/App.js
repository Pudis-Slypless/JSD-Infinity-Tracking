import React, { useState } from "react";

import Navbar from "../Component/NavBar/Nav";
import Button from "../Component/buttons/button";
import Input from "../Component/Input/input";
import Post from "../Component/Posts/Post";

import "./App.css";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

let id = 1;

function App() {
  const [posts, setPosts] = useState([]);

  function addPost(title) {
    const newPost = { id, title };
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
      <Button />
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          deletePost={deletePost}
        />
      ))}
    </div>
  );
}

export default App;
