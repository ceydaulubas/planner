import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import DeletePopup from '../Common/DeletePopup';
import EditList from './EditList';
import { Link } from 'react-router-dom';

const TodoListCard = (props) => {
  const [deleteToggle, setDeleteToggle] = useState(false);
  const [editToggle, setEditToggle] = useState(false);

  const deletePopUp = () => {
    setDeleteToggle(true);
  };

  const toggleDeleteAssetPopup = () => {
    setDeleteToggle(!deleteToggle);
  };

  const toggleEditAssetPopup = () => {
    setEditToggle(!editToggle);
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

      <Button variant='primary' size='sm' onClick={deletePopUp}>
        Edit
      </Button>

      {editToggle && (
        <DeletePopup
          content={
            <>
              <Modal.Dialog>
                <Modal.Body>
                  <p>
                    You are editing <b>{props.task} </b>. Are you sure?
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant='secondary' onClick={toggleEditAssetPopup}>
                    Close
                  </Button>
                  <Button variant='danger'>Edit</Button>
                </Modal.Footer>
              </Modal.Dialog>
            </>
          }
        />
      )}
    </div>
  );
};

export default TodoListCard;
