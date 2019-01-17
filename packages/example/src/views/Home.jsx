import React, { useContext } from "react";

import { StateContext } from "libraries/state-management";

const Home = () => {
  const { state } = useContext(StateContext);
  console.log("state --- ", state);

  return <div className="home" />;
};

export default Home;
