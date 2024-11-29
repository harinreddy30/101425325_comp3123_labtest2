import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";

const App = () => {
    const [city, setCity] = useState("Hyderabad");
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const API_KEY = "2f5136d6fbbda887058da8af74ac092d";

    const fetchWeather = async (cityName) => {
        setLoading(true);
        setError(null);
        try {
            const weatherResponse = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
            );
            setWeatherData(weatherResponse.data);

            const forecastResponse = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`
            );
            setForecastData(forecastResponse.data);
        } catch (error) {
            setError("Failed to fetch weather data. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWeather(city);
    }, [city]);

    return (
        <div className="container">
            <h1>Harin Reddy</h1>
            <h1>101425325</h1>

            <h2>Weather Forecast</h2>
            <SearchBar setCity={setCity} />
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            {weatherData && (
                <WeatherCard weatherData={weatherData} forecastData={forecastData} />
            )}
        </div>
    );
};

export default App;
