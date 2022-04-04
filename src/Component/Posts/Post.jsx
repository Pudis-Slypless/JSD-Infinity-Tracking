import PropTypes from "prop-types";
import "./Post.css";

function Post({
  id,
  activity,
  Distance,
  duration,
  location,
  timeStamp,
  deletePost,
}) {
  return (
    <div className="Post">
      <button className="Post__delete" onClick={() => deletePost(id)}>
        x
      </button>
      <div className="postActivity">{activity}</div>
      <div className="postDistance">Disrance : {Distance}</div>
      <div className="postDuration">Duration : {duration}</div>
      <div className="postLocation">Location : {location}</div>
      <div className="postTimeStamp">Date : {timeStamp}</div>

    </div>
  );
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default Post;
