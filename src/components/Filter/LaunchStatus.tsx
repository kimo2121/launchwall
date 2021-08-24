import React from "react";
import { FilterTypes } from "./types";
import "./Filter.css";

const LaunchStatus: React.FC<FilterTypes> = ({
  upcoming,
  upcomingCheck,
  open,
  openCheck,
}) => {
  return (
    <div className="launch-pad">
      <div>
        <label htmlFor="Upcoming">Upcoming</label>
        <input
          checked={upcoming === "Upcoming"}
          type="checkbox"
          name="Upcoming"
          value="Upcoming"
          onChange={upcomingCheck}
        />
      </div>
      <div>
        <label htmlFor="Open">Open</label>
        <input
          checked={open === "Open"}
          type="checkbox"
          name="Open"
          value="Open"
          onChange={openCheck}
        />
      </div>
    </div>
  );
};

export default LaunchStatus;
