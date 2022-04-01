
import PropTypes from "prop-types";
import "./Post.css";

function Post({ id, activity, Distance, duration, location, timeStamp, deletePost }) {
  return (
    <div className="Post">
      <button className="Post__delete" onClick={() => deletePost(id)}>
        x
      </button>
      <div className="postActivity">{activity}</div>
      <div className="postDistance">{Distance}</div>
      <div className="postDuration">{duration}</div>
      <div className="postLocation">{location}</div>
      <div className="postTimeStamp">{timeStamp}</div>


      {/* <div className="Post__title">{title}</div>
      <img
        className="Post__image"
        src={`https://source.unsplash.com/random?sig=${id}`}
      /> */}
    </div>
  );
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default Post;
