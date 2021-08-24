import React, { createContext, useState } from "react";

interface ITypes {
  savePresale: object[];
  setSavePresale: any;
  savePresaleClick: any;
}

const contextDefaultValues: ITypes = {
  savePresale: [],
  setSavePresale: (): void => {},
  savePresaleClick: () => {},
};

export const SaveContext = createContext<ITypes>(contextDefaultValues);

const SaveStateProvider: React.FC = ({ children }) => {
  const [savePresale, setSavePresale] = useState<object[]>([]);

  const savePresaleClick = (value: any): void => {
    !savePresale.includes(value)
      ? setSavePresale([...savePresale, value])
      : setSavePresale(savePresale.filter((i) => i !== value));
  };

  return (
    <SaveContext.Provider
      value={{ savePresale, setSavePresale, savePresaleClick }}
    >
      {children}
    </SaveContext.Provider>
  );
};

export default SaveStateProvider;
