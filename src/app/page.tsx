'use client'

import React, { useState } from 'react';
import WeatherPage from "@/components/weather-page";
import Search from "@/components/search";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (query: React.SetStateAction<string>) => {
    setSearchQuery(query);
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=7caf7a01df824683a03122224231511&q=${query}`);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      console.log('Weather data:', data);
      setWeatherData(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center' }}>
      <Search onSearch={handleSearch} />
      {weatherData && <WeatherPage weatherData={weatherData} />}
      {error && <p>{error}</p>}
    </div>
  );
}
