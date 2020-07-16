import React from "react";
import { Button } from 'react-bootstrap'

const FilterButton = ({ isPressed, name, setFilter }) => {
  return (
    <Button
      type="button"
      variant="light"
      className="toggle-btn"
      aria-pressed={isPressed}
      onClick={() => setFilter(name)}
    >
      <span className="visually-hidden">Show </span>
      <span>{name}</span>
      <span className="visually-hidden"> tasks</span>
    </Button>
  );
}

export default FilterButton;
