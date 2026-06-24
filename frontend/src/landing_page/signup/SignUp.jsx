import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./Signup.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Signup = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, setUsername } = useContext(AuthContext);
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  

  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
   

    try {
      const { data } = await axios.post(
        "https://tradingplatform-nulv.onrender.com/signup",
        {
          ...inputValue,
        },
        { withCredentials: true },
      );
      const { success, message } = data;
      if (success) {
        setIsLoggedIn(true);
        setUsername(username);
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

return (
  <div className="form_container">
    <div className="signup-card">
      <h2>Create Account</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>

        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Choose a username"
            onChange={handleOnChange}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Create a password"
            onChange={handleOnChange}
          />
        </div>

        <button type="submit" className="signup-btn">
          Create Account
        </button>

        <span className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>

    <ToastContainer />
  </div>
  );
};

export default Signup;
