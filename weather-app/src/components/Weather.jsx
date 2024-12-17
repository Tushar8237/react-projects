import React, { useEffect, useState } from "react";

function Weather() {
  const API_KEY = import.meta.env.VITE_API_KEY; // Replace with your API key
  const [city, setCity] = useState(""); // User input for city
  const [weatherData, setWeatherData] = useState(null); // Weather data
  const [error, setError] = useState(null); // Error handling
  const [loading, setLoading] = useState(false); // Loading state

  // Fetch weather based on city
  const fetchWeatherByCity = async () => {
    if (!city) return;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeatherData(data);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Failed to fetch data, try again");
    } finally {
      setLoading(false);
    }
  };

  // Fetch weather based on user location
  const fetchWeatherByLocation = () => {
    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
          );
          const data = await response.json();
          if (data.cod === 200) {
            setWeatherData(data);
          } else {
            setError(data.message);
          }
        } catch (error) {
          setError("Failed to fetch data");
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        setError("Location permission denied");
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    // Fetch weather for the current location when the component mounts
    fetchWeatherByLocation();
  }, []);

  return (
    <div style={{
        textAlign: "center", 
        fontFamily: "Arial, sans-serif", 
        padding: "20px",
        border: "1px solid grey",
        maxWidth : "20rem",
        backgroundColor: "lightgray"
        }}>
      {/* Input for city */}
      <h1 style={{ color: "#333" }}>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{
          padding: "8px",
          marginRight: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={fetchWeatherByCity}
        style={{
          padding: "8px 12px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#007BFF",
          color: "white",
          cursor: "pointer",
          marginTop: "20px"
        }}
      >
        Get Weather
      </button>

      {/* Button for fetching weather by location */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={fetchWeatherByLocation}
          style={{
            padding: "8px 12px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#28A745",
            color: "white",
            cursor: "pointer",
          }}
        >
          Use Current Location
        </button>
      </div>

      {/* Loading State */}
      {loading && <p style={{ color: "#555", marginTop: "20px" }}>Loading...</p>}

      {/* Error State */}
      {error && <p style={{ color: "red", marginTop: "20px" }}>{error}</p>}

      {/* Weather Data Display */}
      {weatherData && (
        <div style={{ marginTop: "20px", lineHeight: "1.6" }}>
          <h2 style={{ color: "#333" }}>{weatherData.name}</h2>
          <p style={{ color: "#555" }}>Temperature: {weatherData.main.temp}°C</p>
          <p style={{ color: "#555" }}>Weather: {weatherData.weather[0].description}</p>
          <p style={{ color: "#555" }}>Humidity: {weatherData.main.humidity}%</p>
          <p style={{ color: "#555" }}>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
