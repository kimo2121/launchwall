import React, { useContext, useState } from "react";
import "./SingleUser.css";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SaveContext } from "../../Context";
import SocialStatistics from "../SocialStatistics/SocialStatistics";
import SocialTelegram from "../SocialStatistics/SocialTelegram";
import Percentage from "../SocialStatistics/Percentage";

interface IProps {
  value?: any;
}
const SingleUser: React.FC<IProps> = ({ value }) => {
  const [graph, setGraph] = useState(false);
  const { savePresale, savePresaleClick } = useContext(SaveContext);
  console.log(savePresale);
  return (
    <div className="single-user">
      <div className="user-details">
        <div className="network-other-details-container">
          <div>
            <h2 style={{ margin: "0", display: "block" }}>${value.username}</h2>
            <h3>{value.tag}</h3>
          </div>
          <div className="network-other-details">
            <button className="sort-btn">{value.launchpad}</button>
            <button className="sort-btn">{value.network}</button>
            <button className="sort-btn">{value.launchStatus}</button>
            <button className="sort-btn">{value.audited}</button>
            <button className="sort-btn">{value.teamDoxxed}</button>
            <a href={value.address} className="sort-btn">
              Address
            </a>
            <a href={value.buy} className="sort-btn">
              Buy
            </a>
            <button
              onClick={() => savePresaleClick(value)}
              className="sort-btn"
            >
              {savePresale.find((e) => e === value) ? (
                <span>Unsave</span>
              ) : (
                <span>Save</span>
              )}
            </button>
          </div>
        </div>
        <div className="single-user-desc">
          <p>
            🗳️ Score: <strong>{value.score}</strong>
          </p>
          <p>{value?.launchdate && <span>🚀 {value?.launchdate}</span>}</p>
          <p>{value?.description1 && <span>🙋 {value?.description1}</span>}</p>
          <p>{value?.description2 && <span>🎩 {value?.description2}</span>}</p>
          <p>{value?.description3 && <span>🦄 {value?.description3}</span>}</p>
          <p>
            {value?.description4 && (
              <span>Milestone ✅ {value?.description4}</span>
            )}
          </p>
          <p>
            {(value?.twitterFollowers || value.telegramMembers) && "📈 "}
            {value?.twitterFollowers && (
              <span style={{ marginRight: "1vw" }}>
                <a href={value?.twitterLink} target="_blank">
                  <FaTwitter color="rgb(0, 189, 192)" />
                </a>{" "}
                followers: {value?.twitterFollowers}
              </span>
            )}
            {value?.telegramMembers && (
              <span>
                <a href={value?.telegramLink} target="_blank">
                  <FaTelegram color="rgb(0, 189, 192)" />
                </a>{" "}
                members: {value.telegramMembers}
              </span>
            )}
          </p>
        </div>
        <div>
          {value?.telegramMembers || value?.twitterFollowers ? (
            <button onClick={() => setGraph(!graph)} className="sort-btn">
              {graph ? "Hide graphs" : "Show graphs"}
            </button>
          ) : undefined}
        </div>
        {graph && (
          <div>
            {value?.twitterFollowers && <SocialStatistics value={value} />}
            {value?.telegramMembers && <SocialTelegram value={value} />}
            {value?.telegramMembers && <Percentage value={value} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleUser;
