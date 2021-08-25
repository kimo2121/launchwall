import React, { useState } from "react";
import "./App.css";
import DiscoverAllProducts from "./components/DiscoverAllProducts/DiscoverAllProducts";
import LaunchedPresales from "./components/LaunchedPresales/LaunchedPresales";
import SavedPresales from "./components/SavedPresales/SavedPresales";
import TickerMentions from "./components/TickerMentions/TickerMentions";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useEffect } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import SaveStateProvider, { SaveContext } from "./Context";
import logo from "./assets/images/idogate.png";
const App: React.FC = () => {
  const [launchPro, setLaunchPro] = useState(false);
  const [savedPresales, setSavedPresales] = useState(false);
  const [launchedPresales, setLaunchedPresales] = useState(false);
  const [tickerMentions, setTickerMentions] = useState(false);
  const [openPresales, setOpenPresales] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    {
      setTimeout(() => {
        setOpenPresales(true);
        setIsLoading(false);
      }, 3000);
    }
  }, []);
  console.log(isLoading);
  const antIcon = (
    <LoadingOutlined
      style={{ fontSize: 80, color: "rgb(146, 158, 38)", marginTop: "10vh" }}
      spin
    />
  );

  return (
    <SaveStateProvider>
      <div className="App">
        <div
          onClick={() => setLaunchPro(!launchPro)}
          className="launchwall-logo"
        >
          <h1>
            <img src={logo} alt="" />
          </h1>
          <p>
            Never miss a X100 project again. click to discover all our full
            features.
            {launchPro ? (
              <MdKeyboardArrowUp size="30" />
            ) : (
              <MdKeyboardArrowDown size="30" />
            )}
          </p>
        </div>
        {launchPro && (
          <div className="discover-btns">
            <button
              onClick={() => setSavedPresales(!savedPresales)}
              className="sort-btn"
            >
              Bookmarked IDOs
            </button>
            <button
              onClick={() => setLaunchedPresales(!launchedPresales)}
              className="sort-btn"
            >
              Launched Presales
            </button>
            <button
              onClick={() => setTickerMentions(!tickerMentions)}
              className="sort-btn"
            >
              Verified IDOs
            </button>
            <button
              onClick={() => setOpenPresales(!openPresales)}
              className="sort-btn"
            >
              Live & Upcoming Presales
            </button>
            <a className="sort-btn">IDO Discussion Group / Alerts</a>
            <button disabled className="sort-btn">
              Joined IDO
            </button>
          </div>
        )}
        {savedPresales && <SavedPresales />}
        {launchedPresales && <LaunchedPresales />}
        {tickerMentions && <TickerMentions />}
        {openPresales && <DiscoverAllProducts />}
        {isLoading && <Spin indicator={antIcon} />}
      </div>
    </SaveStateProvider>
  );
};

export default App;
