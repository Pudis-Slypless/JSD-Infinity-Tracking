import "./activity.css";
import { useEffect, useState } from "react";

function Activity(props) {
  const [types, setTypes] = useState("");

  useEffect(() => {
    setTypes(props.value);
  }, [props]);

  const onCLickImage = (type) => {
    props.setActivity(type);
    console.log(type);

    setTypes(type);
  };

  return (
    <div className="activityField">
      <div
        className={` ${props.disabled && "disabled"} buttonActivity ${
          types === "run" && "clicked"
        }`}
      >
        <img
          src="Icons/running.svg"
          alt="run"
          className="icon-activity"
          onClick={props.disabled ? () => {} : () => onCLickImage("run")}
        />
      </div>

      <div
        className={` ${props.disabled && "disabled"} buttonActivity ${
          types === "walk" && "clicked"
        }`}
      >
        <img
          src="Icons/walk.svg"
          alt="walk"
          className="icon-activity"
          activity="walk"
          onClick={props.disabled ? () => {} : () => onCLickImage("walk")}
        />
      </div>

      <div
        className={` ${props.disabled && "disabled"} buttonActivity ${
          types === "swim" && "clicked"
        }`}
      >
        <img
          src="Icons/swimmer.svg"
          alt="swimmer"
          className="icon-activity"
          activity="swim"
          onClick={props.disabled ? () => {} : () => onCLickImage("swim")}
        />
      </div>

      <div
        className={`${props.disabled && "disabled"} buttonActivity  ${
          props.disabled && "disabled"
        }  ${types === "bike" && "clicked"}`}
      >
        <img
          src="Icons/biking.svg"
          alt="biking"
          className="icon-activity"
          activity="bike"
          onClick={props.disabled ? () => {} : () => onCLickImage("bike")}
        />
      </div>
    </div>
  );
}

export default Activity;
