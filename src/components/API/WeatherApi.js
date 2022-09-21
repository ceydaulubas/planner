import React, { useState, useEffect } from 'react';
import { useApi } from './useApi';
import useCoords from './useCoords';
import { useDate } from '../useDate';
// require('dotenv').config();

const WeatherApi = () => {
  const { lat, lon, isCoordLoading } = useCoords();
  const { month, datum, year } = useDate();
  const apiUrl = process.env.REACT_APP_API_URL;
  const appid = process.env.REACT_APP_API_KEY;
  const [forecastResult, setForecastResult] = useState(null);
  const { get } = useApi(apiUrl);

  const getWeather = async () => {
    const params = { lat, lon, appid };
    const response = await get('weather', { params });
    if (response.status >= 200 && response.status < 300) {
      setForecastResult(response.data);
      console.log('response.data', response.data);
    } else {
      console.log('else');
    }
  };

  useEffect(() => {
    if (!isCoordLoading) {
      getWeather();
      console.log('forecastResult', forecastResult);
    }
  }, [isCoordLoading]);

  return (
    <div>
      <h1>{(forecastResult?.main.temp - 273.15).toFixed(0)}°C</h1>
      <h2>{forecastResult?.weather[0].description}</h2>
      <img src={`http://openweathermap.org/img/w/${forecastResult?.weather[0].icon}.png`} />
      <p>{datum}</p>
      <p>{month}</p>
      <p>{year}</p>
    </div>
  );
};

export default WeatherApi;
