import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  const signuppage = () => {
    navigate("/signup");
  };

  const loginpage = () => {
    navigate("/login");
  };

  return (
    <div className="home">
      <button id="signup" onClick={signuppage}>
        Sign up
      </button>
      <button id="login" onClick={loginpage}>
        Login
      </button>
    </div>
  );
};

export default Home;
