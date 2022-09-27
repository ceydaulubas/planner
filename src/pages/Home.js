import React from 'react';
import WeatherApi from '../components/API/WeatherApi';
import TodayAim from '../components/TodayAim/TodayAim';

const Home = () => {
  return (
    <div>
      <h2> Welcome to Planner</h2>
      <WeatherApi />
      <TodayAim />
    </div>
  );
};
export default Home;
