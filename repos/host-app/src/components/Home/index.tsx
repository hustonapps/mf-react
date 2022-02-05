import React, { lazy, Suspense } from "react";

const Button = lazy(() => import("UIComponents/Button"));

const Home = () => {
  return (
    <>
      <h1>App 1</h1>
      <Suspense fallback="...">
        <Button
          text="Click Me"
          onClick={() => alert("this button is not part of this app!")}
        />
      </Suspense>
    </>
  );
};

export default Home;
