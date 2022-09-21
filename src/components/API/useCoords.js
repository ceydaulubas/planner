import { useState, useEffect } from 'react';

const useCoords = () => {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [isCoordLoading, setIsCoordLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
      console.log('Latitude is:', position);
    });
  }, []);
  useEffect(() => {
    if (lat && lon) {
      setIsCoordLoading(false);
    }
  }, [lat, lon]);

  return { lat, lon, isCoordLoading };
};

export default useCoords;
