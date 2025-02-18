import React from "react";
import "./App.css";
const Props = (props) => {
  return (
    <div className="props">
      <h2> Props task</h2>
      <p>
        <span>Full name:</span> {props.name}
      </p>
      <p>
        <span>Age:</span> {props.age}
      </p>
      <p>
        <span>Email: </span> {props.email}
      </p>
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="counter">
      <h2>Counter task</h2>
      <p>
        <span>Count:</span> {count}
      </p>
      <button className="btn" onClick={() => setCount((count) => count + 1)}>
        Increment
      </button>
      <button className="btn" onClick={() => setCount((count) => count - 1)}>
        Decrement
      </button>
      <button className="btn" onClick={() => setCount((count) => (count = 0))}>
        Reset
      </button>
    </div>
  );
};
const App = () => {
  const members = [
    "Dagmawi",
    "Haregeweyn",
    "Dagamwit",
    "Haylemichael",
    "Hawi Girma",
  ];

  return (
    <div className="container">
      {/* <h2 className="title">Group Members</h2>
      <ul className="list">
        {members.map((member, index) => (
          <li key={index} className="list-item">
            {member}
          </li>
        ))}
      </ul> */}
      <Props name="John Doe" age={20} email="example@gmail.com" />
      <Counter />
    </div>
  );
};

export default App;
