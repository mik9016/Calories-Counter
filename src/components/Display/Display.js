import React from "react";
import classes from "../Display/Display.module.scss";

import { Card, Row, Container,Col} from "react-bootstrap";

export default function Display(props) {
  return (
    <div className={classes.Display}>
      <Container>
        <Card className="shadow">
          <Card.Title>Ingredient:</Card.Title>
          <Card.Body>
            <Card.Text>
              <Row>
                <Col>
                <h6>{props.quantity}</h6>
                </Col>
                <Col>
                <h6>{props.unit}</h6>
                </Col>
                <Col>
                <h6>{props.item}</h6>
                </Col>
                
              </Row>
            
              <h6>Calories: {props.calories}</h6>
              <p>Protein: {props.protein} g</p>
              <p>Fat: {props.fat} g</p>
              <p>Carbs: {props.carbs} g</p>
              <p>Sugar: {props.sugar} g</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
