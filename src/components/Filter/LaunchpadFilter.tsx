import React from "react";
import "./Filter.css";
import { FilterTypes } from "./types";
const LaunchpadFilter: React.FC<FilterTypes> = ({
  uniCryptCheck,
  dxSaleCheck,
  othersCheck,
  uniCrypt,
  dxSale,
  others,
}) => {
  return (
    <div className="launch-pad">
      <div>
        <label htmlFor="Unicrypt">UniCrypt</label>
        <input
          checked={uniCrypt === "Unicrypt"}
          type="checkbox"
          name="Unicrypt"
          value="Unicrypt"
          onChange={uniCryptCheck}
        />
      </div>
      <div>
        <label htmlFor="DxSale">DxSale</label>
        <input
          checked={dxSale === "DxSale"}
          type="checkbox"
          name="DxSale"
          value="DxSale"
          onChange={dxSaleCheck}
        />
      </div>
      <div>
        <label htmlFor="Others">Others</label>
        <input
          checked={others === "Others"}
          type="checkbox"
          name="Others"
          value="Others"
          onChange={othersCheck}
        />
      </div>
    </div>
  );
};

export default LaunchpadFilter;
