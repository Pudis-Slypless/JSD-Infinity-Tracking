import "./Post.css";


function Post(props) {
  const {
    id,
    activity,
    distance,
    duration,
    location,
    description,
    timestamp,
    handleUpdateRecord,
    deletePost
  } = props;

  const mapActivityImg = {
    run: "Icons/running.svg",
    walk: "Icons/walk.svg",
    swim: "Icons/swimmer.svg",
    bike: "Icons/biking.svg",
  };

  

  return (
    <div className="Post">
      <img
        src={mapActivityImg[activity]}
        alt={activity}
        className="show-activity"
      />

      <div className="content">
        <div className="postActivity">{activity}</div>
        <div className="subContent">
          <div className="titleContent">Distance : </div>
          <div className="valueContent">{distance}</div>
        </div>
        <div className="subContent">
          <div className="titleContent">Duration : </div>
          <div className="valueContent">{duration}</div>
        </div>
        <div className="subContent">
          <div className="titleContent">Location : </div>
          <div className="valueContent">{location}</div>
        </div>
        <div className="subContent">
          <div className="titleContent">Description : </div>
          <div className="valueContent">{description}</div>
        </div>
        <div className="subContent">
          <div className="titleContent">Date : </div>
          <div className="valueContent">{timestamp?.toString()}</div>
        </div>
      </div>
      <img
        src="Icons\pen-to-square-solid.svg"
        alt="edit"
        className="EditPost"
        onClick={() => handleUpdateRecord(props)}
      ></img>
      <button className="PostDelete" onClick={() => deletePost(id)}>
        x
      </button>
    </div>
  );
}

export default Post;
