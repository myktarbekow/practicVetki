import React from "react";
import "./App.css";

function App() {
  let [count, setCount] = React.useState(0);

  const clickPlus = () => {
    setCount(count + 1);
  };

  const clickMinus = () => {
    setCount(count - 1);
  };
  const clickDelete = () => {
    setCount((count = 0));
  };

  return (
    <div className="App">
      <h2>Counter:</h2>
      <h1>{count}</h1>
      <button className="minus" onClick={clickMinus} disabled={count === 0}>
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
