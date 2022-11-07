import React from 'react';
import InspirationalApi from '../components/API/InspirationalApi';
import WeatherApi from '../components/API/WeatherApi';
import TodayAim from '../components/TodayAim/TodayAim';

const Home = () => {
  return (
    <div>
      <h2> Welcome to Planner</h2>
      <WeatherApi />
      <TodayAim />
      <InspirationalApi />
    </div>
  );
};
export default Home;
