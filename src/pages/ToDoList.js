import React, { useState } from 'react';
import AddToDoListForm from '../components/ToDoList/ToDoListForm';
import ToDoListCard from '../components/ToDoList/ToDoListCard';

const ToDolist = () => {
  const [toDoListState, setToDoListState] = useState([]);

  // handle add new food to today's list
  const addToDoListHandler = (newTaskToAdd) => {
    const toDoListStateCopy = [...toDoListState];
    toDoListStateCopy.push(newTaskToAdd);
    setToDoListState(toDoListStateCopy);
  };

  return (
    <div>
      <AddToDoListForm addNewToDo={addToDoListHandler} />
      <h5>What's the plan for compliting task today?</h5>

      {/* <ToDoListCard {...toDoListState} addToDoList={addToDoListHandler} /> */}

      {toDoListState.map((toDoListItem, index) => (
        <ToDoListCard key={index} {...toDoListItem} />
      ))}
    </div>
  );
};

export default ToDolist;
