import React, { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = React.useState(0);

  const clickPlus = () => {
    setCount(count + 1);
  };

  const clickMinus = () => {
    if(count.trim())
    setCount(count - 1);
  };
  const clickDelete = () => {
    setCount((count = 0));
  };
  // const [value, setValue] = useState("");
  // const [inputHandler, SetInputHandler] = useState([]);

  // const changeHandler = (e) => {
  //   setValue(e.target.value);
  // };

  // const savingValue = () => {
  //   SetInputHandler([
  //     ...inputHandler,
  //     {
  //       title: value,
  //       id: Math.random(),
  //     },
  //   ]);
  //   setValue("");
  // };
  // const deleteHandler = (id) => {
  //   const filtered = inputHandler.filter((item) => item.id !== id);
  //   SetInputHandler(filtered);
  // };

  // const prev =(e)=>{
  //   e.preventDefault()
  // }
  return (
    <div className="App">
      {/* <form onClick={prev} action="">
        <input value={value} onChange={changeHandler} type="text" />
        <button onClick={savingValue}>Save</button>
        {inputHandler.map((item) => (
          <li>
            {item.title}{" "}
            <button onClick={(id) => deleteHandler(item.id)}>Delete</button>
          </li>
        ))}
      </form> */}

      <h2>Counter:</h2>
      <h1>{count}</h1>
      <button className="minus" onClick={clickMinus}>
        Minus-
      </button>
      <button className="plus" onClick={clickPlus}>
        Plus+
      </button>
      <button className="delete" onClick={clickDelete}>
        Delete
      </button>
    </div>
  );
}

export default App;
