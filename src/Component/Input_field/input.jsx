import React, { useState } from "react";
import "./input.css";

import Activity from "./activity/activity";
import { number } from "prop-types";

function Input({ addPost }) {
  const [valueActivity, setActivity] = useState("");
  const [valueDistance, setValueDistance] = useState("");
  const [valueDuration, setValueDuration] = useState("00:00 ");
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

  function onChangeTimeStamp() {
    setValueTimeStamp(new Date());
  }

  function onChangeDesciption(e) {
    setValueDesciption(e.target.value);
  }

  function submit(event) {
    event.preventDefault();
    const valueInput = {
      Activity: valueActivity,
      Distance: valueDistance,
      Duration: valueDuration,
      Location: valueLocation,
      Description: valueDesciption,
      TimeStamp: valueTimeStamp,
    };

    if (
      valueInput.Activity === "" ||
      (valueInput.Distance === "" && valueInput.Distance === number ) ||
      (valueInput.Duration === "" && valueInput.Duration === number) ||
      valueInput.Location === "" ||
      valueDesciption === ""
    ) {
      alert("Invalid Value. Please fill data");
      return false;
    } else {
      addPost(valueInput);
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
              placeholder="Hr : mm : ss"
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
            onClick={(event) => submit(event)}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Input;
