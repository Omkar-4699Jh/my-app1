import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent></MyComponent>
    </>
  );
}

function MyComponent() {
  const id = 1;
  const msg = "hello,";
  const btnmsg = "how are you!!!";
  const hello = () => {
    console.log("hii hello are u there");
    alert("thank you");
  };
  return (
    <div id={id}>
      {msg}
      <input type="button" value={btnmsg} onClick={hello} />
    </div>
  );
}
