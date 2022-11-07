import React, { useState, useEffect } from 'react';
import { useApi } from './useApi';

const InspirationalApi = () => {
  const InsparationalApiUrl = process.env.REACT_APP_INSPIRATIONAL_API_URL;
  const { get } = useApi(InsparationalApiUrl);
  const [inspirationResult, setInspirationResult] = useState(null);

  const getInspirationalApi = async () => {
    const params = null;
    const response = await get('quotes', { params });
    console.log(response);

    if (response && response.data) {
      if (response.status >= 200 && response.status < 300) {
        setInspirationResult(response.data);
      } else {
        console.log('else');
      }
    } else {
      console.log('second else');
    }
  };

  useEffect(() => {
    getInspirationalApi();
  }, []);

  return (
    <div style={{ backgroundColor: 'grey' }}>
      <h2> Today's motivation motto: </h2>
      <p>{inspirationResult?.[0].text ?? 'loading'}</p>
      <p>{inspirationResult?.[0].author}</p>
    </div>
  );
};

export default InspirationalApi;
