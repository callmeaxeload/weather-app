import React, { useState } from 'react';
import { getWeatherData, WeatherData } from '../services/weatherService';

const Weather: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>('');

  const fetchWeather = async () => {
    try {
      const data = await getWeatherData(city);
      setWeather(data);
      setError('');
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError('City not found');
      setWeather(null);
    }
  };
  return (
    <div className="container mt-5">
      <div
        className="card mx-auto shadow-lg p-3 mb-5 bg-dark text-light rounded fade-in-down"
        style={{ maxWidth: '400px' }}>
        <div className="card-body text-center">
          <h2 className="card-title">Weather App</h2>
          <div className="input-group mb-3">
            <input
              className="form-control"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && fetchWeather()}
              placeholder="Enter city name"
            />
            <button className="btn btn-secondary" onClick={fetchWeather}>
              Get Weather
            </button>
          </div>

          {error && <p className="text-danger">{error}</p>}
          {weather && (
            <div className="mt-4">
              <h3 className="card-title">{weather.name}</h3>
              <p className="card-text">
                <strong>Temperature:</strong> {weather.main.temp}°C
              </p>
              <p className="card-text">
                <strong>Humidity:</strong> {weather.main.humidity}%
              </p>
              <p className="card-text">
                <strong>Description:</strong> {weather.weather[0].description}
              </p>
              <img
                className="mx-auto d-block"
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                alt="Weather icon"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
