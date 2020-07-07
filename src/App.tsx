import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// *Components
import Container from "react-bootstrap/Container";
import GameContainerComponent from "./components/gameContainer/gamecontainer";

function App() {
  return (
    <Container>
      <GameContainerComponent />
    </Container>
  );
}

export default App;
