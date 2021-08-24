import React from "react";
import { FilterTypes } from "./types";
import "./Filter.css";

const TeamDoxxedFilter: React.FC<FilterTypes> = ({
  doxxed,
  notDoxxed,
  doxTBD,
  doxxedCheck,
  notDoxxedCheck,
  doxTBDCheck,
}) => {
  return (
    <div className="launch-pad">
      <div>
        <label htmlFor="Doxxed">Doxxed</label>
        <input
          checked={doxxed === "Doxxed"}
          type="checkbox"
          name="Doxxed"
          value="Doxxed"
          onChange={doxxedCheck}
        />
      </div>
      <div>
        <label htmlFor="NotDoxxed">NotDoxxed</label>
        <input
          checked={notDoxxed === "NotDoxxed"}
          type="checkbox"
          name="NotDoxxed"
          value="NotDoxxed"
          onChange={notDoxxedCheck}
        />
      </div>
      <div>
        <label htmlFor="DoxTBD">DoxTBD</label>
        <input
          checked={doxTBD === "DoxTBD"}
          type="checkbox"
          name="DoxTBD"
          value="DoxTBD"
          onChange={doxTBDCheck}
        />
      </div>
    </div>
  );
};

export default TeamDoxxedFilter;
