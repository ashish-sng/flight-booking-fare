import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      toast.success("Login successful.");
      setTimeout(() => {
        navigate("/flights");
      }, 2000);
    } catch (error) {
      toast.error("Invalid email or password. Please try again.", {
        position: "bottom-right",
        autoClose: 2000,
      });
      //   setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <ToastContainer />
      {/* {error && <p>{error}</p>} */}
    </div>
  );
};

export default Login;
