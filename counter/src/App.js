import React, { useState } from "react";
import Counter from "./Counter";
import "./index.css";

const App = () => {
  const [total, setTotal] = useState(0);
  const incrementTotal = () => setTotal((currentTotal) => currentTotal + 1);
  console.log("Rendered : ", total);

  const Description = () => (
    <p>I like coding counters! Sum of all counters is now {total}</p>
  );

  const CounterWithWeekday = (props) => {
    let today;
    switch (new Date().getDay()) {
      case 0:
      case 6:
        today = "a weekend!";
        break;
      case 1:
        today = "Monday";
        break;
      case 2:
        today = "Tuesday";
        break;
      case 5:
        today = "Friyayy";
        break;
      default:
        today = "some day close to a weekend!";
        break;
    }

    return (
      <div>
        <Counter {...props} />
        <br />
        <span>Today is {today}</span>
      </div>
    );
  };

  return (
    <div className="App">
      <div>
        <h4>Total Clicks: {total}</h4>
        <Description />
      </div>
      <div className="CountersContainer">
        <CounterWithWeekday onClick={incrementTotal} />
      </div>
    </div>
  );
};

export default App;
