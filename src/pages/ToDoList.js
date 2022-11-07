import React, { useState } from 'react';
import AddToDoListForm from '../components/ToDoList/AddToDoListForm';

import ToDoListCard from '../components/ToDoList/ToDoListCard';
// import DeletePopup from '../components/Common/DeletePopup';
// import { Button, Modal } from 'react-bootstrap';
import styled from 'styled-components';

import { BackgroundBox, Title } from '../styles/ToDoListStyle';

const ToDolist = () => {
  const [toDoListState, setToDoListState] = useState([]);
  const [editToggle, setEditToggle] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // handle add new tasks to today's list
  const addToDoListHandler = (newTaskToAdd) => {
    const toDoListStateCopy = [...toDoListState];
    toDoListStateCopy.push(newTaskToAdd);
    setToDoListState(toDoListStateCopy);
  };

  const deleteToDoListHandler = (id) => {
    const toDoListStateCopy = [...toDoListState];
    toDoListStateCopy.splice(id, 1);
    setToDoListState(toDoListStateCopy);
  };

  const editTodDoListHandler = (id) => {
    setEditToggle(!editToggle);
    const toDoListStateCopy = [...toDoListState];
  };

  return (
    <BackgroundBox>
      <Title>What's the plan for compliting task today?</Title>
      <AddToDoListForm addNewToDo={addToDoListHandler} />
      {toDoListState.map((toDoListItem, index) => (
        <div>
          <ToDoListCard
            key={index}
            {...toDoListItem}
            clickToDelete={() => deleteToDoListHandler(index)}
            clickToEdit={() => editTodDoListHandler(index)}
          />
        </div>
      ))}
    </BackgroundBox>
  );
};

export default ToDolist;
