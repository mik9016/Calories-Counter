import "./App.scss";
import Display from "./components/Display/Display";
import Input from "./components/Input/Input";
import { Container,Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <h1 className="mb-4">Calories Counter</h1>
      <Container fluid="md">
        <Row>
          <Col >
            <Input/>
          </Col>
          <Col>
            <Display/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
