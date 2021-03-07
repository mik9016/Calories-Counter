import "./App.module.scss";
import Display from "./components/Display/Display";
import Input from "./components/Input/Input";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

function App() {
  //env variables

  //view variables
  const [calories, setCalories] = useState(" 0");
  const [quantity, setQuantity] = useState("");
  const [item, setItem] = useState("");
  const [protein, setProtein] = useState("0");
  const [fat, setFat] = useState("0");
  const [carbs, setCarbs] = useState("0");
  const [sugar, setSugar] = useState("0");
  const [unit, setUnit] = useState("piece");
  let meal;

  const itemText = useRef();
  const counterNumber = useRef();

 

  //Functions

  function clearInputs() {
    itemText.current.value = "";
    counterNumber.current.value = "";
  }

  function checkCalories() {
    meal = {
      title: "my ingredient",
      ingr: [`${quantity} ${unit} ${item}`],
    };

    axios.post(URL, meal).then((res) => {
      console.log(res.data.totalNutrients);
      setCalories(res.data.calories);
      setFat(res.data.totalNutrients.FAT.quantity.toFixed(2));
      setCarbs(res.data.totalNutrients.CHOCDF.quantity.toFixed(2));
      setProtein(res.data.totalNutrients.PROCNT.quantity.toFixed(2));
      setSugar(res.data.totalNutrients.SUGAR.quantity.toFixed(2));
    });

    clearInputs();
  }

  function itemInputHandler(e) {
    setItem(e.target.value);
  }
  function quantityInputHandler(e) {
    setQuantity(e.target.value);
  }
  function unitHandler(e) {
    setUnit(e.target.value);
    console.log(unit);
  }
 

  //axios
  return (
    <div >
      
      <Container className="text-center">
      <h1>Calories Counter</h1>
        <Row>
          <Col>
            <Input
              counterHandler={quantityInputHandler}
              inputHandler={itemInputHandler}
              check={checkCalories}
              counterNumber={counterNumber}
              itemText={itemText}
              unitHandler={unitHandler}
            />
          </Col>
          <Col className="text-center">
            <Display
              calories={calories}
              protein={protein}
              fat={fat}
              carbs={carbs}
              item={item}
              quantity={quantity}
              unit={unit}
              sugar={sugar}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
