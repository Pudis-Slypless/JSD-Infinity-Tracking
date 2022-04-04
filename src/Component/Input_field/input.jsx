import React, { useState } from "react";
import "./input.css";

import Activity from "./activity/activity";

function Input({ addPost }) {
  const [activity, setActivity] = useState("");
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

  function Submit(props) {
    console.log("hello world");
    const valueInput = {
      Activity: activity,
      Distance: valueDistance,
      duration: valueDuration,
      location: valueLocation,
      timeStapm: valueTimeStamp,
    };

    addPost(valueInput);

    if (valueInput.Activity === null) {
      alert("First name must be filled out");
      return false;
    }
  }

  return (
    <form>
      <div className="inputField">
        <Activity className="iconAc" setActivity={setActivity} />

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
              type=""
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
            onClick={Submit}
          >
            Submit
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
