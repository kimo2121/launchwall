import React, { useState } from "react";
import "./Search.css";
import { Input } from "antd";
import { data } from "./Data";
import "antd/dist/antd.css";
import SingleUser from "../SingleUser/SingleUser";
import Sort from "../Sort/Sort";
import LaunchpadFilter from "../Filter/LaunchpadFilter";
import Network from "../Filter/Network";
import LaunchStatus from "../Filter/LaunchStatus";
import AuditedFilter from "../Filter/AuditedFilter";
import TeamDoxxedFilter from "../Filter/TeamDoxxedFilter";
import { FiFilter } from "react-icons/fi";
import { AiOutlineSortAscending } from "react-icons/ai";
import Header from "../Header/Header";

const SearchComponent: React.FC = () => {
  const onSearch = (value: any) => console.log(value);
  const { Search } = Input;
  const [search, setSearch] = useState("");
  const onChangeHandler = (e: any): void => {
    setSearch(e.target.value);
  };
  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setshowSort] = useState(false);
  const [uniCrypt, setUniCrypt] = useState("Unicrypted");
  const [dxSale, setDxSale] = useState("DxSale");
  const [others, setOthers] = useState("Others");
  const [ethereum, setEthereum] = useState("Ethereum");
  const [bsc, setBSC] = useState("BSC");
  const [polygon, setPolygon] = useState("Polygon");
  const [upcoming, setUpcoming] = useState("Upcoming");
  const [open, setOpen] = useState("Open");
  const [audited, setAudited] = useState("Audited");
  const [notAudited, setNotAudited] = useState("NotAudited");
  const [auditTBD, setAuditTBD] = useState("AuditTBD");
  const [doxxed, setDoxxed] = useState("Doxxed");
  const [notDoxxed, setNotDoxxed] = useState("NotDoxxed");
  const [doxTBD, setDoxTBD] = useState("DoxTBD");

  const showHiddenFilter = (): void => {
    setShowFilter(!showFilter);
  };
  const showHiddenSort = (): void => {
    setshowSort(!showSort);
  };
  const uniCryptCheck = (e: any): void => {
    if (uniCrypt === e.target.value) {
      setUniCrypt("");
    } else {
      setUniCrypt(e.target.value);
    }
  };
  const dxSaleCheck = (e: any): void => {
    if (dxSale === e.target.value) {
      setDxSale("");
    } else {
      setDxSale(e.target.value);
    }
  };
  const othersCheck = (e: any): void => {
    if (others === e.target.value) {
      setOthers("");
    } else {
      setOthers(e.target.value);
    }
  };
  const ethereumCheck = (e: any): void => {
    if (ethereum === e.target.value) {
      setEthereum("");
    } else {
      setEthereum(e.target.value);
    }
  };
  const bscCheck = (e: any): void => {
    if (bsc === e.target.value) {
      setBSC("");
    } else {
      setBSC(e.target.value);
    }
  };
  const upcomingCheck = (e: any): void => {
    if (upcoming === e.target.value) {
      setUpcoming("");
    } else {
      setUpcoming(e.target.value);
    }
  };
  const polygonCheck = (e: any): void => {
    if (polygon === e.target.value) {
      setPolygon("");
    } else {
      setPolygon(e.target.value);
    }
  };
  const openCheck = (e: any): void => {
    if (open === e.target.value) {
      setOpen("");
    } else {
      setOpen(e.target.value);
    }
  };

  const auditedCheck = (e: any): void => {
    if (audited === e.target.value) {
      setAudited("");
    } else {
      setAudited(e.target.value);
    }
  };

  const notAuditedCheck = (e: any): void => {
    if (notAudited === e.target.value) {
      setNotAudited("");
    } else {
      setNotAudited(e.target.value);
    }
  };
  const auditTBDCheck = (e: any): void => {
    if (auditTBD === e.target.value) {
      setAuditTBD("");
    } else {
      setAuditTBD(e.target.value);
    }
  };
  const doxxedCheck = (e: any): void => {
    if (doxxed === e.target.value) {
      setDoxxed("");
    } else {
      setDoxxed(e.target.value);
    }
  };
  const notDoxxedCheck = (e: any): void => {
    if (notDoxxed === e.target.value) {
      setNotDoxxed("");
    } else {
      setNotDoxxed(e.target.value);
    }
  };
  const doxTBDCheck = (e: any): void => {
    if (doxTBD === e.target.value) {
      setDoxTBD("");
    } else {
      setDoxTBD(e.target.value);
    }
  };
  // const sortUsers = data.sort(function (a, b) {
  //   return a - b;
  // });

  return (
    <div style={{ paddingBottom: "3vh" }}>
      <Header headerName="Open & Upcoming Presales" />
      <Search
        className={"search-component"}
        onChange={onChangeHandler}
        placeholder="Search for a presale by name..."
        style={{
          width: "100vw",
        }}
      />
      <h3 style={{ color: "white", marginTop: "3vh" }}>
        Showing {data.length} presales
      </h3>
      <div style={{ margin: "0 auto", display: "flex", width: "fit-content" }}>
        <button className="show-filter" onClick={showHiddenFilter}>
          <FiFilter size="18" style={{ marginRight: ".5vw" }} />
          Show filters
        </button>
        <button onClick={showHiddenSort} className="show-filter">
          <AiOutlineSortAscending
            style={{ marginRight: ".5vw" }}
            size="22"
            color="white"
          />
          Show Sorts
        </button>
      </div>
      {showFilter && (
        <div className={"search-results-for-web"}>
          <p>-Filters-</p>
          <div className="checkboxes">
            <LaunchpadFilter
              uniCryptCheck={uniCryptCheck}
              dxSaleCheck={dxSaleCheck}
              othersCheck={othersCheck}
              uniCrypt={uniCrypt}
              dxSale={dxSale}
              others={others}
            />
            <Network
              ethereumCheck={ethereumCheck}
              bscCheck={bscCheck}
              polygonCheck={polygonCheck}
              ethereum={ethereum}
              bsc={bsc}
              polygon={polygon}
            />
            <LaunchStatus
              upcomingCheck={upcomingCheck}
              openCheck={openCheck}
              upcoming={upcoming}
              open={open}
            />
            <AuditedFilter
              auditedCheck={auditedCheck}
              notAuditedCheck={notAuditedCheck}
              auditTBDCheck={auditTBDCheck}
              audited={audited}
              notAudited={notAudited}
              auditTBD={auditTBD}
            />
            <TeamDoxxedFilter
              doxxedCheck={doxxedCheck}
              notDoxxedCheck={notDoxxedCheck}
              doxTBDCheck={doxTBDCheck}
              doxxed={doxxed}
              notDoxxed={notDoxxed}
              doxTBD={doxTBD}
            />
          </div>
        </div>
      )}
      {showSort && <Sort />}
      {data
        .filter((value) => {
          if (
            search === "" &&
            (uniCrypt === value?.launchpad ||
              dxSale === value.launchpad ||
              ethereum === value.network ||
              bsc === value.network ||
              polygon === value.network ||
              upcoming === value.launchStatus ||
              open === value.launchStatus ||
              audited === value.audited ||
              notAudited === value.audited ||
              auditTBD === value.audited ||
              doxxed === value.teamDoxxed ||
              notDoxxed === value.teamDoxxed ||
              doxTBD === value.teamDoxxed)
          ) {
            return value;
          } else if (
            (value?.username.toLowerCase().includes(search.toLowerCase()) ||
              value?.tag
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())) &&
            (uniCrypt === value?.launchpad ||
              dxSale === value.launchpad ||
              ethereum === value.network ||
              bsc === value.network ||
              polygon === value.network ||
              upcoming === value.launchStatus ||
              open === value.launchStatus ||
              audited === value.audited ||
              notAudited === value.audited ||
              auditTBD === value.audited ||
              doxxed === value.teamDoxxed ||
              notDoxxed === value.teamDoxxed ||
              doxTBD === value.teamDoxxed)
          ) {
            return value;
          }
        })
        .map((value, index) => (
          <SingleUser key={index} value={value} />
        ))}
    </div>
  );
};

export default SearchComponent;
