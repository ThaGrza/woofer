import React from "react";
import { Link } from "react-router-dom";
import SearchUser from "../searchUser/SearchUser";
import "./Navbar.css";

function Navbar() {
  let loggedIn = true;
  return (
    <div className="nav-container">
      <Link to="/" className="nav-link">
        <h1 className="title">Woofer</h1>
      </Link>
      <SearchUser />
      {loggedIn ? (
        <Link to="/profile" className="nav-link sub-item">
          Profile
        </Link>
      ) : (
        <Link to="/login" className="nav-link sub-item">
          Login
        </Link>
      )}
    </div>
  );
}

export default Navbar;
