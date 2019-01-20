import React, { useContext } from "react";

import { StateContext } from "libraries/state-management";

const Home = () => {
  const { state } = useContext(StateContext);

  return <div className="home">{JSON.stringify(state)}</div>;
};

export default Home;
