import { useEffect, useState } from "react";

const TimeInput = (props) => {
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    setValue(props.value);
  }, [props]);

  const { onChangeDuration } = props;

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onBlur = (event) => {
    const value = event.target.value;

    // const time = toHHMM(value);
    setValue(value);
    // onChangeDuration(time)

    onChangeDuration(value);
  };

  // const toHHMM = (mins) => {
  //   const minNum = parseInt(mins.toString(), 10);
  //   const hours = Math.floor(minNum / 60);
  //   const minutes = Math.floor(minNum) % 60;

  //   return [hours, minutes]
  //     .map((val) => (val < 10 ? `0${val}` : val))
  //     .filter((val, index) => val !== "00" || index > 0)
  //     .join(":")
  //     .replace(/^0/, "");
  // };

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
