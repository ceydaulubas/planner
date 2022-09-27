import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import DeletePopup from '../Common/DeletePopup';
import EditList from './EditList';

const TodoListCard = (props) => {
  const [deleteToggle, setDeleteToggle] = useState(false);

  const deletePopUp = () => {
    setDeleteToggle(true);
  };

  const toggleDeleteAssetPopup = () => {
    setDeleteToggle(!deleteToggle);
  };

  return (
    <div className='box'>
      <p>Task: {props.task}</p>
      {props.importancy && <p>Importancy: {props.importancy}</p>}
      <Button variant='danger' size='sm' onClick={deletePopUp}>
        Delete
      </Button>

      {deleteToggle && (
        <DeletePopup
          content={
            <>
              <Modal.Dialog>
                <Modal.Body>
                  <p>
                    You are deleting <b>{props.task} </b>. Are you sure?
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant='secondary' onClick={toggleDeleteAssetPopup}>
                    Close
                  </Button>
                  <Button variant='danger' onClick={props.clickToDelete}>
                    Delete
                  </Button>
                </Modal.Footer>
              </Modal.Dialog>
            </>
          }
        />
      )}

      <Button variant='primary' size='sm' onClick={EditList}>
        Edit
      </Button>
    </div>
  );
};

export default TodoListCard;
