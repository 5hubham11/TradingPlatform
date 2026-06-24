import React from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { GeneralContextProvider } from "./GeneralContext";

const Home = ({username}) => {
  return (
    <GeneralContextProvider username={username}>
      <TopBar />
      <Dashboard   />
    </GeneralContextProvider>
  );
};

export default Home;