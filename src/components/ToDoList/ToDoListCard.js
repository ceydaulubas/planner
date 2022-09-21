import React from 'react';

const TodoListCard = (props) => {
  return (
    <div className='box'>
      <p>Task: {props.task}</p>
      {props.importancy ? <p>Importancy: {props.importancy}</p> : ''}
    </div>
  );
};

export default TodoListCard;
