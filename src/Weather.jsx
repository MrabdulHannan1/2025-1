import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const Weather = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const apiKey = "your_api_key"; // Replace with your OpenWeatherMap API key.

    const fetchWeather = async () => {
        if (!city) return alert("Please enter a city.");
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
            );
            setWeather(response.data);
        } catch (error) {
            alert("City not found. Please try again.");
        }
    };

    const getWeatherIcon = (weatherCondition) => {
        switch (weatherCondition) {
            case "Clear":
                return "☀️"; // Sunny
            case "Clouds":
                return "☁️"; // Cloudy
            case "Rain":
                return "🌧️"; // Rainy
            case "Snow":
                return "❄️"; // Snow
            case "Fog":
            case "Mist":
                return "🌫️"; // Foggy
            default:
                return "🌍"; // Default
        }
    };

    return (
        <div style={{ margin: "20px", textAlign: "center" }}>
            <input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                style={{
                    padding: "10px",
                    fontSize: "16px",
                    marginBottom: "20px",
                    borderRadius: "5px",
                }}
            />
            <button
                onClick={fetchWeather}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    borderRadius: "5px",
                    marginLeft: "10px",
                    background: "#007BFF",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                }}
            >
                Search
            </button>

            {weather && (
                <div
                    style={{
                        marginTop: "20px",
                        padding: "20px",
                        borderRadius: "10px",
                        backgroundColor: "#f4f4f4",
                        display: "inline-block",
                        textAlign: "center",
                    }}
                >
                    <div style={{ fontSize: "50px" }}>
                        {getWeatherIcon(weather.weather[0].main)}
                    </div>
                    <h2>{weather.name}</h2>
                    <h3>{weather.main.temp}°C</h3>
                    <p style={{ fontSize: "20px", fontStyle: "italic" }}>
                        {weather.weather[0].description}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Weather;
