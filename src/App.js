import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  return (
    <>
      <Mycomponent></Mycomponent>
    </>
  );
}

function Mycomponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [list, setList] = useState([]);
  const UserChange = (e) => {
    setUsername(e.target.value);
  };
  const PassChange = (e) => {
    setPassword(e.target.value);
  };
  const addUser = async () => {
    if (username == "" || password == "") {
      alert("not valid");
      return;
    }
    //alert("");
    console.log(username, password);
    const url = "http://localhost:4000/add-user";
    const data = {
      username: username,
      password: password,
    };
    await axios.post(url, data);

    const newlist = [data, ...list];
    setList(newlist);
    setUsername("");
    setPassword("");
  };
  const getUser = async () => {
    const url = "http://localhost:4000/users";

    const result = await axios.get(url);
    const list = result.data;
    const newList = [...list];
    setList(newList);
  };
  useEffect(() => getUser(), []);
  return (
    <div>
      <h1
        className="bg-info text-light 
      "
      >
        User Registration
      </h1>
      <div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Username"
          value={username}
          onChange={UserChange}
        />
      </div>
      <div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter password"
          value={password}
          onChange={PassChange}
        />
      </div>
      <div>
        <input type="button" value="Register" onClick={addUser} />
        <input type="button" value="get info" onClick={getUser} />
      </div>
      <h1>User List</h1>
      {list.map((item, index) => (
        <div className="text-center" key={index}>
          {item.username} {item.password}
        </div>
      ))}
    </div>
  );
}
