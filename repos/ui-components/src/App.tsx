import React from "react";
import Button from "./components/Button";
import { Container } from "./App.styled";

function App() {
  return (
    <Container>
      <h3>Available UI Components</h3>
      <label>Button: </label>
      <Button
        text="Default Button"
        onClick={() => alert("you clicked the button")}
      />
    </Container>
  );
}

export default App;
