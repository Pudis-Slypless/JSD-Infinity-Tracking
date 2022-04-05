import React, { useState, useEffect } from "react";
import axios from 'axios';

import "./main.css";

import Navbar from "../../Component/NavBar/Nav";
import Input from "../../Component/Input_field/input";
import Post from "../../Component/Posts/Post";

let id = 1;

const client = Axios.create({ baseURL: 'http://Localhost:4000',});

useEffect(() => {
  async(() => {
    const response = await client.get('./user/me/records');
    console.log(response.status);
    console.log(response.data);

    if (response.status < 300) {
      setPosts(response.data);
    } else {
      alert('Can not to connect')
    }

  })();
  
    const intervalId = setInterval(() => {}, 5000);
  
}, []);



function Main(props) {
  const [posts, setPosts] = useState([]);

  function addPost({
    Activity,
    Distance,
    Duration,
    Location,
    Description,
    TimeStamp,
  }) {
    const newPost = {
      id,
      Activity,
      Distance,
      Duration,
      Location,
      Description,
      TimeStamp,
    };
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
      <div className="container">
        <Input addPost={addPost} />
        <div>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              Activity={post.Activity}
              Distance={post.Distance}
              Duration={post.Duration}
              Location={post.Location}
              Description={post.Description}
              TimeStamp={post.TimeStamp}
              deletePost={deletePost}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Main;