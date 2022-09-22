import React, { useState } from 'react';
import AddToDoListForm from '../components/ToDoList/AddToDoListForm';
import ToDoListCard from '../components/ToDoList/ToDoListCard';
// import DeletePopup from '../components/Common/DeletePopup';
import { Button, Modal } from 'react-bootstrap';

const ToDolist = () => {
  const [toDoListState, setToDoListState] = useState([]);

  // handle add new tasks to today's list
  const addToDoListHandler = (newTaskToAdd) => {
    const toDoListStateCopy = [...toDoListState];
    toDoListStateCopy.push(newTaskToAdd);
    setToDoListState(toDoListStateCopy);
    console.log('toDoListStateCopy', toDoListStateCopy);
  };

  const deleteToDoListHandler = (id) => {
    const toDoListStateCopy = [...toDoListState];
    toDoListStateCopy.splice(id, 1);
    setToDoListState(toDoListStateCopy);
  };

  const editTodDoListHandler = (id, event) => {
    console.log('edit');
  };

  return (
    <div>
      <AddToDoListForm addNewToDo={addToDoListHandler} />
      <h5>What's the plan for compliting task today?</h5>

      {/* <ToDoListCard {...toDoListState} addToDoList={addToDoListHandler} /> */}

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
    </div>
  );
};

export default ToDolist;
