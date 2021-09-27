import React from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="nav">
      <h1>Dairy</h1>
      <div className="navBtnConatainer">
        <Link to="/">
          <button className="navBtn">Write</button>
        </Link>
        <Link to="/Read">
          <button className="navBtn">Read</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
