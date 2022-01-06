import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent></MyComponent>
    </>
  );
}

function MyComponent() {
  let counter = 1;
  const increment = () => {
    console.log("increment called", counter++);
  };
  return (
    <div>
      <h1>Counter application</h1>
      <div>Like{counter}</div>
      <input type="button" value="Like me" onClick={increment} />
    </div>
  );
}
