import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const cityName = weatherData.name;
const weatherCondition = weatherData.weather ? weatherData.weather[0].main : '';
const weatherDescription = weatherData.weather ? weatherData.weather[0].description : '';
const temperature = weatherData.main ? weatherData.main.temp : '';

useEffect(() => {
    const city = "Bologna";
    const apiKey = "b1e92c453b9d2a5bdd00ccb98003cda2";  
    fetch("https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}")
    .then(response => response.json())
      .then(data => setWeatherData(data));
  }, []);