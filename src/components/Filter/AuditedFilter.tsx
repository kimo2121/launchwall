import React from "react";
import { FilterTypes } from "./types";
import "./Filter.css";
const AuditedFilter: React.FC<FilterTypes> = ({
  audited,
  auditedCheck,
  notAudited,
  notAuditedCheck,
  auditTBD,
  auditTBDCheck,
}) => {
  return (
    <div className="launch-pad">
      <div>
        <label htmlFor="Audited">Audited</label>
        <input
          checked={audited === "Audited"}
          type="checkbox"
          name="Audited"
          value="Audited"
          onChange={auditedCheck}
        />
      </div>
      <div>
        <label htmlFor="NotAudited">NotAudited</label>
        <input
          checked={notAudited === "NotAudited"}
          type="checkbox"
          name="NotAudited"
          value="NotAudited"
          onChange={notAuditedCheck}
        />
      </div>
      <div>
        <label htmlFor="AuditTBD">AuditTBD</label>
        <input
          checked={auditTBD === "AuditTBD"}
          type="checkbox"
          name="AuditTBD"
          value="AuditTBD"
          onChange={auditTBDCheck}
        />
      </div>
    </div>
  );
};

export default AuditedFilter;
