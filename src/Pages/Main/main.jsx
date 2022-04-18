import React from "react";
import { useUserRecord } from "../../hooks/useUserRecord";

import "./main.css";

import Navbar from "../../Component/NavBar/Nav";
import Input from "../../Component/Input_field/input";
import Post from "../../Component/Posts/Post";

let id = 1;

function Main(props) {
  const [posts, setPosts] = useUserRecord([]);

  function addPost({
    activity,
    distance,
    duration,
    location,
    description,
    timestamp,
  }) {
    const newPost = {
      id,
      activity,
      distance,
      duration,
      location,
      description,
      timestamp,
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
        <div className="containerAddpost">
          <Input addPost={addPost} />
        </div>
        <div className="overFlowBox">
          {posts.map((post) => (
            <Post
              key={post._id}
              id={post.id}
              activity={post.activity}
              distance={post.distance}
              duration={post.duration}
              location={post.location}
              description={post.description}
              timestamp={post.timestamp}
              deletePost={deletePost}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Main;