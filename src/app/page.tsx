'use client'

import '@/app/globals.css';
import React, { useState, useEffect } from 'react';
import WeatherPage from "@/app/weather-page";
import Search from "@/components/search";
import DarkModeSwitch from "@/components/darkmode-switch";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', '' + !darkMode);
  }

  useEffect(() => {
    let isDarkMode
    isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode === null) {
      localStorage.setItem('darkMode', 'false');
    }

    setDarkMode(isDarkMode);
  }, []);


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
    <div className={`${darkMode && "dark"}`}>
      <DarkModeSwitch darkMode={darkMode} setDarkMode={toggleDarkMode} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center' }}>
        <Search onSearch={handleSearch} />
        {weatherData && <WeatherPage weatherData={weatherData} />}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}
