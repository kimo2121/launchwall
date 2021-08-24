import React from "react";
import Header from "../Header/Header";
import { data } from "./data";
import "./LaunchedPresales.css";

const LaunchedPresales: React.FC = () => {
  return (
    <div className="launched-presales">
      <Header headerName={"Launched Presales"} />
      {data.map((i, x) => (
        <div key={x} className="each-presaled-item">
          <div>
            <h2>{i.username}</h2>
            <h3>{i.tag}</h3>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <button className="sort-btn">{i.launchpad}</button>
            <button className="sort-btn">{i.network}</button>
            <button className="sort-btn">{i.launchStatus}</button>
            <a className="sort-btn" href={i.address}>
              Address
            </a>
            <a className="sort-btn" href={i.buy}>
              Buy
            </a>
            <a className="sort-btn" href={i.chart}>
              Chart
            </a>
            <button className="sort-btn">Save</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LaunchedPresales;
