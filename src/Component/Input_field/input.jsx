import React, { useEffect, useState } from "react";
import { client } from "../../api/API";

import Activity from "./activity/activity";
import { number } from "prop-types";
import "./input.css";
import TimeInput from "./time/time";

function Input({ addPost, valueRecord = {} }) {
  const [valueActivity, setActivity] = useState("");
  const [valueDistance, setValueDistance] = useState("");
  const [valueDuration, setValueDuration] = useState("");
  const [valueLocation, setValueLocation] = useState("");
  const [valueTimeStamp, setValueTimeStamp] = useState(new Date());
  const [valueDescription, setValueDescription] = useState("");

  useEffect(() => {
    // if (valueRecord !== {}) {
    setActivity(valueRecord.activity);
    setValueDistance(valueRecord.distance);
    setValueDuration(valueRecord.duration);
    setValueLocation(valueRecord.location);
    setValueDescription(valueRecord.description);
    // }
  }, [valueRecord]);

  function onChangeDistance(e) {
    setValueDistance(e.target.value);
  }

  function onChangeDuration(value) {
    setValueDuration(value);
  }

  function onChangeLocation(e) {
    setValueLocation(e.target.value);
  }

  function onChangeTimeStamp() {
    setValueTimeStamp(new Date());
  }

  function onChangeDescription(e) {
    setValueDescription(e.target.value);
  }

  async function submit(event) {
    event.preventDefault();
    const valueInput = {
      activity: valueActivity,
      distance: valueDistance,
      duration: valueDuration,
      location: valueLocation,
      description: valueDescription,
      timestamp: valueTimeStamp,
    };

    if (
      valueInput.activity === "" ||
      (valueInput.distance === "" && valueInput.distance === number) ||
      valueInput.duration === "" ||
      valueInput.location === ""
    ) {
      alert("Invalid Value. Please fill data");
      return false;
    } else {
      // post axios
      if (valueRecord.id === "") {
        await client.post("/users/me/records", valueInput);
      } else {
        await client.put(`/users/me/records/${valueRecord.id}`, valueInput);
      }
      window.location.reload();
    }
  }

  return (
    <form>
      <div className="inputField">
        <Activity
          className="iconAc"
          value={valueActivity}
          disabled={!!valueRecord.id}
          setActivity={setActivity}
        />

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
          <div className="label">
            <label placeholder="Duration">Duration</label>
          </div>
          <div className="box">
            <TimeInput
              className="Duration"
              value={valueDuration}
              onChangeDuration={onChangeDuration}
            />
          </div>
        </div>

        <div className="topicBox">
          <div className="label">
            <label placeholder="Location">Location</label>
          </div>
          <div className="box">
            <input
              className="Location"
              type=""
              value={valueLocation}
              onChange={onChangeLocation}
              disabled={valueRecord.id}
              placeholder="Enter your Location"
            ></input>
          </div>
        </div>

        <div className="topicBox">
          <div className="label">
            <label placeholder="Description">Description</label>
          </div>
          <div className="box">
            <input
              className="Desciption"
              type="text"
              value={valueDescription}
              onChange={onChangeDescription}
              placeholder="Enter your Description"
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
