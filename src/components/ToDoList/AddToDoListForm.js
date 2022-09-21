import React, { useState } from 'react';

const initialState = {
  task: '',
  importancy: '',
};

const AddToDoListForm = ({ addNewToDo }) => {
  const [formState, setFormState] = useState(initialState);

  const inputChangeHandler = (event) => {
    let { value, name } = event.target;
    setFormState({ ...formState, [name]: value });
    console.log('event.target', event.target);
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    // Add new ToDo to the ToDoList
    addNewToDo(formState);
    // Reset state
    setFormState(initialState);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmission}>
        <input type='text' name='task' value={formState.task} placeholder='Add To Do' onChange={inputChangeHandler} />

        <select name='importancy' placeholder='Select the Importancy' value={formState.importancy} onChange={inputChangeHandler}>
          <option> Pick the Importancy Level</option>
          <option value='High Importancy'>High Importancy</option>
          <option value='Middle Importancy'>Middle Importancy</option>
          <option value='Low Importancy'>Low Importancy</option>
        </select>
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddToDoListForm;
