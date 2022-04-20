import "./activity.css";
import { useState } from "react";

function Activity(props) {
  const [types, setTypes] = useState("");

  const onCLickImage = (type) => {
    props.setActivity(type);
    console.log(type);

    setTypes(type);
  };

  return (
    <div className="activityField">
      <div className={`buttonActivity ${types === "run" && "clicked"}`}>
        <img
          src="Icons/running.svg"
          alt="run"
          className="icon-activity"
          onClick={() => onCLickImage("run")}
        />
      </div>

      <div className={`buttonActivity ${types === "walk" && "clicked"}`}>
        <img
          src="Icons/walk.svg"
          alt="walk"
          className="icon-activity"
          activity="walk"
          onClick={() => onCLickImage("walk")}
        />
      </div>

      <div className={`buttonActivity ${types === "swim" && "clicked"}`}>
        <img
          src="Icons/swimmer.svg"
          alt="swimmer"
          className="icon-activity"
          activity="swim"
          onClick={() => onCLickImage("swim")}
        />
      </div>

      <div className={`buttonActivity ${types === "bike" && "clicked"}`}>
        <img
          src="Icons/biking.svg"
          alt="biking"
          className="icon-activity"
          activity="bike"
          onClick={() => onCLickImage("bike")}
        />
      </div>
    </div>
  );
}

export default Activity;
