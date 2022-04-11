import React from "react";
import "./Nav.css";

const menuList = [
  { src: "Icons/Plus.svg", alt: "Add activity" },
  { src: "Icons/history.svg", alt: "history" },
  { src: "Icons/home.svg", alt: "noticfications" },
  {
    src: "Icons/profile.svg",
    alt: "profile",
  },
  { src: "Icons/menu-burger.svg", alt: "setting" },
];

function Menu(props) {
  return (
    <li>
      <img src={props.src} alt={props.alt} className="icon" />
      <p>{props.text} </p>
    </li>
  );
}

function Navbar() {
  return (
    <nav className="menu ">
      <div
        className="manu-bar"
        style={{ backgroundColor:  "#a8a7cb", paddingBottom: "10px" }}
      >
        <div className="row justify-content-between align-items-center">
          <div className={"col-6 logo-bar"}>
            <img src="Icons/infinity.svg" alt="logo" className="logo" />
            <h3 className="name">Infinity Tracking </h3>
          </div>
          <div className="col-6">
            <ul className="d-flex justify-content-end align-items-center">
              {menuList.map((menu, index) => (
                <Menu src={menu.src} alt={menu.alt} key={index} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
