import React, { useState, useEffect } from 'react';
import { useApi } from './useApi';

const InspirationalApi = () => {
  const InsparationalApiUrl = process.env.REACT_APP_INSPIRATIONAL_API_URL;
  const { get } = useApi(InsparationalApiUrl);
  const [inspirationResult, setInspirationResult] = useState(null);
  const [IsResult, setIsResult] = useState(true);

  const getInspirationalApi = async () => {
    const params = null;
    const response = await get('quotes', { params });
    console.log(response);

    if (response && response.data) {
      if (response.status >= 200 && response.status < 300) {
        setInspirationResult(response.data);
        console.log('inspirationResult', inspirationResult);
        setIsResult(false);
      } else {
        console.log('else');
        setIsResult(true);
      }
    } else {
      console.log('second else');
      setIsResult(true);
    }
  };

  useEffect(() => {
    getInspirationalApi();
  }, [IsResult]);

  return (
    <div style={{ backgroundColor: 'grey' }}>
      <h2> Today's motivation motto: </h2> <p>{inspirationResult[0].text}</p>
      <p>{inspirationResult[0].author}</p>
    </div>
  );
};

export default InspirationalApi;
