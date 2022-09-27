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
    <div>
      {todayAimState.length === 0 && <TodayAimForm addNewTodayAim={addAimHandler} />}
      {todayAimState.length === 1 && <p>{todayAimState[0].aim}</p>}
    </div>
  );
};

export default TodayAim;
