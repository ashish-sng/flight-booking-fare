import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerApi } from "../api/auth";

const Register = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await registerApi(email, password);

      toast.success("Registered Successfully");
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } catch (error) {
      if (error.response && error.response.status === 409) {
        toast.error(
          "Email address already registered. Please choose a different one.",
          {
            position: "bottom-right",
            autoClose: 2000,
          }
        );
      } else {
        toast.error("Error registering user. Please try again.", {
          position: "bottom-right",
          autoClose: 2000,
        });
      }
    }
  };

  return (
    <div className="register-page">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
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
        <button className="register-button" type="submit">
          Register
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
