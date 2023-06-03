import React, { useState } from "react";
import "./FlightSearch.css";
import axios from "axios";

const FlightSearch = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState("");

  const handleSourceChange = (event) => {
    setSource(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleDepartureDateChange = (event) => {
    setDepartureDate(event.target.value);
  };

  const handlePassengerChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setPassengers(value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const formattedDate = formatDate(departureDate);

      const response = await axios.get(
        `http://localhost:4000/flights?source=${source}&destination=${destination}&departureDate=${formattedDate}`
      );

      console.log(response.data);

      setFlights(response.data);
      setError("");
    } catch (error) {
      setError("Error searching flights. Please try again.");
      setFlights([]);
    }
  };

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${year}/${month}/${day}`;
    };
    
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };

  return (
    <div className="flight-search-container">
      <div className="flight-search">
        <h2>Flight Search</h2>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <form onSubmit={handleSearch}>
        <label htmlFor="source">Source:</label>
        <input
          type="text"
          id="source"
          value={source}
          onChange={handleSourceChange}
          className="input-field"
        />

        <label htmlFor="destination">Destination:</label>
        <input
          type="text"
          id="destination"
          value={destination}
          onChange={handleDestinationChange}
          className="input-field"
        />

        <label htmlFor="departureDate">Departure Date:</label>
        <input
          type="date"
          id="departureDate"
          value={departureDate}
          onChange={handleDepartureDateChange}
          className="input-field"
        />

        <label htmlFor="passengers">Passengers:</label>
        <input
          type="number"
          id="passengers"
          min="1"
          value={passengers}
          onChange={handlePassengerChange}
          className="input-field"
        />

        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {flights.length > 0 && (
        <div>
          <h3>Flight Results:</h3>
          <ul className="flight-list">
            {flights.map((flight) => (
              <li key={flight._id} className="flight-item">
                <p className="flight-info">
                  {flight.flightName} : ₹{parseInt(flight.fare) * passengers}
                </p>
                <p className="flight-info">
                  Departure Date: {flight.departureDate}
                </p>
                <p className="flight-info">
                  Flight duration: {flight.duration}hrs
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FlightSearch;
