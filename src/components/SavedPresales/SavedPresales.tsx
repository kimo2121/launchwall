import React, { useContext } from "react";
import Header from "../Header/Header";
import "./SavedPresales.css";
import { SaveContext } from "../../Context";
import SingleUser from "../SingleUser/SingleUser";

const SavedPresales: React.FC = () => {
  const { savePresale } = useContext(SaveContext);

  return (
    <div className="Saved-presales">
      <Header headerName="Bookmarked IDOs" />
      <div className="Saved-presales-container">
        {savePresale.length ? (
          savePresale.map((item, indx) => (
            <SingleUser key={indx} value={item} />
          ))
        ) : (
          <h2>No presales saved</h2>
        )}
      </div>
    </div>
  );
};

export default SavedPresales;
