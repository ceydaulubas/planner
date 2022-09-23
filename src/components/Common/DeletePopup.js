import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeletePopup(props) {
  return (
    <div style={{ backdropFilter: 'blur(1px)', backgroundColor: 'rgba(7, 6, 6, 0.582)' }}>
      <div>{props.content}</div>
    </div>
  );
}

export default DeletePopup;
