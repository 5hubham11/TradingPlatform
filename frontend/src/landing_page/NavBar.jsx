import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import { FaBoxOpen } from "react-icons/fa";
import { MdPriceChange } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaInfoCircle } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import "bootstrap-icons/font/bootstrap-icons.css";
export default function NavBar() {
  const navigate = useNavigate();

  const { isLoggedIn, username, setIsLoggedIn, setUsername } =
    useContext(AuthContext);

  const Logout = async () => {
    try {
      await axios.post(
        "https://tradingplatform-nulv.onrender.com/logout",
        {},
        { withCredentials: true },
      );

      setIsLoggedIn(false);
      setUsername("");

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img
            style={{ width: "20%", marginLeft: "50px" }}
            src="./media/images/logo.svg"
            alt=""
          />
        </a>
        <div className="collapse navbar-collapse justify-content-between">
          {/* Left Menu */}
          <li className="nav-item">
            <a className="nav-link nav-custom-link" href="/about">
              <FaInfoCircle className="nav-icon" />
              About
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link nav-custom-link" href="/product">
              <FaBoxOpen className="nav-icon" />
              Product
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link nav-custom-link" href="/pricing">
              <MdPriceChange className="nav-icon" />
              Pricing
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link nav-custom-link" href="/support">
              <RiCustomerService2Fill className="nav-icon" />
              Support
            </a>
          </li>

          {isLoggedIn && (
            <li className="nav-item">
              <button
                className="nav-link btn btn-link nav-custom-link"
                onClick={() => {
                  window.location.href = "http://localhost:3000";
                }}
              >
                <MdDashboard className="nav-icon" />
                Dashboard
              </button>
            </li>
          )}

          {/* Right Menu */}
          {!isLoggedIn ? (
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link auth-btn" href="/login">
                  Login
                </a>
              </li>

              <li className="nav-item">
                <a className="signup-btn" href="/signup">
                  Signup
                </a>
              </li>
            </ul>
          ) : (
            <li className="nav-item dropdown">
              <button
                className="profile-btn dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <div className="profile-avatar">
                  {username?.charAt(0).toUpperCase()}
                </div>

                <div className="profile-info">
                  <span className="profile-name">{username}</span>
                  <small>Investor</small>
                </div>
              </button>

              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => {
                      window.location.href = "http://localhost:3000";
                    }}
                  >
                    Dashboard
                  </button>
                </li>

                <li>
                  <button
                    className="dropdown-item text-danger"
                    onClick={Logout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </li>
          )}
        </div>
      </div>
    </nav>
  );
}
