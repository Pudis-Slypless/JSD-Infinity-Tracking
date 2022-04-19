import "./Post.css";

function Post({
  id,
  activity,
  distance,
  duration,
  location,
  description,
  timestamp,
  deletePost,
}) {

  return (
    <div className="Post">
      <button className="Post__delete" onClick={() => deletePost(id)}>
        x
      </button>
      <div className="postActivity">{activity}</div>
      <div className="postDistance">Distance : {distance}</div>
      <div className="postDuration">Duration : {duration}</div>
      <div className="postLocation">Location : {location}</div>
      <div className="postDescription">Description : {description}</div>
      <div className="postTimeStamp">Date : {timestamp?.toString()}</div>
    </div>
  );
}

export default Post;
