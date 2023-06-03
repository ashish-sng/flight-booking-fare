import React, { useState } from "react";
import "./App.css";
import FlightSearch from "./components/FlightSearch";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <div className="header">
          <h1>Flight Details</h1>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signup"
            element={<Register handleLogin={handleLogin} />}
          />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route
            path="/flights"
            element={<FlightSearch handleLogout={handleLogout} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
