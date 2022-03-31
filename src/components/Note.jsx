import React from "react";
import {Card, CardGroup, Col, Modal, Button} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteNoteAction, editNoteAction } from "../reducers/action";


const Note = (props) => {
  const user = props.user;

  const dispatch = useDispatch();

  const [show, setShow] = React.useState(false);
  const [title, setTitle] = React.useState(user.title);
  const [description, setDescription] = React.useState(user.description);


  const handleClose = () => setShow(false);
  
  const handleSubmit = () => {
    let updatedUser = {
      id: description.id,
      title: title,
      description: description ,
    };
  dispatch(editNoteAction(description.id, updatedUser));

  handleClose();
};

return (
    <>
        <div className= "notebook"> 
      <CardGroup>
      <Col md="4" style={{ marginBottom: "1rem"}}>
        <Card border="success">
          <Card.Body>
            <Card.Title className="note description">{user.title}</Card.Title>
            <Card.Text>
              <p>{user.description}</p>
            </Card.Text>
            <Card.Link href="#">
              <Button variant="primary" size="sm">
                Edit Note
              </Button>
            </Card.Link>
            <Card.Link href="#">
              <Button variant="danger" size="sm">
                Delete Note
              </Button>
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
      </CardGroup>
      </div>
        




      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Notes</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>
              Title: <input 
                value={title}
                onChange= {(e) => setTitle(e.target.value)}
                placeholder="Title"/>
            </h5>

            <h5>
              Note Description: <input 
              value={description}
              onChange= {(e) => setDescription(e.target.value)}
              placeholder= "Type in your notes"
              />
            </h5>

          </Modal.Body>
          <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            Close
            </Button>
            <Button variant="outline-primary" onClick={handleSubmit}>
            Save
            </Button>
          </Modal.Footer>
        </Modal> 
        </>

);
};

  export default Note;  
