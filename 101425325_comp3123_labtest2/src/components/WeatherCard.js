import React from "react";

const WeatherCard = ({ weatherData, forecastData }) => {
    const { main, weather, wind, name } = weatherData;

    const dailyForecast = forecastData
        ? forecastData.list.filter((entry) =>
              entry.dt_txt.includes("12:00:00")
          )
        : [];

    return (
        <div className="weather-card">
            <h2 className="weather-card-title">{name}</h2>
            <p className="weather-card-description">
                <img
                    src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                    alt={weather[0].description}
                    className="weather-icon"
                />
                {weather[0].description.toUpperCase()}
            </p>
            <p className="weather-detail">Temperature: {(main.temp - 273.15).toFixed(2)}°C</p>
            <p className="weather-detail">Feels Like: {(main.feels_like - 273.15).toFixed(2)}°C</p>
            <p className="weather-detail">Humidity: {main.humidity}%</p>
            <p className="weather-detail">Wind Speed: {wind.speed} m/s</p>

            {dailyForecast.length > 0 && (
                <div className="forecast-section">
                    <h3 className="forecast-title">5-Day Forecast</h3>
                    <div className="forecast-container">
                        {dailyForecast.map((day, index) => (
                            <div key={index} className="forecast-item">
                                <p className="forecast-date">
                                    {new Date(day.dt_txt).toLocaleDateString(undefined, {
                                        weekday: "short",
                                    })}
                                </p>
                                <img
                                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                                    alt={day.weather[0].description}
                                    className="forecast-icon"
                                />
                                <p className="forecast-temperature">
                                    {(day.main.temp - 273.15).toFixed(1)}°C
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default WeatherCard;
