import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

export default function Input() {
  return (
    <div>
      <h3 className="mb-4">Input ingredients</h3>
      <Container className="text-center ">
        <Row className="mb-4">
          <Col className="text-center">
            <input type="text" placeholder="ingredients" />
          </Col>
        </Row>
        <Row className="text-center mb-4">
            <Col className="text-center">
            <Button variant="primary">Send</Button>
            </Col>
          
        </Row>
      </Container>
    </div>
  );
}
