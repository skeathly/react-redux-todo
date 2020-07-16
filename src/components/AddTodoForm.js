import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap'

const AddTodoForm = (props) => {
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.addTask(name);
    setName("");
  }

  const handleChange = e => {
    setName(e.target.value);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label id="new-todo-input"><h1>Todos</h1></Form.Label>
        <Form.Control type="text"
          id=""
          className="input w-100 mb-3"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
      </Form.Group>

      <Button type="submit"
        className="btn btn-primary btn-block">
        Add Todo
      </Button>
    </Form>
  );
}

export default AddTodoForm;
