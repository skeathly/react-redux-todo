import React, { useEffect, useRef, useState } from "react";
import { Form, Row, Col, Button } from 'react-bootstrap';
import { FiTrash2, FiEdit2 } from "react-icons/fi";

const usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export default function Todo(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');
  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);
  const wasEditing = usePrevious(isEditing);

  const handleChange = (e) => {
    setNewName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <Form className="mt-4" onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label
              htmlFor={props.id}>
              New name for {props.name}
            </Form.Label>
            <Form.Control
              id={props.id}
              className="todo-text"
              type="text"
              value={newName}
              onChange={handleChange}
              ref={editFieldRef} />
          </Form.Group>
        </Col>
        <Col className="text-right">
          <Button
            type="button"
            variant="light"
            onClick={() => setEditing(false)}
          >
            Cancel
            <span className="visually-hidden">renaming {props.name}</span>
          </Button>
          <Button
            type="submit"
            variant="success"
            className="ml-2">
            Save
            <span className="visually-hidden">new name for {props.name}</span>
          </Button>
        </Col>
      </Row>
    </Form>
  );

  const viewTemplate = (
    <div>
      <Row className="mb-3">
        <Col>
          <Form.Check
            className="custom-control custom-checkbox">
            <Form.Check.Input
              id={props.id}
              type="checkbox"
              className="custom-control-input"
              defaultChecked={props.completed}
              onChange={() => props.toggleTaskCompleted(props.id)} />
            <Form.Check.Label
              htmlFor={props.id}
              className="custom-control-label">
              {props.name}
            </Form.Check.Label>
          </Form.Check>
        </Col>
        <Col className="text-right">
          <Button
            type="button"
            variant="light"
            onClick={() => setEditing(true)}
            ref={editButtonRef}
          >
            <FiEdit2 />
            <span className="visually-hidden">{props.name}</span>
          </Button>
          <Button
            type="button"
            variant="light"
            className="ml-2"
            onClick={() => props.deleteTask(props.id)}
          >
            <FiTrash2 className="text-danger" />
            <span className="visually-hidden">{props.name}</span>
          </Button>
        </Col>
      </Row>
    </div>
  );


  useEffect(() => {
    if (!wasEditing && isEditing) {
      editFieldRef.current.focus();
    }
    if (wasEditing && !isEditing) {
      editButtonRef.current.focus();
    }
  }, [wasEditing, isEditing]);


  return <>{isEditing ? editingTemplate : viewTemplate}</>;
}
