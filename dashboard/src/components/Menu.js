import axios from "axios";

import "./Menu.css";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import GeneralContext from "./GeneralContext";

const menuClass = "menu";
const activeMenuClass = "menu Selected";

const Menu = () => {
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropDownOpen, setIsProfileDropDownOpen] = useState(false);
  const { username, setUsername } = useContext(GeneralContext);
  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };
  const handleProfileClick = () => {
    setIsProfileDropDownOpen(!isProfileDropDownOpen);
  };

  const Logout = async () => {
    try {
      await axios.post(
        "http://localhost:3004/logout",
        {},
        { withCredentials: true },
      );

      window.location.href = "http://localhost:3000"
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="menu-container">
      <img src="logo.png" alt="Logo" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/"}
              onClick={() => handleMenuClick(1)}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/orders"}
              onClick={() => handleMenuClick(2)}
            >
              Orders
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/holdings "}
              onClick={() => handleMenuClick(3)}
            >
              Holdings
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/positions"}
              onClick={() => handleMenuClick(4)}
            >
              Positions
            </Link>
            <p></p>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/funds"}
              onClick={() => handleMenuClick(5)}
            >
              Funds
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to={"/apps"}
              onClick={() => handleMenuClick(6)}
            >
              Apps
            </Link>
            <p></p>
          </li>
        </ul>
        <div className="profile-section">
          <button
            className="profile-btn"
            onClick={() => setIsProfileDropDownOpen(!isProfileDropDownOpen)}
          >
            <div className="profile-avatar">
              {username?.charAt(0).toUpperCase()}
            </div>

            <div className="profile-info">
              <span className="profile-name">{username}</span>
              <small>Investor</small>
            </div>
          </button>

          {isProfileDropDownOpen && (
            <div className="profile-dropdown">
              <button
                className="dropdown-btn"
                onClick={() => {
                  navigate("/");
                  setIsProfileDropDownOpen(false);
                }}
              >
                Dashboard
              </button>

              <button className="dropdown-btn logout-btn" onClick={Logout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
