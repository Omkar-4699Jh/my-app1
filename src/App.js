export default function App() {
  return (
    <>
      <MyComponent></MyComponent>
    </>
  );
}

function MyComponent() {
  const id1 = 100;
  const background = "bg-info";

  return (
    <div>
      <h1>interpolation {id1}</h1>
      <h1 id={id1}> interpolation{id1}</h1>
      <h1 className={background}>interpolation</h1>
    </div>
  );
}
