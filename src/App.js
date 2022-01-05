import { useState } from "react";

export default function App() {
  return (
    <>
      <MyComponent></MyComponent>
    </>
  );
}

function MyComponent() {
  const id1 = 100;

  const [cardCss, setCardCss] = useState("bg-info text-light fs-3 p-4 mb-1");
  const list = [1, 1, 1, 1, 1, 1];
  const Primary = () => setCardCss("bg-info text-light fs-3 p-4 mb-1");
  const secondary = () => setCardCss("bg-light text-dark fs-3 p-4 mb-1");
  return (
    <div>
      <input
        type="button"
        value="Primary"
        className="btn btn-primary btn-sm"
        onClick={Primary}
      />
      <input
        type="button"
        value="secondary"
        className="btn btn-secondary btn-sm"
        onClick={secondary}
      />
      {list.map(() => (
        <div className={cardCss}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus,
          illo amet officiis iure alias explicabo unde odio
        </div>
      ))}
    </div>
  );
}
