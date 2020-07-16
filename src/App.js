import React from "react";
import Main from "./components/Main";
import { Container, Row, Col } from 'react-bootstrap'

function App({ tasks }) {
  return (
    <Container>
      <Row>
        <Col>
          <Main tasks={tasks} />
        </Col>
      </Row>
    </Container>
  )
}

export default App;
