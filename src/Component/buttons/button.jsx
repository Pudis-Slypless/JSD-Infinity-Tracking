import React, { useState } from "react";
import "./button.css";

function Button() {
  const [name, setName] = useState("Post");

  return <button className="Button"> {name} </button>;
}

export default Button;
