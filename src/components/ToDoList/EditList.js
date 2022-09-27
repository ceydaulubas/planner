import React, { useState } from 'react';

const EditList = () => {
  const [formState, setFormState] = useState({
    // title: props.theProject.title,
    // description: props.theProject.description,
  });

  // Function handler to submit form
  const EditFormSubmit = (event) => {
    event.preventDefault();

    // form state data to pass with the api call
    const { task, importancy } = formState;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <div>
      <hr />
      <h3>Edit form</h3>
      <form onSubmit={EditFormSubmit}>
        <label htmlFor='title'>Task:</label>
        <input type='text' name='title' onChange={handleInputChange} />
        <label>Importancy:</label>
        <select name='importancy' placeholder='Select the Importancy' onChange={handleInputChange}>
          <option> Pick the Importancy Level</option>
          <option value='High Importancy'>High Importancy</option>
          <option value='Middle Importancy'>Middle Importancy</option>
          <option value='Low Importancy'>Low Importancy</option>
        </select>

        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default EditList;
