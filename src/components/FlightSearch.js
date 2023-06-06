import React, { useState } from "react";
import "./FlightSearch.css";
import { useNavigate } from "react-router-dom";
import { searchFlightsApi } from "../api/flight";

const cities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Chennai",
  "Hyderabad",
  "Kolkata",
  "Ahmedabad",
  "Pune",
  "Jaipur",
  "Lucknow",
  "Kochi",
  "Goa",
  "Guwahati",
  "Bhubaneswar",
  "Amritsar",
];

const FlightSearch = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
      setFlights([]);
      setError('Loading...');
      const formattedDate = formatDate(departureDate);
      const response = await searchFlightsApi(source, destination, formattedDate);

      setFlights(response.data);
      setError(response.data?.length ? "" : "No flights found");
    } catch (error) {
      //Forbidden
      if (error.response.status === 403) {
        setError("Please login to search flights.");
        setFlights([]);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
        return;
      }
      setError("Error searching flights. Please try again.");
      setFlights([]);
    }
  };

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${year}/${month}/${day}`;
  };

  const userFormatDate = (dateString) => {
    const [year, month, day] = dateString.split("/");
    return `${day}/${month}/${year}`;
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const minDate = "2023-06-11";
  const maxDate = "2023-08-03";

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
        <select
          id="source"
          value={source}
          onChange={handleSourceChange}
          className="select-input-field"
        >
          <option value="">Select Source City</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <label htmlFor="destination">Destination:</label>
        <select
          id="destination"
          value={destination}
          onChange={handleDestinationChange}
          className="select-input-field"
        >
          <option value="">Select Destination City</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <label htmlFor="departureDate">Departure Date:</label>
        <input
          type="date"
          id="departureDate"
          value={departureDate}
          onChange={handleDepartureDateChange}
          min={minDate}
          max={maxDate}
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
                  Departure Date: {userFormatDate(flight.departureDate)}
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
