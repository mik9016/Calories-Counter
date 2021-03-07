import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  Card,
  Dropdown,
} from "react-bootstrap";
import classes from "../Input/Input.module.scss";

export default function Input(props) {
  return (
    <div className={classes.Input}>
      <Container className="text-center">
        <Card className="shadow ">
          <h3 className="m-4 ">Input ingredients</h3>

          <Card.Body>
            <Row></Row>
            <Form>
              <Form.Group>
                <Form.Label> Quantity:</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="1"
                  ref={props.counterNumber}
                  onChange={props.counterHandler}
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Item:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="apple.."
                  ref={props.itemText}
                  onChange={props.inputHandler}
                ></Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="unit">
                <Form.Label>Unit</Form.Label>
                <Form.Control as="select" defaultValue="piece" onChange={props.unitHandler}>
                  <option>piece</option>
                  <option>teaspoon</option>
                  <option>cups</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
        <Row className="text-center mt-4">
          <Col className="text-center">
            <Button variant="primary" onClick={props.check}>
              Check the Calories
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
