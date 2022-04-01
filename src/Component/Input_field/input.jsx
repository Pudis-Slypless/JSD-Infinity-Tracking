import React, { useState } from "react";
import "./input.css";

function Input({ addPost }) {
  const [valueDistance, setValueDistance] = useState("");
  const [valueDuration, setValueDuration] = useState("");
  const [valueLocation, setValueLocation] = useState("");
  const [valueTimeStamp, setValueTimeStamp] = useState(new Date());
  const [valueDesciption, setValueDesciption] = useState("");

  function onChangeDistance(e) {
    setValueDistance(e.target.value);
  }

  function onChangeDuration(e) {
    setValueDuration(e.target.value);
  }

  function onChangeLocation(e) {
    setValueLocation(e.target.value);
  }

  function onChangeTimeStamp(e) {
    setValueTimeStamp(e.target.value);
  }

  function onChangeDesciption(e) {
    setValueDesciption(e.target.value);
  }

  function Post(props) {
    const valueInput = {
      Distance: valueDistance,
      duration: valueDuration,
      location: valueLocation,
      timeStapm: valueTimeStamp,
    };

    addPost(valueInput);
    // if (valueDistance="number" true) {
    //   console.log();
    // } else {
    //   alert("Invalid!!!!");
    // }
  }

  // function onKeyDown(e) {
  //   const title = e.target.value;

  //   if (e.key === "Enter" && title) {
  //     addPost(title);
  //     setInput("");
  //   }
  // }

  return (
    // <div className="Input">
    //   <div className="Input__header"> Create Post </div>
    //   <input
    //     className="Input__field"
    //     type="text"
    //     value={input}
    //     onChange={onChange}
    //     onKeyDown={onKeyDown}
    //   />
    // </div>

    <form>
      <div className="inputField">
        <div className="topicBox">
          <div className="label">
            <label placeholder="Distance">Distance</label>
          </div>
          <div className="box">
            <input
              className="Distance"
              type=""
              value={valueDistance}
              onChange={onChangeDistance}
              placeholder="Enter your Distance (Km.)"
            ></input>
          </div>
        </div>

        <div className="topicBox">
          <div>
            <label placeholder="Duration">Duration</label>
          </div>
          <div className="box">
            <input
              className="Duration"
              type="time"
              value={valueDuration}
              onChange={onChangeDuration}
              placeholder="Enter your Duration (Hr : mm)"
            ></input>
          </div>
        </div>

        <div className="topicBox">
          <div>
            <label placeholder="Location">Location</label>
          </div>
          <div className="box">
            <input
              className="Location"
              type=""
              value={valueLocation}
              onChange={onChangeLocation}
              placeholder="Enter your Location"
            ></input>
          </div>
        </div>

        <div className="topicBox">
          <div>
            <label placeholder="Desciption">Desciption</label>
          </div>
          <div className="box"> 
            <input
              className="Desciption"
              type="text"
              value={valueDesciption}
              onChange={onChangeDesciption}
              placeholder="Enter your Desciption"
            ></input>
          </div>
        </div>

        <div className="topicBox">
          <button
            className="creat-post"
            onChange={onChangeTimeStamp}
            onClick={Post}
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

// Input.propTypes = {
//   addPost: PropTypes.func.isRequired,
// };

export default Input;
