import React, { useState } from "react";
import { useUserRecord } from "../../hooks/useUserRecord";

import "./main.css";

import Navbar from "../../Component/NavBar/Nav";
import Input from "../../Component/Input_field/input";
import Post from "../../Component/Posts/Post";
import { client } from "../../api/API";

let id = 1;

function Main(props) {
  const [posts, setPosts] = useUserRecord([]);
  const [valueRecord, setValueRecord] = useState({
    id: "",
    distance: "",
    duration: "",
    description: "",
    location: "",
    activity: "",
  });

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

  function handleUpdateRecord(value) {
    setValueRecord({
      id: value.id,
      distance: value.distance,
      duration: value.duration,
      description: value.description,
      location: value.location,
      activity: value.activity,
      timeStamp: value.timestamp,
    });
  }

  async function deletePost(id) {
    await client.delete(`/users/me/records/${id}`);
    window.location.reload();
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="containerAddpost">
          <Input addPost={addPost} valueRecord={valueRecord} />
        </div>
        <div className="overFlowBox">
          {posts.map((post) => (
            <Post
              key={post._id}
              id={post._id}
              activity={post.activity}
              distance={post.distance}
              duration={post.duration}
              location={post.location}
              description={post.description}
              timestamp={new Date(post.timestamp).toLocaleDateString()}
              handleUpdateRecord={handleUpdateRecord}
              deletePost={deletePost}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Main;
