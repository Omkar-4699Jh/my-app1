export default function App() {
  return (
    <>
      <MyComponent></MyComponent>
    </>
  );
}

function MyComponent() {
  let username = "omkar";
  let id = 1;
  let list = ["mum", "del", "kyn"];
  let obj = { id: 1, username: "omkar" };
  return (
    <div>
      {username}
      {id}
      <h1>{list}</h1>
      <div>
        {obj.id}
        {obj.username}
      </div>
    </div>
  );
}
