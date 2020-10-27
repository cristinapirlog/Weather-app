import React from "react";
import "./App.css";
import Forecast from "./Forecast";
import "./cities";
import Search from "./search";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Forecast />
            <p
              style={{
                fontWeight: "800",
              }}
            ></p>
          </Col>
          <Col xs={12} md={8}>
            <Search />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
