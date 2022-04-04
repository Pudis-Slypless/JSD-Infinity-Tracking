import React, { useState } from "react";
import "./activity.css";

function Activity(props) {
  

  const onCLickImage = (type) => {
    props.setActivity(type);
    console.log(type);
  };

  return (
    <div className="activityField">
      <img
        src="Icons/running.svg"
        alt="run"
        className="icon-activity"
        onClick={() => onCLickImage("run")}
      />

      <img
        src="Icons/walk.svg"
        alt="walk"
        className="icon-activity"
        activity="walk"
        onClick={() => onCLickImage("walk")}
      />

      <img
        src="Icons/swimmer.svg"
        alt="swimmer"
        className="icon-activity"
        activity="swim"
        onClick={() => onCLickImage("swim")}
      />

      <img
        src="Icons/biking.svg"
        alt="biking"
        className="icon-activity"
        activity="bike"
        onClick={() => onCLickImage("bike")}
      />
    </div>
  );
}

export default Activity;
