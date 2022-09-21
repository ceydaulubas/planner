import React, { useState } from 'react';
import AddToDoListForm from '../components/ToDoList/AddToDoListForm';
import ToDoListCard from '../components/ToDoList/ToDoListCard';

const ToDolist = () => {
  const [toDoListState, setToDoListState] = useState([]);

  // handle add new food to today's list
  const addToDoListHandler = (newTaskToAdd) => {
    const toDoListStateCopy = [...toDoListState];
    toDoListStateCopy.push(newTaskToAdd);
    setToDoListState(toDoListStateCopy);
  };

  const deleteToDoListHandler = (id) => {
    const toDoListStateCopy = [...toDoListState];
    const toDoIndex = toDoListStateCopy.findIndex((item) => item.id === id);
    toDoListStateCopy.splice(toDoIndex, 1);
    setToDoListState(toDoListStateCopy);
  };

  return (
    <div>
      <AddToDoListForm addNewToDo={addToDoListHandler} />
      <h5>What's the plan for compliting task today?</h5>

      {/* <ToDoListCard {...toDoListState} addToDoList={addToDoListHandler} /> */}

      {toDoListState.map((toDoListItem, index) => (
        <ToDoListCard key={index} {...toDoListItem} clickToDelete={() => deleteToDoListHandler(toDoListItem.id)} />
      ))}
    </div>
  );
};

export default ToDolist;
