import "./Post.css";

function Post({
  id,
  Activity,
  Distance,
  Duration,
  Location,
  Description,
  TimeStamp,
  deletePost,
}) {
  return (
    <div className="Post">
      <button className="Post__delete" onClick={() => deletePost(id)}>
        x
      </button>
      <div className="postActivity">{Activity}</div>
      <div className="postDistance">Distance : {Distance}</div>
      <div className="postDuration">Duration : {Duration}</div>
      <div className="postLocation">Location : {Location}</div>
      <div className="postDescription">Description : {Description}</div>
      <div className="postTimeStamp">Date : {TimeStamp?.toString()}</div>
    </div>
  );
}

export default Post;