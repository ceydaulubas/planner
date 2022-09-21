import React from 'react';

const TodoListCard = (props) => {
  return (
    <div className='box'>
      <p>Task: {props.task}</p>
      {props.importancy ? <p>Importancy: {props.importancy}</p> : ''}
      <button onClick={props.clickToDelete}> Delete</button>
      <button> Edit</button>
    </div>
  );
};

export default TodoListCard;
