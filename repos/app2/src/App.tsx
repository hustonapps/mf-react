import React, { Suspense, lazy, useState } from "react";
import { Container } from "./App.styled";

const Button = lazy(() => import("UIComponents/Button"));

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((cur) => cur + 1);
  };

  const decrement = () => {
    setCount((cur) => cur - 1);
  };

  return (
    <Container>
      <h1>App 2</h1>
      <p>Count: {count}</p>
      <Suspense fallback="Loading">
        <Button text="Increment Count" onClick={increment} />
        <Button text="Decrement Count" onClick={decrement} />
      </Suspense>
    </Container>
  );
}

export default App;
