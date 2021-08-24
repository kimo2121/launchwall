import React from "react";
import "./Sort.css";

const Sort: React.FC = () => {
  return (
    <div className="sort-container">
      <button className="sort-btn">Score</button>
      <button className="sort-btn">New</button>
      <button className="sort-btn"># of Twitter followers</button>
      <button className="sort-btn"># of Telegram members</button>
      <button className="sort-btn">% of online Telegram members</button>
      <button className="sort-btn">
        Growth in # of online Telegram members
      </button>
      <button className="sort-btn">Growth in # of Twitter followers</button>
      <button className="sort-btn">Launching soon</button>
    </div>
  );
};

export default Sort;
