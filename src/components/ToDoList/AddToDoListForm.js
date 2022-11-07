import React, { useState } from 'react';
import { FormBox, FormAddButton } from '../../styles/ToDoListStyle';

const initialState = {
  task: '',
  importancy: '',
  // id: '',
};

const AddToDoListForm = ({ addNewToDo }) => {
  const [formState, setFormState] = useState(initialState);

  const inputChangeHandler = (event) => {
    let { value, name } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    // Add new ToDo to the ToDoList
    addNewToDo(formState);
    // Reset state
    setFormState(initialState);
  };
  return (
    <FormBox>
      <form onSubmit={handleFormSubmission}>
        <input type='text' name='task' value={formState.task} placeholder='Add To Do' onChange={inputChangeHandler} />

        <select name='importancy' value={formState.importancy} onChange={inputChangeHandler}>
          <option> Pick the Importancy Level</option>
          <option value='High Importancy'>High Importancy</option>
          <option value='Middle Importancy'>Middle Importancy</option>
          <option value='Low Importancy'>Low Importancy</option>
        </select>
        <FormAddButton>Add</FormAddButton>
      </form>
    </FormBox>
  );
};

export default AddToDoListForm;
