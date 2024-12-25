import React from "react";
import "./App.css";

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
      <h2 className="title">Group Members</h2>
      <ul className="list">
        {members.map((member, index) => (
          <li key={index} className="list-item">
            {member}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
