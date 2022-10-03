import React, { useState } from 'react';
import TodayAimForm from './TodayAimForm';

const TodayAim = () => {
  const [todayAimState, setTodayAimState] = useState([]);

  const addAimHandler = (newAim) => {
    const todayAimStateCopy = [...todayAimState];
    todayAimStateCopy.push(newAim);
    setTodayAimState(todayAimStateCopy);
  };

  return (
    <div style={{ backgroundColor: 'silver' }}>
      {todayAimState.length === 0 && <TodayAimForm addNewTodayAim={addAimHandler} />}
      {todayAimState.length === 1 && (
        <div>
          <h5>Today's aim:</h5>
          <p>{todayAimState[0].aim}</p>
        </div>
      )}
    </div>
  );
};

export default TodayAim;
