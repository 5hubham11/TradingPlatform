import React, { useState } from "react";
import { watchlist } from "../data/data";
import { Tooltip, Grow } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import BarChartIcon from '@mui/icons-material/BarChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import GeneralContext from "./GeneralContext";
import { useContext } from "react";
const WatchList = () => {

  

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> 9 / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, idx) => {
          return <WatchListItems stock={stock} key={idx} />;
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItems = ({ stock, idx }) => {
  const [showWatchListAction, setShowWatchListAction] = useState(false);
  const handleMOuseEnter = (e) => {
    setShowWatchListAction(true);
  };
  const handleMOuseExit = (e) => {
    setShowWatchListAction(false);
  };



  return (
    <li onMouseEnter={handleMOuseEnter} onMouseLeave={handleMOuseExit}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="item-info">
          <span>{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListAction && <WatchListAction uid={stock.name} />}
    </li>
  );
};

const WatchListAction = ({ uid }) => {

 

  const generalContext = useContext(GeneralContext);
  const handleBuyClick = () =>{
    console.log("BUY CLICKED");
    generalContext.openBuyWindow(uid);
  }

  return(
    <span className="actions">
    <span>
      <Tooltip
      title='buy(B)'
      placement="top"
      arrow TransitionComponent={Grow}
      >
        <button onClick={handleBuyClick} className="buy">buy</button>
      </Tooltip>
      <Tooltip
      title='Sell(S)'
      placement="top"
      arrow TransitionComponent={Grow}
      >
        <button className="sell">Sell</button>
      </Tooltip>
      <Tooltip
      title='Chart(C)'
      placement="top"
      arrow TransitionComponent={Grow}
      >
        <button className="action">
          <BarChartIcon   className="icon"  />
        </button>
         
      </Tooltip>
      <Tooltip
      title='More'
      placement="top"
      arrow TransitionComponent={Grow}
      >
        <button className="action">
          <MoreHorizIcon  className="icon"  /> 
        </button>
        
      </Tooltip>
    </span>
  </span>
  );
  
};
