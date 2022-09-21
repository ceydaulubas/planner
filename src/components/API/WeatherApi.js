import React, { useState, useEffect, Children } from 'react';
import { Spinner } from 'react-bootstrap';
import { useApi } from './useApi';
import useCoords from './useCoords';
import { useDate } from '../useDate';

const WeatherApi = () => {
  const { lat, lon, isCoordLoading } = useCoords();
  const { month, datum, year } = useDate();
  const apiUrl = process.env.REACT_APP_API_URL;
  const appid = process.env.REACT_APP_API_KEY;
  const [forecastResult, setForecastResult] = useState(null);
  const [isLoadingWeatherApi, setLoadingWeatherApi] = useState(true);
  const { get } = useApi(apiUrl);

  const getWeather = async () => {
    const params = { lat, lon, appid };

    const response = await get('weather', { params });

    if (response && response.data) {
      if (response.status >= 200 && response.status < 300) {
        setForecastResult(response.data);
        setLoadingWeatherApi(false);
        console.log('response.data', response.data);
      } else {
        console.log('else');
      }
    } else {
      console.log('true');
      setLoadingWeatherApi(true);
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
      {isLoadingWeatherApi && (
        <div>
          <Spinner animation='border' />
          <p>{datum}</p>
          <p>{month}</p>
          <p>{year}</p>
        </div>
      )}
      {!isLoadingWeatherApi && (
        <div>
          <h1>{(forecastResult?.main.temp - 273.15).toFixed(0)}°C</h1>
          <h2>{forecastResult?.weather[0].description}</h2>
          <img src={`http://openweathermap.org/img/w/${forecastResult?.weather[0].icon}.png`} />
          <p>{datum}</p>
          <p>{month}</p>
          <p>{year}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApi;
