import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import { Container } from "./App.styled";

const App2 = lazy(() => import("app2/App"));

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/app2"
            element={
              <Suspense fallback="loading...">
                <App2 />
              </Suspense>
            }
          />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
