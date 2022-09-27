import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialAimState = {
  aim: '',
  id: '',
};

const TodayAimForm = ({ addNewTodayAim }) => {
  const [aimFormState, setAimFormState] = useState(initialAimState);
  const [todayAimState, setTodayAimState] = useState([]);

  const handleInputChange = (event) => {
    let { value, name } = event.target;
    setAimFormState({ ...aimFormState, [name]: value, id: uuidv4() });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addNewTodayAim(aimFormState);
    setAimFormState(initialAimState);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label> What's your aim </label>
        <input type='text' name='aim' value={aimFormState.aim} onChange={handleInputChange}></input>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default TodayAimForm;
