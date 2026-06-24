import { useState } from "react";
import React from "react";
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: () => {},
  closeBuyWindow: () => {},
  username: "",
});

export const GeneralContextProvider = ({ children, username }) => {
  const [isBuyWidowOpen, setIsBuyWidowOpen] = useState(false);
  const [selectedStockUid, setSelectedStockUid] = useState("");

  const handleBuyWindow = (uid) => {
    console.log("opened");
    setIsBuyWidowOpen(true);
    setSelectedStockUid(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWidowOpen(false);
    setSelectedStockUid("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        username,
      }}
    >
      {children}
      {isBuyWidowOpen && (
        <BuyActionWindow uid={selectedStockUid} />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;