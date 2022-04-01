import React, { useState } from "react";

function activity() {
  const [activity, setActivity] = useState("");

  const [walk, setWalk] = useState("");
  const [run, setRun] = useState("");
  const [swim, setSwim] = useState("");
  const [bike, setBike] = useState("");

  function onChangeRun(e) {
    setRun(e.target.value);
  }

  function onChangeWalk(e) {
    setWalk(e.target.value);
  }

  function onChangeSwim(e) {
    setSwim(e.target.value);
  }

  function onChangeBike(e) {
    setBike(e.target.value);
  }


  // switch clickActivity {
  //   case run : onChangeRun;
  //   case walk : onChangeWalk;
  //   case swim : onChangeSwim;
  //   case bike : onChangeSwim;
  //   default : throw error("Choose activity")
  // };

  return (
    <div className="activityField">
      <img
        src="Icons/running.svg"
        alt="run"
        className="icon-activity"
        value={run}
        onChangeRun={onChangeRun}
      />

      <img
        src="Icons/walk.svg"
        alt="walk"
        className="icon-activity"
        value={walk}
        onChangeWalk={onChangeWalk}
      />

      <img
        src="Icons/swimmer.svg"
        alt="swimmer"
        className="icon-activity"
        value={swim}
        onChangeSwim={onChangeSwim}
      />

      <img
        src="Icons/biking.svg"
        alt="biking"
        className="icon-activity"
        value={bike}
        onChangeBike={onChangeBike}
      />
    </div>
  );
}

export default activity;
