import { useState } from "react";

const TimeInput = (props) => {
  const [value, setValue] = useState("");

const {onChangeDuration} = props

//   console.log(value);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onBlur = (event) => {
    const value = event.target.value;

    const time = toHHMM(value);
    setValue(time);
    onChangeDuration(time)
  };

  const toHHMM = (mins) => {
    const minNum = parseInt(mins.toString(), 10);
    const hours = Math.floor(minNum / 60);
    const minutes = Math.floor(minNum) % 60;

    return [hours, minutes]
      .map((val) => (val < 10 ? `0${val}` : val))
      .filter((val, index) => val !== "00" || index > 0)
      .join(":")
      .replace(/^0/, "");
  };

  return (
    <input
      type="text"
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      placeholder="How long minute time"
    />
  );
};

export default TimeInput;
