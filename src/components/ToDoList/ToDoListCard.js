import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const TodoListCard = (props) => {
  return (
    <div className='box'>
      <p>Task: {props.task}</p>
      {props.importancy ? <p>Importancy: {props.importancy}</p> : ''}
      <Button variant='danger' size='sm' onClick={props.clickToDelete}>
        Delete
      </Button>

      <Button variant='primary' size='sm' onClick={props.clickToEdit}>
        Edit
      </Button>
    </div>
  );
};

export default TodoListCard;
