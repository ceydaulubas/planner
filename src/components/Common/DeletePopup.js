import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeletePopup() {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>You are deleting the to do task</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Are you sure? </p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant='secondary'>Close</Button>
        <Button variant='primary'>Delete it</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default DeletePopup;
