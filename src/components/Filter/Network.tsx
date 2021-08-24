import React from "react";
import { FilterTypes } from "./types";
import "./Filter.css";

const Network: React.FC<FilterTypes> = ({
  ethereumCheck,
  bscCheck,
  polygonCheck,
  ethereum,
  bsc,
  polygon,
}) => {
  return (
    <div className="launch-pad">
      <div>
        <label htmlFor="Ethereum">Ethereum</label>
        <input
          checked={ethereum === "Ethereum"}
          type="checkbox"
          name="Ethereum"
          value="Ethereum"
          onChange={ethereumCheck}
        />
      </div>
      <div>
        <label htmlFor="BSC">BSC</label>
        <input
          checked={bsc === "BSC"}
          type="checkbox"
          name="BSC"
          value="BSC"
          onChange={bscCheck}
        />
      </div>
      <div>
        <label htmlFor="Polygon">Polygon</label>
        <input
          checked={polygon === "Polygon"}
          type="checkbox"
          name="Polygon"
          value="Polygon"
          onChange={polygonCheck}
        />
      </div>
    </div>
  );
};

export default Network;
